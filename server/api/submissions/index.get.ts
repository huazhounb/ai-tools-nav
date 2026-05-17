import { listSubmissionsByUser } from '../../utils/supabaseServer'
import { requireUser } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const submissions = await listSubmissionsByUser(user.id)

  return {
    success: true,
    submissions
  }
})
