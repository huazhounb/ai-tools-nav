# 管理员后台说明

## 审核通过后的前台发布

新版审核流程会把用户投稿发布到正式内容表。管理员点击“通过”后，系统会先更新 `submissions.status = approved`，再根据 `submissions.type` 自动写入对应正式表：`tool -> tools`、`tutorial -> tutorials`、`prompt -> prompts`、`comparison -> comparisons`。

发布成功后，`submissions` 会记录 `published_target_type`、`published_target_id`、`published_at`，并在 `payload.publishedSlug` 中保存前台 slug。已经发布过的投稿不会重复插入；如果 slug 冲突，系统会自动追加 `-2`、`-3` 等后缀。

历史已通过但未发布的投稿，可以在详情页点击“发布到前台”，也可以在 `/admin/submissions` 点击“发布所有已通过但未发布的投稿”批量修复。

## 下架和删除

管理员后台现在支持三类后续操作：

1. 下架前台内容：只把正式内容表里的记录状态改为 `archived`，并写入 `submissions.unpublished_at`。审核记录、`published_target_id` 和发布历史都会保留。
2. 删除审核记录：第一版是软删除，只把 `submissions.status` 改为 `deleted`，并写入 `deleted_at`。如果内容已经发布，前台内容不会自动下架。
3. 删除并下架：先把已发布的正式内容改为 `archived`，再把投稿记录软删除。

对应 API：

- `POST /api/admin/submissions/[id]/unpublish`
- `DELETE /api/admin/submissions/[id]/delete`
- `DELETE /api/admin/submissions/[id]/delete-with-target`

所有 API 都必须通过 `requireAdmin(event)`，普通用户不能调用。前台内容接口只读取 `status = 'published'`，因此 `archived / draft / rejected / deleted` 不会出现在前台列表。

## 管理入口

管理员登录后，Header 会显示“管理”按钮，点击进入 `/admin`。普通用户和未登录用户不会看到这个入口。

入口是否显示取决于当前用户的 `profiles.role`：

```text
profiles.role = 'admin'
profiles.status = 'active'
```

如果你已经登录管理员账号但看不到按钮，通常是 `profiles` 里没有对应记录，或者 role 没设置到当前 Auth 用户 id 上。

## 设置管理员账号

在 Supabase SQL Editor 执行下面 SQL，可以把 `huazhounb@163.com` 设置为管理员，并同时补齐 profile 和用户名。

```sql
insert into public.profiles (id, email, username, name, role, status)
select
  id,
  email,
  'huazhounb',
  coalesce(raw_user_meta_data ->> 'name', raw_user_meta_data ->> 'full_name', 'huazhounb'),
  'admin',
  'active'
from auth.users
where lower(email) = lower('huazhounb@163.com')
on conflict (id) do update set
  email = excluded.email,
  username = excluded.username,
  role = 'admin',
  status = 'active',
  updated_at = now();
```

执行后退出登录，再重新登录。Header 应该出现“管理”按钮。

## 用户名登录

数据库需要 `profiles.username`，并且保持唯一。新版 `supabase/schema.sql` 已包含：

```sql
alter table public.profiles add column if not exists username text;
create unique index if not exists profiles_username_unique_idx
on public.profiles (lower(username))
where username is not null and username <> '';
```

登录页支持输入邮箱或用户名。用户名会先由服务端解析为邮箱，再调用 Supabase Auth 的邮箱密码登录；项目仍然不自己保存 token。

## 后台页面

- `/admin`：统计概览
- `/admin/users`：用户管理
- `/admin/submissions`：投稿审核
- `/admin/submissions?type=tool`：只看工具投稿
- `/admin/submissions?type=tutorial`：只看教程投稿
- `/admin/submissions?type=prompt`：只看提示词投稿
- `/admin/submissions?type=comparison`：只看工具对比投稿
- `/admin/submissions/[id]`：投稿详情和审核操作

## 审核和发布流程

1. 普通用户通过 `/submit` 提交工具、教程、提示词或工具对比。
2. 内容进入 `submissions` 表，默认状态为 `pending`。
3. 管理员在 `/admin/submissions` 审核。
4. 选择“通过”后，系统会：
   - 更新 `submissions.status = approved`
   - 写入 `review_note`、`reviewed_by`、`reviewed_at`
   - 尝试把内容发布到正式内容表：
     - `tool` -> `tools`
     - `tutorial` -> `tutorials`
     - `prompt` -> `prompts`
     - `comparison` -> `comparisons`
   - 给投稿用户发送审核结果邮件（如果已配置邮件服务）。
5. 选择“拒绝”或“需要修改”后，只更新审核状态和备注，并通知用户。

> 当前发布映射是第一版基础映射：会保证内容进入正式表并设置为 `published`，后续还需要补更细的字段编辑、slug 校验、分类关联和内容富文本编辑器。

## 用户查看审核状态

普通用户登录后可以从右上角用户菜单进入 `/account/submissions`，查看：

- 投稿类型
- 审核状态：`pending / approved / rejected / needs_edit`
- 审核备注
- 提交时间和更新时间

## 邮件通知配置

邮件使用 Resend HTTP API。未配置时系统会跳过邮件发送，不影响投稿和审核。

需要在 Vercel 或本地 `.env` 配置：

```bash
RESEND_API_KEY="re_xxx"
EMAIL_FROM="AI工具箱 <noreply@your-domain.com>"
ADMIN_NOTIFY_EMAIL="admin@example.com"
```

- `RESEND_API_KEY` 只能放服务端环境变量。
- `EMAIL_FROM` 需要使用你在 Resend 验证过的域名或发件地址。
- `ADMIN_NOTIFY_EMAIL` 用于接收新投稿提醒；不配置时会回退到 `CONTACT_EMAIL`。

## 权限原则

前端隐藏入口只是体验层控制。所有 `/api/admin/**` 接口都必须在服务端调用 `requireAdmin(event)`，不能只依赖前端判断。
