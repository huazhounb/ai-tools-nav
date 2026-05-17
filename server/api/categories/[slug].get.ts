import { getCategoryBySlug, listTools } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少分类 slug。' })
  }

  const category = await getCategoryBySlug(slug)
  if (!category) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应分类。' })
  }

  const tools = await listTools({ category: slug, page: getQuery(event).page, limit: getQuery(event).limit || 50 })
  return { ...category, tools: tools.items, totalTools: tools.total }
})
