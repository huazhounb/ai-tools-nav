export interface Category {
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
