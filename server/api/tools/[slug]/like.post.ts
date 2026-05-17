import { likeTool } from '../../../utils/supabaseServer'
import { requireUser } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少工具 slug。' })
  }

  const result = await likeTool(slug, user.id)
  if (!result) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应工具。' })
  }

  return {
    success: true,
    slug,
    likes: result.likes,
    liked: true
  }
})
