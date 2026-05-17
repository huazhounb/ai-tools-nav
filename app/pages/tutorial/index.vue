<script setup lang="ts">
import { BookOpen, Clock, Search, Sparkles, Target } from 'lucide-vue-next'
import { tutorials as mockTutorials } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import { buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()
const searchQuery = ref('')

function mapDatabaseTutorial(item: any) {
  return {
    ...item,
    slug: item.slug,
    title: item.title,
    description: item.summary || item.description || '',
    summary: item.summary || item.description || '',
    category: item.category || 'AI 教程',
    categorySlugs: item.category_slugs || [],
    tools: item.related_tool_slugs || [],
    relatedToolSlugs: item.related_tool_slugs || [],
    toolNames: item.related_tool_slugs || [],
    audience: item.audiences || ['中文用户'],
    difficulty: item.difficulty === 'advanced' ? '高级' : item.difficulty === 'intermediate' ? '进阶' : '新手',
    duration: `${item.estimated_minutes || 10} 分钟`,
    estimatedMinutes: item.estimated_minutes || 10,
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10',
    views: Number(item.views || 0),
    type: item.type || '教程',
    keyword: item.title?.split(/\s+/)[0] || 'AI'
  }
}

let tutorials = mockTutorials
try {
  const response = await $fetch<{ items?: any[] }>('/api/tutorials', { query: { limit: 100 } })
  if (response.items?.length) {
    const dbItems = response.items.map(mapDatabaseTutorial)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    tutorials = [...dbItems, ...mockTutorials.filter((item) => !dbSlugs.has(item.slug))] as typeof mockTutorials
  }
} catch (error) {
  console.warn('[content] tutorials api failed, fallback to mock data', error)
}
const activeCategory = ref('全部')

const quickTags = ['新手入门', 'AI 写作', 'AI 绘图', 'AI PPT', 'AI 编程', '办公效率', '论文研究']
const tabs = ['全部', '新手入门', 'AI 写作', 'AI 绘图', 'AI PPT', 'AI 编程', 'AI 办公', 'AI 论文']

const learningPaths = [
  { title: 'AI 新手 30 分钟入门', audience: 'AI 新手 / 学生 / 职场用户', count: 4, duration: '30 分钟', tag: '新手入门', gradient: 'from-blue-600 to-cyan-500' },
  { title: '用 AI 提升办公效率', audience: '办公族 / 产品经理 / 运营', count: 4, duration: '45 分钟', tag: 'AI 办公', gradient: 'from-emerald-500 to-blue-600' },
  { title: '用 AI 做内容创作', audience: '自媒体 / 设计师 / 创作者', count: 5, duration: '60 分钟', tag: 'AI 写作', gradient: 'from-violet-600 to-pink-500' }
]

const filteredTutorials = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return tutorials.filter((tutorial) => {
    const matchKeyword = !keyword || [
      tutorial.title,
      tutorial.description,
      tutorial.category,
      ...tutorial.toolNames,
      ...tutorial.audience,
      ...tutorial.categorySlugs
    ].join(' ').toLowerCase().includes(keyword)
    const matchCategory = activeCategory.value === '全部' || tutorial.category === activeCategory.value || tutorial.categorySlugs.includes(categorySlug(activeCategory.value))
    return matchKeyword && matchCategory
  })
})

const popularTutorials = computed(() => [...tutorials].sort((a, b) => b.views - a.views).slice(0, 5))
const latestTutorials = computed(() => [...tutorials].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 5))
const beginnerTutorials = computed(() => tutorials.filter((item) => item.difficulty === '新手').slice(0, 5))

function categorySlug(label: string) {
  const map: Record<string, string> = {
    '新手入门': 'beginner',
    'AI 写作': 'ai-writing',
    'AI 绘图': 'ai-image',
    'AI PPT': 'ai-ppt',
    'AI 编程': 'ai-code',
    'AI 办公': 'ai-office',
    'AI 论文': 'ai-research'
  }
  return map[label] || label
}

function applyQuickTag(tag: string) {
  searchQuery.value = tag
  activeCategory.value = tag === '办公效率' ? 'AI 办公' : tag === '论文研究' ? 'AI 论文' : tabs.includes(tag) ? tag : '全部'
}

function getTutorialTools(toolSlugs: string[]) {
  return toolSlugs.map((slug) => mockTools.find((tool) => tool.slug === slug)).filter(Boolean).slice(0, 3)
}

function getFirstTutorialTool(toolSlugs: string[]) {
  return getTutorialTools(toolSlugs)[0]
}

