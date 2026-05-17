import { listCategories } from '../../utils/supabaseServer'

export default defineEventHandler(async () => {
  return await listCategories()
})
