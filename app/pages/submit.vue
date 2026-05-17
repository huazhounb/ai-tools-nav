<script setup lang="ts">
import { buildPageSeo, useCanonicalLink } from '~/utils/seo'

definePageMeta({
  middleware: 'auth'
})

type SubmissionType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

const route = useRoute()
const config = useRuntimeConfig()

const validTypes = ['tool', 'tutorial', 'prompt', 'comparison']
const selectedType = computed<SubmissionType>(() => {
  const type = String(route.query.type || 'tool')
  return validTypes.includes(type) ? type as SubmissionType : 'tool'
})

const typeTitle: Record<SubmissionType, string> = {
  tool: '提交 AI 工具',
  tutorial: '提交教程',
  prompt: '提交提示词',
  comparison: '提交工具对比'
}

useSeoMeta(buildPageSeo({
  title: '提交 AI 工具、教程、提示词或对比 - AI工具箱',
  description: '登录后向 AI工具箱提交 AI 工具、教程、提示词和工具对比，所有内容会进入人工审核队列。',
  path: '/submit'
}, config.public.siteUrl))
useCanonicalLink('/submit', config.public.siteUrl)
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-10">
      <PageContainer>
        <BaseBadge tone="primary">用户投稿</BaseBadge>
        <h1 class="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">{{ typeTitle[selectedType] }}</h1>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          投稿和提交工具统一使用这个页面。内容会进入人工审核队列，管理员通过后再进入正式发布流程。
        </p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <SubmitForm :initial-type="selectedType" />

        <aside class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:self-start">
          <h2 class="text-xl font-bold text-slate-950">审核说明</h2>
          <ul class="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
            <li>支持提交 AI 工具、教程、提示词和工具对比。</li>
            <li>所有投稿默认进入 pending 待审核状态。</li>
            <li>管理员可以通过、拒绝或标记为需要修改。</li>
            <li>商业合作、赞助或广告必须在简介中明确说明。</li>
            <li>提交后可以在后续的“我的投稿”页面查看审核状态。</li>
          </ul>
        </aside>
      </PageContainer>
    </section>
  </div>
</template>
