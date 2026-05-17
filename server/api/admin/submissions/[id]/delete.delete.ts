import { deleteSubmissionRecord } from '../../../../utils/adminContentActions'
import { requireAdmin } from '../../../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '缺少投稿 ID。' })
  }

  return await deleteSubmissionRecord(id)
})
