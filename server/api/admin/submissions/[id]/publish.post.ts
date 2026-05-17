import { requireAdmin } from '../../../../utils/auth'
import { publishSubmission } from '../../../../utils/publishSubmission'

export default defineEventHandler(async (event) => {
  const { user } = await requireAdmin(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '缺少投稿 ID。' })
  }

  const published = await publishSubmission(id, user.id)

  return {
    success: true,
    message: '已发布到前台。',
    published
  }
})
