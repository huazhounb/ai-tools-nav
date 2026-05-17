import { listAdminSubmissions } from '../../utils/supabaseServer'
import { requireAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const query = getQuery(event)
  const result = await listAdminSubmissions({
    status: typeof query.status === 'string' ? query.status : undefined,
    type: typeof query.type === 'string' ? query.type : undefined,
    search: typeof query.search === 'string' ? query.search : '',
    page: Number(query.page || 1),
    pageSize: Number(query.pageSize || 20)
  })

  return {
    success: true,
    submissions: result.items,
    ...result
  }
})
