import { removeFavoriteForUser, type FavoriteTargetType } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

const favoriteTypes = new Set(['tool', 'tutorial', 'prompt', 'comparison'])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody<{ type?: string, slug?: string }>(event).catch(() => ({}))
  const query = getQuery(event)
  const type = String(body.type || query.type || '')
  const slug = String(body.slug || query.slug || '').trim()

  if (!favoriteTypes.has(type) || !slug) {
    throw createError({
      statusCode: 400,
      statusMessage: '收藏参数不完整。'
    })
  }

  await removeFavoriteForUser(user.id, type as FavoriteTargetType, slug)

  return {
    success: true,
    favorited: false
  }
})
