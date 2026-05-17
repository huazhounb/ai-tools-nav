import { getToolBySlug, getToolCategories } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少工具 slug。' })
  }

  const tool = await getToolBySlug(slug)
  if (!tool) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应工具。' })
  }

  const categoryRows = await getToolCategories(tool.id)
  return {
    ...tool,
    categories: categoryRows.map((row: any) => row.categories).filter(Boolean)
  }
})
