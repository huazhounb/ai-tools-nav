# 内容数据库使用说明

## 扩充工具库

新增工具时同时维护 `data/mock-tools.ts`、`data/tool-official-sites.ts` 和本地图标。工具必须有稳定 `slug`、本地图标路径、分类 `categorySlugs`、SEO 标题和描述。

## 运行图标抓取

运行：

```bash
node scripts/fetch-official-icons.mjs --all
```

脚本只访问工具官网声明的 favicon、apple-touch-icon、manifest icon 或页面 logo。抓取失败时会写入 `public/brand-icons/{slug}.svg` 自制占位图，不会热链外部图片。

## 检查缺失图标

检查 `data/brand-icon-paths.ts` 和 `public/brand-icons/`。如果某个工具仍使用占位 SVG，可后续手动替换为确认授权来源的官方资源。

## 执行 seed

在 Supabase SQL Editor 中执行 `supabase/seed.sql`。脚本使用 `ON CONFLICT DO UPDATE`，只更新内容数据，不会清空用户、投稿、点赞和登录资料。

## 验证数量

- 工具：`data/mock-tools.ts` 至少 80 个。
- 教程：`data/mock-tutorials.ts` 至少 40 篇。
- 提示词：`data/mock-prompts.ts` 至少 60 条。
- 对比：`data/mock-comparisons.ts` 至少 20 个。
- 榜单：`data/mock-rankings.ts` 至少 20 个。

数据库中可用以下 SQL 验证：

```sql
select count(*) from tools where status = 'published';
select count(*) from tutorials where status = 'published';
select count(*) from prompts where status = 'published';
select count(*) from comparisons where status = 'published';
select count(*) from rankings where status = 'published';
```

## 避免覆盖用户投稿

seed 不写 `auth.users`、`profiles`、`submissions`、`tool_likes`、`tool_views`、`tool_clicks`。用户投稿审核通过后仍通过后台发布流程写入正式内容表。

## 用户投稿发布

用户提交内容先进入 `submissions`。管理员审核通过后，发布逻辑把投稿写入 `tools`、`tutorials`、`prompts` 或 `comparisons`，前台只读取 `status='published'` 的正式内容。
