import { requireAdmin } from '../../../utils/auth'
import { publishSubmission } from '../../../utils/publishSubmission'
import { supabaseRestFetch } from '../../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const { user } = await requireAdmin(event)
  const rows = await supabaseRestFetch<Array<{ id: string, title: string, type: string }>>(
    'submissions?status=eq.approved&published_target_id=is.null&select=id,title,type&order=created_at.asc',
    { service: true }
  )

  const failures: Array<{ id: string, title: string, reason: string }> = []
  let publishedCount = 0

  for (const item of rows) {
    try {
      await publishSubmission(item.id, user.id)
      publishedCount += 1
    } catch (error: any) {
      failures.push({
        id: item.id,
        title: item.title,
        reason: error?.data?.statusMessage || error?.statusMessage || error?.message || '发布失败'
      })
    }
  }

  return {
    success: true,
    total: rows.length,
    publishedCount,
    failedCount: failures.length,
    failures
  }
})
