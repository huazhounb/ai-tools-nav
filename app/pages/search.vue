<script setup lang="ts">
import { categories } from '~~/data/categories'
import { comparisons, prompts, rankings, tutorials } from '~~/data/siteContent'
import { featuredTools } from '~~/data/tools'
import { buildPageSeo } from '~/utils/seo'

const route = useRoute()
const config = useRuntimeConfig()
const query = computed(() => String(route.query.q ?? '').trim())

useSeoMeta({
  ...buildPageSeo({
    title: query.value ? `${query.value} 搜索结果 - AI Nav` : '搜索 AI 工具、教程和提示词 - AI Nav',
    description: '搜索 AI 工具、教程、提示词、榜单和对比页面。搜索结果页默认不进入 sitemap。',
    path: '/search'
  }, config.public.siteUrl),
  robots: 'noindex,nofollow'
})

const searchItems = computed(() => {
  const keyword = query.value.toLowerCase()
  const items = [
    ...featuredTools.map((item) => ({ title: item.name, description: item.summary, type: '工具', href: `/tool/${item.slug}` })),
    ...tutorials.map((item) => ({ title: item.title, description: item.description, type: '教程', href: `/tutorial/${item.slug}` })),
    ...prompts.map((item) => ({ title: item.title, description: item.description, type: '提示词', href: `/prompts/${item.slug}` })),
    ...comparisons.map((item) => ({ title: item.title, description: item.description, type: '对比', href: `/compare/${item.slug}` })),
    ...rankings.map((item) => ({ title: item.title, description: item.description, type: '榜单', href: `/rankings/${item.slug}` })),
    ...categories.map((item) => ({ title: item.name, description: item.description, type: '分类', href: `/category/${item.slug}` }))
  ]

  if (!keyword) return items.slice(0, 12)
  return items.filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(keyword)).slice(0, 20)
})
</script>

<template>
  <section class="py-10">
    <PageContainer>
      <BaseBadge tone="primary">搜索</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold tracking-normal text-ink md:text-4xl">
        {{ query ? `搜索：${query}` : '搜索 AI 工具、教程和提示词' }}
      </h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-muted">
        搜索结果用于站内导航，不作为独立 SEO 页面收录。
      </p>

      <div class="mt-8 grid gap-3">
        <NuxtLink
          v-for="item in searchItems"
          :key="`${item.type}-${item.href}`"
          :to="item.href"
          class="rounded-lg border border-border bg-white p-4 hover:border-primary"
        >
          <BaseBadge>{{ item.type }}</BaseBadge>
          <h2 class="mt-3 text-lg font-semibold text-ink">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-muted">{{ item.description }}</p>
        </NuxtLink>
      </div>
    </PageContainer>
  </section>
</template>
