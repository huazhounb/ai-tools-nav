export type ToolPricing = 'free' | 'freemium' | 'paid'

export interface ToolIcon {
  type: 'simple-icons' | 'local' | 'fallback'
  name?: string
  src?: string
  color?: string
}

export interface Tool {
  name: string
  slug: string
  summary: string
  description?: string
  category: string
  categorySlug: string
  categorySlugs?: string[]
  pricing: ToolPricing
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
  statusNote?: string
  checkedAt?: string
  seoTitle?: string
  seoDescription?: string
}
