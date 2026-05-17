# Technical Specification

## 1. 技术选型说明

本项目采用 Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS + Nuxt Content + Nitro server routes。

| 技术 | 用途 | 选择理由 |
|---|---|---|
| Nuxt 4 | 应用框架 | 支持 SSR/SSG、文件路由、SEO、Nitro API，适合内容型站点 |
| Vue 3 | 交互层 | 组件开发效率高，适合筛选、搜索、复制提示词等交互 |
| TypeScript | 类型系统 | 约束工具、分类、教程、提示词、投稿等数据结构 |
| Tailwind CSS | 样式系统 | 快速实现统一 UI token、卡片、表格、响应式布局 |
| Nuxt Content | 内容管理 | 管理教程、提示词、对比、榜单等 Markdown 内容 |
| Nitro server routes | 服务端接口 | 处理投稿、搜索、后台审核、robots/sitemap 等服务端能力 |
| 关系型 schema 预留 | 数据持久化 | 后续可切 PostgreSQL、MySQL 或 SQLite |

首版目标是 SEO 内容站 + 简单后台，不做复杂账号、评论、积分、收藏和厂商自助投放。

## 2. 为什么用 Nuxt 而不是纯 Vue SPA

纯 Vue SPA 不适合作为本项目首选，因为首批流量主要来自 SEO 页面，而不是登录后的复杂应用。

Nuxt 的优势：

| 需求 | Nuxt 价值 |
|---|---|
| 工具详情页、对比页、教程页需要被搜索引擎索引 | SSR/SSG 输出可索引 HTML |
| 每个页面需要独立 title、description、canonical、JSON-LD | Nuxt head 管理更直接 |
| sitemap、robots、投稿接口、搜索接口 | Nitro server routes 内置支持 |
| Markdown 教程和提示词内容 | Nuxt Content 原生适配 |
| 后续接数据库和后台审核 | 服务端 API 与页面同仓库维护 |

结论：本项目应避免把核心正文只放在客户端交互里。工具详情、免费页、对比页、教程页、提示词页必须服务端可渲染。

## 3. 目录结构设计

建议目录：

```text
app/
  app.vue
  assets/
    css/
      main.css
  components/
    base/
    layout/
    cards/
    seo/
    search/
    forms/
    admin/
  composables/
  layouts/
  pages/
  utils/
content/
  tutorials/
  prompts/
  comparisons/
  rankings/
  pages/
data/
  tools.ts
  categories.ts
  siteContent.ts
  scenarios.ts
  ads.ts
  navigation.ts
server/
  api/
  routes/
  utils/
  db/
types/
  tool.ts
  category.ts
  content.ts
  submission.ts
  ad.ts
docs/
```

目录原则：

- `content/` 放 Markdown 内容资产。
- `data/` 放结构化静态数据和初始种子数据。
- `server/` 放 Nitro API、投稿审核和未来数据库访问。
- `components/` 按职责分层，不把业务数据写死在组件里。
- `types/` 统一数据类型，避免页面各写一套字段。

## 4. 页面路由设计

| 页面 | 路由 | 渲染建议 | SEO |
|---|---|---|---|
| 首页 | `/` | SSG/SSR | 品牌入口和内链中枢 |
| 免费专区 | `/free-ai-tools` | SSG/SSR | 强 SEO 入口 |
| 分类页 | `/category/[slug]` | SSG/SSR | 分类词入口 |
| 工具详情页 | `/tool/[slug]` | SSG/SSR | 工具品牌词入口 |
| 对比页 | `/compare/[slug]` | SSG/SSR | 决策词入口 |
| 教程列表 | `/tutorial` | SSG/SSR | 教程集合入口 |
| 教程详情 | `/tutorial/[slug]` | SSG/SSR | 操作型长尾词 |
| 提示词库 | `/prompts` | SSG/SSR | 提示词集合入口 |
| 提示词详情 | `/prompts/[slug]` | SSG/SSR | Prompt 长尾词 |
| 榜单页 | `/rankings/[slug]` | SSG/SSR | 排行榜关键词 |
| 投稿页 | `/submit` | SSR | 厂商投稿入口 |
| 合作页 | `/cooperation` | SSG/SSR | 商业合作入口 |
| 搜索页 | `/search` | SSR/CSR | 默认不索引 |
| 后台 | `/admin/submissions` | SSR | noindex |

