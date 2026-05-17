# SEO Content Matrix

## 1. SEO 页面矩阵

首批 SEO 不只做首页，主要流量入口应来自工具详情页、免费页、对比页、教程页和提示词页。

| 页面类型 | 搜索意图 | MVP 优先级 | 核心流量词 | 页面目标 |
|---|---|---:|---|---|
| 首页 | 品牌词、AI 工具导航 | P0 | AI工具导航、AI工具大全 | 建立品牌和全站入口 |
| 工具详情页 | 工具品牌词、使用方式、价格、替代品 | P0 | DeepSeek 怎么用、Kimi 免费吗 | 承接工具名搜索并引导教程/对比 |
| 免费专区 | 免费工具需求 | P0 | 免费AI工具、免费AI绘图工具 | 聚合免费工具和限制说明 |
| 分类页 | 工具类型需求 | P0 | AI写作工具、AI绘图工具 | 帮用户按类别筛选工具 |
| 对比页 | 决策型搜索 | P0 | Kimi和豆包哪个好、Cursor vs Trae | 给出明确选择建议 |
| 教程页 | 操作型搜索 | P0 | 怎么用AI做PPT、DeepSeek写周报 | 帮用户完成具体任务 |
| 提示词页 | 模板型搜索 | P0 | 周报提示词、小红书标题提示词 | 提供可复制 Prompt |
| 榜单页 | 排行和推荐搜索 | P1 | 最好用的AI工具、AI工具排行榜 | 用透明规则做工具推荐 |
| 投稿页 | 厂商供给搜索 | P0 | AI工具提交、AI导航投稿 | 获取工具投稿 |
| 合作页 | 商业合作搜索 | P1 | AI导航广告、AI工具推广 | 承接广告和合作线索 |

## 2. 每类页面的 URL 规则

| 页面类型 | URL 规则 | 示例 |
|---|---|---|
| 首页 | `/` | `/` |
| 工具详情页 | `/tool/[tool-slug]` | `/tool/deepseek` |
| 免费专区 | `/free-ai-tools` | `/free-ai-tools` |
| 分类页 | `/category/[category-slug]` | `/category/writing` |
| 对比页 | `/compare/[tool-a]-vs-[tool-b]` | `/compare/kimi-vs-doubao` |
| 教程列表 | `/tutorial` | `/tutorial` |
| 教程详情 | `/tutorial/[task-or-tool-slug]` | `/tutorial/deepseek-weekly-report` |
| 提示词库 | `/prompts` | `/prompts` |
| 提示词详情 | `/prompts/[prompt-slug]` | `/prompts/xiaohongshu-title` |
| 榜单页 | `/rankings/[ranking-slug]` | `/rankings/free-ai-tools` |
| 投稿页 | `/submit` | `/submit` |
| 合作页 | `/cooperation` | `/cooperation` |

URL 规则：

- 使用小写英文 slug。
- 不使用中文 URL。
- 不使用无意义 ID。
- 同一内容只保留一个 canonical URL。
- 筛选参数页默认不索引，除非被定义为独立 SEO 页面。

## 3. 每类页面的 title 模板

| 页面类型 | Title 模板 |
|---|---|
| 首页 | `AI工具导航：AI工具选择、教程、提示词与对比推荐` |
| 工具详情页 | `{工具名} 是什么？怎么用、价格、优缺点与替代工具` |
| 免费专区 | `免费AI工具推荐：可免费使用的AI写作、绘图、办公和编程工具` |
| 分类页 | `{分类名}推荐：适合{核心场景}的AI工具怎么选` |
| 对比页 | `{工具A} vs {工具B}：哪个更适合{核心场景}？` |
| 教程列表 | `AI工具教程：从入门到实用的AI工作流指南` |
| 教程详情 | `{任务名}教程：如何用{工具名或AI工具}完成{结果}` |
| 提示词库 | `AI提示词库：办公、写作、学习、编程和运营 Prompt 模板` |
| 提示词详情 | `{提示词名称}：可复制的{场景}AI提示词模板` |
| 榜单页 | `{榜单名}：{年份}值得关注的AI工具推荐` |
| 投稿页 | `提交AI工具：申请收录到AI工具导航` |
| 合作页 | `AI工具导航合作：广告、赞助与内容合作` |

