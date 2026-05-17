<script setup lang="ts">
import { Copy, Search, TrendingUp } from 'lucide-vue-next'
import { prompts as mockPrompts } from '~~/data/mock-prompts'
import { buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()
const searchQuery = ref('')

function mapDatabasePrompt(item: any) {
  return {
    ...item,
    slug: item.slug,
    title: item.title,
    description: item.summary || item.description || '',
    summary: item.summary || item.description || '',
    body: item.prompt || '',
    category: item.category || '写作',
    categorySlugs: item.category_slugs || [],
    relatedTools: item.related_tool_slugs || [],
    models: item.applicable_models || [],
    task: item.task || item.category || '提示词',
    variables: Array.isArray(item.variables) ? item.variables : [],
    tags: item.tags || [],
    difficulty: item.difficulty || 'beginner',
    type: item.type || item.task || '生成',
    copyCount: Number(item.copies || 0),
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10'
  }
}

let prompts = mockPrompts
try {
  const response = await $fetch<{ items?: any[] }>('/api/prompts', { query: { limit: 100 } })
  if (response.items?.length) {
    const dbItems = response.items.map(mapDatabasePrompt)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    prompts = [...dbItems, ...mockPrompts.filter((item) => !dbSlugs.has(item.slug))] as typeof mockPrompts
  }
} catch (error) {
  console.warn('[content] prompts api failed, fallback to mock data', error)
}
const activeCategory = ref('全部')
const activeModel = ref('全部')
const activeDifficulty = ref('全部')
const activeType = ref('全部')

const quickTags = ['小红书', '论文', 'PPT', '周报', '简历', '代码', '绘图', '短视频']
const categories = ['全部', '写作', '办公', '论文', 'PPT', '编程', '绘图', '自媒体', '电商', '数据分析']
const models = ['全部', 'ChatGPT', 'DeepSeek', 'Claude', 'Kimi', 'Midjourney']
const difficulties = ['全部', '新手', '进阶', '高级']
const types = ['全部', '写作', '总结', '生成', '优化', '分析']

const difficultyMap: Record<string, string> = {
  新手: 'beginner',
  进阶: 'intermediate',
  高级: 'advanced'
}

const filteredPrompts = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return prompts.filter((prompt) => {
    const matchKeyword = !keyword || [
      prompt.title,
      prompt.description,
      prompt.task,
      prompt.body,
      ...prompt.models,
      ...prompt.tags
    ].join(' ').toLowerCase().includes(keyword)
    const matchCategory = activeCategory.value === '全部' || prompt.category === activeCategory.value
    const matchModel = activeModel.value === '全部' || prompt.models.includes(activeModel.value)
    const matchDifficulty = activeDifficulty.value === '全部' || prompt.difficulty === difficultyMap[activeDifficulty.value]
    const matchType = activeType.value === '全部' || prompt.type === activeType.value
    return matchKeyword && matchCategory && matchModel && matchDifficulty && matchType
  })
})

const hotPrompts = computed(() => [...prompts].sort((a, b) => b.copyCount - a.copyCount).slice(0, 5))
const latestPrompts = computed(() => [...prompts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 6))

function applyQuickTag(tag: string) {
  searchQuery.value = tag
  if (tag === '论文') activeCategory.value = '论文'
  if (tag === 'PPT') activeCategory.value = 'PPT'
  if (tag === '代码') activeCategory.value = '编程'
  if (tag === '绘图') activeCategory.value = '绘图'
  if (tag === '小红书' || tag === '短视频') activeCategory.value = '自媒体'
}

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = '全部'
  activeModel.value = '全部'
  activeDifficulty.value = '全部'
  activeType.value = '全部'
}

useSeoMeta(buildPageSeo({
  title: 'AI 提示词库：可复制中文 Prompt 模板',
  description: '整理适合中文场景的可复制 Prompt 模板，覆盖写作、办公、论文、PPT、编程、绘图、电商、自媒体和数据分析。',
  path: '/prompts'
}, config.public.siteUrl))
useCanonicalLink('/prompts', config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="buildItemListJsonLd(prompts.map((prompt) => ({
        name: prompt.title,
        url: createCanonicalUrl(`/prompts/${prompt.slug}`, config.public.siteUrl)
      })))"
    />

    <section class="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-14">
      <div class="absolute inset-0 opacity-50" style="background-image: radial-gradient(circle at 1px 1px, #bbf7d0 1px, transparent 0); background-size: 26px 26px;" />
      <PageContainer class="relative">
        <BaseBadge tone="success">可复制 Prompt 模板库</BaseBadge>
        <h1 class="mt-5 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">AI 提示词库</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          整理适合中文场景的可复制 Prompt 模板，覆盖写作、办公、论文、PPT、编程、绘图和自媒体。
        </p>
        <label class="relative mt-7 block max-w-3xl">
          <Search class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="搜索提示词、任务、模型"
            class="min-h-14 w-full rounded-2xl border border-white bg-white/95 pl-12 pr-4 text-base outline-none shadow-xl shadow-emerald-100/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          >
        </label>
        <div class="mt-5 flex flex-wrap gap-2">
          <button
            v-for="tag in quickTags"
            :key="tag"
            type="button"
            class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
            @click="applyQuickTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <div class="overflow-x-auto pb-2">
          <div class="flex min-w-max gap-2">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold"
              :class="activeCategory === category ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-300'"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="mt-5 grid gap-3 rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4">
          <select v-model="activeModel" class="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm">
            <option v-for="model in models" :key="model">{{ model }}</option>
          </select>
          <select v-model="activeDifficulty" class="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm">
            <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
          </select>
          <select v-model="activeType" class="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm">
            <option v-for="type in types" :key="type">{{ type }}</option>
          </select>
          <button type="button" class="min-h-11 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50" @click="resetFilters">
            重置筛选
          </button>
        </div>
      </PageContainer>
    </section>

    <section class="pb-12">
      <PageContainer class="grid gap-6 xl:grid-cols-[1fr_330px]">
        <div>
          <div class="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            <PromptCard v-for="prompt in filteredPrompts" :key="prompt.slug" :prompt="prompt" />
          </div>
          <div v-if="!filteredPrompts.length" class="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p class="font-semibold text-slate-950">暂时没有找到相关提示词</p>
            <p class="mt-2 text-sm text-slate-600">试试搜索：周报、PPT、论文、代码、绘图、短视频。</p>
          </div>
        </div>

        <aside class="grid content-start gap-5">
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="flex items-center gap-2 text-lg font-bold text-slate-950"><TrendingUp class="h-5 w-5 text-rose-500" />热门提示词</h2>
            <div class="mt-4 grid gap-3">
              <NuxtLink v-for="item in hotPrompts" :key="item.slug" :to="`/prompts/${item.slug}`" class="rounded-xl bg-slate-50 p-3 hover:bg-emerald-50">
                <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
                <p class="mt-1 flex items-center gap-1 text-xs text-slate-500"><Copy class="h-3.5 w-3.5" />{{ item.copyCount }} 次复制</p>
              </NuxtLink>
            </div>
          </section>
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-lg font-bold text-slate-950">最新提示词</h2>
            <div class="mt-4 grid gap-3">
              <NuxtLink v-for="item in latestPrompts" :key="item.slug" :to="`/prompts/${item.slug}`" class="rounded-xl bg-slate-50 p-3 hover:bg-emerald-50">
                <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
                <p class="mt-1 text-xs text-slate-500">更新 {{ item.updatedAt }}</p>
              </NuxtLink>
            </div>
          </section>
        </aside>
      </PageContainer>
    </section>
  </div>
</template>