对比页建议使用单 slug：`/compare/kimi-vs-doubao`，避免 `/compare/kimi/doubao` 和反向组合导致 canonical 复杂化。

## 5. 组件分层设计

### Base 组件

- `BaseButton`
- `BaseBadge`
- `BaseCard`
- `BaseInput`
- `BaseSelect`
- `BaseTable`
- `BaseTabs`

### Layout 组件

- `SiteHeader`
- `SiteFooter`
- `PageContainer`
- `Breadcrumbs`
- `SectionHeader`

### Card 组件

- `ToolCard`
- `TutorialCard`
- `PromptCard`
- `ComparisonCard`
- `RankingToolRow`
- `AdPlacementCard`

### SEO 组件

- `SeoHead`
- `JsonLd`
- `FaqBlock`
- `InternalLinks`

### Search 组件

- `HomeSearchBox`
- `SearchResultList`
- `FilterChips`
- `CategoryFilterPanel`

### Admin 组件

- `SubmissionTable`
- `SubmissionReviewPanel`
- `ContentStatusBadge`
- `AdminFormShell`

规则：

- Base 组件不依赖业务数据。
- Card 组件只接收明确 props。
- SEO 组件只消费页面已展示内容，不生成虚假结构化数据。
- Admin 组件和公开页面组件隔离。

## 6. 数据模型设计

首版可用静态数据 + Nuxt Content，数据库 schema 先预留。未来数据库可迁移到 PostgreSQL、MySQL 或 SQLite。

### tools

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 稳定 ID |
| `slug` | string | URL slug，唯一 |
| `name` | string | 工具名 |
| `summary` | string | 一句话用途 |
| `description` | text | 详情介绍 |
| `officialUrl` | string | 官网 |
| `logo` | string | Logo 地址 |
| `categoryIds` | string[] | 分类 |
| `tagIds` | string[] | 标签 |
| `pricingType` | enum | free/freemium/paid/contact |
| `freeQuota` | string | 免费额度说明 |
| `accessStatus` | enum | available/limited/unknown |
| `suitableFor` | string[] | 适合谁 |
| `notSuitableFor` | string[] | 不适合谁 |
| `pros` | string[] | 优点 |
| `cons` | string[] | 限制 |
| `alternatives` | string[] | 替代工具 slug |
| `isSponsored` | boolean | 是否赞助 |
| `status` | enum | draft/review/published/archived |
| `updatedAt` | datetime | 更新时间 |

### categories

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 分类 ID |
| `slug` | string | URL slug |
| `name` | string | 分类名 |
| `description` | string | 分类说明 |
| `seoTitle` | string | SEO title |
| `seoDescription` | string | SEO description |
| `selectionCriteria` | string[] | 怎么选 |
| `featuredToolSlugs` | string[] | 推荐工具 |

### submissions

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 投稿 ID |
| `toolName` | string | 工具名 |
| `officialUrl` | string | 官网 |
| `category` | string | 投稿分类 |
| `summary` | string | 简介 |
| `pricing` | string | 价格说明 |
| `contactName` | string | 联系人 |
| `contactEmail` | string | 邮箱 |
| `materialsUrl` | string | 补充材料 |
| `status` | enum | pending/approved/rejected/needs_info |
| `reviewNote` | text | 审核备注 |
| `createdAt` | datetime | 创建时间 |

### ads

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 广告位 ID |
| `placement` | string | 位置 |
| `label` | enum | sponsored/ad/partner |
| `title` | string | 展示标题 |
| `description` | string | 描述 |
| `targetUrl` | string | 目标链接 |
| `toolSlug` | string | 可选关联工具 |
| `startsAt` | datetime | 开始时间 |
| `endsAt` | datetime | 结束时间 |
| `status` | enum | draft/active/paused/expired |

## 7. Content 目录结构

