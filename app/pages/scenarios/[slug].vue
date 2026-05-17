<script setup lang="ts">
import { getScenarioBySlug } from '~~/data/scenarios'
import { featuredTools } from '~~/data/tools'
import { buildBreadcrumbJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const scenario = getScenarioBySlug(slug)

if (!scenario) {
  throw createError({ statusCode: 404, statusMessage: '场景方案不存在' })
}

const relatedTools = featuredTools.filter((tool) => scenario.relatedTools.includes(tool.slug))

useSeoMeta(buildPageSeo({
  title: `${scenario.title} - 工具选择、教程和提示词`,
  description: `${scenario.description} 推荐组合：${scenario.tools}，可产出：${scenario.result}。`,
  path: scenario.route
}, config.public.siteUrl))
useCanonicalLink(scenario.route, config.public.siteUrl)

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
  { name: '场景方案', url: createCanonicalUrl('/scenarios/ai-ppt', config.public.siteUrl) },
  { name: scenario.title, url: createCanonicalUrl(scenario.route, config.public.siteUrl) }
])
</script>

<template>
  <PageContainer class="py-10">
    <JsonLd :data="breadcrumbJsonLd" />

    <nav class="text-sm text-muted">
      <NuxtLink to="/" class="hover:text-primary">首页</NuxtLink>
      <span class="mx-2">/</span>
      <span>{{ scenario.title }}</span>
    </nav>

    <section class="mt-6 rounded-lg border border-border bg-white p-6">
      <BaseBadge tone="primary">场景方案</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold text-ink md:text-4xl">{{ scenario.title }}</h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-muted">{{ scenario.description }}</p>
      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <div class="rounded-lg border border-border bg-background p-4">
          <p class="text-xs font-semibold text-muted">适合人群</p>
          <p class="mt-2 text-sm font-semibold text-ink">{{ scenario.audience }}</p>
        </div>
        <div class="rounded-lg border border-border bg-background p-4">
          <p class="text-xs font-semibold text-muted">推荐组合</p>
          <p class="mt-2 text-sm font-semibold text-ink">{{ scenario.tools }}</p>
        </div>
        <div class="rounded-lg border border-border bg-background p-4">
          <p class="text-xs font-semibold text-muted">可产出</p>
          <p class="mt-2 text-sm font-semibold text-ink">{{ scenario.result }}</p>
        </div>
      </div>
    </section>

    <section class="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
      <article class="rounded-lg border border-border bg-white p-6">
        <h2 class="text-2xl font-bold text-ink">推荐流程</h2>
        <ol class="mt-5 space-y-4">
          <li v-for="(step, index) in scenario.steps" :key="step" class="flex gap-4">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-blue-50 text-sm font-bold text-primary">
              {{ index + 1 }}
            </span>
            <p class="pt-1 text-sm leading-6 text-muted">{{ step }}</p>
          </li>
        </ol>

        <h2 class="mt-8 text-2xl font-bold text-ink">相关工具</h2>
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          <ToolCard v-for="tool in relatedTools" :key="tool.slug" :tool="tool" />
        </div>
      </article>

      <aside class="space-y-4">
        <section class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-lg font-semibold text-ink">相关教程</h2>
          <div class="mt-4 space-y-3">
            <NuxtLink
              v-for="tutorial in scenario.relatedTutorials"
              :key="tutorial.href"
              :to="tutorial.href"
              class="block rounded-md border border-border p-3 text-sm font-medium text-ink hover:border-primary"
            >
              {{ tutorial.title }}
            </NuxtLink>
          </div>
        </section>

        <section class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-lg font-semibold text-ink">可复制提示词</h2>
          <div class="mt-4 space-y-3">
            <NuxtLink
              v-for="prompt in scenario.relatedPrompts"
              :key="prompt.href"
              :to="prompt.href"
              class="block rounded-md border border-border p-3 text-sm font-medium text-ink hover:border-primary"
            >
              {{ prompt.title }}
            </NuxtLink>
          </div>
        </section>
      </aside>
    </section>
  </PageContainer>
</template>
