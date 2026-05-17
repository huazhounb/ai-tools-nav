import { listRankings } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  return await listRankings(getQuery(event))
})
