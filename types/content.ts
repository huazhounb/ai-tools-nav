import type {
  CategoryRow,
  ComparisonRow,
  PromptRow,
  RankingItemRow,
  RankingRow,
  SponsorSlotRow,
  ToolRow,
  TutorialRow
} from './database'

export type PaginatedResponse<T> = {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export type ApiSuccess<T> = {
  success: true
  data?: T
  item?: T
  items?: T[]
}

export type ToolListQuery = {
  category?: string
  q?: string
  freeStatus?: string
  chineseSupport?: string
  platform?: string
  audience?: string
  limit?: number
  page?: number
}

export type TutorialListQuery = {
  q?: string
  category?: string
  limit?: number
  page?: number
}

export type PromptListQuery = {
  q?: string
  category?: string
  model?: string
  difficulty?: string
  limit?: number
  page?: number
}

export type CategoryWithTools = CategoryRow & {
  tools: ToolRow[]
}

export type ToolDetail = ToolRow & {
  categories?: CategoryRow[]
}

export type RankingToolItem = RankingItemRow & {
  tool: ToolRow
  score: number
}

export type RankingDetail = RankingRow & {
  items: RankingToolItem[]
  rankedTools: RankingToolItem[]
}

export type ContentApi = {
  categories: CategoryRow[]
  tools: PaginatedResponse<ToolRow>
  tool: ToolDetail
  tutorials: PaginatedResponse<TutorialRow>
  tutorial: TutorialRow
  prompts: PaginatedResponse<PromptRow>
  prompt: PromptRow
  comparisons: PaginatedResponse<ComparisonRow>
  comparison: ComparisonRow
  rankings: PaginatedResponse<RankingRow>
  ranking: RankingDetail
  sponsorSlots: SponsorSlotRow[]
}