规则：

- 主实体或主查询放在 title 前半段。
- 不堆砌关键词。
- 每页 title 必须唯一。

## 4. 每类页面的 description 模板

| 页面类型 | Description 模板 |
|---|---|
| 首页 | `面向中文用户的AI工具导航，提供AI工具选择、上手教程、可复制提示词、工具对比和免费工具推荐。` |
| 工具详情页 | `了解{工具名}的核心功能、适合人群、价格与免费额度、优缺点、上手教程、提示词和替代工具。` |
| 免费专区 | `整理可免费使用或有免费额度的AI工具，覆盖写作、绘图、办公、学习、编程等场景，并说明限制和替代选择。` |
| 分类页 | `精选{分类名}相关AI工具，按免费额度、中文支持、上手难度和适用场景帮助你快速选择。` |
| 对比页 | `对比{工具A}和{工具B}的价格、功能、中文支持、适用场景和上手难度，给出具体选择建议。` |
| 教程详情 | `本教程演示如何用{工具名或AI工具}完成{任务}，包含操作步骤、可复制提示词、示例输出和常见问题。` |
| 提示词详情 | `提供可复制的{场景}AI提示词模板，包含变量说明、使用方法、适用工具和示例输出。` |
| 榜单页 | `根据{排名维度}整理{榜单名}，说明推荐理由、适合人群、免费情况和相关教程。` |
| 投稿页 | `提交你的AI工具申请收录，填写工具名称、官网、分类、简介和联系方式，人工审核后决定是否展示。` |
| 合作页 | `了解AI工具导航的广告、赞助、内容合作和工具推广方式，所有商业内容都会明确标注。` |

## 5. 每类页面的 H1 模板

| 页面类型 | H1 模板 |
|---|---|
| 首页 | `找到适合你的 AI 工具，并直接用起来` |
| 工具详情页 | `{工具名}` |
| 免费专区 | `免费 AI 工具推荐` |
| 分类页 | `{分类名}推荐` |
| 对比页 | `{工具A} vs {工具B}` |
| 教程列表 | `AI 工具教程` |
| 教程详情 | `{任务名}教程` |
| 提示词库 | `AI 提示词库` |
| 提示词详情 | `{提示词名称}` |
| 榜单页 | `{榜单名}` |
| 投稿页 | `提交 AI 工具` |
| 合作页 | `合作与广告` |

规则：

- 每页只允许一个 H1。
- H1 要和页面主意图一致。
- 不把多个关键词硬塞进 H1。

## 6. 每类页面的正文结构

所有核心页面必须有服务端可渲染、可索引正文。不能把核心内容只放在客户端筛选、弹窗、折叠交互或搜索结果里。

### 工具详情页

1. 工具简介
2. 适合谁
3. 不适合谁
4. 核心功能
5. 价格与免费额度
6. 优点和限制
7. 怎么开始用
8. 可复制提示词
9. 替代工具
10. 相关教程
11. 相关对比
12. FAQ

### 免费专区

1. 免费 AI 工具选择结论
2. 免费工具分类导航
3. 免费工具列表
4. 免费额度和限制说明
5. 按场景推荐
6. 免费工具常见问题
7. 相关教程和提示词

### 分类页

1. 分类说明
2. 这类工具适合解决什么问题
3. 怎么选
4. 推荐工具
5. 全部工具列表
6. 免费工具筛选
7. 相关教程
8. 相关提示词
9. 相关对比
10. FAQ

### 对比页

1. 结论先行
2. 对比摘要表
3. 分场景选择建议
4. 关键差异
5. 价格与免费额度
6. 适合人群
7. 替代工具
8. 相关教程
9. FAQ

### 教程页

1. 教程目标
2. 适用人群
3. 准备材料
4. 操作步骤
5. 可复制提示词
6. 示例输入和输出
7. 常见失败原因
8. 相关工具
9. 相关提示词
10. FAQ

