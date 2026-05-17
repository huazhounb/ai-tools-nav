import { requireAdmin } from '../../../../utils/auth'
import { notifySubmissionReviewResult } from '../../../../utils/email'
import { publishSubmission } from '../../../../utils/publishSubmission'
import { getAdminSubmission, reviewSubmission } from '../../../../utils/supabaseServer'

type ReviewBody = {
  status?: 'approved' | 'rejected' | 'needs_edit'
  reviewNote?: string
}

const validStatuses = new Set(['approved', 'rejected', 'needs_edit'])

export default defineEventHandler(async (event) => {
  const { user } = await requireAdmin(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody<ReviewBody>(event)

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '缺少投稿 ID。' })
  }
  if (!body.status || !validStatuses.has(body.status)) {
    throw createError({ statusCode: 400, statusMessage: '审核状态必须是 approved、rejected 或 needs_edit。' })
  }

  const submission = await reviewSubmission(id, {
    status: body.status,
    reviewNote: body.reviewNote
  }, user.id)

  if (!submission) {
    throw createError({ statusCode: 404, statusMessage: '投稿不存在。' })
  }

  let published: { targetType: string, targetId: string, slug: string } | null = null
  if (body.status === 'approved') {
    try {
      published = await publishSubmission(id, user.id)
    } catch (error: any) {
      const message = error?.data?.statusMessage || error?.statusMessage || error?.message || '未知错误'
      return {
        success: false,
        message: `审核已通过，但发布到正式内容失败：${message}`,
        submission: await getAdminSubmission(id),
        published: null
      }
    }
  }

  const detail = await getAdminSubmission(id)

  if (detail?.submitter?.email) {
    await notifySubmissionReviewResult({
      to: detail.submitter.email,
      title: detail.title,
      status: body.status,
      reviewNote: body.reviewNote
    })
  }

  return {
    success: true,
    submission: detail || submission,
    published
  }
})
