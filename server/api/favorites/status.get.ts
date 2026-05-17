import { getFavoriteByUserAndTarget, type FavoriteTargetType } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

const favoriteTypes = new Set(['tool', 'tutorial', 'prompt', 'comparison'])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const query = getQuery(event)
  const type = String(query.type || '')
  const slug = String(query.slug || '').trim()

  if (!favoriteTypes.has(type) || !slug) {
    throw createError({
      statusCode: 400,
      statusMessage: '收藏参数不完整。'
    })
  }

  const favorite = await getFavoriteByUserAndTarget(user.id, type as FavoriteTargetType, slug)

  return {
    success: true,
    favorited: Boolean(favorite)
  }
})
