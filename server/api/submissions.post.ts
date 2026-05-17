import { requireUser } from '../utils/auth'
import { notifySubmissionReceived } from '../utils/email'
import { insertSubmission } from '../utils/supabaseServer'

type SubmissionType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

type SubmissionRequestBody = {
  type?: SubmissionType
  title?: string
  url?: string | null
  category?: string | null
  description?: string
  contact?: string | null
  payload?: Record<string, unknown>
}

const validTypes = new Set(['tool', 'tutorial', 'prompt', 'comparison'])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody<SubmissionRequestBody>(event)

  if (!body.type || !validTypes.has(body.type)) {
    throw createError({
      statusCode: 400,
      statusMessage: '投稿类型必须是 tool、tutorial、prompt 或 comparison。'
    })
  }

  if (!body.title?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: '标题不能为空。'
    })
  }

  if (!body.description?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: '简介不能为空。'
    })
  }

  const submission = await insertSubmission({
    type: body.type,
    title: body.title.trim(),
    url: body.url?.trim() || null,
    category: body.category?.trim() || null,
    description: body.description.trim(),
    contact: body.contact?.trim() || null,
    payload: body.payload || {}
  }, user)

  await notifySubmissionReceived({
    title: body.title.trim(),
    type: body.type,
    submitterEmail: user.email
  })

  return {
    success: true,
    message: '提交成功，内容将进入审核队列。',
    submission
  }
})
