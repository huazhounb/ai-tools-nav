import { createHash } from 'node:crypto'

type SupabaseFetchOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  body?: unknown
  accessToken?: string
  service?: boolean
  prefer?: string
  headers?: Record<string, string>
}

export type SupabaseUser = {
  id: string
  email?: string
  created_at?: string
  last_sign_in_at?: string
  user_metadata?: Record<string, unknown>
}

export type SupabaseProfile = {
  id: string
  email: string | null
  username?: string | null
  name: string | null
  avatar_url: string | null
  role: string
  status?: string
  created_at?: string
  updated_at?: string
}

export type SubmissionInput = {
  type: 'tool' | 'tutorial' | 'prompt' | 'comparison'
  title: string
  url?: string | null
  category?: string | null
  description: string
  contact?: string | null
  payload?: Record<string, unknown>
}

export type FavoriteTargetType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

type PaginationInput = {
  page?: unknown
  limit?: unknown
  pageSize?: unknown
}

type ListContentInput = PaginationInput & Record<string, unknown>

export function isSupabaseConfigured() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NUXT_PUBLIC_SUPABASE_URL || ''
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || ''
  return Boolean(supabaseUrl && anonKey)
}

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NUXT_PUBLIC_SUPABASE_URL || ''
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

  if (!supabaseUrl || !anonKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Supabase 服务端配置缺失，请设置 SUPABASE_URL 和 SUPABASE_ANON_KEY。'
    })
  }

  return {
    supabaseUrl: supabaseUrl.replace(/\/$/, ''),
    anonKey,
    serviceRoleKey
  }
}

function getKey(service = false) {
  const { anonKey, serviceRoleKey } = getSupabaseConfig()
  if (service && !serviceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage: '缺少 SUPABASE_SERVICE_ROLE_KEY，服务端接口无法访问数据库。'
    })
  }
  return service ? serviceRoleKey : anonKey
}

function encodeValue(value: string) {
  return encodeURIComponent(value)
}

function buildIn(values: string[]) {
  return values.map((value) => `"${value.replace(/"/g, '\\"')}"`).join(',')
}

function parseNumber(value: unknown, fallback: number) {
  const numberValue = Number(value)
  return Number.isFinite(numberValue) && numberValue > 0 ? numberValue : fallback
}

export function getPagination(input: PaginationInput = {}) {
  const page = Math.max(1, parseNumber(input.page, 1))
  const pageSize = Math.min(100, Math.max(1, parseNumber(input.limit ?? input.pageSize, 20)))
  return { page, pageSize, start: (page - 1) * pageSize }
}

export function paginate<T>(items: T[], input: PaginationInput = {}) {
  const { page, pageSize, start } = getPagination(input)
  return {
    items: items.slice(start, start + pageSize),
    total: items.length,
    page,
    pageSize
  }
}

export async function supabaseRestFetch<T>(path: string, options: SupabaseFetchOptions = {}) {
  const { supabaseUrl } = getSupabaseConfig()
  const key = getKey(options.service)
  const authorization = options.service ? key : options.accessToken || key

  return await $fetch<T>(`${supabaseUrl}/rest/v1/${path.replace(/^\//, '')}`, {
    method: options.method || 'GET',
    body: options.body,
    headers: {
      apikey: key,
      Authorization: `Bearer ${authorization}`,
      'Content-Type': 'application/json',
      ...(options.prefer ? { Prefer: options.prefer } : {}),
      ...options.headers
    }
  })
}

async function safeRestFetch<T>(path: string, fallback: T) {
  try {
    return await supabaseRestFetch<T>(path, { service: true })
  } catch (error) {
    console.warn(`[supabase] query failed for ${path}`, error)
    return fallback
  }
}