```text
content/
  tutorials/
    deepseek-weekly-report.md
    kimi-summarize-pdf.md
  prompts/
    weekly-report-summary.md
    xiaohongshu-title.md
  comparisons/
    kimi-vs-doubao.md
    cursor-vs-trae.md
  rankings/
    free-ai-tools.md
    ai-writing-tools.md
  pages/
    free-ai-tools.md
    cooperation.md
```

原则：

- 教程、提示词、对比、榜单正文放 `content/`。
- 工具基础数据放 `data/tools` 或未来数据库。
- Markdown frontmatter 保存结构化字段，正文保存可索引内容。

## 8. Markdown frontmatter 规范

### tutorial

```yaml
title: 如何用 DeepSeek 写周报
slug: deepseek-weekly-report
description: 使用 DeepSeek 生成结构清晰的周报，包含步骤、提示词和示例输出。
category: ai-office
tools:
  - deepseek
tags:
  - weekly-report
  - office
difficulty: beginner
estimatedMinutes: 10
hasPrompt: true
publishedAt: 2026-05-10
updatedAt: 2026-05-10
status: published
```

### prompt

```yaml
title: 周报总结提示词
slug: weekly-report-summary
description: 可复制的周报总结 AI 提示词模板，适合职场办公场景。
scenario: office
tools:
  - deepseek
  - kimi
variables:
  - 本周工作
  - 下周计划
  - 风险问题
status: published
```

### comparison

```yaml
title: Kimi vs 豆包
slug: kimi-vs-doubao
description: 对比 Kimi 和豆包在中文写作、文件总结、免费额度和上手难度上的差异。
tools:
  - kimi
  - doubao
primaryScenario: chinese-writing
winnerByScenario:
  document-summary: kimi
  daily-chat: doubao
status: published
```

## 9. SEO 实现方案

每个公开页面必须生成：

- 唯一 `title`
- 唯一 `description`
- canonical
- Open Graph 基础信息
- H1
- 面包屑
- JSON-LD

实现方式：

- 页面级数据通过 `useSeoMeta` 或统一 `SeoHead` 组件写入。
- SEO 模板集中在 `utils/seo.ts`。
- canonical 通过 `siteUrl + route.path` 生成，参数页按规则归一。
- 搜索页、后台页、筛选参数页默认 `noindex`。
- 核心正文来自服务端渲染的 Markdown 或页面数据，不依赖客户端请求后再出现。

## 10. JSON-LD 生成方案

建议创建 `utils/jsonld.ts`，按页面类型生成结构化数据。

| 页面 | JSON-LD |
|---|---|
| 首页 | `WebSite`、`Organization` |
| 工具详情 | `SoftwareApplication`、`FAQPage`、`BreadcrumbList` |
| 分类页 | `CollectionPage`、`ItemList`、`FAQPage` |
| 免费页 | `CollectionPage`、`ItemList`、`FAQPage` |
| 对比页 | `Article`、`ItemList`、`FAQPage` |
| 教程页 | `HowTo` 或 `Article`、`FAQPage` |
| 提示词页 | `Article`、`FAQPage` |
| 榜单页 | `CollectionPage`、`ItemList`、`FAQPage` |

规则：

- 页面没有展示 FAQ 时不输出 `FAQPage`。
- 教程没有明确步骤时不输出 `HowTo`。
- 不输出虚假评分、评论、下载量。
- 商业广告位不伪装成自然推荐。

## 11. sitemap/robots 方案

### sitemap

生成来源：

- 已发布工具详情
- 已发布分类
- 已发布教程
- 已发布提示词
- 已发布对比页
- 已发布榜单
- 固定页面：`/`、`/free-ai-tools`、`/submit`、`/cooperation`

排除：

- `/admin/submissions`
- `/api`
- `/search`
- 草稿内容
- 未审核工具
- 筛选参数页

### robots

允许：

- `/`
- `/tool/[slug]`
- `/category/[slug]`
- `/compare`
- `/tutorial`
- `/prompts/`
- `/rankings/`
- `/free-ai-tools`
- `/submit`
- `/cooperation`

禁止：

- `/admin/`
- `/api/`
- `/search`
- 带 `sort`、`filter`、`utm_` 的参数页

## 12. 搜索功能方案

MVP 搜索目标：支持用户搜索工具名、任务、场景、教程和提示词。

### 首版方案

