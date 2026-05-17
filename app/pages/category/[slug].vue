<script setup lang="ts">
import { categories } from '~~/data/categories'
import { comparisons, prompts, tutorials } from '~~/data/siteContent'
import { featuredTools } from '~~/data/tools'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const category = categories.find((item) => item.slug === slug)

function mapDatabaseTool(item: any) {
  return {
    ...item,
    slug: item.slug,
    name: item.name,
    description: item.description,
    summary: item.description,
    category: item.category || category?.name || 'AI 工具',
    categorySlug: category?.slug || '',
    categorySlugs: category ? [category.slug] : [],
    pricing: item.free_status || 'freemium',
    freeStatus: item.free_status || 'freemium',
    chineseSupport: item.chinese_support || 'good',
    platforms: item.platforms || ['Web'],
    platform: (item.platforms || ['Web']).join(' / '),
    audiences: item.audiences || ['中文用户'],
    audience: item.audiences || ['中文用户'],
    tags: item.tags || [],
    icon: item.icon_url || item.icon || '',
    hasTutorial: Boolean(item.has_tutorial),
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10',
    recommendedScore: Number(item.editor_score || 0),
    popularity: Number(item.stats?.views || 0)
  }
}

if (!category) {
  throw createError({ statusCode: 404, statusMessage: '分类不存在' })
}

let allTools = featuredTools
try {
  const response = await $fetch<{ items?: any[] }>('/api/tools', { query: { category: slug, limit: 100 } })
  if (response.items?.length) {
    const dbItems = response.items.map(mapDatabaseTool)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    allTools = [...dbItems, ...featuredTools.filter((item) => !dbSlugs.has(item.slug))] as typeof featuredTools
  }
} catch (error) {
  console.warn('[content] category tools api failed, fallback to mock data', error)
}

const freeFilter = ref<'all' | 'free' | 'freemium' | 'paid'>('all')
const chineseFilter = ref<'all' | 'excellent' | 'good' | 'normal'>('all')
const platformFilter = ref('all')
const audienceFilter = ref('all')
const sortBy = ref<'recommended' | 'latest' | 'free' | 'chinese' | 'popular'>('recommended')

const freeOptions = [
  ['all', '全部'],
  ['free', '免费'],
  ['freemium', '有免费额度'],
  ['paid', '付费']
] as const

const chineseOptions = [
  ['all', '全部'],
  ['excellent', '优秀'],
  ['good', '良好'],
  ['normal', '一般']
] as const

const platformOptions = ['all', 'Web', 'App', 'API', '浏览器插件', '桌面客户端']
const audienceOptions = ['all', '学生', '办公族', '程序员', '设计师', '自媒体', '研究员', '内容创作者']

const currentCategoryTools = computed(() => allTools.filter((tool) => {
  const categorySlugs = tool.categorySlugs || [tool.categorySlug]
  return categorySlugs.includes(category.slug)
}))

const categoryTools = computed(() => {
  return [...currentCategoryTools.value]
    .filter((tool) => freeFilter.value === 'all' || tool.pricing === freeFilter.value || tool.freeStatus === freeFilter.value)
    .filter((tool) => chineseFilter.value === 'all' || tool.chineseSupport === chineseFilter.value)
    .filter((tool) => {
      if (platformFilter.value === 'all') return true
      const platforms = tool.platforms || [tool.platform]
      return platforms.some((platform) => platform.includes(platformFilter.value))
    })
    .filter((tool) => {
      if (audienceFilter.value === 'all') return true
      const audiences = tool.audiences || tool.audience
      return audiences.includes(audienceFilter.value)
    })
    .sort((a, b) => {
      if (sortBy.value === 'latest') return b.updatedAt.localeCompare(a.updatedAt)
      if (sortBy.value === 'free') {
        const score = (tool: typeof a) => tool.pricing === 'free' ? 3 : tool.pricing === 'freemium' ? 2 : 1
        return score(b) - score(a)
      }
      if (sortBy.value === 'chinese') {
        const score = (tool: typeof a) => tool.chineseSupport === 'excellent' ? 3 : tool.chineseSupport === 'good' ? 2 : 1
        return score(b) - score(a)
      }
      if (sortBy.value === 'popular') return (b.popularity || 0) - (a.popularity || 0)
      return (b.recommendedScore || 0) - (a.recommendedScore || 0)
    })
})

const relatedPrompts = computed(() => prompts
  .filter((item) => item.categorySlugs?.includes(category.slug) || category.relatedPrompts?.includes(item.slug))
  .slice(0, category.slug === 'ai-writing' ? 12 : 6))

const relatedTutorials = computed(() => tutorials
  .filter((item) => item.categorySlugs?.includes(category.slug) || category.relatedTutorials?.includes(item.slug))
  .slice(0, category.slug === 'ai-writing' ? 8 : 4))

const relatedComparisons = computed(() => comparisons
  .filter((item) => item.categorySlugs?.includes(category.slug))
  .slice(0, 4))

