import { getRankingBySlug } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少榜单 slug。' })
  }

  const ranking = await getRankingBySlug(slug)
  if (!ranking) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应榜单。' })
  }

  return ranking
})