- 构建静态搜索索引。
- 索引对象包括 tools、tutorials、prompts、comparisons、categories。
- 字段包括 title、slug、type、summary、tags、category、keywords。
- 前端搜索框本地过滤，搜索结果页默认 `noindex`。

### 后续方案

- 数据量增加后接服务端搜索 API。
- 可选接数据库全文索引、Meilisearch 或 Algolia。
- 搜索日志只在明确有隐私策略后记录。

搜索结果必须区分类型：

- 工具
- 教程
- 提示词
- 对比
- 分类

## 13. 投稿审核方案

MVP 投稿流程：

1. 用户在 `/submit` 填写工具信息。
2. Nitro route `POST /api/submissions` 接收并校验。
3. 存入 submissions 表或临时 JSON/SQLite。
4. 后台 `/admin/submissions` 查看投稿。
5. 管理员可标记 `approved`、`rejected`、`needs_info`。
6. 通过后手动创建工具数据或转为工具草稿。

安全要求：

- 表单字段白名单校验。
- 官网 URL 必须校验协议。
- 邮箱格式校验。
- 限制提交频率。
- 后台页面 `noindex`。

首版不做厂商账号、不做在线支付、不做自动上架。

## 14. 商业广告位数据结构

广告位必须透明标注，不得伪装成编辑推荐。

```ts
type AdPlacement = {
  id: string
  placement:
    | 'home_featured'
    | 'category_top'
    | 'tool_sidebar'
    | 'tutorial_inline'
    | 'ranking_sponsor'
  label: 'sponsored' | 'ad' | 'partner'
  title: string
  description?: string
  targetUrl: string
  image?: string
  toolSlug?: string
  startsAt?: string
  endsAt?: string
  status: 'draft' | 'active' | 'paused' | 'expired'
}
```

展示规则：

- 所有广告卡片显示 `赞助`、`广告` 或 `合作` Badge。
- 广告位可出现在首页、分类页、详情页、教程页、榜单页。
- 广告不参与自然榜单排序，除非单独放在“赞助推荐”区域。

## 15. 环境变量设计

| 变量 | 用途 | 示例 |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | 站点 URL，用于 canonical 和 sitemap | `http://localhost:3000` |
| `NUXT_PUBLIC_SITE_NAME` | 站点名称 | `AI Nav` |
| `NUXT_PUBLIC_SITE_DESCRIPTION` | 站点默认描述 | `中文 AI 工具选择、上手教程、场景方案和可复制提示词。` |
| `NUXT_ADMIN_TOKEN` | 后台简易鉴权密钥预留 | `change-me` |
| `DATABASE_URL` | 后续数据库连接，首版可为空 | 空字符串或 `postgresql://...` |
| `SUBMISSION_RATE_LIMIT` | 投稿限流 | `10/hour` |
| `CONTACT_EMAIL` | 合作联系邮箱 | `hello@example.com` |
| `ENABLE_SPONSOR_SLOTS` | 是否启用合作/赞助位 | `true` |
| `ENABLE_INDEX_NOW` | 是否启用主动推送 | `false` |

规则：

- 公开变量使用 `NUXT_PUBLIC_`。
- 密钥只在服务端使用。
- 本地提供 `.env.example`，不提交真实 `.env`。

## 16. 部署方案

### 推荐部署

优先选择支持 Nuxt/Nitro 的平台，例如 Vercel、Netlify、Cloudflare 或自托管 Node。

首版可选：

- SSG 静态页面 + Nitro API。
- 若投稿和后台需要服务端持久化，优先 SSR/Nitro 部署。

### 数据库演进

阶段 1：

- Markdown + 静态数据。
- 投稿可临时写入 SQLite 或外部表单服务。

阶段 2：

- 接 SQLite 或 PostgreSQL。
- 后台审核读写数据库。

阶段 3：

- PostgreSQL/MySQL 生产化。
- 增加备份、迁移、权限和审计。

## 17. 阶段性开发计划

### Phase 0：项目初始化

- 创建 Nuxt 4 项目。
- 配置 TypeScript、Tailwind、Nuxt Content。
- 建立基础目录、类型和 UI token。
- 配置 eslint/format/build。

