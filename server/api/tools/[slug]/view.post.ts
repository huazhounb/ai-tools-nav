import { getCurrentUser } from '../../../utils/auth'
import { recordToolView } from '../../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少工具 slug。' })
  }

  const body = await readBody<{ anonymousId?: string }>(event).catch(() => ({}))
  const user = await getCurrentUser(event).catch(() => null)
  const ip = getHeader(event, 'x-forwarded-for') || getHeader(event, 'x-real-ip') || ''
  const result = await recordToolView(slug, {
    userId: user?.id || null,
    anonymousId: body?.anonymousId || getHeader(event, 'x-anonymous-id') || null,
    ip
  })

  if (!result) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应工具。' })
  }

  return { success: true, slug, views: result.views }
})
