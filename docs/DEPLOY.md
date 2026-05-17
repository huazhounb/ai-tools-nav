# 部署说明

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Vercel 环境变量配置

在 Vercel 项目中进入：

```text
Settings > Environment Variables
```

配置：

```env
APP_BASE_URL="https://your-domain.vercel.app"
NUXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
NUXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NUXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
GOOGLE_LOGIN_ENABLED="true"
WECHAT_LOGIN_ENABLED="false"
WECHAT_APP_ID=""
WECHAT_APP_SECRET=""
WECHAT_REDIRECT_URI=""
```

## Supabase 环境变量配置

Supabase 需要和 Vercel 的域名一致：

```text
Site URL: https://your-domain.vercel.app
Redirect URL: https://your-domain.vercel.app/auth/callback
```

本地开发还需要：

```text
http://localhost:3000/auth/callback
```

## Google 登录回调地址

Google Cloud Console 中的 OAuth redirect URI 通常配置为 Supabase 回调地址：

```text
https://your-project.supabase.co/auth/v1/callback
```

站点内的登录完成回调地址配置在 Supabase Redirect URLs：

```text
https://your-domain.vercel.app/auth/callback
```

## 本地和线上 APP_BASE_URL 区别

本地：

```env
APP_BASE_URL="http://localhost:3000"
NUXT_PUBLIC_SITE_URL="http://localhost:3000"
```

线上：

```env
APP_BASE_URL="https://your-domain.vercel.app"
NUXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
```

`APP_BASE_URL` 用于 OAuth 回调地址生成。域名不一致会导致 Google 登录后无法正确跳回网站。

## 修改环境变量后需要重新部署

Vercel 修改环境变量后需要重新部署，新的变量才会进入 Nuxt 构建和服务端运行环境。

建议操作：

1. 保存环境变量。
2. 进入 Deployments。
3. 对最新部署执行 Redeploy。
4. 登录页测试邮箱登录和 Google 登录。

## 上线检查清单

- `npm run build` 可以通过。
- `/login` 可以打开。
- `/register` 可以打开。
- Google 登录能跳转 Supabase OAuth。
- `/auth/callback` 能回到站点。
- 未登录访问 `/submit` 会跳转 `/login?redirect=/submit`。
- 已登录访问 `/submit?type=tool` 能显示“提交 AI 工具”。
- `POST /api/submissions` 未登录返回 401。
- 已登录提交后 Supabase `submissions` 表出现 `pending` 记录。
- `/robots.txt` 可以访问。
- `/sitemap.xml` 可以访问。

## 测试版上线提示

上线测试阶段页面会展示“测试版上线中”提示，并提供站长反馈邮箱：

```text
nangong3366@gmail.com
```

上线前请确认：

- 首页顶部可以看到测试版提示。
- 教程详情页可以看到测试版提示和反馈入口。
- Footer 中展示站长邮箱和测试版说明。
- `mailto:nangong3366@gmail.com` 链接可以正常打开邮件客户端。
- `/submit?type=tool` 入口可以正常跳转，未登录时应进入登录流程。

## 测试上线检查清单

- 首页没有乱码，首屏可以看到测试版提示或联系方式入口。
- 教程详情页可读，包含阅读进度、学习概览、步骤完成状态、提示词复制和反馈入口。
- 提示词复制可用，点击后会出现“已复制”。
- 投稿功能可用，未登录用户会先进入登录流程。
- 登录功能可用，Google OAuth 回调地址和 Supabase Redirect URLs 已配置一致。
- 管理员后台可访问，普通用户不能进入 `/admin`。
- Footer 联系方式正确显示 `nangong3366@gmail.com`。

测试期反馈方式：

- 邮箱反馈：`mailto:nangong3366@gmail.com?subject=AI工具箱反馈`
- 投稿页提交：`/submit?type=tool`、`/submit?type=tutorial`、`/submit?type=prompt`
