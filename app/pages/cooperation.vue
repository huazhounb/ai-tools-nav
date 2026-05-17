<script setup lang="ts">
import { buildPageSeo, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()

useSeoMeta(buildPageSeo({
  title: 'AI Nav 合作与广告：工具收录、赞助位和内容合作',
  description: '了解 AI Nav 的工具投稿、赞助位、广告合作和内容合作规则。所有商业位都会明确标注合作、赞助或广告。',
  path: '/cooperation'
}, config.public.siteUrl))
useCanonicalLink('/cooperation', config.public.siteUrl)
</script>

<template>
  <section class="py-10">
    <PageContainer>
      <BaseBadge tone="warning">合作与广告</BaseBadge>
      <h1 class="mt-4 text-3xl font-bold tracking-normal text-ink md:text-4xl">合作与广告</h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-muted">
        AI Nav 支持工具投稿、首页今日推荐、分类页推荐、工具详情页侧边栏、对比页赞助位和教程页推荐工具位。所有商业内容必须明确标注，不进入自然榜单排序。
      </p>

      <div class="mt-8 grid gap-4 lg:grid-cols-3">
        <article class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-lg font-semibold text-ink">工具投稿</h2>
          <p class="mt-3 text-sm leading-6 text-muted">适合希望被收录的 AI 工具、教程或提示词。投稿会进入人工审核，收录不等于推荐。</p>
          <NuxtLink to="/submit" class="mt-4 inline-flex text-sm font-semibold text-primary">提交内容</NuxtLink>
        </article>
        <article class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-lg font-semibold text-ink">赞助位</h2>
          <p class="mt-3 text-sm leading-6 text-muted">仅展示在相关页面，必须说明适合人群、使用场景和合作属性。</p>
        </article>
        <article class="rounded-lg border border-border bg-white p-5">
          <h2 class="text-lg font-semibold text-ink">内容合作</h2>
          <p class="mt-3 text-sm leading-6 text-muted">适合厂商教程、案例和工具对比合作。合作内容必须标注，不伪装成编辑推荐。</p>
        </article>
      </div>
    </PageContainer>
  </section>
</template>
