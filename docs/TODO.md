# TODO

## 高优先级

1. 修复中文乱码。
   - 已发现 `README.md` 旧版本、`.env.example`、`nuxt.config.ts`、`data/comprehensive.ts`、部分组件和 `server/utils/submissions.ts` 存在乱码。
   - 本次只改文档，业务文件未修。
2. 验证首页搜索框。
   - 用户多次反馈搜索不可用。
   - 需要使用浏览器检查输入、回车、按钮、清空、热门词、中文输入法 composition。
3. 统一数据字段。
   - 工具中同时存在 `pricing`、`freeStatus`，`audience`、`audiences`，`platform`、`platforms`。
   - 提示词中同时存在 `body`、`prompt`，`models`、`applicableModels`。
4. 确认 `AGENTS.md`。
   - 当前根目录未发现该文件。

## 当前页面未完成项

- `/free-ai-tools` 与 `/tools/free` 的关系待确认。
- `/cooperation` 是否进入正式导航待确认。
- `/scenarios/[slug]` 是否纳入主要 SEO 矩阵待确认。
- 后台审核缺少持久化和权限校验确认。
- 动态页 slug 缺失时的 404 表现需要统一验证。

## 当前数据未完成项

- 每个分类是否至少有足够工具、教程、提示词和对比关联需要重新统计。
- `data/comprehensive.ts` 过于集中，后续建议拆分或迁移数据库。
- 品牌图标仍需人工确认授权来源。
- 投稿数据目前是内存数组。

## 当前 UI 问题

- 用户反馈后续工具仍出现字母占位图标。
- 首页搜索框用户反馈不可用。
- 移动端导航、筛选条、对比表格需要持续验证。
- 卡片组件中部分中文标签可能因乱码影响展示。

## 当前 SEO 问题

- sitemap 是否覆盖所有动态 slug 待确认。
- robots 是否禁止 `/admin` 待确认。
- canonical 对 `/free-ai-tools` 与 `/tools/free` 的归属待确认。
- 部分 SEO title/description 由乱码数据生成，存在不可索引风险。

## 当前乱码问题

- 严禁继续用错误编码覆盖中文文件。
- 后续修复建议先备份分支，再逐文件替换为 UTF-8 中文。
- 优先修复面向用户可见的 `data/`、`components/`、`pages/` 和环境描述。

## 优先级排序

1. 修复乱码和首页搜索。
2. 修复图标 fallback 与品牌图标覆盖率。
3. 统计并补齐分类页内容关联。
4. 统一数据模型字段。
5. 增强 404、空状态和移动端验证。
6. 迁移投稿审核到数据库。

## 测试上线前新增待办

1. 提示词详情页目前仍只从本地 mock 数据读取，数据库发布出来的 `/prompts/submission-*` 详情页会找不到内容；需要允许修改 `app/pages/prompts/[slug].vue` 后改成 API 优先、mock 兜底。
2. 已发布投稿的下架/删除依赖 Supabase 正式内容表的 `status` 字段，线上需要确认 `prompts`、`tools`、`tutorials`、`comparisons` 表支持 `published`、`draft` 或 `archived` 状态。
3. 当前测试版已增加站长邮箱 `nangong3366@gmail.com`，后续可以补充“反馈处理周期”和“内容纠错说明”页面。
4. 教程详情页已增加阅读进度、反馈卡和继续学习入口，后续应继续补真实教程正文，避免只依赖模板化示例。

## 教程体验后续计划

1. 增加更多真实教程案例，优先覆盖 ChatGPT、DeepSeek、Cursor、Midjourney、Gamma、Kimi 和 Canva AI。
2. 将教程完成记录从 localStorage 同步到用户账号，支持跨设备继续学习。
3. 将用户收藏从 localStorage 同步到数据库，后续做“我的收藏”页面。
4. 增加评论或轻量反馈系统，替代仅依赖邮件反馈。
5. 增加工具价格、免费额度和可用性的定期检查，避免教程内容过期。