export async function getSupabaseUser(accessToken: string) {
  const { supabaseUrl, anonKey } = getSupabaseConfig()

  try {
    return await $fetch<SupabaseUser>(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${accessToken}`
      }
    })
  } catch {
    throw createError({
      statusCode: 401,
      statusMessage: '登录状态无效或已过期，请重新登录。'
    })
  }
}

export async function listAuthUsers(page = 1, pageSize = 1000) {
  const { supabaseUrl } = getSupabaseConfig()
  const serviceRoleKey = getKey(true)
  const response = await $fetch.raw<{ users?: SupabaseUser[] }>(`${supabaseUrl}/auth/v1/admin/users`, {
    query: { page, per_page: pageSize },
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    }
  })

  const users = response._data?.users || []
  const totalHeader = response.headers.get('x-total-count')
  return {
    users,
    total: totalHeader ? Number(totalHeader) : users.length
  }
}

export async function getProfileByUserId(userId: string) {
  const rows = await supabaseRestFetch<SupabaseProfile[]>(
    `profiles?id=eq.${encodeValue(userId)}&select=id,email,username,name,avatar_url,role,status,created_at,updated_at`,
    { service: true }
  )
  return rows[0] || null
}

export async function listProfilesByIds(userIds: string[]) {
  if (!userIds.length) return []
  const query = `profiles?id=in.(${userIds.map(encodeValue).join(',')})&select=id,email,username,name,avatar_url,role,status,created_at,updated_at`
  return await supabaseRestFetch<SupabaseProfile[]>(query, { service: true })
}

export async function insertSubmission(input: SubmissionInput, user: SupabaseUser) {
  const rows = await supabaseRestFetch<unknown[]>('submissions', {
    method: 'POST',
    service: true,
    prefer: 'return=representation',
    body: {
      user_id: user.id,
      type: input.type,
      title: input.title,
      url: input.url || null,
      category: input.category || null,
      description: input.description,
      contact: input.contact || null,
      payload: input.payload || {},
      status: 'pending'
    }
  })
  return rows[0]
}

export async function listSubmissionsByUser(userId: string) {
  return await supabaseRestFetch<unknown[]>(
    `submissions?user_id=eq.${encodeValue(userId)}&select=*&order=created_at.desc`,
    { service: true }
  )
}

export async function getSubmissionByUser(id: string, userId: string) {
  const rows = await supabaseRestFetch<unknown[]>(
    `submissions?id=eq.${encodeValue(id)}&user_id=eq.${encodeValue(userId)}&select=*`,
    { service: true }
  )
  return rows[0] || null
}

function getFavoriteHref(type: FavoriteTargetType, slug: string) {
  const prefix: Record<FavoriteTargetType, string> = {
    tool: '/tool',
    tutorial: '/tutorial',
    prompt: '/prompts',
    comparison: '/compare'
  }
  return `${prefix[type]}/${slug}`
}

function getFavoriteSummary(type: FavoriteTargetType, item: any) {
  if (type === 'tool') return item.description || item.long_description || ''
  return item.summary || item.description || item.recommendation || ''
}

async function getFavoriteTargets(type: FavoriteTargetType, slugs: string[]) {
  if (!slugs.length) return new Map<string, any>()

  const tableName: Record<FavoriteTargetType, string> = {
    tool: 'tools',
    tutorial: 'tutorials',
    prompt: 'prompts',
    comparison: 'comparisons'
  }

  const rows = await supabaseRestFetch<any[]>(
    `${tableName[type]}?slug=in.(${buildIn([...new Set(slugs)])})&status=eq.published&select=*`,
    { service: true }
  )

  return new Map(rows.map((item) => [item.slug, item]))
}

export async function listFavoritesByUser(userId: string, type?: FavoriteTargetType) {
  const params = new URLSearchParams()
  params.set('user_id', `eq.${userId}`)
  params.set('select', '*')
  params.set('order', 'created_at.desc')
  if (type) params.set('target_type', `eq.${type}`)

  const rows = await supabaseRestFetch<any[]>(`user_favorites?${params.toString()}`, { service: true })
  const grouped = rows.reduce<Record<FavoriteTargetType, string[]>>((acc, item) => {
    const targetType = item.target_type as FavoriteTargetType
    if (!acc[targetType]) acc[targetType] = []
    acc[targetType].push(item.target_slug)
    return acc
  }, { tool: [], tutorial: [], prompt: [], comparison: [] })

  const targetMaps = {
    tool: await getFavoriteTargets('tool', grouped.tool),
    tutorial: await getFavoriteTargets('tutorial', grouped.tutorial),
    prompt: await getFavoriteTargets('prompt', grouped.prompt),
    comparison: await getFavoriteTargets('comparison', grouped.comparison)
  }

  return rows.map((favorite) => {
    const targetType = favorite.target_type as FavoriteTargetType
    const target = targetMaps[targetType].get(favorite.target_slug) || null

    return {
      ...favorite,
      target,
      title: target?.title || target?.name || favorite.target_slug,
      summary: target ? getFavoriteSummary(targetType, target) : '内容可能已下线或被删除。',
      href: getFavoriteHref(targetType, favorite.target_slug)
    }
  })
}

export async function getFavoriteByUserAndTarget(userId: string, type: FavoriteTargetType, slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `user_favorites?user_id=eq.${encodeValue(userId)}&target_type=eq.${encodeValue(type)}&target_slug=eq.${encodeValue(slug)}&select=*&limit=1`,
    { service: true }
  )
  return rows[0] || null
}

export async function addFavoriteForUser(userId: string, type: FavoriteTargetType, slug: string) {
  const existing = await getFavoriteByUserAndTarget(userId, type, slug)
  if (existing) return existing

  const rows = await supabaseRestFetch<any[]>('user_favorites', {
    method: 'POST',
    service: true,
    prefer: 'return=representation',
    body: {
      user_id: userId,
      target_type: type,
      target_slug: slug
    }
  })
  return rows[0] || null
}

export async function removeFavoriteForUser(userId: string, type: FavoriteTargetType, slug: string) {
  await supabaseRestFetch(
    `user_favorites?user_id=eq.${encodeValue(userId)}&target_type=eq.${encodeValue(type)}&target_slug=eq.${encodeValue(slug)}`,
    {
      method: 'DELETE',
      service: true
    }
  )
  return true
}

export async function listAdminSubmissions(filters: { status?: string, type?: string, search?: string, page?: number, pageSize?: number } = {}) {
  const params = new URLSearchParams()
  params.set('select', '*')
  params.set('order', 'created_at.desc')
  if (filters.status && filters.status !== 'all' && filters.status !== 'deleted') params.set('status', `eq.${filters.status}`)
  if (filters.type && filters.type !== 'all') params.set('type', `eq.${filters.type}`)

  const allRows = await supabaseRestFetch<any[]>(`submissions?${params.toString()}`, { service: true })
  const visibleRows = filters.status === 'deleted'
    ? allRows.filter((item) => item.status === 'deleted' || item.deleted_at || item.payload?.softDeleted)
    : filters.status && filters.status !== 'all'
      ? allRows
      : allRows.filter((item) => item.status !== 'deleted' && !item.deleted_at && !item.payload?.softDeleted)
  const keyword = (filters.search || '').trim().toLowerCase()
  const filtered = keyword
    ? visibleRows.filter((item) => [item.title, item.description, item.category, item.contact].filter(Boolean).join(' ').toLowerCase().includes(keyword))
    : visibleRows

  const result = paginate(filtered, { page: filters.page, pageSize: filters.pageSize || 20 })
  const userIds = [...new Set(result.items.map((item: any) => item.user_id).filter(Boolean))]
  const profiles = await listProfilesByIds(userIds)
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]))

  return {
    ...result,
    items: result.items.map((item: any) => ({ ...item, submitter: profileMap.get(item.user_id) || null }))
  }
}

export async function getAdminSubmission(id: string) {
  const rows = await supabaseRestFetch<any[]>(
    `submissions?id=eq.${encodeValue(id)}&select=*`,
    { service: true }
  )
  const submission = rows[0]
  if (!submission) return null
  const profile = submission.user_id ? await getProfileByUserId(submission.user_id) : null
  const reviewer = submission.reviewed_by ? await getProfileByUserId(submission.reviewed_by) : null
  return { ...submission, submitter: profile, reviewer }
}

function createContentSlug(submission: any) {
  const raw = String(submission.payload?.slug || submission.title || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return raw || `submission-${String(submission.id || '').slice(0, 8)}`
}

function toArray(value: unknown) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean)
  if (typeof value === 'string') return value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean)
  return []
}

function categoryToSlug(value?: string | null) {
  const text = String(value || '').trim()
  const known: Record<string, string> = {
    'AI 写作': 'ai-writing',
    'AI 对话': 'ai-chat',
    'AI 绘图': 'ai-image',
    'AI 视频': 'ai-video',
    'AI PPT': 'ai-ppt',
    'AI 办公': 'ai-office',
    'AI 编程': 'ai-code',
    'AI 论文': 'ai-research',
    'AI 论文研究': 'ai-research',
    'AI 搜索': 'ai-search',
    'AI 音频': 'ai-audio',
    'AI 设计': 'ai-design',
    'AI 数据分析': 'ai-data'
  }
  return known[text] || ''
}

async function upsertPublishedContent(table: string, body: Record<string, unknown>) {
  const rows = await supabaseRestFetch<any[]>(`${table}?on_conflict=slug`, {
    method: 'POST',
    service: true,
    prefer: 'resolution=merge-duplicates,return=representation',
    body
  })
  return rows[0] || null
}

export async function publishSubmissionToContent(submission: any) {
  const slug = createContentSlug(submission)
  const payload = submission.payload || {}
  const now = new Date().toISOString()

  if (submission.type === 'tool') {
    const row = await upsertPublishedContent('tools', {
      name: submission.title,
      slug,
      description: submission.description,
      long_description: payload.recommendedReason || submission.description,
      icon_url: payload.iconUrl || null,
      official_url: payload.officialUrl || submission.url || null,
      category: submission.category || null,
      free_status: payload.freeStatus || 'freemium',
      chinese_support: payload.chineseSupport || 'good',
      platforms: toArray(payload.platforms),
      audiences: toArray(payload.audiences),
      tags: toArray(payload.tags),
      has_tutorial: false,
      is_featured: false,
      is_sponsored: false,
      editor_score: 0,
      scores: {},
      stats: { views: 0, likes: 0, saves: 0, clicks: 0, comments: 0 },
      seo_title: `${submission.title} - AI工具箱`,
      seo_description: submission.description,
      status: 'published',
      source: 'submission',
      updated_at: now
    })
    return { targetTable: 'tools', slug, row }
  }

  if (submission.type === 'tutorial') {
    const row = await upsertPublishedContent('tutorials', {
      title: submission.title,
      slug,
      summary: submission.description,
      content: {
        outline: payload.outline || '',
        steps: toArray(payload.outline),
        sourceSubmissionId: submission.id
      },
      category: submission.category || null,
      category_slugs: categoryToSlug(submission.category) ? [categoryToSlug(submission.category)] : [],
      related_tool_slugs: toArray(payload.relatedTools),
      cover_type: 'gradient',
      difficulty: payload.difficulty || 'beginner',
      estimated_minutes: Number(payload.estimatedMinutes || 10),
      audiences: [],
      tags: toArray(payload.tags),
      views: 0,
      likes: 0,
      seo_title: `${submission.title} - AI工具箱教程`,
      seo_description: submission.description,
      status: 'published',
      updated_at: now
    })
    return { targetTable: 'tutorials', slug, row }
  }

  if (submission.type === 'prompt') {
    const row = await upsertPublishedContent('prompts', {
      title: submission.title,
      slug,
      summary: submission.description,
      prompt: payload.promptText || submission.description,
      category: submission.category || null,
      category_slugs: categoryToSlug(submission.category) ? [categoryToSlug(submission.category)] : [],
      related_tool_slugs: toArray(payload.relatedTools),
      applicable_models: toArray(payload.applicableModels),
      task: payload.task || submission.category || null,
      variables: toArray(payload.variables).map((name) => ({ name, description: '' })),
      example_input: payload.exampleInput || null,
      example_output_summary: payload.exampleOutputSummary || null,
      difficulty: payload.difficulty || 'beginner',
      tags: toArray(payload.tags),
      views: 0,
      likes: 0,
      copies: 0,
      seo_title: `${submission.title} - AI提示词`,
      seo_description: submission.description,
      status: 'published',
      updated_at: now
    })
    return { targetTable: 'prompts', slug, row }
  }

  if (submission.type === 'comparison') {
    const row = await upsertPublishedContent('comparisons', {
      title: submission.title,
      slug,
      summary: submission.description,
      tool_slugs: toArray(payload.toolNames),
      scenario: payload.scenario || submission.category || null,
      recommendation: payload.recommendation || submission.description,
      dimensions: toArray(payload.dimensions),
      quick_advice: [],
      faq: [],
      views: 0,
      likes: 0,
      seo_title: `${submission.title} - AI工具对比`,
      seo_description: submission.description,
      status: 'published',
      updated_at: now
    })
    return { targetTable: 'comparisons', slug, row }
  }

  return null
}

export async function reviewSubmission(id: string, input: { status: 'approved' | 'rejected' | 'needs_edit', reviewNote?: string }, reviewerId: string) {
  const rows = await supabaseRestFetch<any[]>(`submissions?id=eq.${encodeValue(id)}`, {
    method: 'PATCH',
    service: true,
    prefer: 'return=representation',
    body: {
      status: input.status,
      review_note: input.reviewNote || null,
      reviewed_by: reviewerId,
      reviewed_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  })
  return rows[0] || null
}

export async function getAdminStats() {
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()

  let usersTotal = 0
  let usersToday = 0
  try {
    const { users, total } = await listAuthUsers(1, 1000)
    usersTotal = total
    usersToday = users.filter((user) => user.created_at && user.created_at >= todayStart).length
  } catch (error) {
    console.warn('[admin] failed to list auth users', error)
  }

  const submissions = await safeRestFetch<any[]>('submissions?select=id,status,created_at', [])
  const likes = await safeRestFetch<any[]>('tool_likes?select=id', [])

  return {
    usersTotal,
    usersToday,
    submissionsTotal: submissions.length,
    submissionsPending: submissions.filter((item) => item.status === 'pending').length,
    submissionsApproved: submissions.filter((item) => item.status === 'approved').length,
    submissionsRejected: submissions.filter((item) => item.status === 'rejected').length,
    toolLikesTotal: likes.length,
    submissionsToday: submissions.filter((item) => item.created_at && item.created_at >= todayStart).length
  }
}

export async function listAdminUsers(input: { page?: number, pageSize?: number, search?: string, role?: string, status?: string }) {
  const { page, pageSize, start } = getPagination(input)
  const { users } = await listAuthUsers(1, 1000)
  const profiles = await listProfilesByIds(users.map((user) => user.id))
  const profileMap = new Map(profiles.map((profile) => [profile.id, profile]))
  const submissionRows = await safeRestFetch<any[]>('submissions?select=user_id', [])
  const submissionCount = new Map<string, number>()
  submissionRows.forEach((item) => {
    if (item.user_id) submissionCount.set(item.user_id, (submissionCount.get(item.user_id) || 0) + 1)
  })

  const keyword = (input.search || '').trim().toLowerCase()
  const merged = users.map((user) => {
    const profile = profileMap.get(user.id)
    return {
      id: user.id,
      email: user.email || profile?.email || '',
      name: profile?.name || String(user.user_metadata?.full_name || user.user_metadata?.name || ''),
      avatar_url: profile?.avatar_url || String(user.user_metadata?.avatar_url || ''),
      role: profile?.role || 'user',
      status: profile?.status || 'active',
      created_at: user.created_at || profile?.created_at || '',
      last_sign_in_at: user.last_sign_in_at || '',
      submissionsCount: submissionCount.get(user.id) || 0
    }
  }).filter((item) => {
    const matchSearch = !keyword || [item.email, item.name].join(' ').toLowerCase().includes(keyword)
    const matchRole = !input.role || input.role === 'all' || item.role === input.role
    const matchStatus = !input.status || input.status === 'all' || item.status === input.status
    return matchSearch && matchRole && matchStatus
  })

  return {
    items: merged.slice(start, start + pageSize),
    total: merged.length,
    page,
    pageSize
  }
}

export async function listCategories() {
  return await supabaseRestFetch<any[]>('categories?select=*&order=sort_order.asc&order=name.asc', { service: true })
}

export async function getCategoryBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `categories?slug=eq.${encodeValue(slug)}&select=*`,
    { service: true }
  )
  return rows[0] || null
}

export async function listTools(input: ListContentInput = {}) {
  const tools = await supabaseRestFetch<any[]>('tools?status=eq.published&select=*&order=editor_score.desc&order=updated_at.desc', { service: true })
  let filtered = tools

  if (input.category) {
    const category = await getCategoryBySlug(String(input.category))
    if (!category) return paginate([], input)
    const rows = await supabaseRestFetch<any[]>(
      `tool_categories?category_id=eq.${encodeValue(category.id)}&select=tool_id`,
      { service: true }
    )
    const ids = new Set(rows.map((row) => row.tool_id))
    filtered = filtered.filter((tool) => {
      const categoryText = String(tool.category || '').trim()
      return ids.has(tool.id) || categoryText === category.slug || categoryText === category.name
    })
  }

  const keyword = String(input.q || '').trim().toLowerCase()
  if (keyword) {
    filtered = filtered.filter((tool) => [
      tool.name,
      tool.description,
      tool.long_description,
      tool.category,
      ...(tool.tags || []),
      ...(tool.audiences || [])
    ].filter(Boolean).join(' ').toLowerCase().includes(keyword))
  }

  if (input.freeStatus) filtered = filtered.filter((tool) => tool.free_status === input.freeStatus)
  if (input.chineseSupport) filtered = filtered.filter((tool) => tool.chinese_support === input.chineseSupport)
  if (input.platform) filtered = filtered.filter((tool) => (tool.platforms || []).includes(input.platform))
  if (input.audience) filtered = filtered.filter((tool) => (tool.audiences || []).includes(input.audience))

  return paginate(filtered, input)
}

export async function getToolBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `tools?slug=eq.${encodeValue(slug)}&status=eq.published&select=*`,
    { service: true }
  )
  return rows[0] || null
}

export async function getToolCategories(toolId: string) {
  return await supabaseRestFetch<any[]>(
    `tool_categories?tool_id=eq.${encodeValue(toolId)}&select=categories(*)`,
    { service: true }
  )
}

export async function listTutorials(input: ListContentInput = {}) {
  const rows = await supabaseRestFetch<any[]>('tutorials?status=eq.published&select=*&order=updated_at.desc', { service: true })
  const keyword = String(input.q || '').trim().toLowerCase()
  let filtered = rows
  if (input.category) filtered = filtered.filter((item) => (item.category_slugs || []).includes(input.category))
  if (keyword) {
    filtered = filtered.filter((item) => [
      item.title,
      item.summary,
      item.category,
      ...(item.tags || []),
      ...(item.related_tool_slugs || [])
    ].filter(Boolean).join(' ').toLowerCase().includes(keyword))
  }
  return paginate(filtered, input)
}

export async function getTutorialBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `tutorials?slug=eq.${encodeValue(slug)}&status=eq.published&select=*`,
    { service: true }
  )
  return rows[0] || null
}

export async function listPrompts(input: ListContentInput = {}) {
  const rows = await supabaseRestFetch<any[]>('prompts?status=eq.published&select=*&order=updated_at.desc', { service: true })
  const keyword = String(input.q || '').trim().toLowerCase()
  let filtered = rows
  if (input.category) filtered = filtered.filter((item) => (item.category_slugs || []).includes(input.category))
  if (input.model) filtered = filtered.filter((item) => (item.applicable_models || []).includes(input.model))
  if (input.difficulty) filtered = filtered.filter((item) => item.difficulty === input.difficulty)
  if (keyword) {
    filtered = filtered.filter((item) => [
      item.title,
      item.summary,
      item.prompt,
      item.task,
      ...(item.tags || []),
      ...(item.applicable_models || [])
    ].filter(Boolean).join(' ').toLowerCase().includes(keyword))
  }
  return paginate(filtered, input)
}

export async function getPromptBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `prompts?slug=eq.${encodeValue(slug)}&status=eq.published&select=*`,
    { service: true }
  )
  return rows[0] || null
}

export async function incrementPromptCopy(slug: string) {
  const prompt = await getPromptBySlug(slug)
  if (!prompt) return null
  const rows = await supabaseRestFetch<any[]>(`prompts?id=eq.${encodeValue(prompt.id)}`, {
    method: 'PATCH',
    service: true,
    prefer: 'return=representation',
    body: { copies: Number(prompt.copies || 0) + 1 }
  })
  return rows[0] || null
}

export async function listComparisons(input: ListContentInput = {}) {
  const rows = await supabaseRestFetch<any[]>('comparisons?status=eq.published&select=*&order=updated_at.desc', { service: true })
  const keyword = String(input.q || '').trim().toLowerCase()
  const filtered = keyword
    ? rows.filter((item) => [item.title, item.summary, item.scenario, item.recommendation, ...(item.tool_slugs || [])].filter(Boolean).join(' ').toLowerCase().includes(keyword))
    : rows
  return paginate(filtered, input)
}

export async function getComparisonBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `comparisons?slug=eq.${encodeValue(slug)}&status=eq.published&select=*`,
    { service: true }
  )
  return rows[0] || null
}

export async function listRankings(input: ListContentInput = {}) {
  const rows = await supabaseRestFetch<any[]>('rankings?status=eq.published&select=*&order=updated_at.desc', { service: true })
  return paginate(rows, input)
}

function calculateFreshness(createdAt?: string) {
  if (!createdAt) return 0
  const days = Math.max(0, (Date.now() - new Date(createdAt).getTime()) / 86400000)
  return Math.max(0, 100 - days) / 100
}

export function calculateDatabaseRankingScore(item: any, tool: any, weights: Record<string, number> = {}) {
  const stats = tool?.stats || {}
  const editorWeight = weights.editorScore ?? weights.editor_score ?? 0.5
  const likesWeight = weights.likes ?? 0.25
  const viewsWeight = weights.views ?? 0.1
  const clicksWeight = weights.clicks ?? 0.1
  const freshnessWeight = weights.freshnessScore ?? weights.freshness_score ?? 0.05
  return (
    Number(item.editor_score || tool?.editor_score || 0) * editorWeight
    + Number(stats.likes || 0) * likesWeight
    + Number(stats.views || 0) * viewsWeight
    + Number(stats.clicks || 0) * clicksWeight
    + calculateFreshness(tool?.updated_at) * freshnessWeight
  )
}

export async function getRankingBySlug(slug: string) {
  const rows = await supabaseRestFetch<any[]>(
    `rankings?slug=eq.${encodeValue(slug)}&status=eq.published&select=*`,
    { service: true }
  )
  const ranking = rows[0]
  if (!ranking) return null

  const items = await supabaseRestFetch<any[]>(
    `ranking_items?ranking_id=eq.${encodeValue(ranking.id)}&select=*&order=rank.asc`,
    { service: true }
  )
  const toolIds = items.map((item) => item.tool_id).filter(Boolean)
  const tools = toolIds.length
    ? await supabaseRestFetch<any[]>(`tools?id=in.(${buildIn(toolIds)})&select=*`, { service: true })
    : []
  const toolMap = new Map(tools.map((tool) => [tool.id, tool]))
  const rankedTools = items.map((item) => {
    const tool = toolMap.get(item.tool_id)
    return {
      ...item,
      tool,
      score: calculateDatabaseRankingScore(item, tool, ranking.weights || {})
    }
  }).filter((item) => item.tool).sort((a, b) => b.score - a.score).map((item, index) => ({ ...item, rank: index + 1 }))

  return {
    ...ranking,
    items: rankedTools,
    rankedTools
  }
}

export async function countToolLikes(toolId: string) {
  const rows = await supabaseRestFetch<any[]>(
    `tool_likes?tool_id=eq.${encodeValue(toolId)}&select=id`,
    { service: true }
  )
  return rows.length
}

export async function likeTool(slug: string, userId: string) {
  const tool = await getToolBySlug(slug)
  if (!tool) return null
  try {
    await supabaseRestFetch('tool_likes', {
      method: 'POST',
      service: true,
      body: { user_id: userId, tool_id: tool.id, tool_slug: slug }
    })
  } catch (error: any) {
    const text = String(error?.message || error?.data?.message || '')
    if (!text.includes('duplicate') && !text.includes('23505')) throw error
  }
  const likes = await countToolLikes(tool.id)
  const stats = { ...(tool.stats || {}), likes }
  await supabaseRestFetch(`tools?id=eq.${encodeValue(tool.id)}`, {
    method: 'PATCH',
    service: true,
    body: { stats }
  })
  return { tool, likes }
}

export function hashIp(value: string) {
  if (!value) return null
  return createHash('sha256').update(value).digest('hex')
}

export async function recordToolView(slug: string, input: { userId?: string | null, anonymousId?: string | null, ip?: string | null }) {
  const tool = await getToolBySlug(slug)
  if (!tool) return null
  await supabaseRestFetch('tool_views', {
    method: 'POST',
    service: true,
    body: {
      tool_id: tool.id,
      tool_slug: slug,
      user_id: input.userId || null,
      anonymous_id: input.anonymousId || null,
      ip_hash: hashIp(input.ip || '')
    }
  })
  const stats = { ...(tool.stats || {}), views: Number(tool.stats?.views || 0) + 1 }
  await supabaseRestFetch(`tools?id=eq.${encodeValue(tool.id)}`, {
    method: 'PATCH',
    service: true,
    body: { stats }
  })
  return { tool, views: stats.views }
}

export async function recordToolClick(slug: string, input: { userId?: string | null, anonymousId?: string | null }) {
  const tool = await getToolBySlug(slug)
  if (!tool) return null
  await supabaseRestFetch('tool_clicks', {
    method: 'POST',
    service: true,
    body: {
      tool_id: tool.id,
      tool_slug: slug,
      user_id: input.userId || null,
      anonymous_id: input.anonymousId || null
    }
  })
  const stats = { ...(tool.stats || {}), clicks: Number(tool.stats?.clicks || 0) + 1 }
  await supabaseRestFetch(`tools?id=eq.${encodeValue(tool.id)}`, {
    method: 'PATCH',
    service: true,
    body: { stats }
  })
  return { tool, clicks: stats.clicks }
}
