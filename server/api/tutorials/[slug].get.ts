import { getTutorialBySlug } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少教程 slug。' })
  }

  const tutorial = await getTutorialBySlug(slug)
  if (!tutorial) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应教程。' })
  }

  return tutorial
})
