# Supabase 数据库说明

本目录用于管理 AI 工具导航站第一版 Supabase 数据库脚本。

## 文件

- `schema.sql`：创建表、约束、索引、RLS 策略和用户 profile 触发器。
- `seed.sql`：初始化分类、工具、教程、提示词、对比、榜单、榜单条目和赞助位示例数据。

## 执行顺序

1. 打开 Supabase Dashboard。
2. 进入项目的 SQL Editor。
3. 先复制并执行 `supabase/schema.sql`。
4. 再复制并执行 `supabase/seed.sql`。
5. 在 Table Editor 中检查 `categories`、`tools`、`tutorials`、`prompts`、`comparisons`、`rankings` 是否有数据。

## 环境变量

Vercel 和本地 `.env` 需要配置：

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NUXT_PUBLIC_SUPABASE_URL`
- `NUXT_PUBLIC_SUPABASE_ANON_KEY`

`SUPABASE_SERVICE_ROLE_KEY` 只能用于服务端 API，不允许暴露到浏览器。

## RLS 策略

公开可读内容：

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

- `submissions`：创建和读取自己的投稿。
- `tool_likes`：用户给工具点赞。

允许匿名写入：

- `tool_views`
- `tool_clicks`

管理员后台接口仍应使用服务端 `requireAdmin(event)` 校验，不要只依赖 RLS。
