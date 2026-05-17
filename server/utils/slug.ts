import { supabaseRestFetch } from './supabaseServer'

const allowedTables = new Set(['tools', 'tutorials', 'prompts', 'comparisons'])

export function createSlug(input: string) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function ensureUniqueSlug(tableName: string, baseSlug: string) {
  if (!allowedTables.has(tableName)) {
    throw createError({ statusCode: 400, statusMessage: '不支持的发布目标表。' })
  }

  const cleanBase = createSlug(baseSlug) || `submission-${Date.now().toString(36)}`

  for (let index = 0; index < 100; index += 1) {
    const candidate = index === 0 ? cleanBase : `${cleanBase}-${index + 1}`
    const rows = await supabaseRestFetch<Array<{ id: string }>>(
      `${tableName}?slug=eq.${encodeURIComponent(candidate)}&select=id&limit=1`,
      { service: true }
    )

    if (!rows.length) return candidate
  }

  return `${cleanBase}-${Date.now().toString(36)}`
}
