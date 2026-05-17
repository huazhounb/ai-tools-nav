<script setup lang="ts">
import { getSponsorSlots } from '~~/data/ads'
import { featuredTools } from '~~/data/tools'
import { tutorials } from '~~/data/siteContent'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildSoftwareApplicationJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const tool = featuredTools.find((item) => item.slug === slug)

if (!tool) {
  throw createError({ statusCode: 404, statusMessage: '工具不存在' })
}

const alternatives = computed(() => featuredTools.filter((item) => tool.alternatives.includes(item.slug)))
const relatedTutorials = computed(() => tutorials.filter((item) => tool.relatedTutorials.includes(item.slug)))
const sidebarSponsor = computed(() => getSponsorSlots('tool_sidebar', { toolSlug: tool.slug, categorySlug: tool.categorySlug })[0])
const pageUrl = createCanonicalUrl(`/tool/${tool.slug}`, config.public.siteUrl)

useSeoMeta(buildPageSeo({
  title: `${tool.name} 怎么样：免费情况、中文支持、适合人群和替代工具`,
  description: `${tool.conclusion} 查看 ${tool.name} 的核心功能、优缺点、适合场景、官方链接、相关教程和 FAQ。`,
  path: `/tool/${tool.slug}`
}, config.public.siteUrl))
useCanonicalLink(`/tool/${tool.slug}`, config.public.siteUrl)
</script>

<template>
  <div>
    <JsonLd
      :data="[
        buildSoftwareApplicationJsonLd({
          name: tool.name,
          description: tool.summary,
          url: tool.officialUrl,
          applicationCategory: tool.category,
          operatingSystem: tool.platform,
          offers: tool.pricing === 'paid' ? undefined : '0'
        }),
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: tool.category, url: createCanonicalUrl(`/category/${tool.categorySlug}`, config.public.siteUrl) },
          { name: tool.name, url: pageUrl }
        ]),
        buildFaqJsonLd(tool.faq)
      ]"
    />

    <section class="border-b border-border bg-white py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <BaseBadge tone="primary">{{ tool.category }}</BaseBadge>
          <h1 class="mt-4 text-3xl font-bold tracking-normal text-ink md:text-4xl">{{ tool.name }}</h1>
          <p class="mt-4 text-xl font-semibold leading-8 text-ink">{{ tool.conclusion }}</p>
          <p class="mt-3 max-w-3xl text-base leading-7 text-muted">{{ tool.summary }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <BaseBadge :tone="tool.pricing === 'free' ? 'success' : 'primary'">{{ tool.freeStatus }}</BaseBadge>
            <BaseBadge>中文支持：{{ tool.chineseSupport }}</BaseBadge>
            <BaseBadge>{{ tool.platform }}</BaseBadge>
            <BaseBadge v-if="tool.isTested" tone="success">已实测</BaseBadge>
          </div>
        </div>

        <aside class="rounded-lg border border-border bg-background p-5">
          <dl class="grid gap-3 text-sm">
            <div>
              <dt class="text-muted">适合人群</dt>
              <dd class="mt-1 font-medium text-ink">{{ tool.audience.join(' / ') }}</dd>
            </div>
            <div>
              <dt class="text-muted">使用门槛</dt>
              <dd class="mt-1 text-ink">{{ tool.threshold }}</dd>
            </div>
            <div>
              <dt class="text-muted">最近更新</dt>
              <dd class="mt-1 font-medium text-ink">{{ tool.updatedAt }}</dd>
            </div>
          </dl>
          <a
            :href="tool.officialUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-white hover:bg-blue-700"
          >
            访问官网
          </a>
          <SponsorSlot class="mt-5" :slot="sidebarSponsor" compact />
        </aside>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-2xl font-bold text-ink">核心功能</h2>
          <ul class="mt-4 grid gap-3 text-sm leading-6 text-muted">
            <li v-for="feature in tool.features" :key="feature" class="rounded-md bg-slate-50 p-3">{{ feature }}</li>
          </ul>
        </div>

        <div class="grid gap-4">
          <div class="rounded-lg border border-border bg-white p-5">
            <h2 class="text-xl font-bold text-ink">优点</h2>
            <ul class="mt-3 grid gap-2 text-sm leading-6 text-muted">
              <li v-for="item in tool.pros" :key="item">· {{ item }}</li>
            </ul>
          </div>
          <div class="rounded-lg border border-border bg-white p-5">
            <h2 class="text-xl font-bold text-ink">缺点</h2>
            <ul class="mt-3 grid gap-2 text-sm leading-6 text-muted">
              <li v-for="item in tool.cons" :key="item">· {{ item }}</li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="border-y border-border bg-white py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink">适合场景</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <BaseBadge v-for="scenario in tool.scenarios" :key="scenario" tone="success">{{ scenario }}</BaseBadge>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-ink">不适合场景</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <BaseBadge v-for="item in tool.notFor" :key="item" tone="warning">{{ item }}</BaseBadge>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink">替代工具</h2>
          <div class="mt-5 grid gap-3">
            <NuxtLink
              v-for="item in alternatives"
              :key="item.slug"
              :to="`/tool/${item.slug}`"
              class="rounded-lg border border-border bg-white p-4 hover:border-primary"
            >
              <span class="font-semibold text-ink">{{ item.name }}</span>
              <span class="mt-1 block text-sm leading-6 text-muted">{{ item.summary }}</span>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-ink">相关教程</h2>
          <div class="mt-5 grid gap-3">
            <NuxtLink
              v-for="tutorial in relatedTutorials"
              :key="tutorial.slug"
              :to="`/tutorial/${tutorial.slug}`"
              class="rounded-lg border border-border bg-white p-4 hover:border-primary"
            >
              <span class="font-semibold text-ink">{{ tutorial.title }}</span>
              <span class="mt-1 block text-sm text-muted">{{ tutorial.duration }} · {{ tutorial.audience.join(' / ') }}</span>
            </NuxtLink>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="border-t border-border bg-white py-10">
      <PageContainer>
        <h2 class="text-2xl font-bold text-ink">FAQ</h2>
        <div class="mt-5 grid gap-3">
          <details v-for="item in tool.faq" :key="item.question" class="rounded-lg border border-border p-4">
            <summary class="cursor-pointer font-semibold text-ink">{{ item.question }}</summary>
            <p class="mt-3 text-sm leading-6 text-muted">{{ item.answer }}</p>
          </details>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
