<script setup lang="ts">
import { comparisons } from '~~/data/mock-comparisons'
import { prompts } from '~~/data/mock-prompts'
import { tutorials } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const comparison = comparisons.find((item) => item.slug === slug)

if (!comparison) {
  throw createError({ statusCode: 404, statusMessage: '对比页不存在' })
}

const tools = computed(() => comparison.toolSlugs.map((slug) => mockTools.find((tool) => tool.slug === slug)).filter(Boolean))
const relatedTutorials = computed(() => tutorials.filter((item) => comparison.relatedTutorials.includes(item.slug)).slice(0, 4))
const relatedPrompts = computed(() => prompts.filter((item) => comparison.relatedPrompts.includes(item.slug)).slice(0, 4))
const alternatives = computed(() => mockTools.filter((tool) => !comparison.toolSlugs.includes(tool.slug) && tool.categorySlugs.some((slug) => comparison.categorySlugs.includes(slug))).slice(0, 4))
const pageUrl = createCanonicalUrl(`/compare/${comparison.slug}`, config.public.siteUrl)

function getTutorialTool(toolSlugs: string[]) {
  return toolSlugs.map((toolSlug) => mockTools.find((tool) => tool.slug === toolSlug)).find(Boolean)
}

function getPromptTool(toolSlugs: string[]) {
  return toolSlugs.map((toolSlug) => mockTools.find((tool) => tool.slug === toolSlug)).find(Boolean)
}

useSeoMeta(buildPageSeo({
  title: comparison.seoTitle,
  description: comparison.seoDescription,
  path: `/compare/${comparison.slug}`,
  type: 'article'
}, config.public.siteUrl))
useCanonicalLink(`/compare/${comparison.slug}`, config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      :data="[
        buildArticleJsonLd({ headline: comparison.title, description: comparison.description, url: pageUrl, dateModified: comparison.updatedAt }),
        buildItemListJsonLd(tools.map((tool) => ({ name: tool!.name, url: createCanonicalUrl(`/tool/${tool!.slug}`, config.public.siteUrl) }))),
        buildFaqJsonLd(comparison.faq),
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '工具对比', url: createCanonicalUrl('/compare', config.public.siteUrl) },
          { name: comparison.title, url: pageUrl }
        ])
      ]"
    />

    <section class="border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-violet-50 py-10">
      <PageContainer>
        <nav class="text-sm text-slate-500">
          <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/compare" class="hover:text-blue-600">工具对比</NuxtLink>
          <span class="mx-2">/</span>
          <span>{{ comparison.title }}</span>
        </nav>
        <BaseBadge class="mt-6" tone="primary">工具对比</BaseBadge>
        <h1 class="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{{ comparison.title }}</h1>
        <p class="mt-5 max-w-3xl text-lg font-semibold leading-8 text-blue-900">{{ comparison.conclusion }}</p>
        <p class="mt-3 text-sm text-slate-500">更新 {{ comparison.updatedAt }}</p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <h2 class="text-2xl font-bold text-slate-950">快速选择建议</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-3">
          <div v-for="item in comparison.quickAdvice" :key="item" class="rounded-[18px] border border-blue-100 bg-white p-5 shadow-sm">
            <p class="text-sm leading-7 text-slate-700">{{ item }}</p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <NuxtLink v-for="tool in tools" :key="tool!.slug" :to="`/tool/${tool!.slug}`" class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-300">
            <BrandIcon :icon="tool!.icon" :slug="tool!.slug" :name="tool!.name" :size="52" rounded="rounded-2xl" />
            <h3 class="mt-4 text-xl font-bold text-slate-950">{{ tool!.name }}</h3>
            <p class="mt-2 text-sm text-slate-600">{{ tool!.category }} · {{ tool!.freeStatus }} · {{ tool!.chineseSupport }}</p>
            <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{{ tool!.summary }}</p>
          </NuxtLink>
        </div>

        <div class="mt-8">
          <ComparisonTable :tools="tools" />
        </div>
      </PageContainer>
    </section>

    <section class="border-y border-slate-200 bg-white py-10">
      <PageContainer>
        <h2 class="text-2xl font-bold text-slate-950">单独分析</h2>
        <div class="mt-6 grid gap-5 lg:grid-cols-3">
          <article v-for="tool in tools" :key="tool!.slug" class="rounded-[18px] border border-slate-200 p-5">
            <h3 class="text-xl font-bold text-slate-950">{{ tool!.name }}</h3>
            <div class="mt-4">
              <h4 class="font-semibold text-emerald-700">优点</h4>
              <ul class="mt-2 grid gap-2 text-sm leading-6 text-slate-600">
                <li v-for="item in comparison.prosCons[tool!.slug]?.pros" :key="item">• {{ item }}</li>
              </ul>
            </div>
            <div class="mt-4">
              <h4 class="font-semibold text-amber-700">缺点</h4>
              <ul class="mt-2 grid gap-2 text-sm leading-6 text-slate-600">
                <li v-for="item in comparison.prosCons[tool!.slug]?.cons" :key="item">• {{ item }}</li>
              </ul>
            </div>
            <div class="mt-4">
              <h4 class="font-semibold text-blue-700">适合场景</h4>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ comparison.prosCons[tool!.slug]?.bestFor.join(' / ') }}</p>
            </div>
            <div class="mt-4">
              <h4 class="font-semibold text-slate-700">不适合场景</h4>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ comparison.prosCons[tool!.slug]?.notFor.join(' / ') }}</p>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer class="grid gap-6 lg:grid-cols-[1fr_320px]">
        <article class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-950">最终推荐结论</h2>
          <p class="mt-4 text-base leading-8 text-slate-600">{{ comparison.recommendation }}</p>
          <h3 class="mt-8 text-xl font-bold text-slate-950">替代工具</h3>
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <NuxtLink v-for="tool in alternatives" :key="tool.slug" :to="`/tool/${tool.slug}`" class="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 hover:bg-blue-50">
              <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="36" rounded="rounded-xl" />
              <span class="text-sm font-semibold text-slate-950">{{ tool.name }}</span>
            </NuxtLink>
          </div>
        </article>

        <aside class="grid content-start gap-5">
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-lg font-bold text-slate-950">相关教程</h2>
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
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-lg font-bold text-slate-950">相关提示词</h2>
            <div class="mt-4 grid gap-3">
              <NuxtLink v-for="item in relatedPrompts" :key="item.slug" :to="`/prompts/${item.slug}`" class="flex gap-3 rounded-xl bg-slate-50 p-3 hover:bg-emerald-50">
                <BrandIcon
                  :icon="getPromptTool(item.relatedTools)?.icon"
                  :slug="getPromptTool(item.relatedTools)?.slug"
                  :name="getPromptTool(item.relatedTools)?.name || item.title"
                  :size="38"
                  rounded="rounded-xl"
                />
                <span class="min-w-0">
                  <span class="block text-sm font-semibold text-slate-950">{{ item.title }}</span>
                  <span class="mt-1 line-clamp-1 text-xs text-slate-500">{{ item.models.join(' / ') }}</span>
                </span>
              </NuxtLink>
            </div>
          </section>
          <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-lg font-bold text-slate-950">FAQ</h2>
            <div class="mt-4 grid gap-3">
              <details v-for="item in comparison.faq" :key="item.question" class="rounded-xl border border-slate-200 p-3">
                <summary class="cursor-pointer text-sm font-semibold text-slate-950">{{ item.question }}</summary>
                <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.answer }}</p>
              </details>
            </div>
          </section>
        </aside>
      </PageContainer>
    </section>
  </div>
</template>
