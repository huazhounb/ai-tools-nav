<script setup lang="ts">
import { AlertTriangle, Copy, Lightbulb, Wrench } from 'lucide-vue-next'
import { prompts } from '~~/data/mock-prompts'
import { tutorials } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const config = useRuntimeConfig()
const promptSlugAliases: Record<string, string> = {
  'xiaohongshu-copywriting': 'xiaohongshu-copy',
  'weekly-report': 'weekly-report-summary'
}
const requestedSlug = route.params.slug as string
const slug = promptSlugAliases[requestedSlug] || requestedSlug

function normalizePrompt(item: any) {
  if (!item?.slug) return null
  const body = item.prompt || item.body || ''
  return {
    ...item,
    slug: item.slug,
    title: item.title || '未命名提示词',
    category: item.category || '提示词',
    type: item.type || item.task || '生成',
    description: item.summary || item.description || '',
    summary: item.summary || item.description || '',
    models: item.applicable_models || item.applicableModels || item.models || [],
    task: item.task || item.category || '提示词',
    body,
    prompt: body,
    variables: Array.isArray(item.variables)
      ? item.variables.map((variable: any) => typeof variable === 'string' ? { name: variable, description: '请替换为你的真实内容。' } : variable)
      : [],
    tags: item.tags || [],
    difficulty: item.difficulty || 'beginner',
    copyCount: Number(item.copies ?? item.copyCount ?? 0),
    usage: item.usage || ['替换变量', '补充真实素材', '复制到模型中生成第一版', '人工核对事实和格式'],
    exampleInput: item.example_input || item.exampleInput || '',
    exampleOutput: item.example_output_summary || item.exampleOutput || '',
    failureReasons: item.failureReasons || ['变量没有替换完整', '素材太少导致内容空泛', '没有指定输出格式'],
    optimizationTips: item.optimizationTips || ['补充具体案例', '指定语气和长度', '要求输出检查清单'],
    relatedPrompts: item.relatedPrompts || [],
    relatedTools: item.related_tool_slugs || item.relatedTools || item.relatedToolSlugs || [],
    updatedAt: item.updated_at?.slice(0, 10) || item.updatedAt || '2026-05-10',
    seoTitle: item.seo_title || item.seoTitle || `${item.title || '提示词'}：可复制 Prompt 模板`,
    seoDescription: item.seo_description || item.seoDescription || item.summary || item.description || ''
  }
}

let apiPrompt: any = null
try {
  apiPrompt = await $fetch(`/api/prompts/${slug}`)
} catch (error) {
  console.warn('[content] prompt detail api failed, fallback to mock data', error)
}

const foundPrompt = normalizePrompt(apiPrompt) || normalizePrompt(prompts.find((item) => item.slug === slug))
const missingPrompt = !foundPrompt
const prompt = foundPrompt || normalizePrompt({
  slug,
  title: '没有找到这个提示词',
  description: '这个提示词可能已下架、链接已变更，或还没有发布到正式内容库。',
  prompt: '',
  models: [],
  variables: [],
  tags: []
})!

const copied = ref(false)
const failed = ref(false)
const pageUrl = createCanonicalUrl(`/prompts/${prompt.slug}`, config.public.siteUrl)
const relatedPrompts = computed(() => prompts.filter((item) => item.slug !== prompt.slug && (prompt.relatedPrompts.includes(item.slug) || item.category === prompt.category)).slice(0, 4))
const relatedTools = computed(() => mockTools.filter((tool) => prompt.relatedTools.includes(tool.slug)).slice(0, 4))
const relatedTutorials = computed(() => tutorials.filter((tutorial) => tutorial.tools.some((tool) => prompt.relatedTools.includes(tool))).slice(0, 4))
const faq = [
  { question: '这个提示词可以直接复制吗？', answer: '可以。复制后请把变量替换成你的真实任务信息，再根据输出结果继续追问。' },
  { question: '适合哪些模型？', answer: `适合 ${prompt.models.join('、') || 'ChatGPT、DeepSeek、Claude'} 等支持中文任务的模型。` },
  { question: '为什么生成结果不理想？', answer: '常见原因是变量太空、素材不足、没有指定输出格式，或没有要求模型先澄清问题。' }
]

useSeoMeta(buildPageSeo({
  title: prompt.seoTitle,
  description: prompt.seoDescription,
  path: `/prompts/${prompt.slug}`,
  type: 'article'
}, config.public.siteUrl))
useCanonicalLink(`/prompts/${prompt.slug}`, config.public.siteUrl)

async function copyPrompt() {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(prompt.prompt || prompt.body)
    copied.value = true
    failed.value = false
  } catch {
    failed.value = true
  }
  setTimeout(() => {
    copied.value = false
    failed.value = false
  }, 1800)
}
</script>

