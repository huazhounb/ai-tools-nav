<script setup lang="ts">
import { featuredTools } from '~~/data/tools'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()

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
    hasTutorial: Boolean(item.has_tutorial),
    updatedAt: item.updated_at?.slice(0, 10) || item.created_at?.slice(0, 10) || '2026-05-10'
  }
}

let tools = featuredTools.filter((tool) => tool.pricing !== 'paid')
try {
  const response = await $fetch<{ items?: any[] }>('/api/tools', { query: { limit: 100 } })
  const items = response.items?.filter((tool) => tool.free_status !== 'paid') || []
  if (items.length) {
    const dbItems = items.map(mapDatabaseTool)
    const dbSlugs = new Set(dbItems.map((item) => item.slug))
    tools = [...dbItems, ...featuredTools.filter((item) => item.pricing !== 'paid' && !dbSlugs.has(item.slug))] as typeof featuredTools
  }
} catch (error) {
  console.warn('[content] tools api failed, fallback to mock data', error)
}
const faq = [
  { question: '免费 AI 工具是否适合正式工作？', answer: '适合做初稿、整理和试用，但正式发布前必须核对事实、版权、隐私和导出限制。' },
  { question: '有免费额度和完全免费有什么区别？', answer: '有免费额度通常会限制次数、模型或导出；完全免费也可能限制商用、速度或高级功能。' },
  { question: '免费工具应该怎么选？', answer: '先按任务选，再比较中文支持、额度、水印、导出格式和是否有教程。' },
  { question: '免费额度会变化吗？', answer: '会。AI 工具的额度和价格经常调整，付费或商用前应回到官网核对。' }
]

useSeoMeta(buildPageSeo({
  title: '免费 AI 工具推荐：中文可用、免费额度和选择建议',
  description: '整理适合中文用户上手的免费或有免费额度 AI 工具，覆盖写作、办公、绘图、编程、论文、PPT 和视频场景。',
  path: '/tools/free'
}, config.public.siteUrl))
useCanonicalLink('/tools/free', config.public.siteUrl)
</script>

<template>
  <PageContainer class="py-10">
    <JsonLd
      :data="[
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '免费 AI 工具', url: createCanonicalUrl('/tools/free', config.public.siteUrl) }
        ]),
        buildItemListJsonLd(tools.map((tool) => ({
          name: tool.name,
          url: createCanonicalUrl(`/tool/${tool.slug}`, config.public.siteUrl)
        }))),
        buildFaqJsonLd(faq)
      ]"
    />

    <section class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50 p-6">
      <BaseBadge tone="success">免费工具</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">免费 AI 工具推荐</h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        这里优先整理基础功能免费或有免费额度、中文用户能直接上手的 AI 工具。选择免费工具时，不只看是否能打开，还要看额度、导出、水印、中文质量和是否适合你的任务。
      </p>
      <div class="mt-5 flex flex-wrap gap-3">
        <NuxtLink to="/rankings/free-ai-tools" class="inline-flex min-h-10 items-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">查看免费榜单</NuxtLink>
        <NuxtLink to="/prompts" class="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-50">复制提示词</NuxtLink>
      </div>
    </section>

    <section class="mt-8 grid gap-4 md:grid-cols-3">
      <article class="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 class="text-lg font-bold text-slate-950">免费额度说明</h2>
        <p class="mt-3 text-sm leading-6 text-slate-600">免费额度通常包括次数、模型能力、导出格式和速度限制。页面标注仅用于选型参考，具体规则以官方为准。</p>
      </article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 class="text-lg font-bold text-slate-950">新手选择建议</h2>
        <p class="mt-3 text-sm leading-6 text-slate-600">先选中文体验稳定、教程完整、能完成真实任务的工具，再决定是否升级付费版。</p>
      </article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 class="text-lg font-bold text-slate-950">适合场景</h2>
        <p class="mt-3 text-sm leading-6 text-slate-600">周报、摘要、PPT 初稿、论文大纲、代码解释、图片草图和短视频脚本都适合先用免费工具试跑。</p>
      </article>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-bold text-slate-950">免费工具列表</h2>
      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ToolCard v-for="tool in tools" :key="tool.slug" :tool="tool" />
      </div>
    </section>

    <section class="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="text-2xl font-bold text-slate-950">FAQ</h2>
      <div class="mt-5 grid gap-3 md:grid-cols-2">
        <details v-for="item in faq" :key="item.question" class="rounded-xl border border-slate-200 p-4">
          <summary class="cursor-pointer font-semibold text-slate-950">{{ item.question }}</summary>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.answer }}</p>
        </details>
      </div>
    </section>
  </PageContainer>
</template>
