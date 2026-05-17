# Supabase 配置指南

本项目第一版使用 Supabase 免费版提供 Auth 和 PostgreSQL 数据库。

## 需要的环境变量

本地 `.env` 和 Vercel 环境变量都需要配置：

```bash
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-or-publishable-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
NUXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NUXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-or-publishable-key"
APP_BASE_URL="http://localhost:3000"
```

说明：

- `SUPABASE_SERVICE_ROLE_KEY` 只能放在服务端环境变量中。
- `NUXT_PUBLIC_*` 会暴露到浏览器，只能放 publishable/anon key。
- 线上 `APP_BASE_URL` 改为 Vercel 域名。

## 创建数据库结构

1. 打开 Supabase Dashboard。
2. 进入 SQL Editor。
3. 复制 `supabase/schema.sql` 全部内容并执行。
4. 执行成功后，进入 Table Editor 检查表是否创建。

本次 schema 包含：

- 用户资料：`profiles`
- 内容：`categories`、`tools`、`tool_categories`、`tutorials`、`prompts`、`comparisons`、`rankings`、`ranking_items`
- 互动统计：`tool_likes`、`tool_views`、`tool_clicks`
- 投稿审核：`submissions`
- 商业化：`sponsor_slots`

## 导入初始化数据

1. 打开 SQL Editor。
2. 复制 `supabase/seed.sql` 全部内容并执行。
3. 检查以下查询是否有数据：

```sql
select slug, name from categories order by sort_order;
select slug, name from tools limit 10;
select slug, title from tutorials limit 10;
select slug, title from prompts limit 10;
select slug, title from rankings limit 10;
```

`seed.sql` 可以重复执行，主要内容使用 `on conflict do update`。

## RLS 策略

公开可读：

- `categories`
- `tools`
- `tool_categories`
- `tutorials`
- `prompts`
- `comparisons`
- `rankings`
- `ranking_items`
- `sponsor_slots`

需要登录：

- `submissions`：用户只能创建和读取自己的投稿。
- `tool_likes`：用户只能给工具点赞，不能替别人点赞。

允许匿名写入：

- `tool_views`
- `tool_clicks`

管理员接口仍通过服务端 `SUPABASE_SERVICE_ROLE_KEY` + `requireAdmin(event)` 校验，不依赖前端隐藏入口。

## Google 登录

如果开启 Google 登录：

1. 在 Google Cloud Console 创建 OAuth Client。
2. 在 Supabase Auth Providers 中启用 Google。
3. 填入 Google Client ID 和 Client Secret。
4. Google Authorized redirect URI 填 Supabase 显示的 Callback URL：

```text
https://<project-ref>.supabase.co/auth/v1/callback
```

5. Supabase Site URL 本地设为：

```text
http://localhost:3000
```

6. Redirect URLs 增加：

```text
http://localhost:3000/auth/callback
https://你的域名/auth/callback
```

## 常见问题

- 页面能打开但 API 返回 500：检查 `SUPABASE_URL`、`SUPABASE_ANON_KEY`、`SUPABASE_SERVICE_ROLE_KEY` 是否存在。
- 前端登录正常但管理员 API 403：检查 `profiles.role` 是否为 `admin`。
- seed 执行报唯一键冲突：确认使用的是当前版本 `seed.sql`，它应包含 `on conflict`。
- 点赞重复失败：这是正常限制，同一用户同一工具只允许点赞一次。
