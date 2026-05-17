import { getComparisonBySlug } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少对比 slug。' })
  }

  const comparison = await getComparisonBySlug(slug)
  if (!comparison) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应对比。' })
  }

  return comparison
})
