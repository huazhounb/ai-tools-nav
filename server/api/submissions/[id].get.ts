import { getSubmissionByUser } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '缺少投稿 ID。' })
  }

  const submission = await getSubmissionByUser(id, user.id)
  if (!submission) {
    throw createError({ statusCode: 404, statusMessage: '投稿不存在。' })
  }

  return {
    success: true,
    submission
  }
})
