<script setup lang="ts">
import { Flame, Heart, Trophy } from 'lucide-vue-next'
import { rankings } from '~~/data/mock-rankings'
import { mockTools } from '~~/data/mock-tools'
import { buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()
const activeType = ref('编辑推荐榜')
const tabs = ['编辑推荐榜', '免费工具榜', '用户点赞榜', '最新收录榜', 'AI 写作榜', 'AI 绘图榜', 'AI 编程榜', 'AI 办公榜']
const tabToType: Record<string, string> = {
  编辑推荐榜: 'editor',
  免费工具榜: 'free',
  用户点赞榜: 'likes',
  最新收录榜: 'new',
  'AI 写作榜': 'writing',
  'AI 绘图榜': 'image',
  'AI 编程榜': 'code',
  'AI 办公榜': 'office'
}

const visibleRankings = computed(() => rankings.filter((ranking) => ranking.type === tabToType[activeType.value] || activeType.value === '编辑推荐榜' && ranking.type === 'editor'))
const likedRanking = computed(() => rankings.find((ranking) => ranking.slug === 'user-liked-ai-tools')!)
const likedPreview = computed(() => likedRanking.value.tools.slice(0, 5).map((item) => ({
  ...item,
  tool: mockTools.find((tool) => tool.slug === item.slug)!
})))

useSeoMeta(buildPageSeo({
  title: 'AI 工具榜单：免费、点赞、写作、绘图、编程和办公排行榜',
  description: '按免费情况、中文体验、用户点赞、编辑推荐和使用场景整理 AI 工具排行榜，包含点赞按钮、热度信息和推荐理由。',
  path: '/rankings'
}, config.public.siteUrl))
useCanonicalLink('/rankings', config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="buildItemListJsonLd(rankings.map((item) => ({
        name: item.title,
        url: createCanonicalUrl(`/rankings/${item.slug}`, config.public.siteUrl)
      })))"
    />

    <section class="border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-blue-50 py-12">
      <PageContainer>
        <BaseBadge tone="primary">排行榜</BaseBadge>
        <h1 class="mt-5 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">AI 工具榜单</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          按免费情况、中文体验、用户点赞、编辑推荐和使用场景整理 AI 工具排行榜。
        </p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <div class="overflow-x-auto pb-2">
          <div class="flex min-w-max gap-2">
            <button
              v-for="tab in tabs"
              :key="tab"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold"
              :class="activeType === tab ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'border border-slate-200 bg-white text-slate-700 hover:border-amber-300'"
              @click="activeType = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <RankingCard v-for="ranking in visibleRankings" :key="ranking.slug" :ranking="ranking" />
        </div>
      </PageContainer>
    </section>

    <section class="pb-12">
      <PageContainer>
        <div class="mb-5 flex items-center gap-2">
          <Trophy class="h-6 w-6 text-amber-500" />
          <h2 class="text-2xl font-bold text-slate-950">用户点赞榜预览</h2>
        </div>
        <div class="grid gap-4">
          <article v-for="item in likedPreview" :key="item.slug" class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-4">
                <span class="grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 text-lg font-black text-amber-700">{{ item.rank }}</span>
                <BrandIcon :icon="item.tool.icon" :slug="item.tool.slug" :name="item.tool.name" :size="48" rounded="rounded-2xl" />
                <div>
                  <h3 class="text-lg font-bold text-slate-950">{{ item.tool.name }}</h3>
                  <p class="text-sm text-slate-600">{{ item.reason }}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-3 text-sm">
                <span class="inline-flex items-center gap-1 rounded-xl bg-rose-50 px-3 py-2 font-semibold text-rose-600"><Heart class="h-4 w-4" />{{ item.tool.stats.likes }}</span>
                <span class="inline-flex items-center gap-1 rounded-xl bg-orange-50 px-3 py-2 font-semibold text-orange-600"><Flame class="h-4 w-4" />{{ item.tool.editorScore }}</span>
                <NuxtLink :to="`/tool/${item.tool.slug}`" class="rounded-xl bg-slate-950 px-3 py-2 font-semibold text-white">查看详情</NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