const relatedCategories = computed(() => {
  const preferred = category.slug === 'ai-writing'
    ? ['ai-chat', 'ai-office', 'ai-research', 'ai-search']
    : ['ai-writing', 'ai-chat', 'ai-office', 'ai-search']
  return preferred.map((item) => categories.find((category) => category.slug === item)).filter(Boolean)
})

const categoryFaq = computed(() => category.slug === 'ai-writing'
  ? [
      { question: 'AI 写作工具哪个适合新手？', answer: '新手可以先从 DeepSeek、豆包、ChatGPT 和 Kimi 开始。它们中文输入门槛低，适合周报、文章大纲、资料总结和改写任务。' },
      { question: '免费 AI 写作工具够用吗？', answer: '够做初稿、标题、大纲和日常总结，但正式发布前仍要人工核对事实、引用、版权和品牌语气。' },
      { question: 'AI 写作工具能写论文吗？', answer: '可以辅助论文大纲、摘要、文献总结和语言润色，但不能代替文献阅读、实验分析和引用核对。' },
      { question: '中文写作用 ChatGPT 还是 DeepSeek？', answer: 'ChatGPT 更通用，DeepSeek 在中文推理、资料整理和低成本试用上更友好。建议用同一任务分别测试，再选主力工具。' },
      { question: '如何避免 AI 写作内容太像机器生成？', answer: '提供真实素材、目标读者和个人观点，让 AI 只做结构和表达辅助，再人工调整案例、细节、语气和段落节奏。' }
    ]
  : [
      { question: `${category.name}工具应该怎么选？`, answer: '优先看任务匹配度、中文支持、免费额度、平台形态和是否有教程，不要只看工具热度。' },
      { question: `${category.name}工具适合新手吗？`, answer: '适合。新手应优先选择中文体验稳定、有免费额度、并且有教程或模板的工具。' },
      { question: '免费工具可以正式商用吗？', answer: '不一定。商用前需要回到官网核对价格、授权、版权和导出限制。' },
      { question: '生成结果可以直接使用吗？', answer: '不建议直接使用。正式发布前需要人工核对事实、语气、版权和敏感信息。' },
      { question: '同类工具要不要同时保留多个？', answer: '建议至少保留一个替代工具，避免额度、访问或功能变化影响工作。' }
    ])

const pageUrl = createCanonicalUrl(`/category/${category.slug}`, config.public.siteUrl)
const pageTitle = category.slug === 'ai-writing' ? 'AI 写作工具推荐' : `${category.name}工具推荐`

function resetFilters() {
  freeFilter.value = 'all'
  chineseFilter.value = 'all'
  platformFilter.value = 'all'
  audienceFilter.value = 'all'
  sortBy.value = 'recommended'
}

function promptContent(prompt: any) {
  return prompt.prompt || prompt.body || prompt.summary || prompt.description
}

function tutorialCard(tutorial: any, index: number) {
  const toolSlug = tutorial.tools?.[0]
  const tool = featuredTools.find((item) => item.slug === toolSlug)
  return {
    title: tutorial.title,
    type: '教程',
    summary: tutorial.description,
    updatedAt: tutorial.updatedAt,
    views: `${2 + index}.1k`,
    href: `/tutorial/${tutorial.slug}`,
    gradient: index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-violet-600' : 'bg-gradient-to-br from-emerald-500 to-blue-500',
    keyword: tool?.name || category.name,
    icon: tool?.icon
  }
}