### 提示词页

1. 使用场景
2. 完整提示词
3. 变量说明
4. 适用工具
5. 示例输入
6. 示例输出
7. 修改建议
8. 相关教程
9. FAQ

## 7. 每类页面的 FAQ 模板

### 工具详情页 FAQ

- `{工具名} 是免费的吗？`
- `{工具名} 适合哪些人使用？`
- `{工具名} 适合中文用户吗？`
- `{工具名} 有哪些替代工具？`
- `新手怎么开始使用 {工具名}？`

### 免费专区 FAQ

- `有哪些真正免费的 AI 工具？`
- `免费 AI 工具和付费 AI 工具差别大吗？`
- `免费 AI 工具有使用次数限制吗？`
- `哪些免费 AI 工具适合新手？`
- `免费 AI 工具可以商用吗？`

### 分类页 FAQ

- `{分类名}工具应该怎么选？`
- `{分类名}有哪些免费工具？`
- `{分类名}工具适合新手吗？`
- `{分类名}工具适合中文场景吗？`
- `{分类名}工具和{相关分类}有什么区别？`

### 对比页 FAQ

- `{工具A} 和 {工具B} 哪个更适合新手？`
- `{工具A} 和 {工具B} 哪个更适合中文？`
- `{工具A} 和 {工具B} 哪个免费额度更多？`
- `{工具A} 和 {工具B} 哪个更适合{场景}？`
- `除了 {工具A} 和 {工具B}，还有哪些替代工具？`

### 教程页 FAQ

- `这个教程适合新手吗？`
- `完成这个任务需要付费工具吗？`
- `提示词可以直接复制使用吗？`
- `如果输出效果不好应该怎么改？`
- `有没有其他工具也能完成这个任务？`

### 提示词页 FAQ

- `这个提示词适合哪些 AI 工具？`
- `提示词里的变量怎么替换？`
- `这个提示词适合中文输出吗？`
- `怎么让输出结果更稳定？`
- `可以把这个提示词用于商业内容吗？`

## 8. 每类页面的 JSON-LD 类型

| 页面类型 | JSON-LD 类型 | 使用条件 |
|---|---|---|
| 首页 | `WebSite`、`Organization`、`BreadcrumbList` | 有站点名称、搜索入口和组织信息 |
| 工具详情页 | `SoftwareApplication` 或 `Product`、`FAQPage`、`BreadcrumbList` | 价格、官网、分类等信息足够完整时 |
| 免费专区 | `CollectionPage`、`ItemList`、`FAQPage`、`BreadcrumbList` | 页面展示真实工具列表 |
| 分类页 | `CollectionPage`、`ItemList`、`FAQPage`、`BreadcrumbList` | 页面展示分类工具列表 |
| 对比页 | `Article`、`ItemList`、`FAQPage`、`BreadcrumbList` | 有正文对比和 FAQ |
| 教程页 | `HowTo` 或 `Article`、`FAQPage`、`BreadcrumbList` | 有明确步骤时用 `HowTo` |
| 提示词页 | `Article`、`FAQPage`、`BreadcrumbList` | 有正文、模板和示例 |
| 榜单页 | `CollectionPage`、`ItemList`、`FAQPage`、`BreadcrumbList` | 有排名规则和工具列表 |
| 投稿页 | `WebPage`、`BreadcrumbList` | 有公开说明内容 |
| 合作页 | `WebPage`、`BreadcrumbList` | 有合作说明内容 |

规则：

- JSON-LD 只能描述页面上真实存在的内容。
- FAQPage 只用于页面正文中真实展示的问题。
- HowTo 只用于有明确步骤的教程页。
- 不要为了 SEO 添加虚假的评分、评论和价格。

## 9. 内链规则

### 全站规则

- 首页链接到重点分类、免费专区、教程、提示词、对比和投稿页。
- 分类页链接到工具详情、相关教程、相关提示词和相关对比。
- 工具详情页链接到所属分类、替代工具、相关教程、相关提示词和相关对比。
- 对比页链接到两个工具详情页、相关分类页和相关教程。
- 教程页链接到使用到的工具、相关提示词、相关分类和相关对比。
- 提示词页链接到适用工具、相关教程和同类提示词。
- 榜单页链接到工具详情、分类页和相关对比。

