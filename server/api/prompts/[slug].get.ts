import { getPromptBySlug } from '../../utils/supabaseServer'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: '缺少提示词 slug。' })
  }

  const prompt = await getPromptBySlug(slug)
  if (!prompt) {
    throw createError({ statusCode: 404, statusMessage: '未找到对应提示词。' })
  }

  return prompt
})
