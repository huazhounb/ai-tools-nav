<script setup lang="ts">
import { BarChart3, Sparkles } from 'lucide-vue-next'
import { comparisons as mockComparisons } from '~~/data/mock-comparisons'
import { mockTools, type MockTool, type ToolScoreKey } from '~~/data/mock-tools'
import { buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const selectedTools = ref<MockTool[]>([])

function mapDatabaseComparison(item: any) {
  return {
    ...item,
    slug: item.slug,
    title: item.title,
    description: item.summary || item.description || '',
    summary: item.summary || item.description || '',
    toolSlugs: item.tool_slugs || [],
    categorySlugs: item.category_slugs || [],
    conclusion: item.recommendation || item.summary || '',
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10'
  }
}

function mapDatabaseTool(item: any) {
  return {
    ...item,
    slug: item.slug,
    name: item.name,
    description: item.description,
    summary: item.description,
    category: item.category || 'AI 工具',
    categorySlug: item.category_slug || '',
    categorySlugs: item.category_slugs || [],
    pricing: item.free_status || 'freemium',
    freeStatus: item.free_status || 'freemium',
    chineseSupport: item.chinese_support || 'good',
    platforms: item.platforms || ['Web'],
    audiences: item.audiences || ['中文用户'],
    audience: item.audiences || ['中文用户'],
    tags: item.tags || [],
    icon: item.icon_url || item.icon || '',
    scores: item.scores || {},
    hasTutorial: Boolean(item.has_tutorial),
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10'
  }
}

let comparisons = mockComparisons
let toolsForCompare = mockTools
try {
  const [comparisonResponse, toolResponse] = await Promise.all([
    $fetch<{ items?: any[] }>('/api/comparisons', { query: { limit: 100 } }),
    $fetch<{ items?: any[] }>('/api/tools', { query: { limit: 100 } })
  ])
  if (comparisonResponse.items?.length) {
    const dbItems = comparisonResponse.items.map(mapDatabaseComparison)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    comparisons = [...dbItems, ...mockComparisons.filter((item) => !dbSlugs.has(item.slug))] as typeof mockComparisons
  }
  if (toolResponse.items?.length) {
    const dbItems = toolResponse.items.map(mapDatabaseTool)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    toolsForCompare = [...dbItems, ...mockTools.filter((item) => !dbSlugs.has(item.slug))] as typeof mockTools
  }
} catch (error) {
  console.warn('[content] compare api failed, fallback to mock data', error)
}

const queryTools = computed(() => {
  const value = route.query.tools
  return typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean).slice(0, 4) : []
})

const dynamicConclusion = computed(() => {
  if (selectedTools.value.length < 2) return []
  const rules: Array<{ key: ToolScoreKey, text: string }> = [
    { key: 'writing', text: '更适合内容创作和文案写作' },
    { key: 'coding', text: '更适合程序员和开发场景' },
    { key: 'costPerformance', text: '适合预算有限用户' },
    { key: 'chinese', text: '更适合中文办公和学习任务' },
    { key: 'easeOfUse', text: '更适合新手快速上手' }
  ]
  return rules.map((rule) => {
    const best = [...selectedTools.value].sort((a, b) => Number(b.scores?.[rule.key] || 0) - Number(a.scores?.[rule.key] || 0))[0]
    return `${best.name} ${rule.text}。`
  })
})

function updateCompare(tools: MockTool[]) {
  selectedTools.value = tools
  router.replace({ query: { ...route.query, tools: tools.map((tool) => tool.slug).join(',') } })
}

useSeoMeta(buildPageSeo({
  title: 'AI 工具对比：自选 2-4 个工具比较价格、中文能力、写作、代码和场景',
  description: '选择 2-4 个 AI 工具，从中文能力、写作、代码、图片、价格、平台、适合人群和性价比等维度快速判断哪个更适合你。',
  path: '/compare'
}, config.public.siteUrl))
useCanonicalLink('/compare', config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="buildItemListJsonLd(comparisons.map((item) => ({
        name: item.title,
        url: createCanonicalUrl(`/compare/${item.slug}`, config.public.siteUrl)
      })))"
    />

    <section class="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <PageContainer>
        <BaseBadge tone="primary">对比中心</BaseBadge>
        <h1 class="mt-5 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">AI 工具对比</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          选择 2-4 个 AI 工具，从中文能力、写作、代码、图片、价格、平台和适合人群等维度快速判断哪个更适合你。
        </p>
      </PageContainer>
    </section>

    <section class="-mt-6 pb-10">
      <PageContainer>
        <ToolCompareSelector :tools="toolsForCompare" :initial-slugs="queryTools" @compare="updateCompare" />
      </PageContainer>
    </section>

    <section v-if="selectedTools.length >= 2" class="pb-12">
      <PageContainer>
        <div class="mb-5 flex items-center gap-2">
          <BarChart3 class="h-6 w-6 text-blue-600" />
          <h2 class="text-2xl font-bold text-slate-950">动态对比结果</h2>
        </div>
        <ComparisonTable :tools="selectedTools" />
        <div class="mt-6 rounded-[18px] border border-blue-100 bg-white p-6 shadow-sm">
          <h3 class="flex items-center gap-2 text-xl font-bold text-slate-950"><Sparkles class="h-5 w-5 text-amber-500" />自动推荐结论</h3>
          <ul class="mt-4 grid gap-3 md:grid-cols-2">
            <li v-for="item in dynamicConclusion" :key="item" class="rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">{{ item }}</li>
          </ul>
        </div>
      </PageContainer>
    </section>

    <section class="pb-12">
      <PageContainer>
        <div class="mb-5">
          <h2 class="text-2xl font-bold text-slate-950">热门固定对比</h2>
          <p class="mt-1 text-sm text-slate-600">适合直接查看常见工具组合的完整分析。</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ComparisonCard v-for="comparison in comparisons" :key="comparison.slug" :comparison="comparison" />
        </div>
      </PageContainer>
    </section>
  </div>
</template>
