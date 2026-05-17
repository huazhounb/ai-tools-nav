# 数据模型说明

当前数据以 mock data 为主，核心聚合文件是 `data/comprehensive.ts`，多个 `data/mock-*.ts` 文件从该文件导出数据。类型定义位于 `types/`。

## mock-tools 数据结构

来源：`data/mock-tools.ts`、`data/comprehensive.ts`、`types/tool.ts`

关键字段：

```ts
{
  name: string
  slug: string
  summary: string
  description?: string
  category: string
  categorySlug: string
  categorySlugs?: string[]
  pricing: 'free' | 'freemium' | 'paid'
  freeStatus: string
  icon?: string | ToolIcon
  chineseSupport: string
  audience: string[]
  audiences?: string[]
  platform: string
  platforms?: string[]
  popularity?: number
  recommendedScore?: number
  updatedAt: string
  hasTutorial: boolean
  tags: string[]
  conclusion: string
  features: string[]
  threshold: string
  pros: string[]
  cons: string[]
  scenarios: string[]
  notFor: string[]
  alternatives: string[]
  officialUrl: string
  isTested: boolean
  faq: Array<{ question: string, answer: string }>
  relatedTutorials: string[]
  status?: 'active' | 'inactive' | 'unknown'
  checkedAt?: string
  seoTitle?: string
  seoDescription?: string
}
```

注意：`categorySlugs` 是分类页筛选的关键字段，一个工具可以属于多个分类。

## mock-categories 数据结构

来源：`data/mock-categories.ts`、`types/category.ts`

```ts
{
  name: string
  slug: string
  href: string
  description: string
  intro?: string
  body?: string
  toolSlugs?: string[]
  relatedTutorials?: string[]
  relatedPrompts?: string[]
  seoTitle?: string
  seoDescription?: string
  updatedAt?: string
}
```

## mock-tutorials 数据结构

来源：`data/mock-tutorials.ts`、`types/content.ts`

```ts
{
  title: string
  slug: string
  description: string
  audience: string[]
  duration: string
  tools: string[]
  steps: Array<{ title: string, body: string }>
  prompt: string
  commonErrors: Array<{ title: string, fix: string }>
  recommendations: string[]
  faq: Array<{ question: string, answer: string }>
  updatedAt: string
  category?: string
  categorySlugs?: string[]
  seoTitle?: string
  seoDescription?: string
}
```

## mock-prompts 数据结构

来源：`data/mock-prompts.ts`、`types/content.ts`

```ts
{
  title: string
  slug: string
  category?: string
  categorySlugs?: string[]
  description: string
  models: string[]
  applicableModels?: string[]
  tasks: string[]
  task?: string
  body: string
  prompt?: string
  summary?: string
  variables: Array<{ name: string, description: string }>
  variableNames?: string[]
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  usage: string[]
  effect: string
  badExample: string
  relatedPrompts: string[]
  relatedTools: string[]
  relatedToolSlugs?: string[]
  updatedAt: string
  seoTitle?: string
  seoDescription?: string
}
```

## mock-comparisons 数据结构

来源：`data/mock-comparisons.ts`、`types/content.ts`

```ts
{
  title: string
  slug: string
  description: string
  conclusion: string
  quickAdvice: string[]
  toolSlugs: string[]
  rows: Array<{ label: string, values: Record<string, string> }>
  prosCons: Record<string, { pros: string[], cons: string[] }>
  recommendation: string
  faq: Array<{ question: string, answer: string }>
  relatedTutorials: string[]
  categorySlugs?: string[]
  updatedAt: string
  seoTitle?: string
  seoDescription?: string
}
```

## mock-rankings 数据结构

来源：`data/mock-rankings.ts`、`types/content.ts`

```ts
{
  title: string
  slug: string
  description: string
  updatedAt: string
  rules: string[]
  tools: Array<{ slug: string, rank: number, reason: string }>
  relatedTutorials: string[]
  relatedComparisons: string[]
  seoTitle?: string
  seoDescription?: string
}
```

## mock-submissions 数据结构

来源：`server/utils/submissions.ts`、`types/submission.ts`

```ts
{
  id: string
  type: 'tool' | 'tutorial' | 'prompt'
  name: string
  website: string
  category: string
  description: string
  freeStatus: string
  chineseSupport: string
  reason: string
  submitterName: string
  contact: string
  status: 'pending' | 'approved' | 'rejected'
  reviewNote: string
  createdAt: string
  updatedAt: string
}
```

当前投稿数据是内存数组，不具备持久化能力。

## 后续数据库表设计建议

### tools

- `id`
- `slug`
- `name`
- `summary`
- `description`
- `pricing`
- `free_status`
- `chinese_support`
- `platforms`
- `audiences`
- `tags`
- `icon_path`
- `official_url`
- `is_tested`
- `status`
- `checked_at`
- `updated_at`
- `seo_title`
- `seo_description`

### categories

- `id`
- `slug`
- `name`
- `description`
- `intro`
- `body`
- `sort_order`
- `updated_at`
- `seo_title`
- `seo_description`

### tool_categories

- `tool_id`
- `category_id`
- `is_primary`
- `sort_order`

### tutorials

- `id`
- `slug`
- `title`
- `description`
- `body`
- `difficulty`
- `duration`
- `tool_slugs`
- `category_slugs`
- `updated_at`
- `seo_title`
- `seo_description`

### prompts

- `id`
- `slug`
- `title`
- `summary`
- `body`
- `models`
- `tasks`
- `variables`
- `difficulty`
- `category_slugs`
- `related_tool_slugs`
- `updated_at`
- `seo_title`
- `seo_description`

### comparisons

- `id`
- `slug`
- `title`
- `conclusion`
- `tool_slugs`
- `rows_json`
- `recommendation`
- `category_slugs`
- `updated_at`
- `seo_title`
- `seo_description`

### rankings

- `id`
- `slug`
- `title`
- `description`
- `rules_json`
- `updated_at`
- `seo_title`
- `seo_description`

### ranking_items

- `ranking_id`
- `tool_id`
- `rank`
- `reason`
- `score`

### tool_likes

- `id`
- `tool_id`
- `user_id`
- `ip_hash`
- `created_at`

### submissions

- `id`
- `type`
- `payload_json`
- `status`
- `review_note`
- `submitter_name`
- `contact`
- `created_at`
- `updated_at`

### users

- `id`
- `email`
- `name`
- `role`
- `created_at`
- `updated_at`
