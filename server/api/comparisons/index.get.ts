import { listComparisons } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  return await listComparisons(getQuery(event))
})
