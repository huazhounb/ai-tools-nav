import { listTools } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await listTools({
    category: query.category,
    q: query.q,
    freeStatus: query.freeStatus,
    chineseSupport: query.chineseSupport,
    platform: query.platform,
    audience: query.audience,
    page: query.page,
    limit: query.limit
  })
})
