<script setup lang="ts">
import { rankings } from '~~/data/mock-rankings'
import { comparisons } from '~~/data/mock-comparisons'
import { tutorials } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const fallbackRanking = rankings.find((item) => item.slug === slug)

if (!fallbackRanking) {
  throw createError({ statusCode: 404, statusMessage: '榜单不存在' })
}

const { data } = await useFetch<any>(`/api/rankings/${slug}`)
const ranking = computed(() => data.value || fallbackRanking)
const fallbackRankedTools = computed(() => fallbackRanking.tools
  .map((item) => {
    const tool = mockTools.find((candidate) => candidate.slug === item.slug)
    if (!tool) return null

    return {
      ...item,
      tool,
      likes: tool.stats.likes,
      views: tool.stats.views,
      clicks: tool.stats.clicks,
      score: tool.editorScore
    }
  })
  .filter(Boolean))
const rankedTools = computed(() => data.value?.rankedTools?.length ? data.value.rankedTools : fallbackRankedTools.value)
const relatedTutorials = computed(() => tutorials.filter((item) => ranking.value.relatedTutorials.includes(item.slug)).slice(0, 4))
const relatedComparisons = computed(() => comparisons.filter((item) => ranking.value.relatedComparisons.includes(item.slug)).slice(0, 4))
const pageUrl = createCanonicalUrl(`/rankings/${slug}`, config.public.siteUrl)
const faq = [
  { question: `${fallbackRanking.title} 的排名依据是什么？`, answer: `本榜单依据 ${fallbackRanking.rules.join('、')} 整理，并结合点赞、浏览、点击和编辑评分计算。` },
  { question: '点赞会影响排名吗？', answer: '会。当前版本用服务端临时存储点赞，后续会迁移到数据库。' },
  { question: '榜单里的价格信息一定准确吗？', answer: '不一定。价格和免费额度变化较快，正式使用前应以工具官网为准。' }
]

function getTutorialTool(toolSlugs: string[]) {
  return toolSlugs.map((toolSlug) => mockTools.find((tool) => tool.slug === toolSlug)).find(Boolean)
}

function getComparisonTools(toolSlugs: string[]) {
  return toolSlugs.map((toolSlug) => mockTools.find((tool) => tool.slug === toolSlug)).filter(Boolean).slice(0, 3)
}

useSeoMeta(buildPageSeo({
  title: fallbackRanking.seoTitle,
  description: fallbackRanking.seoDescription,
  path: `/rankings/${slug}`
}, config.public.siteUrl))
useCanonicalLink(`/rankings/${slug}`, config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="[
        buildItemListJsonLd(rankedTools.map((item: any) => ({ name: item.tool.name, url: createCanonicalUrl(`/tool/${item.tool.slug}`, config.public.siteUrl) }))),
        buildFaqJsonLd(faq),
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '榜单', url: createCanonicalUrl('/rankings', config.public.siteUrl) },
          { name: fallbackRanking.title, url: pageUrl }
        ])
      ]"
    />

    <section class="border-b border-amber-100 bg-gradient-to-br from-white via-amber-50 to-blue-50 py-10">
      <PageContainer>
        <nav class="text-sm text-slate-500">
          <NuxtLink to="/" class="hover:text-amber-600">首页</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/rankings" class="hover:text-amber-600">榜单</NuxtLink>
          <span class="mx-2">/</span>
          <span>{{ fallbackRanking.title }}</span>
        </nav>
        <BaseBadge class="mt-6" tone="primary">AI 工具排行榜</BaseBadge>
        <h1 class="mt-4 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{{ ranking.title }}</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{{ ranking.description }}</p>
        <p class="mt-3 text-sm text-slate-500">更新 {{ ranking.updatedAt }}</p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-[300px_1fr]">
        <aside class="grid content-start gap-5">
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-xl font-bold text-slate-950">排名规则</h2>
            <ul class="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
              <li v-for="rule in ranking.rules" :key="rule">• {{ rule }}</li>
            </ul>
          </section>
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-xl font-bold text-slate-950">权重说明</h2>
            <div class="mt-4 grid gap-2 text-sm text-slate-600">
              <p>编辑评分：{{ ranking.weights.editorScore * 100 }}%</p>
              <p>点赞：{{ ranking.weights.likes * 100 }}%</p>
              <p>浏览：{{ ranking.weights.views * 100 }}%</p>
              <p>点击：{{ ranking.weights.clicks * 100 }}%</p>
              <p>新鲜度：{{ ranking.weights.freshnessScore * 100 }}%</p>
            </div>
          </section>
        </aside>

        <div class="grid gap-5">
          <RankingToolItem v-for="item in rankedTools" :key="item.tool.slug" :item="item" />
        </div>
      </PageContainer>
    </section>

    <section class="border-t border-slate-200 bg-white py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-3">
        <section>
          <h2 class="text-xl font-bold text-slate-950">相关教程</h2>
          <div class="mt-4 grid gap-3">
            <NuxtLink v-for="item in relatedTutorials" :key="item.slug" :to="`/tutorial/${item.slug}`" class="flex gap-3 rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
              <BrandIcon
                :icon="getTutorialTool(item.tools)?.icon"
                :slug="getTutorialTool(item.tools)?.slug"
                :name="getTutorialTool(item.tools)?.name || item.keyword"
                :size="38"
                rounded="rounded-xl"
              />
              <span class="min-w-0">
                <span class="block text-sm font-semibold text-slate-950">{{ item.title }}</span>
                <span class="mt-1 line-clamp-1 text-xs text-slate-500">{{ item.toolNames.join(' / ') }}</span>
              </span>
            </NuxtLink>
          </div>
        </section>
        <section>
          <h2 class="text-xl font-bold text-slate-950">相关对比</h2>
          <div class="mt-4 grid gap-3">
            <NuxtLink v-for="item in relatedComparisons" :key="item.slug" :to="`/compare/${item.slug}`" class="rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
              <span class="flex items-center gap-3">
                <span class="flex -space-x-2">
                  <BrandIcon
                    v-for="tool in getComparisonTools(item.toolSlugs)"
                    :key="tool!.slug"
                    :icon="tool!.icon"
                    :slug="tool!.slug"
                    :name="tool!.name"
                    :size="34"
                    rounded="rounded-xl"
                    class="ring-2 ring-white"
                  />
                </span>
                <span class="min-w-0">
                  <span class="block text-sm font-semibold text-slate-950">{{ item.title }}</span>
                  <span class="mt-1 line-clamp-1 text-xs text-slate-500">{{ item.conclusion }}</span>
                </span>
              </span>
            </NuxtLink>
          </div>
        </section>
        <section>
          <h2 class="text-xl font-bold text-slate-950">FAQ</h2>
          <div class="mt-4 grid gap-3">
            <details v-for="item in faq" :key="item.question" class="rounded-xl border border-slate-200 p-3">
              <summary class="cursor-pointer text-sm font-semibold text-slate-950">{{ item.question }}</summary>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.answer }}</p>
            </details>
          </div>
        </section>
      </PageContainer>
    </section>
  </div>
</template>
