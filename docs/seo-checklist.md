# SEO/GEO Checklist

本清单用于公开页面上线前检查。未通过的页面不要进入 `sitemap.xml`；后台、搜索结果、筛选参数页和待审核内容默认不索引。

## 1. 基础 SEO

| 检查项 | 标准 | 通过 |
|---|---|---|
| `useSeoMeta` | 所有页面都必须设置唯一 `title`、`description`、OG 和 Twitter 基础信息 |  |
| Canonical | 首页、分类页、工具页、对比页、教程页、提示词页、榜单页、投稿页输出 `<link rel="canonical">` |  |
| URL | 使用小写英文 slug，不使用无意义 ID，不让 UTM、排序、筛选参数形成独立索引页 |  |
| H1 | 每页只有一个 H1，且与主搜索意图一致 |  |
| 可索引正文 | 核心内容在服务端 HTML 中可见，不能只放在客户端交互、弹窗、搜索结果或折叠加载后 |  |
| 内链 | 页面至少提供 3 个相关内链，链接到分类、工具、教程、提示词、榜单或对比页 |  |
| 商业标注 | 合作、广告、赞助内容必须有清晰弱提示 |  |

## 2. 页面 Schema

| 页面类型 | 必须/可用 JSON-LD | 检查标准 |
|---|---|---|
| 首页 `/` | `WebSite`、`Organization` | 页面有站点名称、搜索入口和主要分类入口 |
| 分类页 `/category/[slug]` | `BreadcrumbList`、`ItemList`、`FAQPage` | 工具列表和 FAQ 必须真实展示在页面正文中 |
| 工具页 `/tool/[slug]` | `SoftwareApplication`、`BreadcrumbList`、`FAQPage` | 工具名称、描述、分类、平台、价格/免费情况、FAQ 与页面内容一致 |
| 对比页 `/compare/[slug]` | `Article`、`ItemList`、`BreadcrumbList`、`FAQPage` | 有顶部结论、对比表、工具列表、FAQ |
| 教程页 `/tutorial/[slug]` | `Article`、`BreadcrumbList`、`FAQPage` | 有教程步骤、适合人群、工具、可复制提示词、FAQ |
| 提示词页 `/prompts/[slug]` | `Article`、`BreadcrumbList`、`FAQPage` | 有完整 Prompt、变量解释、使用方法、FAQ |
| 榜单页 `/rankings/[slug]` | `ItemList`、`BreadcrumbList`、`FAQPage` | 有排名规则、工具列表、推荐理由、FAQ |
| 投稿页 `/submit` | 可不输出结构化数据 | 保留 canonical，说明审核规则和提交字段 |
| 后台 `/admin/submissions` | 不输出公开 schema | `robots: noindex,nofollow`，不进入 sitemap |

禁止输出页面上不存在的 FAQ、评分、评论、用户量或价格信息。

## 3. Sitemap

`server/routes/sitemap.xml.get.ts` 生成公开 canonical 页面：

- 收录：首页、分类页、工具页、对比页、教程页、提示词页、榜单页、投稿页。
- 不收录：`/admin/`、`/api/`、`/search`、筛选参数页、排序参数页、UTM 参数页、未审核内容。
- 每条 URL 输出 `loc`、`lastmod`、`changefreq`、`priority`。
- 工具、教程、提示词、榜单、对比页优先使用内容自身 `updatedAt` 作为 `lastmod`。

## 4. Robots

`server/routes/robots.txt.get.ts` 必须包含：

- `Allow: /`
- `Disallow: /admin/`
- `Disallow: /api/`
- `Disallow: /search`
- `Disallow: /*?*sort=`
- `Disallow: /*?*filter=`
- `Disallow: /*?*utm_`
- `Disallow: /*?*page=`
- `Sitemap: {siteUrl}/sitemap.xml`

不要用 robots 屏蔽核心公开页面。

## 5. 内链规则

- 首页链接到重点分类、工具详情、对比页、教程页、提示词页、榜单页和投稿页。
- 分类页链接到工具详情、相关教程、相关提示词。
- 工具页链接到所属分类、替代工具、相关教程和 FAQ。
- 对比页链接到参与对比的工具详情和相关教程。
- 教程页链接到使用工具、相关提示词和相关推荐。
- 提示词页链接到适用工具和相关提示词。
- 榜单页链接到工具详情、相关教程和相关对比页。
- 场景页链接到相关工具、教程和提示词。
- 免费专区链接到免费榜单、分类页、对比页和工具详情。

避免在页面底部堆无关链接。

## 6. GEO 检查

面向 AI 搜索和答案引擎时，每个核心页面要满足：

- 结论先行：工具页、对比页、榜单页开头直接给选择建议。
- 实体清晰：工具名、分类、适合人群、免费情况、中文支持、平台形态要结构化呈现。
- 判断标准明确：对比页和榜单页必须写清楚推荐规则。
- FAQ 可抽取：FAQ 问答短、具体，并与正文一致。
- 内容可引用：不要把核心结论隐藏在纯客户端筛选、复制按钮或 hover 交互里。
- 更新时间明确：工具、教程、提示词、榜单、对比页都要展示更新时间。

## 7. 发布前命令

```bash
npm run build
```

构建通过后抽查：

- `/sitemap.xml` 是否只包含公开 canonical 页面。
- `/robots.txt` 是否包含 sitemap 地址和后台/API 禁抓规则。
- `/tool/deepseek` 是否有 canonical、`SoftwareApplication`、`FAQPage`。
- `/tutorial/deepseek-weekly-report` 是否有 canonical、`Article`、`FAQPage`。
- `/rankings/free-ai-tools` 是否有 canonical、`ItemList`、`FAQPage`。
- `/scenarios/ai-ppt` 是否有 canonical、可索引正文和面包屑结构化数据。
- `/free-ai-tools` 是否有 canonical、`ItemList` 和工具详情内链。
