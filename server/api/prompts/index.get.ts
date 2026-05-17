import { listPrompts } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await listPrompts({
    q: query.q,
    category: query.category,
    model: query.model,
    difficulty: query.difficulty,
    page: query.page,
    limit: query.limit
  })
})