### 禁止规则

- 不放大段无关链接。
- 不在每页底部堆几十个无关工具。
- 不循环制造“相关推荐”而没有内容相关性。
- 不把核心链接只放在客户端搜索结果中。

## 10. 首批 50 个建议页面

| 序号 | 页面 | URL |
|---:|---|---|
| 1 | 首页 | `/` |
| 2 | 免费 AI 工具推荐 | `/free-ai-tools` |
| 3 | AI 写作工具推荐 | `/category/writing` |
| 4 | AI 办公工具推荐 | `/category/office` |
| 5 | AI 绘图工具推荐 | `/category/image` |
| 6 | AI 视频工具推荐 | `/category/video` |
| 7 | AI 编程工具推荐 | `/category/coding` |
| 8 | AI 搜索工具推荐 | `/category/search` |
| 9 | AI 学习工具推荐 | `/category/learning` |
| 10 | AI 效率工具推荐 | `/category/productivity` |
| 11 | DeepSeek 详情 | `/tool/deepseek` |
| 12 | Kimi 详情 | `/tool/kimi` |
| 13 | 豆包 详情 | `/tool/doubao` |
| 14 | 通义千问 详情 | `/tool/tongyi` |
| 15 | ChatGPT 详情 | `/tool/chatgpt` |
| 16 | Claude 详情 | `/tool/claude` |
| 17 | Midjourney 详情 | `/tool/midjourney` |
| 18 | 即梦AI 详情 | `/tool/jimeng-ai` |
| 19 | Cursor 详情 | `/tool/cursor` |
| 20 | Trae 详情 | `/tool/trae` |
| 21 | 秘塔AI搜索 详情 | `/tool/metaso` |
| 22 | Perplexity 详情 | `/tool/perplexity` |
| 23 | Notion AI 详情 | `/tool/notion-ai` |
| 24 | Gamma 详情 | `/tool/gamma` |
| 25 | Canva AI 详情 | `/tool/canva-ai` |
| 26 | Kimi vs 豆包 | `/compare/kimi-vs-doubao` |
| 27 | DeepSeek vs 通义千问 | `/compare/deepseek-vs-tongyi` |
| 28 | ChatGPT vs Claude | `/compare/chatgpt-vs-claude` |
| 29 | Cursor vs Trae | `/compare/cursor-vs-trae` |
| 30 | Midjourney vs 即梦AI | `/compare/midjourney-vs-jimeng-ai` |
| 31 | 秘塔AI搜索 vs Perplexity | `/compare/metaso-vs-perplexity` |
| 32 | AI 工具教程 | `/tutorial` |
| 33 | DeepSeek 写周报教程 | `/tutorial/deepseek-weekly-report` |
| 34 | AI 做 PPT 教程 | `/tutorial/make-ppt-outline-with-ai` |
| 35 | Kimi 总结 PDF 教程 | `/tutorial/kimi-paper-summary` |
| 36 | AI 写小红书文案教程 | `/tutorial/ai-xiaohongshu-copywriting` |
| 37 | Cursor 入门教程 | `/tutorial/cursor-code-review` |
| 38 | AI 论文润色教程 | `/tutorial/ai-paper-polishing` |
| 39 | AI 提示词库 | `/prompts` |
| 40 | 周报总结提示词 | `/prompts/weekly-report-summary` |
| 41 | PPT 大纲提示词 | `/prompts/ppt-outline` |
| 42 | 小红书标题提示词 | `/prompts/xiaohongshu-title` |
| 43 | 论文润色提示词 | `/prompts/paper-polishing` |
| 44 | 短视频脚本提示词 | `/prompts/short-video-script` |
| 45 | 代码 Review 提示词 | `/prompts/code-review` |
| 46 | 免费 AI 工具榜 | `/rankings/free-ai-tools` |
| 47 | AI 写作工具榜 | `/rankings/ai-writing-tools` |
| 48 | AI 绘图工具榜 | `/rankings/ai-image-tools` |
| 49 | 提交 AI 工具 | `/submit` |
| 50 | 合作与广告 | `/cooperation` |

