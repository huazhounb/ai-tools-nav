# 登录和访问限制

## 当前登录方式

第一版使用 Supabase Auth，不自研 session 系统，不使用 Prisma。

- 邮箱注册：`/register`
- 邮箱登录：`/login`
- Google 登录：Supabase OAuth
- 微信扫码登录：仅预留按钮和环境变量，默认不开放
- 注册验证码：Cloudflare Turnstile，第一版只在注册页启用

登录态由 Supabase SDK 管理，不手动把 token 写入 localStorage。

## OAuth 回调

Google 登录会跳转到：

```text
/auth/callback
```

登录页支持 `redirect` 参数，例如：

```text
/login?redirect=/submit?type=tool
```

登录成功后回到原页面。

## 受保护页面

以下页面需要登录：

- `/submit`
- `/tutorial/[slug]`
- `/prompts/[slug]`
- `/compare/[slug]`

以下功能需要登录：

- 在提示词列表页复制 Prompt
- 在工具对比页生成动态对比
- 查看完整固定工具对比详情

未登录时跳转到：

```text
/login?redirect=原访问地址
```

## 管理员访问

管理员页面：

- `/admin`
- `/admin/**`

需要登录且 `profiles.role = 'admin'`。

服务端管理员 API 会调用 `requireAdmin(event)` 校验权限，不只依赖前端隐藏按钮。

## 投稿权限

`POST /api/submissions` 必须登录。

`user_id` 只从 Supabase 当前用户读取，不接受前端传入。

投稿类型：

- `tool`
- `tutorial`
- `prompt`
- `comparison`

所有投稿默认进入 `pending` 审核队列。

## 注册验证码

注册页使用 Cloudflare Turnstile 防止脚本批量创建账号。

前端只使用：

```env
NUXT_PUBLIC_TURNSTILE_SITE_KEY=""
```

Secret Key 不进入前端代码：

```env
TURNSTILE_SECRET_KEY=""
```

如果使用 Supabase Auth 内置 CAPTCHA，需要在 Supabase Dashboard 中配置 secret key：

1. Authentication -> Bot and Abuse Protection。
2. 开启 CAPTCHA Protection。
3. Provider 选择 Cloudflare Turnstile。
4. 填入 Turnstile Secret Key。
5. 前端注册时会把 `captchaToken` 传给 `supabase.auth.signUp`。

本地开发如果没有配置 site key，会显示“验证码未配置，当前仅用于开发调试”。生产环境没有配置 site key 时，注册按钮会禁用。

常见错误：

- `captchaToken` 缺失：用户没有完成人机验证，或验证码过期。
- site key 配错：组件无法渲染或验证一直失败。
- secret key 没在 Supabase Dashboard 配置：Supabase 注册接口会拒绝 token。
- token 已过期：重新点击验证码后再注册。

## 常见错误

- `401`：未登录或登录状态过期，需要重新登录。
- `403`：不是管理员，无权访问后台。
- Google 登录 `redirect_uri_mismatch`：Google Cloud OAuth 回调地址或 Supabase Site URL / Redirect URLs 配置不一致。
- 投稿 API 返回 500：通常是服务端缺少 `SUPABASE_URL`、`SUPABASE_ANON_KEY` 或 `SUPABASE_SERVICE_ROLE_KEY`。
