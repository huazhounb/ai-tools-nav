import { mockCategories } from '~~/data/mock-categories'
import { mockTools } from '~~/data/mock-tools'
import { tutorials } from '~~/data/mock-tutorials'
import { prompts } from '~~/data/mock-prompts'
import { comparisons } from '~~/data/mock-comparisons'
import { rankings } from '~~/data/mock-rankings'

type Query = Record<string, string | number | boolean | undefined | null>

async function apiOrFallback<T>(url: string, fallback: T, query?: Query): Promise<T> {
  try {
    return await $fetch<T>(url, { query })
  } catch (error) {
    console.warn(`[content-api] ${url} 请求失败，已回退到 mock 数据。`, error)
    return fallback
  }
}

function paginateFallback<T>(items: T[], query: Query = {}) {
  const page = Math.max(1, Number(query.page || 1))
  const pageSize = Math.min(100, Math.max(1, Number(query.limit || query.pageSize || items.length || 20)))
  const start = (page - 1) * pageSize
  return {
    items: items.slice(start, start + pageSize),
    total: items.length,
    page,
    pageSize
  }
}

export function useContentApi() {
  return {
    getCategories() {
      return apiOrFallback('/api/categories', mockCategories)
    },
    getCategory(slug: string) {
      const category = mockCategories.find((item: any) => item.slug === slug) || null
      const tools = mockTools.filter((tool: any) => tool.categorySlugs?.includes(slug))
      return apiOrFallback(`/api/categories/${slug}`, category ? { ...category, tools, totalTools: tools.length } : null)
    },
    getTools(query: Query = {}) {
      let items = [...mockTools]
      if (query.category) items = items.filter((tool: any) => tool.categorySlugs?.includes(query.category))
      const keyword = String(query.q || '').trim().toLowerCase()
      if (keyword) {
        items = items.filter((tool: any) => [tool.name, tool.description, tool.category, ...(tool.tags || [])].join(' ').toLowerCase().includes(keyword))
      }
      return apiOrFallback('/api/tools', paginateFallback(items, query), query)
    },
    getTool(slug: string) {
      return apiOrFallback(`/api/tools/${slug}`, mockTools.find((item) => item.slug === slug) || null)
    },
    getTutorials(query: Query = {}) {
      let items = [...tutorials]
      if (query.category) items = items.filter((item: any) => item.categorySlugs?.includes(query.category))
      return apiOrFallback('/api/tutorials', paginateFallback(items, query), query)
    },
    getTutorial(slug: string) {
      return apiOrFallback(`/api/tutorials/${slug}`, tutorials.find((item) => item.slug === slug) || null)
    },
    getPrompts(query: Query = {}) {
      let items = [...prompts]
      if (query.category) items = items.filter((item: any) => item.categorySlugs?.includes(query.category))
      if (query.model) items = items.filter((item: any) => item.applicableModels?.includes(query.model) || item.models?.includes(query.model))
      if (query.difficulty) items = items.filter((item: any) => item.difficulty === query.difficulty)
      return apiOrFallback('/api/prompts', paginateFallback(items, query), query)
    },
    getPrompt(slug: string) {
      return apiOrFallback(`/api/prompts/${slug}`, prompts.find((item) => item.slug === slug) || null)
    },
    getComparisons(query: Query = {}) {
      return apiOrFallback('/api/comparisons', paginateFallback(comparisons, query), query)
    },
    getComparison(slug: string) {
      return apiOrFallback(`/api/comparisons/${slug}`, comparisons.find((item) => item.slug === slug) || null)
    },
    getRankings(query: Query = {}) {
      return apiOrFallback('/api/rankings', paginateFallback(rankings, query), query)
    },
    getRanking(slug: string) {
      return apiOrFallback(`/api/rankings/${slug}`, rankings.find((item) => item.slug === slug) || null)
    }
  }
}
