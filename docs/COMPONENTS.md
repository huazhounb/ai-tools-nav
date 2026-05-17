# 组件清单

组件源码位于 `app/components/`。

| 组件 | 路径 | 用途 | Props 简要说明 | 使用页面 | 公共组件 | 冲突风险 |
|---|---|---|---|---|---|---|
| `BrandIcon` | `app/components/BrandIcon.vue` | 展示工具品牌图标，支持本地图标和 fallback | `icon`、`name`、`size` 等，实际字段以文件为准 | 首页、工具卡、教程卡、对比页 | 是 | 高，多个页面依赖图标显示 |
| `Breadcrumb` | `app/components/Breadcrumb.vue` | 面包屑导航 | items 数组 | 分类、详情、教程、对比、榜单 | 是 | 中 |
| `BreadcrumbNav` | `app/components/BreadcrumbNav.vue` | 另一种面包屑组件 | items 数组 | 待确认 | 是 | 中，可能与 `Breadcrumb` 重复 |
| `BaseBadge` | `app/components/base/BaseBadge.vue` | 通用标签 | `tone` 等 | 卡片、详情、列表 | 是 | 低 |
| `BaseCard` | `app/components/base/BaseCard.vue` | 通用卡片容器 | 待确认 | 多页面可能使用 | 是 | 低 |
| `ToolCard` | `app/components/cards/ToolCard.vue` | 工具卡片 | `tool` | 首页、分类、免费工具、榜单 | 是 | 高，工具数据结构变更会影响多页 |
| `TutorialCard` | `app/components/cards/TutorialCard.vue` | 教程卡片 | tutorial 相关对象 | 首页、分类、教程列表、详情推荐 | 是 | 中 |
| `PromptCard` | `app/components/cards/PromptCard.vue` | 提示词卡片和复制按钮 | prompt 相关对象 | 首页、分类、提示词列表、详情推荐 | 是 | 高，复制交互需验证 |
| `ComparisonTable` | `app/components/cards/ComparisonTable.vue` | 对比表格 | comparison rows/tools | 对比详情、首页模块 | 是 | 中，移动端横向滚动需验证 |
| `SiteHeader` | `app/components/layout/SiteHeader.vue` | 顶部导航 | 无或少量配置 | 全站布局 | 是 | 高，所有页面入口依赖 |
| `SiteFooter` | `app/components/layout/SiteFooter.vue` | 页脚 | 待确认 | 全站布局 | 是 | 低 |
| `PageContainer` | `app/components/layout/PageContainer.vue` | 页面宽度容器 | 待确认 | 多页面 | 是 | 低 |
| `HomeSearchBox` | `app/components/search/HomeSearchBox.vue` | 首页搜索框 | `modelValue`，事件 `update:modelValue`、`search`、`clear` | 首页 | 是 | 高，用户反馈搜索不可用 |
| `JsonLd` | `app/components/seo/JsonLd.vue` | 输出结构化数据 | JSON-LD 数据对象 | SEO 页面 | 是 | 中 |
| `SponsorSlot` | `app/components/sponsor/SponsorSlot.vue` | 合作/赞助广告位展示 | sponsor slot 数据 | 首页、分类、详情、教程、对比 | 是 | 中，需保持广告标识明确 |

## 组件使用建议

- `ToolCard`、`PromptCard`、`TutorialCard` 是跨页面核心卡片，修改前先确认首页、分类页、列表页和详情推荐区是否都能兼容。
- `BrandIcon` 是图标显示唯一入口，新增图标规则优先改数据和文档，不要在各页面分散写图片逻辑。
- `Breadcrumb` 和 `BreadcrumbNav` 功能相近，后续建议合并或明确用途。
- 搜索组件需要用真实浏览器验证输入、回车、按钮、清空、中文输入法 composition。
