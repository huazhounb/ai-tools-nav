<script setup lang="ts">
import { featuredTools } from '~~/data/tools'
import { buildItemListJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()
const tools = featuredTools.filter((tool) => tool.pricing !== 'paid')

useSeoMeta(buildPageSeo({
  title: '免费 AI 工具专区 - 中文可用工具、教程和提示词',
  description: '整理适合中文用户上手的免费或有免费额度 AI 工具，覆盖写作、办公、绘图、编程、论文和 PPT 场景。',
  path: '/free-ai-tools'
}, config.public.siteUrl))
useCanonicalLink('/free-ai-tools', config.public.siteUrl)

const itemListJsonLd = buildItemListJsonLd(tools.map((tool) => ({
  name: tool.name,
  url: createCanonicalUrl(`/tool/${tool.slug}`, config.public.siteUrl)
})))
</script>

<template>
  <PageContainer class="py-10">
    <JsonLd :data="itemListJsonLd" />

    <section class="rounded-lg border border-border bg-white p-6">
      <BaseBadge tone="success">免费专区</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold text-ink md:text-4xl">免费 AI 工具专区</h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-muted">
        这里优先收录基础功能免费、提供免费额度，且中文用户能直接上手的 AI 工具。页面会持续内链到教程、提示词和榜单，避免只做工具名堆叠。
      </p>
      <div class="mt-5 flex flex-wrap gap-3">
        <NuxtLink to="/rankings/free-ai-tools" class="inline-flex min-h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-white hover:bg-blue-700">
          查看免费 AI 工具榜
        </NuxtLink>
        <NuxtLink to="/prompts" class="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-sm font-semibold text-ink hover:bg-slate-50">
          浏览提示词库
        </NuxtLink>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-ink">推荐免费工具</h2>
      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ToolCard v-for="tool in tools" :key="tool.slug" :tool="tool" />
      </div>
    </section>

    <section class="mt-8 rounded-lg border border-border bg-white p-6">
      <h2 class="text-2xl font-bold text-ink">选择建议</h2>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <NuxtLink to="/category/writing" class="rounded-lg border border-border p-4 hover:border-primary">
          <h3 class="font-semibold text-ink">写作和总结</h3>
          <p class="mt-2 text-sm leading-6 text-muted">优先看中文表达、长文处理和导出能力。</p>
        </NuxtLink>
        <NuxtLink to="/category/image" class="rounded-lg border border-border p-4 hover:border-primary">
          <h3 class="font-semibold text-ink">绘图和设计</h3>
          <p class="mt-2 text-sm leading-6 text-muted">重点检查免费次数、商用规则和中文提示词理解。</p>
        </NuxtLink>
        <NuxtLink to="/compare/deepseek-vs-doubao-vs-tongyi" class="rounded-lg border border-border p-4 hover:border-primary">
          <h3 class="font-semibold text-ink">通用助手对比</h3>
          <p class="mt-2 text-sm leading-6 text-muted">先看场景结论，再决定用 DeepSeek、豆包还是通义。</p>
        </NuxtLink>
      </div>
    </section>
  </PageContainer>
</template>
