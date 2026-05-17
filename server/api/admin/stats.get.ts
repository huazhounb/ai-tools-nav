import { getAdminStats } from '../../utils/supabaseServer'
import { requireAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  return await getAdminStats()
})
