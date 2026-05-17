import { supabaseRestFetch } from './supabaseServer'

type TargetType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

const targetTables: Record<TargetType, string> = {
  tool: 'tools',
  tutorial: 'tutorials',
  prompt: 'prompts',
  comparison: 'comparisons'
}

async function getSubmission(submissionId: string) {
  const rows = await supabaseRestFetch<any[]>(
    `submissions?id=eq.${encodeURIComponent(submissionId)}&select=*`,
    { service: true }
  )
  const submission = rows[0]
  if (!submission) {
    throw createError({ statusCode: 404, statusMessage: '投稿不存在。' })
  }
  return submission
}

export async function unpublishSubmissionTarget(submissionId: string, adminUserId: string) {
  const submission = await getSubmission(submissionId)
  const targetType = submission.published_target_type as TargetType | null
  const targetId = submission.published_target_id as string | null

  if (!targetType || !targetId) {
    throw createError({ statusCode: 400, statusMessage: '该投稿还没有发布到前台。' })
  }

  const tableName = targetTables[targetType]
  if (!tableName) {
    throw createError({ statusCode: 400, statusMessage: '发布目标类型不支持下架。' })
  }

  const now = new Date().toISOString()
  try {
    await supabaseRestFetch<any[]>(`${tableName}?id=eq.${encodeURIComponent(targetId)}`, {
      method: 'PATCH',
      service: true,
      prefer: 'return=representation',
      body: {
        status: 'archived',
        updated_at: now
      }
    })
  } catch (error) {
    console.warn('[admin] archive target failed, fallback to draft', error)
    await supabaseRestFetch<any[]>(`${tableName}?id=eq.${encodeURIComponent(targetId)}`, {
      method: 'PATCH',
      service: true,
      prefer: 'return=representation',
      body: {
        status: 'draft',
        updated_at: now
      }
    })
  }

  await supabaseRestFetch<any[]>(`submissions?id=eq.${encodeURIComponent(submissionId)}`, {
    method: 'PATCH',
    service: true,
    prefer: 'return=representation',
    body: {
      unpublished_at: now,
      updated_at: now,
      payload: {
        ...(submission.payload || {}),
        unpublishedBy: adminUserId
      }
    }
  })

  return {
    success: true,
    message: '已下架前台内容',
    targetType,
    targetId
  }
}

export async function deleteSubmissionRecord(submissionId: string) {
  const submission = await getSubmission(submissionId)
  const now = new Date().toISOString()

  try {
    await supabaseRestFetch<any[]>(`submissions?id=eq.${encodeURIComponent(submissionId)}`, {
      method: 'PATCH',
      service: true,
      prefer: 'return=representation',
      body: {
        status: 'deleted',
        deleted_at: now,
        updated_at: now
      }
    })
  } catch (error) {
    console.warn('[admin] soft delete with deleted status failed, fallback to payload marker', error)
    await supabaseRestFetch<any[]>(`submissions?id=eq.${encodeURIComponent(submissionId)}`, {
      method: 'PATCH',
      service: true,
      prefer: 'return=representation',
      body: {
        status: 'rejected',
        review_note: submission.review_note || '管理员已删除该审核记录。',
        updated_at: now,
        payload: {
          ...(submission.payload || {}),
          softDeleted: true,
          deletedAt: now
        }
      }
    })
  }

  return {
    success: true,
    message: '已删除审核记录。如需同时下架前台内容，请使用删除并下架。'
  }
}

export async function deleteSubmissionAndUnpublishTarget(submissionId: string, adminUserId: string) {
  const submission = await getSubmission(submissionId)

  if (submission.published_target_id && !submission.unpublished_at) {
    await unpublishSubmissionTarget(submissionId, adminUserId)
  }

  await deleteSubmissionRecord(submissionId)

  return {
    success: true,
    message: '已下架前台内容并删除审核记录。'
  }
}
