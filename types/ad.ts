export type SponsorPlacement =
  | 'home_today_tool'
  | 'category_featured'
  | 'tool_sidebar'
  | 'compare_sponsor'
  | 'tutorial_tool'

export type SponsorDisclosure = '广告' | '合作' | '赞助'

export interface SponsorSlot {
  id: string
  placement: SponsorPlacement
  disclosure: SponsorDisclosure
  title: string
  summary: string
  sponsorName: string
  href: string
  ctaLabel: string
  relevance: string
  audience: string[]
  categorySlugs?: string[]
  toolSlugs?: string[]
  comparisonSlugs?: string[]
  tutorialSlugs?: string[]
  status: 'active' | 'paused'
  updatedAt: string
}

export interface SponsorSlotContext {
  categorySlug?: string
  toolSlug?: string
  toolSlugs?: string[]
  comparisonSlug?: string
  tutorialSlug?: string
}
