import { listTutorials } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await listTutorials({
    q: query.q,
    category: query.category,
    page: query.page,
    limit: query.limit
  })
})
