# 路由清单

当前 Nuxt 配置使用 `srcDir: app/`，页面文件位于 `app/pages/`。

| 路由 | 对应文件 | 页面用途 | 状态 | 动态路由 | 示例地址 |
|---|---|---|---|---|---|
| `/` | `app/pages/index.vue` | 首页，包含搜索、推荐、场景、工具网格和内容入口 | 已存在，需继续验证搜索 | 否 | `/` |
| `/tools/free` | `app/pages/tools/free.vue` | 免费 AI 工具页 | 已存在 | 否 | `/tools/free` |
| `/free-ai-tools` | `app/pages/free-ai-tools.vue` | 免费工具旧入口或补充入口 | 已存在，是否保留待确认 | 否 | `/free-ai-tools` |
| `/category` | `app/pages/category/index.vue` | 分类总页 | 已存在 | 否 | `/category` |
| `/category/[slug]` | `app/pages/category/[slug].vue` | 分类详情页，展示工具、筛选、教程、提示词、对比和 FAQ | 已存在 | 是 | `/category/ai-writing` |
| `/tool/[slug]` | `app/pages/tool/[slug].vue` | 工具详情页 | 已存在 | 是 | `/tool/chatgpt` |
| `/tutorial` | `app/pages/tutorial/index.vue` | 教程列表页 | 已存在 | 否 | `/tutorial` |
| `/tutorial/[slug]` | `app/pages/tutorial/[slug].vue` | 教程详情页 | 已存在 | 是 | `/tutorial/chatgpt-guide` |
| `/prompts` | `app/pages/prompts/index.vue` | 提示词列表页 | 已存在 | 否 | `/prompts` |
| `/prompts/[slug]` | `app/pages/prompts/[slug].vue` | 提示词详情页 | 已存在 | 是 | `/prompts/weekly-report-summary` |
| `/compare` | `app/pages/compare/index.vue` | 工具对比列表页 | 已存在 | 否 | `/compare` |
| `/compare/[slug]` | `app/pages/compare/[slug].vue` | 工具对比详情页 | 已存在 | 是 | `/compare/deepseek-vs-doubao-vs-tongyi` |
| `/rankings` | `app/pages/rankings/index.vue` | 榜单列表页 | 已存在 | 否 | `/rankings` |
| `/rankings/[slug]` | `app/pages/rankings/[slug].vue` | 榜单详情页 | 已存在 | 是 | `/rankings/free-ai-tools` |
| `/submit` | `app/pages/submit.vue` | 投稿页 | 已存在 | 否 | `/submit` |
| `/admin/submissions` | `app/pages/admin/submissions.vue` | 简单投稿审核后台 | 已存在 | 否 | `/admin/submissions` |
| `/search` | `app/pages/search.vue` | 搜索页 | 已存在 | 否 | `/search` |
| `/scenarios/[slug]` | `app/pages/scenarios/[slug].vue` | 场景方案页 | 已存在 | 是 | `/scenarios/ai-ppt` |
| `/cooperation` | `app/pages/cooperation.vue` | 合作页 | 已存在 | 否 | `/cooperation` |
| `/robots.txt` | `server/routes/robots.txt.get.ts` | robots 输出 | 已存在 | 否 | `/robots.txt` |
| `/sitemap.xml` | `server/routes/sitemap.xml.get.ts` | sitemap 输出 | 已存在 | 否 | `/sitemap.xml` |

## 待确认

- 导航是否应统一使用 `/tools/free`，并将 `/free-ai-tools` 作为兼容入口。
- `/cooperation` 是否进入 MVP 导航。
- 动态详情页的数据缺失时是否统一使用 Nuxt 404。
