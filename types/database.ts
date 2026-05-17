export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type ProfileRow = {
  id: string
  email: string | null
  username: string | null
  name: string | null
  avatar_url: string | null
  role: 'user' | 'admin'
  status: 'active' | 'disabled'
  created_at: string
  updated_at: string
}

export type CategoryRow = {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  color: string | null
  sort_order: number
  is_featured: boolean
  seo_title: string | null
  seo_description: string | null
  created_at: string
  updated_at: string
}

export type ToolRow = {
  id: string
  name: string
  slug: string
  description: string
  long_description: string | null
  icon_url: string | null
  official_url: string | null
  category: string | null
  free_status: 'free' | 'freemium' | 'paid'
  chinese_support: 'excellent' | 'good' | 'normal'
  platforms: string[]
  audiences: string[]
  tags: string[]
  has_tutorial: boolean
  is_featured: boolean
  is_sponsored: boolean
  sponsor_label: string | null
  editor_score: number
  scores: Record<string, number>
  stats: Record<string, number>
  seo_title: string | null
  seo_description: string | null
  status: 'published' | 'draft' | 'pending' | 'rejected'
  source: 'editor' | 'submission' | string
  created_at: string
  updated_at: string
}

export type TutorialRow = {
  id: string
  title: string
  slug: string
  summary: string
  content: Json
  category: string | null
  category_slugs: string[]
  related_tool_slugs: string[]
  cover_image: string | null
  cover_type: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimated_minutes: number
  audiences: string[]
  tags: string[]
  views: number
  likes: number
  seo_title: string | null
  seo_description: string | null
  status: 'published' | 'draft' | 'pending' | 'rejected'
  created_at: string
  updated_at: string
}

export type PromptRow = {
  id: string
  title: string
  slug: string
  summary: string
  prompt: string
  category: string | null
  category_slugs: string[]
  related_tool_slugs: string[]
  applicable_models: string[]
  task: string | null
  variables: Json
  example_input: string | null
  example_output_summary: string | null
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  views: number
  likes: number
  copies: number
  seo_title: string | null
  seo_description: string | null
  status: 'published' | 'draft' | 'pending' | 'rejected'
  created_at: string
  updated_at: string
}

export type ComparisonRow = {
  id: string
  title: string
  slug: string
  summary: string
  tool_slugs: string[]
  scenario: string | null
  recommendation: string | null
  dimensions: string[]
  quick_advice: Json
  faq: Json
  views: number
  likes: number
  seo_title: string | null
  seo_description: string | null
  status: 'published' | 'draft' | 'pending' | 'rejected'
  created_at: string
  updated_at: string
}

export type RankingRow = {
  id: string
  title: string
  slug: string
  summary: string
  category_slug: string | null
  ranking_type: 'editor' | 'popular' | 'free' | 'new' | 'user-liked'
  ranking_rule: string | null
  weights: Record<string, number>
  seo_title: string | null
  seo_description: string | null
  status: 'published' | 'draft' | 'pending' | 'rejected'
  created_at: string
  updated_at: string
}

export type RankingItemRow = {
  id: string
  ranking_id: string
  tool_id: string
  rank: number
  editor_score: number
  reason: string | null
  created_at: string
}

export type SubmissionRow = {
  id: string
  user_id: string
  type: 'tool' | 'tutorial' | 'prompt' | 'comparison'
  title: string
  url: string | null
  category: string | null
  description: string
  contact: string | null
  payload: Json
  status: 'pending' | 'approved' | 'rejected' | 'needs_edit'
  review_note: string | null
  reviewed_by?: string | null
  reviewed_at?: string | null
  created_at: string
  updated_at: string
}

export type UserFavoriteRow = {
  id: string
  user_id: string
  target_type: 'tool' | 'tutorial' | 'prompt' | 'comparison'
  target_slug: string
  created_at: string
}

export type SponsorSlotRow = {
  id: string
  name: string
  slot_key: string
  placement: string
  title: string | null
  description: string | null
  image_url: string | null
  link_url: string | null
  label: string
  is_active: boolean
  starts_at: string | null
  ends_at: string | null
  created_at: string
  updated_at: string
}