## 11. 首批 20 个教程选题

| 序号 | 教程选题 | URL |
|---:|---|---|
| 1 | 如何用 DeepSeek 写周报 | `/tutorial/deepseek-weekly-report` |
| 2 | 如何用 AI 快速做 PPT 大纲 | `/tutorial/make-ppt-outline-with-ai` |
| 3 | 如何用 Gamma 生成演示文稿 | `/tutorial/gamma-presentation-guide` |
| 4 | 如何用 Kimi 总结 PDF | `/tutorial/kimi-paper-summary` |
| 5 | 如何用豆包写小红书文案 | `/tutorial/doubao-xiaohongshu-copywriting` |
| 6 | 如何用 AI 生成短视频脚本 | `/tutorial/ai-short-video-script` |
| 7 | 如何用 Midjourney 生成海报图 | `/tutorial/midjourney-poster-guide` |
| 8 | 如何用即梦AI生成商品图 | `/tutorial/jimeng-product-image` |
| 9 | 如何用 Cursor 修改代码 | `/tutorial/cursor-edit-code` |
| 10 | 如何用 Trae 开始 AI 编程 | `/tutorial/trae-beginner-guide` |
| 11 | 如何用 AI 润色论文 | `/tutorial/ai-paper-polishing` |
| 12 | 如何用 AI 生成简历优化建议 | `/tutorial/ai-resume-optimization` |
| 13 | 如何用 AI 整理会议纪要 | `/tutorial/ai-meeting-notes` |
| 14 | 如何用 AI 做竞品分析 | `/tutorial/ai-competitor-analysis` |
| 15 | 如何用 AI 生成 SQL 解释 | `/tutorial/ai-sql-explanation` |
| 16 | 如何用 AI 生成公众号选题 | `/tutorial/ai-wechat-topic-ideas` |
| 17 | 如何用 AI 做读书笔记 | `/tutorial/ai-reading-notes` |
| 18 | 如何用 AI 生成电商详情页文案 | `/tutorial/ai-ecommerce-copywriting` |
| 19 | 如何用 AI 翻译并润色英文邮件 | `/tutorial/ai-email-translation-polishing` |
| 20 | 如何用 AI 制作学习计划 | `/tutorial/ai-study-plan` |

## 12. 首批 20 个提示词选题

| 序号 | 提示词选题 | URL |
|---:|---|---|
| 1 | 周报总结提示词 | `/prompts/weekly-report-summary` |
| 2 | PPT 大纲提示词 | `/prompts/ppt-outline` |
| 3 | 小红书标题提示词 | `/prompts/xiaohongshu-title` |
| 4 | 小红书正文提示词 | `/prompts/xiaohongshu-post` |
| 5 | 公众号选题提示词 | `/prompts/wechat-topic-ideas` |
| 6 | 短视频脚本提示词 | `/prompts/short-video-script` |
| 7 | 论文润色提示词 | `/prompts/paper-polishing` |
| 8 | 论文摘要改写提示词 | `/prompts/paper-abstract-rewrite` |
| 9 | 简历优化提示词 | `/prompts/resume-optimization` |
| 10 | 面试准备提示词 | `/prompts/interview-preparation` |
| 11 | 会议纪要提示词 | `/prompts/meeting-notes` |
| 12 | 邮件润色提示词 | `/prompts/email-polishing` |
| 13 | SQL 解释提示词 | `/prompts/sql-explanation` |
| 14 | 代码 Review 提示词 | `/prompts/code-review` |
| 15 | Bug 排查提示词 | `/prompts/bug-debugging` |
| 16 | 商品图生成提示词 | `/prompts/product-image-generation` |
| 17 | 海报文案提示词 | `/prompts/poster-copywriting` |
| 18 | 竞品分析提示词 | `/prompts/competitor-analysis` |
| 19 | 学习计划提示词 | `/prompts/study-plan` |
| 20 | 读书笔记提示词 | `/prompts/reading-notes` |

