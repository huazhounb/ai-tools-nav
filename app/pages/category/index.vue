<script setup lang="ts">
import { categories } from '~~/data/categories'
import { featuredTools } from '~~/data/tools'
import { buildPageSeo, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()

useSeoMeta(buildPageSeo({
  title: 'AI 工具分类 - 按写作、对话、绘图、视频、PPT、办公和编程查找工具',
  description: '按任务分类浏览 AI 工具，覆盖 AI 写作、AI 对话、AI 绘图、AI 视频、AI PPT、AI 办公、AI 编程、AI 论文研究、AI 搜索、AI 音频、AI 设计和 AI 数据分析。',
  path: '/category'
}, config.public.siteUrl))
useCanonicalLink('/category', config.public.siteUrl)

function toolCount(slug: string) {
  return featuredTools.filter((tool) => (tool.categorySlugs || [tool.categorySlug]).includes(slug)).length
}
</script>

<template>
  <PageContainer class="py-10">
    <section class="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6">
      <BaseBadge tone="primary">工具分类</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold text-slate-950 md:text-5xl">按任务浏览 AI 工具分类</h1>
      <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">
        不按厂商名硬找工具，而是从写作、对话、绘图、PPT、办公、编程、论文研究等真实任务入口进入。
      </p>
    </section>

    <section class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/category/${category.slug}`"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
      >
        <div class="flex items-start justify-between gap-4">
          <h2 class="text-xl font-bold text-slate-950">{{ category.name }}</h2>
          <BaseBadge tone="primary">{{ toolCount(category.slug) }} 个工具</BaseBadge>
        </div>
        <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{{ category.description }}</p>
      </NuxtLink>
    </section>
  </PageContainer>
</template>