useSeoMeta(buildPageSeo({
  title: category.seoTitle || `${pageTitle}：免费、中文支持和适合人群筛选`,
  description: category.seoDescription || category.description,
  path: `/category/${category.slug}`
}, config.public.siteUrl))
useCanonicalLink(`/category/${category.slug}`, config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="[
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '工具分类', url: createCanonicalUrl('/category', config.public.siteUrl) },
          { name: category.name, url: pageUrl }
        ]),
        buildItemListJsonLd(currentCategoryTools.map((tool) => ({
          name: tool.name,
          url: createCanonicalUrl(`/tool/${tool.slug}`, config.public.siteUrl)
        }))),
        buildFaqJsonLd(categoryFaq)
      ]"
    />

    <PageContainer class="py-8">
      <nav class="text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/category" class="hover:text-blue-600">工具分类</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-slate-900">{{ category.name }}</span>
      </nav>

      <section class="mt-5 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 shadow-sm">
        <BaseBadge tone="primary">分类页</BaseBadge>
        <h1 class="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl">{{ pageTitle }}</h1>
        <p class="mt-4 max-w-4xl text-base leading-8 text-slate-600">{{ category.intro || category.description }}</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl bg-white/80 p-4">
            <span class="text-sm text-slate-500">工具数量</span>
            <strong class="mt-1 block text-2xl text-slate-950">{{ currentCategoryTools.length }}</strong>
          </div>
          <div class="rounded-2xl bg-white/80 p-4">
            <span class="text-sm text-slate-500">更新时间</span>
            <strong class="mt-1 block text-lg text-slate-950">{{ category.updatedAt || '2026-05-10' }}</strong>
          </div>
          <div class="rounded-2xl bg-white/80 p-4">
            <span class="text-sm text-slate-500">适合人群</span>
            <strong class="mt-1 block text-lg text-slate-950">学生 / 办公族 / 内容创作者</strong>
          </div>
        </div>
      </section>

      <section class="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-2xl font-bold text-slate-950">{{ category.name }}怎么选</h2>
        <div class="mt-4 grid gap-4 text-sm leading-7 text-slate-600 md:grid-cols-2">
          <p>{{ category.body }}</p>
          <p>
            新手建议先从有免费额度、中文体验稳定、教程和提示词完整的工具开始。免费工具适合验证任务流程，但正式发布、商用或论文场景必须回到官网和原始资料核对，避免把 AI 生成内容未经审核直接交付。
          </p>
        </div>
      </section>

      <section class="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label class="grid gap-1 text-sm font-medium text-slate-900">
            免费情况
            <select v-model="freeFilter" class="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <option v-for="[value, label] in freeOptions" :key="value" :value="value">{{ label }}</option>
            </select>
          </label>
          <label class="grid gap-1 text-sm font-medium text-slate-900">
            中文支持
            <select v-model="chineseFilter" class="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <option v-for="[value, label] in chineseOptions" :key="value" :value="value">{{ label }}</option>
            </select>
          </label>
          <label class="grid gap-1 text-sm font-medium text-slate-900">
            平台
            <select v-model="platformFilter" class="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <option v-for="item in platformOptions" :key="item" :value="item">{{ item === 'all' ? '全部' : item }}</option>
            </select>
          </label>
          <label class="grid gap-1 text-sm font-medium text-slate-900">
            人群
            <select v-model="audienceFilter" class="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <option v-for="item in audienceOptions" :key="item" :value="item">{{ item === 'all' ? '全部' : item }}</option>
            </select>
          </label>
          <label class="grid gap-1 text-sm font-medium text-slate-900">
            排序
            <select v-model="sortBy" class="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <option value="recommended">推荐优先</option>
              <option value="latest">最新更新</option>
              <option value="free">免费优先</option>
              <option value="chinese">中文支持优先</option>
              <option value="popular">热门优先</option>
            </select>
          </label>
        </div>
      </section>

      <section class="mt-8">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">{{ category.name }}工具列表</h2>
            <p class="mt-2 text-sm text-slate-600">当前显示 {{ categoryTools.length }} / {{ currentCategoryTools.length }} 个工具。</p>
          </div>
          <button type="button" class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" @click="resetFilters">
            重置筛选
          </button>
        </div>
        <div v-if="categoryTools.length" class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ToolCard v-for="tool in categoryTools" :key="tool.slug" :tool="tool" />
        </div>
        <div v-else class="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h3 class="text-lg font-bold text-slate-950">暂时没有找到符合条件的工具</h3>
          <p class="mt-2 text-sm text-slate-600">可以重置筛选，或试试 AI 写作、AI 对话、AI 办公、AI 搜索等相关分类。</p>
          <button type="button" class="mt-5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700" @click="resetFilters">
            重置筛选
          </button>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-950">{{ category.name }}提示词推荐</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <PromptCard
            v-for="prompt in relatedPrompts"
            :key="prompt.slug"
            :title="prompt.title"
            :scene="prompt.task || prompt.tasks?.[0] || category.name"
            :content="promptContent(prompt)"
            :href="`/prompts/${prompt.slug}`"
            :models="prompt.applicableModels || prompt.models"
            :tags="prompt.tags"
            :summary="prompt.summary || prompt.description"
          />
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-950">{{ category.name }}教程推荐</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TutorialCard
            v-for="(tutorial, index) in relatedTutorials"
            :key="tutorial.slug"
            v-bind="tutorialCard(tutorial, index)"
          />
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-950">相关工具对比</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          <NuxtLink
            v-for="comparison in relatedComparisons"
            :key="comparison.slug"
            :to="`/compare/${comparison.slug}`"
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
          >
            <BaseBadge tone="primary">工具对比</BaseBadge>
            <h3 class="mt-3 text-lg font-bold text-slate-950">{{ comparison.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ comparison.conclusion || comparison.description }}</p>
            <span class="mt-4 inline-flex text-sm font-semibold text-blue-600">查看完整对比</span>
          </NuxtLink>
        </div>
      </section>

      <section class="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-2xl font-bold text-slate-950">FAQ</h2>
        <div class="mt-5 grid gap-3">
          <details v-for="item in categoryFaq" :key="item.question" class="rounded-xl border border-slate-200 p-4">
            <summary class="cursor-pointer font-semibold text-slate-950">{{ item.question }}</summary>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.answer }}</p>
          </details>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-950">相关推荐分类</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-4">
          <NuxtLink
            v-for="item in relatedCategories"
            :key="item!.slug"
            :to="`/category/${item!.slug}`"
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200"
          >
            <h3 class="font-bold text-slate-950">{{ item!.name }}</h3>
            <p class="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{{ item!.description }}</p>
          </NuxtLink>
        </div>
      </section>
    </PageContainer>
  </div>
</template>
