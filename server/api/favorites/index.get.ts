import { listFavoritesByUser, type FavoriteTargetType } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

const favoriteTypes = new Set(['tool', 'tutorial', 'prompt', 'comparison'])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const query = getQuery(event)
  const type = String(query.type || '')

  if (type && !favoriteTypes.has(type)) {
    throw createError({
      statusCode: 400,
      statusMessage: '收藏类型不正确。'
    })
  }

  const favorites = await listFavoritesByUser(user.id, type ? type as FavoriteTargetType : undefined)

  return {
    success: true,
    favorites
  }
})