### Phase 1：SEO 内容骨架

- 首页
- 免费专区
- 分类页
- 工具详情页
- sitemap/robots
- SEO head 和 canonical
- JSON-LD 基础工具函数

### Phase 2：内容型页面

- 教程列表和详情
- 提示词库和详情
- 对比页
- 榜单页
- 内链模块
- FAQ 模块

### Phase 3：搜索与投稿

- 静态搜索索引
- 首页搜索和搜索页
- 投稿表单
- 投稿 API
- 简版后台审核

### Phase 4：商业化与质量

- 广告位数据结构
- 赞助标注
- 合作页
- 内容质量检查清单
- 首批 50 页内容填充

## 18. 验收标准

### 技术验收

- Nuxt 4 项目可启动、可构建。
- TypeScript 无关键类型错误。
- Tailwind 样式可用。
- Nuxt Content 能读取教程、提示词、对比和榜单。
- Nitro routes 能处理投稿接口。
- 后台页面默认 `noindex`。

### SEO 验收

- 每个公开页面有唯一 title、description、H1。
- 工具、分类、免费、对比、教程、提示词页面都有服务端可索引正文。
- canonical 正确。
- sitemap 不包含后台、搜索页、草稿、未审核工具。
- robots 不屏蔽核心公开页面。
- JSON-LD 只描述页面真实内容。

### 产品验收

- MVP 不依赖复杂账号体系。
- 免费专区、工具对比、教程、提示词优先完成。
- 工具详情页包含适合谁、不适合谁、价格/免费额度、替代工具。
- 对比页第一屏给结论。
- 教程页包含步骤和可复制提示词。
- 提示词页包含变量说明和示例输出。
- 广告位必须明确标注商业属性。

### 内容验收

- 首批至少 50 个建议页面进入内容计划。
- 首批至少 20 个教程选题。
- 首批至少 20 个提示词选题。
- 未达到内容质量要求的页面不进 sitemap。

## 19. 当前实现对齐说明（2026-05-10）

截至 2026-05-10，代码实现以单数路由为准：

| 页面类型 | 当前路由 |
| --- | --- |
| 首页 | `/` |
| 分类页 | `/category/[slug]` |
| 工具详情页 | `/tool/[slug]` |
| 对比聚合与详情 | `/compare`、`/compare/[slug]` |
| 教程聚合与详情 | `/tutorial`、`/tutorial/[slug]` |
| 提示词聚合与详情 | `/prompts`、`/prompts/[slug]` |
| 榜单聚合与详情 | `/rankings`、`/rankings/[slug]` |
| 场景方案页 | `/scenarios/[slug]` |
| 免费专区 | `/free-ai-tools` |
| 投稿页 | `/submit` |
| 简版后台 | `/admin/submissions` |
| 站点协议 | `/sitemap.xml`、`/robots.txt` |

当前结构化数据和 mock data 集中在 `data/`：

- `data/tools.ts`：工具详情、分类、教程关联和 FAQ。
- `data/categories.ts`：分类定义。
- `data/siteContent.ts`：教程、提示词、对比、榜单的页面数据。
- `data/scenarios.ts`：首页任务入口和场景详情页复用的场景数据。
- `data/ads.ts`：商业化推荐位和赞助位。
- `data/navigation.ts`：导航结构。

当前 Nuxt Content 示例集中在 `content/`，用于内容生产规范和后续接入动态内容。首版页面主要读取 `data/` 中的结构化 mock data，以保证核心页面可以稳定构建和服务端渲染。

当前商业化基础实现：

- `types/ad.ts` 定义 `SponsorSlot` 数据模型。
- `app/components/sponsor/SponsorSlot.vue` 负责统一展示。
- 首页、分类页、工具详情页、对比页、教程页已有低干扰商业位。
- 所有商业位必须显示“合作”“赞助”或“广告”标识。

当前投稿审核实现：

- `/submit` 提供投稿表单和前端校验。
- `server/api/submissions.post.ts` 接收投稿。
- `/admin/submissions` 展示列表、详情、审核状态和备注。
- `server/utils/submissions.ts` 当前为内存仓储，后续替换数据库时保持 API 字段不变。
