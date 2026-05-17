import { addFavoriteForUser, type FavoriteTargetType } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

const favoriteTypes = new Set(['tool', 'tutorial', 'prompt', 'comparison'])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody<{ type?: string, slug?: string }>(event)
  const type = String(body.type || '')
  const slug = String(body.slug || '').trim()

  if (!favoriteTypes.has(type) || !slug) {
    throw createError({
      statusCode: 400,
      statusMessage: '收藏参数不完整。'
    })
  }

  const favorite = await addFavoriteForUser(user.id, type as FavoriteTargetType, slug)

  return {
    success: true,
    favorited: true,
    favorite
  }
})