## 13. sitemap 策略

### 必须收录

- 首页
- 工具详情页
- 分类页
- 免费专区
- 对比页
- 教程页
- 提示词页
- 榜单页
- 投稿页
- 合作页

### 暂不收录

- 后台页面
- 搜索结果页
- 筛选参数页
- 分页过深页面
- 空分类页
- 内容未审核页面

### 更新频率建议

| 页面类型 | changefreq | priority |
|---|---|---:|
| 首页 | daily | 1.0 |
| 免费专区 | weekly | 0.9 |
| 工具详情页 | weekly | 0.8 |
| 分类页 | weekly | 0.8 |
| 对比页 | monthly | 0.8 |
| 教程页 | monthly | 0.7 |
| 提示词页 | monthly | 0.7 |
| 榜单页 | weekly | 0.8 |
| 投稿页 | monthly | 0.4 |
| 合作页 | monthly | 0.4 |

## 14. robots 策略

允许抓取：

- `/`
- `/tool/`
- `/category/`
- `/compare/`
- `/tutorial/`
- `/prompts/`
- `/rankings/`
- `/free-ai-tools`
- `/submit`
- `/cooperation`

禁止抓取：

- `/admin/`
- `/api/`
- `/search`
- `/*?*sort=`
- `/*?*filter=`
- `/*?*utm_`
- `/*?*page=`

说明：

- 搜索结果页默认不索引。
- 筛选组合页默认不索引，除非被人工定义为独立 SEO 页面。
- robots 不应屏蔽核心公开页面。

## 15. canonical 策略

| 场景 | Canonical 规则 |
|---|---|
| 工具详情页 | 指向 `/tool/[slug]` |
| 分类筛选页 | 指向原分类页，除非是独立 SEO 页面 |
| 排序参数页 | 指向无参数页面 |
| UTM 参数 | 指向无参数页面 |
| 分页页面 | 指向自身或分页系列策略，避免全部指向第一页 |
| 同义工具名 | 统一到主 slug |
| 对比页 A vs B | 固定一种顺序，例如按主推页面 slug；反向组合 301 到主 URL |
| 提示词变体 | 内容差异不足时合并到主提示词页 |

规则：

- 不创建多个 URL 展示同一正文。
- 对比页必须避免 `/a-vs-b` 和 `/b-vs-a` 双索引。
- 内容高度相似的榜单和分类页要明确差异，否则合并。

## 16. 内容质量要求

每个可索引页面必须满足：

- 有唯一 title、description、H1。
- 有至少 600 字可索引正文；工具详情页、对比页、教程页建议 1000 字以上。
- 有明确搜索意图，不为凑数量创建页面。
- 有真实页面内容支撑 JSON-LD。
- 有至少 3 个相关内链。
- 工具详情页必须包含适合谁、不适合谁、价格/免费额度、替代工具。
- 对比页必须给结论和对比表。
- 教程页必须有步骤和可复制提示词。
- 提示词页必须有完整 prompt、变量说明和示例输出。
- 榜单页必须说明排名依据。
- 商业内容必须标注赞助、广告或合作。

## 17. 禁止批量灌水规则

禁止：

- 只替换工具名批量生成内容。
- 页面只有卡片列表，没有可索引正文。
- 工具详情页只复制官网介绍。
- 对比页不给结论，只堆参数。
- 教程页没有真实步骤。
- 提示词页只有一句 prompt，没有变量和示例。
- 榜单页没有排名依据。
- 用客户端渲染隐藏核心正文，服务端 HTML 里没有主要内容。
- 大量创建空分类页、空标签页、空搜索页。
- 使用虚假的评分、评论、用户量或价格。
- 把广告内容伪装成编辑推荐。

最低发布门槛：

- 未达到质量要求的页面不进 sitemap。
- 未审核工具不生成公开详情页。
- 同质化内容必须合并，不允许拆成多个薄页面。
- 每批新增页面上线前抽查 title、description、H1、正文、内链和 canonical。
