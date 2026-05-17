import { createSlug, ensureUniqueSlug } from './slug'
import { supabaseRestFetch } from './supabaseServer'

type PublishTargetType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

type PublishResult = {
  success: true
  targetType: PublishTargetType
  targetId: string
  slug: string
}

const targetTables: Record<PublishTargetType, string> = {
  tool: 'tools',
  tutorial: 'tutorials',
  prompt: 'prompts',
  comparison: 'comparisons'
}

function asPayload(value: unknown): Record<string, any> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, any> : {}
}

function toStringArray(value: unknown, fallback: string[] = []) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean)
  if (typeof value === 'string') {
    return value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean)
  }
  return fallback
}

function normalizeVariables(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => {
      if (typeof item === 'string') return { name: item, description: '' }
      return item
    })
  }
  return toStringArray(value).map((name) => ({ name, description: '' }))
}

function categorySlugsFromSubmission(submission: any, payload: Record<string, any>) {
  const explicit = toStringArray(payload.categorySlugs)
  if (explicit.length) return explicit

  const map: Record<string, string> = {
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

  return map[String(submission.category || '').trim()] ? [map[String(submission.category).trim()]] : []
}

function buildToolRow(submission: any, slug: string, payload: Record<string, any>) {
  return {
    name: submission.title,
    slug,
    description: submission.description,
    long_description: payload.longDescription || payload.recommendedReason || submission.description,
    icon_url: payload.iconUrl || null,
    official_url: payload.officialUrl || submission.url || null,
    category: submission.category || null,
    free_status: payload.freeStatus || 'freemium',
    chinese_support: payload.chineseSupport || 'good',
    platforms: toStringArray(payload.platforms, ['Web']),
    audiences: toStringArray(payload.audiences, ['中文用户']),
    tags: toStringArray(payload.tags),
    has_tutorial: false,
    is_featured: false,
    is_sponsored: false,
    editor_score: 0,
    scores: payload.scores || {},
    stats: { views: 0, likes: 0, saves: 0, clicks: 0, comments: 0 },
    seo_title: payload.seoTitle || `${submission.title}是什么？功能、免费情况与使用教程`,
    seo_description: payload.seoDescription || submission.description,
    status: 'published',
    source: 'user-submitted'
  }
}

function buildTutorialRow(submission: any, slug: string, payload: Record<string, any>) {
  return {
    title: submission.title,
    slug,
    summary: submission.description,
    content: payload.content || {
      steps: toStringArray(payload.steps || payload.outline),
      promptBlocks: Array.isArray(payload.promptBlocks) ? payload.promptBlocks : [],
      faq: Array.isArray(payload.faq) ? payload.faq : []
    },
    category: submission.category || null,
    category_slugs: categorySlugsFromSubmission(submission, payload),
    related_tool_slugs: toStringArray(payload.relatedToolSlugs || payload.relatedTools),
    cover_type: 'gradient',
    difficulty: payload.difficulty || 'beginner',
    estimated_minutes: Number(payload.estimatedMinutes || 10),
    audiences: toStringArray(payload.audiences, ['中文用户']),
    tags: toStringArray(payload.tags),
    views: 0,
    likes: 0,
    seo_title: payload.seoTitle || `${submission.title}：新手可复制的 AI 工具教程`,
    seo_description: payload.seoDescription || submission.description,
    status: 'published'
  }
}

function buildPromptRow(submission: any, slug: string, payload: Record<string, any>) {
  return {
    title: submission.title,
    slug,
    summary: submission.description,
    prompt: payload.promptText || payload.prompt || submission.description,
    category: submission.category || null,
    category_slugs: categorySlugsFromSubmission(submission, payload),
    related_tool_slugs: toStringArray(payload.relatedToolSlugs || payload.relatedTools),
    applicable_models: toStringArray(payload.applicableModels, ['ChatGPT', 'DeepSeek']),
    task: payload.task || submission.category || null,
    variables: normalizeVariables(payload.variables),
    example_input: payload.exampleInput || '',
    example_output_summary: payload.exampleOutputSummary || '',
    difficulty: payload.difficulty || 'beginner',
    tags: toStringArray(payload.tags),
    views: 0,
    likes: 0,
    copies: 0,
    seo_title: payload.seoTitle || `${submission.title}：可复制 Prompt 模板`,
    seo_description: payload.seoDescription || submission.description,
    status: 'published'
  }
}

function buildComparisonRow(submission: any, slug: string, payload: Record<string, any>) {
  return {
    title: submission.title,
    slug,
    summary: submission.description,
    tool_slugs: toStringArray(payload.toolSlugs || payload.toolNames),
    scenario: payload.scenario || submission.category || null,
    recommendation: payload.recommendation || submission.description,
    dimensions: toStringArray(payload.dimensions),
    quick_advice: Array.isArray(payload.quickAdvice) ? payload.quickAdvice : [],
    faq: Array.isArray(payload.faq) ? payload.faq : [],
    views: 0,
    likes: 0,
    seo_title: payload.seoTitle || `${submission.title}：AI 工具功能、价格与适合人群对比`,
    seo_description: payload.seoDescription || submission.description,
    status: 'published'
  }
}

export function getFrontPathForPublishedTarget(type?: string | null, slug?: string | null) {
  if (!type || !slug) return ''
  if (type === 'tool') return `/tool/${slug}`
  if (type === 'tutorial') return `/tutorial/${slug}`
  if (type === 'prompt') return `/prompts/${slug}`
  if (type === 'comparison') return `/compare/${slug}`
  return ''
}

export async function publishSubmission(submissionId: string, adminUserId: string): Promise<PublishResult> {
  const rows = await supabaseRestFetch<any[]>(
    `submissions?id=eq.${encodeURIComponent(submissionId)}&select=*`,
    { service: true }
  )
  const submission = rows[0]

  if (!submission) {
    throw createError({ statusCode: 404, statusMessage: '投稿不存在。' })
  }
  if (submission.status !== 'approved') {
    throw createError({ statusCode: 400, statusMessage: '只有已通过审核的投稿才能发布。' })
  }

  const payload = asPayload(submission.payload)
  if (submission.published_target_id) {
    return {
      success: true,
      targetType: submission.published_target_type || submission.type,
      targetId: submission.published_target_id,
      slug: payload.publishedSlug || ''
    }
  }

  if (!targetTables[submission.type as PublishTargetType]) {
    throw createError({ statusCode: 400, statusMessage: '不支持的投稿类型，无法发布到前台。' })
  }

  const targetType = submission.type as PublishTargetType
  const tableName = targetTables[targetType]
  const baseSlug = createSlug(payload.slug || submission.title) || `submission-${String(submission.id).slice(0, 8)}`
  const slug = await ensureUniqueSlug(tableName, baseSlug)
  const row = targetType === 'tool'
    ? buildToolRow(submission, slug, payload)
    : targetType === 'tutorial'
      ? buildTutorialRow(submission, slug, payload)
      : targetType === 'prompt'
        ? buildPromptRow(submission, slug, payload)
        : buildComparisonRow(submission, slug, payload)

  const insertedRows = await supabaseRestFetch<any[]>(tableName, {
    method: 'POST',
    service: true,
    prefer: 'return=representation',
    body: row
  })
  const inserted = insertedRows[0]
  if (!inserted?.id) {
    throw createError({ statusCode: 500, statusMessage: '内容写入正式表失败。' })
  }

  const now = new Date().toISOString()
  await supabaseRestFetch<any[]>(`submissions?id=eq.${encodeURIComponent(submissionId)}`, {
    method: 'PATCH',
    service: true,
    prefer: 'return=representation',
    body: {
      published_target_type: targetType,
      published_target_id: inserted.id,
      published_at: now,
      updated_at: now,
      payload: {
        ...payload,
        publishedSlug: slug,
        publishedBy: adminUserId
      }
    }
  })

  return {
    success: true,
    targetType,
    targetId: inserted.id,
    slug
  }
}
