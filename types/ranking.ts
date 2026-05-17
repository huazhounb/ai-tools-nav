import type { MockRanking } from '~~/data/mock-rankings'
import type { MockTool } from '~~/data/mock-tools'

export interface RankingWeights {
  editorScore: number
  likes: number
  views: number
  clicks: number
  freshnessScore: number
}

export interface RankedToolItem {
  rank: number
  reason: string
  score: number
  tool: MockTool
}

export interface RankingDetail extends MockRanking {
  rankedTools: RankedToolItem[]
}

// Future database tables:
// tools, rankings, ranking_items, tool_likes, tool_views, users.
// tool_likes suggested fields:
// id, tool_id, user_id nullable, anonymous_id, ip_hash, created_at.