useSeoMeta(buildPageSeo({
  title: 'AI 工具教程中心：从入门到实战学习 ChatGPT、DeepSeek、Midjourney 和 Cursor',
  description: 'AI 工具教程中心，按任务学习 ChatGPT、DeepSeek、Midjourney、Cursor、Canva、Kimi 等工具，覆盖写作、绘图、PPT、编程、办公和论文研究。',
  path: '/tutorial'
}, config.public.siteUrl))
useCanonicalLink('/tutorial', config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="buildItemListJsonLd(tutorials.map((item) => ({
        name: item.title,
        url: createCanonicalUrl(`/tutorial/${item.slug}`, config.public.siteUrl)
      })))"
    />

    <section class="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 py-14">
      <div class="absolute inset-0 opacity-50" style="background-image: linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px); background-size: 32px 32px;" />
      <PageContainer class="relative">
        <BaseBadge tone="primary">AI 工具学习中心</BaseBadge>
        <div class="mt-5 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <h1 class="max-w-3xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">AI 工具教程中心</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              从入门到实战，按任务学习 ChatGPT、DeepSeek、Midjourney、Cursor、Canva 等 AI 工具。
            </p>
            <label class="relative mt-7 block max-w-3xl">
              <Search class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                v-model="searchQuery"
                type="search"
                placeholder="搜索教程、工具名、任务场景"
                class="min-h-14 w-full rounded-2xl border border-white bg-white/95 pl-12 pr-4 text-base outline-none shadow-xl shadow-blue-100/70 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
            </label>
            <div class="mt-5 flex flex-wrap gap-2">
              <button
                v-for="tag in quickTags"
                :key="tag"
                type="button"
                class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700"
                @click="applyQuickTag(tag)"
              >
                {{ tag }}
              </button>
            </div>
          </div>
          <div class="rounded-[28px] border border-white bg-white/80 p-5 shadow-2xl shadow-blue-100 backdrop-blur">
            <div class="grid gap-3">
              <div v-for="item in popularTutorials.slice(0, 3)" :key="item.slug" class="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <BrandIcon
                  :icon="getFirstTutorialTool(item.tools)?.icon"
                  :slug="getFirstTutorialTool(item.tools)?.slug"
                  :name="getFirstTutorialTool(item.tools)?.name || item.keyword"
                  :size="42"
                  rounded="rounded-xl"
                />
                <div class="min-w-0">
                  <p class="truncate text-sm font-bold text-slate-950">{{ item.title }}</p>
                  <p class="text-xs text-slate-500">{{ item.duration }} · {{ item.views.toLocaleString('zh-CN') }} 阅读</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <div class="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">学习路径</h2>
            <p class="mt-1 text-sm text-slate-600">按目标组织教程，避免只看零散文章。</p>
          </div>
        </div>
        <div class="grid gap-4 lg:grid-cols-3">
          <article
            v-for="path in learningPaths"
            :key="path.title"
            class="overflow-hidden rounded-[22px] bg-gradient-to-br p-6 text-white shadow-lg"
            :class="path.gradient"
          >
            <Target class="h-8 w-8" />
            <h3 class="mt-5 text-2xl font-bold">{{ path.title }}</h3>
            <p class="mt-3 text-sm text-white/85">适合 {{ path.audience }}</p>
            <div class="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
              <span class="rounded-full bg-white/20 px-3 py-1.5">{{ path.count }} 篇教程</span>
              <span class="rounded-full bg-white/20 px-3 py-1.5">{{ path.duration }}</span>
            </div>
            <button class="mt-6 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700" type="button" @click="applyQuickTag(path.tag)">
              开始学习
            </button>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="pb-12">
      <PageContainer>
        <div class="mb-6 overflow-x-auto">
          <div class="flex min-w-max gap-2">
            <button
              v-for="tab in tabs"
              :key="tab"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold transition"
              :class="activeCategory === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'"
              @click="activeCategory = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div>
            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <TutorialCard v-for="tutorial in filteredTutorials" :key="tutorial.slug" :tutorial="tutorial" />
            </div>
            <div v-if="!filteredTutorials.length" class="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p class="font-semibold text-slate-950">暂时没有找到相关教程</p>
              <p class="mt-2 text-sm text-slate-600">试试搜索 ChatGPT、PPT、论文、编程或绘图。</p>
            </div>
          </div>

          <aside class="grid content-start gap-5">
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="flex items-center gap-2 text-lg font-bold text-slate-950"><Sparkles class="h-5 w-5 text-amber-500" />热门教程</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="item in popularTutorials" :key="item.slug" :to="`/tutorial/${item.slug}`" class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
                  <BrandIcon
                    :icon="getFirstTutorialTool(item.tools)?.icon"
                    :slug="getFirstTutorialTool(item.tools)?.slug"
                    :name="getFirstTutorialTool(item.tools)?.name || item.keyword"
                    :size="34"
                    rounded="rounded-lg"
                  />
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-slate-950">{{ item.title }}</p>
                    <p class="mt-1 text-xs text-slate-500">{{ item.views.toLocaleString('zh-CN') }} 阅读</p>
                  </div>
                </NuxtLink>
              </div>
            </section>
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="flex items-center gap-2 text-lg font-bold text-slate-950"><Clock class="h-5 w-5 text-blue-500" />最新教程</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="item in latestTutorials" :key="item.slug" :to="`/tutorial/${item.slug}`" class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
                  <BrandIcon
                    :icon="getFirstTutorialTool(item.tools)?.icon"
                    :slug="getFirstTutorialTool(item.tools)?.slug"
                    :name="getFirstTutorialTool(item.tools)?.name || item.keyword"
                    :size="34"
                    rounded="rounded-lg"
                  />
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-slate-950">{{ item.title }}</p>
                    <p class="mt-1 text-xs text-slate-500">更新 {{ item.updatedAt }}</p>
                  </div>
                </NuxtLink>
              </div>
            </section>
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="flex items-center gap-2 text-lg font-bold text-slate-950"><BookOpen class="h-5 w-5 text-emerald-500" />新手推荐</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="item in beginnerTutorials" :key="item.slug" :to="`/tutorial/${item.slug}`" class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
                  <BrandIcon
                    :icon="getFirstTutorialTool(item.tools)?.icon"
                    :slug="getFirstTutorialTool(item.tools)?.slug"
                    :name="getFirstTutorialTool(item.tools)?.name || item.keyword"
                    :size="34"
                    rounded="rounded-lg"
                  />
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-slate-950">{{ item.title }}</p>
                    <p class="mt-1 text-xs text-slate-500">{{ item.duration }}</p>
                  </div>
                </NuxtLink>
              </div>
            </section>
          </aside>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
