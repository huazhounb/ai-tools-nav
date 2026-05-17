import { listAdminUsers } from '../../utils/supabaseServer'
import { requireAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const query = getQuery(event)

  return await listAdminUsers({
    page: Number(query.page || 1),
    pageSize: Number(query.pageSize || 20),
    search: typeof query.search === 'string' ? query.search : '',
    role: typeof query.role === 'string' ? query.role : 'all',
    status: typeof query.status === 'string' ? query.status : 'all'
  })
})
