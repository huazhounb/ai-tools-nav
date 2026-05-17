# 页面归属与修改边界

## 首页

- 负责路由：`/`
- 允许修改文件：`app/pages/index.vue`、首页专用组件、`data/siteContent.ts`、`data/navigation.ts`
- 不应该修改文件：其他动态详情页、后台 API、数据库计划文件
- 对应数据文件：`data/mock-tools.ts`、`data/mock-tutorials.ts`、`data/mock-prompts.ts`、`data/ads.ts`
- 对应组件：`HomeSearchBox`、`ToolCard`、`TutorialCard`、`PromptCard`、`SponsorSlot`、`BrandIcon`
- 当前问题：搜索框仍被用户反馈不可用，需浏览器实际验证；部分中文字符串存在乱码
- 建议分支：`page-home`

## 免费工具

- 负责路由：`/tools/free`、待确认的 `/free-ai-tools`
- 允许修改文件：`app/pages/tools/free.vue`、必要时 `app/pages/free-ai-tools.vue`
- 不应该修改文件：其他分类页和详情页
- 对应数据文件：`data/mock-tools.ts`
- 对应组件：`ToolCard`、`Breadcrumb`
- 当前问题：免费状态字段同时存在 `pricing` 和 `freeStatus`，需要统一展示规则
- 建议分支：`page-free-tools`

## 工具分类

- 负责路由：`/category`、`/category/[slug]`
- 允许修改文件：`app/pages/category/index.vue`、`app/pages/category/[slug].vue`
- 不应该修改文件：工具详情页、教程详情页、后台接口
- 对应数据文件：`data/mock-categories.ts`、`data/mock-tools.ts`、`data/mock-prompts.ts`、`data/mock-tutorials.ts`、`data/mock-comparisons.ts`
- 对应组件：`ToolCard`、`PromptCard`、`TutorialCard`、`Breadcrumb`
- 当前问题：需要继续确认每个分类至少有足够工具和内容关联
- 建议分支：`page-category`

## 工具详情

- 负责路由：`/tool/[slug]`
- 允许修改文件：`app/pages/tool/[slug].vue`
- 不应该修改文件：分类页筛选、投稿 API
- 对应数据文件：`data/mock-tools.ts`、相关教程/提示词/对比数据
- 对应组件：`BrandIcon`、`Breadcrumb`、`TutorialCard`、`PromptCard`
- 当前问题：部分工具中文内容由聚合数据生成，存在乱码风险
- 建议分支：`page-tool-detail`

## 教程

- 负责路由：`/tutorial`、`/tutorial/[slug]`
- 允许修改文件：`app/pages/tutorial/index.vue`、`app/pages/tutorial/[slug].vue`、`content/tutorials/**`
- 不应该修改文件：工具卡片核心结构，除非跨模块约定
- 对应数据文件：`data/mock-tutorials.ts`
- 对应组件：`TutorialCard`、`PromptCard`
- 当前问题：教程数据和 Markdown 内容存在双轨，需要明确主数据源
- 建议分支：`page-tutorial`

## 提示词

- 负责路由：`/prompts`、`/prompts/[slug]`
- 允许修改文件：`app/pages/prompts/index.vue`、`app/pages/prompts/[slug].vue`、`content/prompts/**`
- 不应该修改文件：教程详情页和榜单页
- 对应数据文件：`data/mock-prompts.ts`
- 对应组件：`PromptCard`
- 当前问题：复制按钮需要真实浏览器验证；提示词变量字段存在 `variables` 和 `variableNames` 两种形态
- 建议分支：`page-prompts`

## 工具对比

- 负责路由：`/compare`、`/compare/[slug]`
- 允许修改文件：`app/pages/compare/index.vue`、`app/pages/compare/[slug].vue`、`content/comparisons/**`
- 不应该修改文件：榜单排名规则，除非需要内链
- 对应数据文件：`data/mock-comparisons.ts`、`data/mock-tools.ts`
- 对应组件：`ComparisonTable`、`BrandIcon`
- 当前问题：移动端横向表格需要持续验证
- 建议分支：`page-compare`

## 榜单

- 负责路由：`/rankings`、`/rankings/[slug]`
- 允许修改文件：`app/pages/rankings/index.vue`、`app/pages/rankings/[slug].vue`、`content/rankings/**`
- 不应该修改文件：工具详情页核心字段
- 对应数据文件：`data/mock-rankings.ts`、`data/mock-tools.ts`
- 对应组件：`ToolCard`、`BrandIcon`
- 当前问题：后续需要点赞榜和热度权重数据来源
- 建议分支：`page-rankings`

## 投稿 / 提交工具

- 负责路由：`/submit`
- 允许修改文件：`app/pages/submit.vue`、必要时投稿类型定义和 API
- 不应该修改文件：所有内容展示页
- 对应数据文件：暂无独立 mock 文件，服务端使用 `server/utils/submissions.ts`
- 对应组件：基础表单组件待确认
- 当前问题：当前投稿存储为内存数组，刷新服务会丢失
- 建议分支：`page-submit`

## 后台审核

- 负责路由：`/admin/submissions`
- 允许修改文件：`app/pages/admin/submissions.vue`、`server/api/submissions/**`、`server/utils/submissions.ts`
- 不应该修改文件：首页、分类、内容详情页
- 对应数据文件：`types/submission.ts`
- 对应组件：待确认
- 当前问题：首版无复杂账号体系，`NUXT_ADMIN_TOKEN` 是否已接入校验待确认
- 建议分支：`page-admin-submissions`
