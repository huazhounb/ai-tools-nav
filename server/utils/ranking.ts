import { rankings } from '~~/data/mock-rankings'
import { mockTools } from '~~/data/mock-tools'
import { getExtraLikes } from './likes-store'

function freshnessScore(updatedAt: string) {
  const days = Math.max(0, (Date.now() - new Date(updatedAt).getTime()) / 86400000)
  return Math.max(0, 100 - days)
}

export function scoreTool(tool: any, weights: any) {
  const likes = tool.stats.likes + getExtraLikes(tool.slug)
  return (
    tool.editorScore * weights.editorScore
    + likes * weights.likes * 0.05
    + tool.stats.views * weights.views * 0.002
    + tool.stats.clicks * weights.clicks * 0.003
    + freshnessScore(tool.updatedAt) * weights.freshnessScore
  )
}

export function getRankingList() {
  return rankings
}

export function getRankingDetail(slug: string) {
  const ranking = rankings.find((item) => item.slug === slug)
  if (!ranking) return null

  const rankedTools = ranking.tools
    .map((item) => {
      const tool = mockTools.find((toolItem) => toolItem.slug === item.slug)
      if (!tool) return null
      const extraLikes = getExtraLikes(tool.slug)
      return {
        rank: item.rank,
        reason: item.reason,
        score: scoreTool(tool, ranking.weights),
        tool: {
          ...tool,
          stats: {
            ...tool.stats,
            likes: tool.stats.likes + extraLikes
          }
        }
      }
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.score - a.score)
    .map((item: any, index) => ({ ...item, rank: index + 1 }))

  return {
    ...ranking,
    rankedTools
  }
}

