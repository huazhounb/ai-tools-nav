# 内容维护 SOP

## 如何新增工具

1. 在 `data/tool-official-sites.ts` 添加工具官网、slug 和备用官网。
2. 运行 `npm run icons:fetch` 抓取官网声明图标；如果失败，手动放入授权图标或自制占位图标到 `public/brand-icons/`。
3. 在工具数据中新增工具，至少包含：
   - `name`
   - `slug`
   - `summary` / `description`
   - `categorySlug`
   - `categorySlugs`
   - `pricing`
   - `freeStatus`
   - `chineseSupport`
   - `platform` / `platforms`
   - `audience` / `audiences`
   - `tags`
   - `icon`
   - `officialUrl`
   - `updatedAt`
   - `seoTitle`
   - `seoDescription`
4. 确认分类页、工具详情页、免费工具页、榜单和 sitemap 都能覆盖。
5. 不要热链外部图片。

## 如何新增教程

1. 在 `data/mock-tutorials.ts` 对应数据源新增教程结构。
2. 如使用 Nuxt Content，同步在 `content/tutorials/` 新增 Markdown。
3. 必填：标题、slug、摘要、适合人群、使用工具、预计耗时、步骤、可复制提示词、常见错误、FAQ、更新时间、SEO title、SEO description。
4. 关联 `categorySlugs` 和 `tools`，确保分类页和工具详情页能推荐。

## 如何新增提示词

1. 在 `data/mock-prompts.ts` 对应数据源新增提示词结构。
2. 如使用 Nuxt Content，同步在 `content/prompts/` 新增 Markdown。
3. 必填：标题、slug、适用模型、任务、Prompt 正文、摘要、变量说明、使用方法、失败示例、相关工具、更新时间、SEO 信息。
4. 复制按钮依赖 `PromptCard`，新增字段时要保持兼容。

## 如何新增对比页

1. 在 `data/mock-comparisons.ts` 对应数据源新增对比数据。
2. 必填：标题、slug、结论、工具 slug、快速选择建议、对比表、优缺点、最终推荐、FAQ、相关教程、更新时间、SEO 信息。
3. 每个参与工具必须能在 `mockTools` 中找到。

## 如何新增榜单

1. 在 `data/mock-rankings.ts` 对应数据源新增榜单。
2. 必填：标题、slug、说明、排名规则、工具列表、推荐理由、相关教程、相关对比、更新时间、SEO 信息。
3. 排名理由必须和榜单主题有关，不要只复用工具简介。

## 投稿审核规则

- 投稿类型：工具、教程、提示词。
- 状态：`pending`、`approved`、`rejected`。
- 审核时检查官网真实性、分类是否正确、描述是否原创、是否有中文用户价值、是否涉及违规内容。
- 当前存储为内存数组，生产环境必须迁移到数据库。

## 内容更新频率

- 热门工具：每周检查可用性、价格、免费额度和图标。
- 分类页：每两周补充工具和内链。
- 教程和提示词：每周新增或更新。
- 榜单：至少每月更新一次排名规则和推荐理由。
- 失效工具：发现后立即标记 `status` 并记录 `checkedAt`。

## 避免乱码规则

- 所有源码和 Markdown 使用 UTF-8。
- 不要用错误编码覆盖中文文件。
- 复制外部内容前先在编辑器确认编码。
- 发现乱码时先定位来源，不要在业务代码里继续追加乱码文本。

## 避免空壳页面规则

- 动态页 slug 不存在必须显示 404 或友好提示。
- 页面不能只有标题和卡片列表，必须有正文、FAQ、内链和相关推荐。
- 新增分类时至少关联足够工具、提示词、教程和对比。
- 新增榜单时必须写排名规则和推荐理由。
