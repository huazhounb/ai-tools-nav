import { getAdminSubmission } from '../../../utils/supabaseServer'
import { requireAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '缺少投稿 ID。' })
  }

  const submission = await getAdminSubmission(id)
  if (!submission) {
    throw createError({ statusCode: 404, statusMessage: '投稿不存在。' })
  }

  return {
    success: true,
    submission
  }
})