<template>
  <div class="bg-slate-50">
    <JsonLd
      v-if="!missingPrompt"
      :data="[
        buildArticleJsonLd({ headline: prompt.title, description: prompt.description, url: pageUrl, dateModified: prompt.updatedAt }),
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '提示词库', url: createCanonicalUrl('/prompts', config.public.siteUrl) },
          { name: prompt.title, url: pageUrl }
        ]),
        buildFaqJsonLd(faq)
      ]"
    />

    <section v-if="missingPrompt" class="py-16">
      <PageContainer>
        <div class="rounded-[18px] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 class="text-2xl font-bold text-slate-950">没有找到这个提示词</h1>
          <p class="mt-3 text-sm leading-6 text-slate-600">这个提示词可能已下架、链接已变更，或还没有发布到正式内容库。</p>
          <NuxtLink to="/prompts" class="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
            返回提示词库
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <template v-else>
      <section class="border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-blue-50 py-10">
        <PageContainer>
          <nav class="text-sm text-slate-500">
            <NuxtLink to="/" class="hover:text-emerald-600">首页</NuxtLink>
            <span class="mx-2">/</span>
            <NuxtLink to="/prompts" class="hover:text-emerald-600">提示词库</NuxtLink>
            <span class="mx-2">/</span>
            <span>{{ prompt.title }}</span>
          </nav>
          <BaseBadge class="mt-6" tone="success">{{ prompt.task }}</BaseBadge>
          <h1 class="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{{ prompt.title }}</h1>
          <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{{ prompt.description }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <BaseBadge v-for="model in prompt.models" :key="model">{{ model }}</BaseBadge>
            <BaseBadge>{{ prompt.type }}</BaseBadge>
            <BaseBadge>复制 {{ prompt.copyCount }}</BaseBadge>
            <BaseBadge>更新 {{ prompt.updatedAt }}</BaseBadge>
          </div>
        </PageContainer>
      </section>

      <section class="py-10">
        <PageContainer class="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article class="grid gap-6">
            <section class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 class="text-2xl font-bold text-slate-950">Prompt 正文</h2>
                <button type="button" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700" @click="copyPrompt">
                  <Copy class="h-4 w-4" />
                  {{ copied ? '已复制' : '一键复制' }}
                </button>
              </div>
              <pre class="mt-4 whitespace-pre-wrap rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100">{{ prompt.prompt || prompt.body }}</pre>
              <p v-if="failed" class="mt-3 text-sm font-semibold text-red-600">复制失败，请手动复制</p>
            </section>

            <section class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-2xl font-bold text-slate-950">变量解释</h2>
              <div v-if="prompt.variables.length" class="mt-5 grid gap-3 md:grid-cols-2">
                <div v-for="variable in prompt.variables" :key="variable.name" class="rounded-2xl bg-slate-50 p-4">
                  <h3 class="font-bold text-slate-950">{{ variable.name }}</h3>
                  <p class="mt-1 text-sm leading-6 text-slate-600">{{ variable.description }}</p>
                </div>
              </div>
              <p v-else class="mt-4 text-sm text-slate-600">这个提示词没有固定变量，直接替换成你的真实任务即可。</p>
            </section>

            <section class="grid gap-5 md:grid-cols-2">
              <div class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 class="text-xl font-bold text-slate-950">示例输入</h2>
                <p class="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">{{ prompt.exampleInput || '把你的任务背景、目标和素材补充在这里。' }}</p>
              </div>
              <div class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 class="text-xl font-bold text-slate-950">示例输出摘要</h2>
                <p class="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">{{ prompt.exampleOutput || '模型会输出结构化内容、修改建议和需要人工确认的信息。' }}</p>
              </div>
            </section>

            <section class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-2xl font-bold text-slate-950">使用方法</h2>
              <ol class="mt-5 grid gap-3">
                <li v-for="(item, index) in prompt.usage" :key="item" class="flex gap-3 text-sm leading-7 text-slate-600">
                  <span class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-700">{{ index + 1 }}</span>
                  {{ item }}
                </li>
              </ol>
            </section>

            <section class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="flex items-center gap-2 text-2xl font-bold text-slate-950"><AlertTriangle class="h-6 w-6 text-amber-500" />常见失败原因</h2>
              <ul class="mt-5 grid gap-3">
                <li v-for="item in prompt.failureReasons" :key="item" class="rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">{{ item }}</li>
              </ul>
            </section>

            <section class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="flex items-center gap-2 text-2xl font-bold text-slate-950"><Lightbulb class="h-6 w-6 text-blue-500" />优化建议</h2>
              <ul class="mt-5 grid gap-3">
                <li v-for="item in prompt.optimizationTips" :key="item" class="rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">{{ item }}</li>
              </ul>
            </section>
          </article>

          <aside class="grid content-start gap-5">
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="flex items-center gap-2 text-lg font-bold text-slate-950"><Wrench class="h-5 w-5 text-blue-600" />相关工具</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="tool in relatedTools" :key="tool.slug" :to="`/tool/${tool.slug}`" class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
                  <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="34" rounded="rounded-xl" />
                  <span class="text-sm font-semibold text-slate-950">{{ tool.name }}</span>
                </NuxtLink>
              </div>
            </section>
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="text-lg font-bold text-slate-950">相关教程</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="item in relatedTutorials" :key="item.slug" :to="`/tutorial/${item.slug}`" class="rounded-xl bg-slate-50 p-3 hover:bg-blue-50">
                  <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
                </NuxtLink>
              </div>
            </section>
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="text-lg font-bold text-slate-950">相关提示词</h2>
              <div class="mt-4 grid gap-3">
                <NuxtLink v-for="item in relatedPrompts" :key="item.slug" :to="`/prompts/${item.slug}`" class="rounded-xl bg-slate-50 p-3 hover:bg-emerald-50">
                  <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
                </NuxtLink>
              </div>
            </section>
            <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 class="text-lg font-bold text-slate-950">FAQ</h2>
              <div class="mt-4 grid gap-3">
                <details v-for="item in faq" :key="item.question" class="rounded-xl border border-slate-200 p-3">
                  <summary class="cursor-pointer text-sm font-semibold text-slate-950">{{ item.question }}</summary>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.answer }}</p>
                </details>
              </div>
            </section>
          </aside>
        </PageContainer>
      </section>
    </template>
  </div>
</template>
