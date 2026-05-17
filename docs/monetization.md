# Monetization

本项目的商业化原则是：广告透明、内容相关、弱干扰、不影响编辑判断。

## 1. 当前支持的商业位

| 位置 | placement | 页面 | 展示方式 |
|---|---|---|---|
| 首页今日推荐工具 | `home_today_tool` | `/` | 首页中部单个推荐卡片 |
| 分类页推荐位 | `category_featured` | `/category/[slug]` | 筛选器下方、工具列表上方 |
| 工具详情页侧边栏推荐位 | `tool_sidebar` | `/tool/[slug]` | 官网按钮下方小卡片 |
| 对比页赞助位 | `compare_sponsor` | `/compare/[slug]` | 快速选择建议后方 |
| 教程页推荐工具位 | `tutorial_tool` | `/tutorial/[slug]` | 右侧栏相关位置 |

不做弹窗广告，不做大面积横幅广告，不做遮挡正文的浮层。

## 2. SponsorSlot 数据模型

类型定义见 `types/ad.ts`，数据源见 `data/ads.ts`。

核心字段：

| 字段 | 说明 |
|---|---|
| `id` | 商业位唯一 ID |
| `placement` | 展示位置 |
| `disclosure` | `广告`、`合作` 或 `赞助` |
| `title` | 商业位标题 |
| `summary` | 推荐说明，必须说明适用场景 |
| `sponsorName` | 合作方或赞助方名称 |
| `href` | 跳转链接，可为站内工具页/教程页或外链 |
| `ctaLabel` | 按钮文案 |
| `relevance` | 为什么出现在当前页面 |
| `audience` | 适合人群 |
| `categorySlugs` | 可选，限制展示分类 |
| `toolSlugs` | 可选，限制相关工具 |
| `comparisonSlugs` | 可选，限制对比页 |
| `tutorialSlugs` | 可选，限制教程页 |
| `status` | `active` 或 `paused` |
| `updatedAt` | 最近更新时间 |

## 3. 展示组件

统一组件：`app/components/sponsor/SponsorSlot.vue`。

组件规则：

- 必须展示 `广告`、`合作` 或 `赞助` Badge。
- 必须展示 `relevance`，说明为什么与当前内容相关。
- 外链使用 `rel="noopener noreferrer sponsored"`。
- 卡片使用轻量黄色提示样式，不允许覆盖正文、不允许自动弹出。
- 商业位不输出 `SoftwareApplication`、`Article`、`ItemList` 等 SEO JSON-LD，避免和编辑内容混淆。

## 4. 内容相关性规则

商业位必须至少满足一项：

- 与当前分类一致，例如写作工具只出现在写作、办公、论文相关页面。
- 与当前工具存在替代、教程或场景关系。
- 与当前对比页里的工具有关。
- 与当前教程正在使用的工具有关。

不允许：

- 在无关分类页强行展示。
- 把付费合作位插入自然榜单排名。
- 用“编辑推荐”“最佳工具”等文案包装广告。
- 隐藏商业标识。

## 5. 审核流程

新增商业位前检查：

1. 合作方真实存在，链接可访问。
2. 文案说明适合谁、解决什么任务、有什么限制。
3. 已填写 `disclosure`。
4. 已填写 `relevance`。
5. 已配置相关 `categorySlugs`、`toolSlugs`、`comparisonSlugs` 或 `tutorialSlugs`。
6. 确认不会进入自然榜单排序。
7. `status` 先设为 `paused`，审核通过后改为 `active`。

## 6. 后续扩展

后续可以接数据库表 `sponsor_slots`：

| 字段 | 类型建议 |
|---|---|
| `id` | varchar |
| `placement` | enum/varchar |
| `disclosure` | enum/varchar |
| `title` | varchar |
| `summary` | text |
| `sponsor_name` | varchar |
| `href` | varchar |
| `cta_label` | varchar |
| `relevance` | text |
| `audience` | json |
| `category_slugs` | json |
| `tool_slugs` | json |
| `comparison_slugs` | json |
| `tutorial_slugs` | json |
| `status` | enum/varchar |
| `starts_at` | datetime |
| `ends_at` | datetime |
| `updated_at` | datetime |

后台管理可以后续加入启停、排序、投放时间和点击统计；MVP 阶段只保留静态数据和明确标识。
