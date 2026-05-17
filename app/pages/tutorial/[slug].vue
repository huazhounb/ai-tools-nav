<script setup lang="ts">
import { Bookmark, CheckCircle2, Clock, Copy, Target, Users, Wrench } from 'lucide-vue-next'
import { comparisons } from '~~/data/mock-comparisons'
import { prompts } from '~~/data/mock-prompts'
import { tutorials } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from '~/utils/jsonld'
import { buildPageSeo, createCanonicalUrl, useCanonicalLink } from '~/utils/seo'

definePageMeta({
  middleware: 'auth'
})

type CleanTutorial = {
  title: string
  description: string
  type: string
  difficulty: string
  learn: string[]
  outcome: string
  practiceTask: string
  promptBlocks: Array<{ title: string, prompt: string }>
}

const CLEAN_TUTORIALS: Record<string, CleanTutorial> = {
  'chatgpt-guide': {
    title: 'ChatGPT 高效使用指南',
    description: '从提问方式、上下文补充到结果检查，帮你把 ChatGPT 用到写作、学习和办公任务里。',
    type: '教程',
    difficulty: '新手',
    learn: ['写出清晰的任务背景', '约束输出格式和语气', '让 AI 先提问再生成', '检查事实和可交付结果'],
    outcome: '完成后你可以把一个真实任务整理成可复用 Prompt，并得到更稳定的第一版结果。',
    practiceTask: '用今天的一个真实任务写一段 Prompt，要求包含背景、目标、材料、输出格式和检查清单。',
    promptBlocks: [
      {
        title: '通用任务拆解 Prompt',
        prompt: '请作为我的 AI 助手，先询问任务背景、目标受众、输出格式和限制条件，再根据我提供的材料生成第一版结果，并列出需要人工核对的清单。'
      }
    ]
  },
  'deepseek-beginner': {
    title: 'DeepSeek 新手入门教程',
    description: '用 DeepSeek 完成中文问答、资料整理、写作和代码解释，重点掌握低成本高频任务。',
    type: '教程',
    difficulty: '新手',
    learn: ['用中文描述任务目标', '让 DeepSeek 输出步骤和检查项', '处理写作与代码解释任务', '避免直接复制未经核对的结果'],
    outcome: '完成后你可以用 DeepSeek 处理周报、资料摘要和代码解释等日常任务。',
    practiceTask: '选择一个待处理任务，让 DeepSeek 先列步骤，再输出结果，最后列出人工核对清单。',
    promptBlocks: [
      {
        title: 'DeepSeek 中文任务 Prompt',
        prompt: '请用中文帮我拆解这个任务：{任务}。先给出执行步骤，再生成第一版结果，最后列出哪些信息需要我人工确认。'
      }
    ]
  },
  'ai-ppt-gamma': {
    title: '如何用 AI 一键生成 PPT',
    description: '用 Gamma 或 Canva 把主题、受众和汇报目标变成演示文稿大纲与页面初稿。',
    type: '实战',
    difficulty: '新手',
    learn: ['把主题拆成页面结构', '生成 5-10 页 PPT 大纲', '补充图表和演讲提示', '人工校对结论和数据'],
    outcome: '完成后你可以快速生成一份可继续美化的 PPT 初稿。',
    practiceTask: '用一个工作或学习主题生成 5 页 PPT 大纲，每页包含标题、要点和视觉建议。',
    promptBlocks: [
      {
        title: 'PPT 大纲 Prompt',
        prompt: '请为主题“{主题}”生成一份面向“{听众}”的 PPT 大纲。输出 5 页结构，每页包含标题、核心要点、建议视觉元素和演讲提示。'
      }
    ]
  },
  'midjourney-prompt-tips': {
    title: 'Midjourney 提示词技巧',
    description: '学习如何写清楚主体、风格、镜头、材质和比例，减少 AI 绘图随机感。',
    type: '技巧',
    difficulty: '进阶',
    learn: ['拆解图像主体和场景', '描述风格、光线和构图', '控制画幅比例', '减少不必要的随机元素'],
    outcome: '完成后你可以写出更稳定的产品海报、封面和概念图提示词。',
    practiceTask: '生成一组产品海报提示词，分别写清主体、背景、光线、镜头和画幅比例。',
    promptBlocks: [
      {
        title: 'Midjourney 改写 Prompt',
        prompt: '请把我的画面需求改写成 Midjourney 英文提示词，包含主体、场景、光线、镜头、材质、风格和画幅比例。需求：{画面描述}'
      }
    ]
  },
  'cursor-beginner': {
    title: 'Cursor 编程入门教程',
    description: '学习在真实项目里让 Cursor 理解代码、定位问题、生成修改方案并辅助重构。',
    type: '教程',
    difficulty: '进阶',
    learn: ['让 Cursor 先读代码再回答', '要求它说明数据流', '控制修改范围', '验证代码改动风险'],
    outcome: '完成后你可以用 Cursor 辅助理解项目文件，并得到更可控的修改建议。',
    practiceTask: '选择一个项目文件，让 Cursor 解释代码结构、输入输出、依赖关系和潜在风险。',
    promptBlocks: [
      {
        title: '代码理解 Prompt',
        prompt: '请先阅读当前文件和相关依赖，说明这个功能的数据流、关键逻辑、边界情况和需要验证的点。先不要直接大改代码。'
      }
    ]
  }
}

const route = useRoute()
const config = useRuntimeConfig()
const { initAuth, accessToken, isLoggedIn } = useAuth()
const tutorialSlugAliases: Record<string, string> = {
  'ai-ppt-guide': 'ai-ppt-gamma',
  'midjourney-prompt-guide': 'midjourney-prompt-tips'
}
const requestedSlug = String(route.params.slug)
const slug = tutorialSlugAliases[requestedSlug] || requestedSlug

function normalizeTutorial(item: any) {
  if (!item?.slug) return null
  const content = item.content || {}
  const relatedToolSlugs = item.related_tool_slugs || item.relatedToolSlugs || item.tools || []
  const categorySlugs = item.category_slugs || item.categorySlugs || []
  const estimatedMinutes = Number(item.estimated_minutes ?? item.estimatedMinutes ?? 15)
  return {
    ...item,
    slug: item.slug,
    title: item.title || '未命名教程',
    description: item.summary || item.description || '',
    category: item.category || 'AI 教程',
    categorySlugs,
    type: item.type || '教程',
    difficulty: item.difficulty || '新手',
    audience: item.audiences || item.audience || ['中文用户'],
    duration: item.duration || `${estimatedMinutes} 分钟`,
    estimatedMinutes,
    tools: relatedToolSlugs,
    relatedToolSlugs,
    toolNames: item.toolNames || relatedToolSlugs,
    keyword: item.keyword || item.title || 'AI',
    views: Number(item.views ?? 0),
    updatedAt: item.updated_at?.slice(0, 10) || item.updatedAt || '2026-05-10',
    goal: item.goal || content.goal || item.summary || item.description || '完成一个可复用的 AI 工具学习流程。',
    preparation: item.preparation || content.preparation || ['准备一个真实任务', '整理已有素材', '确认输出格式'],
    steps: item.steps || content.steps || [
      { title: '明确任务目标', body: '先写清楚这次学习要完成什么结果。' },
      { title: '准备真实素材', body: '整理背景、目标、限制和参考样例。' },
      { title: '输入提示词', body: '把任务、素材和输出格式交给 AI。' },
      { title: '检查结果', body: '核对事实、格式、语气和缺失信息。' },
      { title: '复盘模板', body: '保存有效提示词，方便下次复用。' }
    ],
    prompt: item.prompt || content.prompt || content.promptBlocks?.[0]?.prompt || '',
    commonErrors: item.commonErrors || content.mistakes || [{ title: '任务描述太宽泛', fix: '补充目标、受众、素材和输出格式。' }],
    optimizationTips: item.optimizationTips || content.optimizationTips || ['补充具体案例', '指定输出格式', '要求 AI 输出检查清单'],
    recommendations: item.recommendations || [],
    faq: item.faq || content.faq || [
      { question: '这篇教程适合新手吗？', answer: '可以，建议先用一个真实小任务跟着步骤练习。' },
      { question: '教程里的提示词可以直接复制吗？', answer: '可以，但需要把变量替换成你的真实任务信息。' }
    ],
    seoTitle: item.seo_title || item.seoTitle || `${item.title || 'AI 教程'}：步骤、提示词和常见错误`,
    seoDescription: item.seo_description || item.seoDescription || item.summary || item.description || ''
  }
}

let apiTutorial: any = null
try {
  apiTutorial = await $fetch(`/api/tutorials/${slug}`)
} catch (error) {
  console.warn('[content] tutorial detail api failed, fallback to mock data', error)
}

const foundTutorial = normalizeTutorial(apiTutorial) || normalizeTutorial(tutorials.find((item) => item.slug === slug))
const missingTutorial = !foundTutorial
const tutorial = foundTutorial || normalizeTutorial({
  slug,
  title: '没有找到这篇教程',
  description: '这篇教程可能已下架、链接已变更，或还没有发布到正式内容库。',
  categorySlugs: [],
  relatedToolSlugs: []
})!
const pageUrl = createCanonicalUrl(`/tutorial/${tutorial.slug}`, config.public.siteUrl)
const clean = computed(() => CLEAN_TUTORIALS[tutorial.slug] || {
  title: tutorial.title,
  description: tutorial.description,
  type: tutorial.type || '教程',
  difficulty: tutorial.difficulty || '新手',
  learn: ['明确任务目标', '准备真实素材', '复制并改写提示词', '人工核对输出结果'],
  outcome: '完成后你可以把教程方法应用到自己的真实任务里。',
  practiceTask: '选择一个真实任务，按照教程步骤完成一次从输入到检查的完整流程。',
  promptBlocks: [{ title: '教程配套 Prompt', prompt: tutorial.prompt }]
})

const toolSlugs = computed(() => {
  const related = tutorial.relatedToolSlugs?.length ? tutorial.relatedToolSlugs : tutorial.tools
  return related || []
})
const tools = computed(() => mockTools.filter((tool) => toolSlugs.value.includes(tool.slug)))
const currentIndex = tutorials.findIndex((item) => item.slug === tutorial.slug)
const previousTutorial = computed(() => currentIndex > 0 ? tutorials[currentIndex - 1] : null)
const nextTutorial = computed(() => currentIndex >= 0 && currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null)
const relatedTutorials = computed(() => {
  const matched = tutorials.filter((item) => item.slug !== tutorial.slug && item.categorySlugs.some((categorySlug) => tutorial.categorySlugs.includes(categorySlug)))
  return (matched.length ? matched : tutorials.filter((item) => item.slug !== tutorial.slug)).slice(0, 3)
})
const relatedPrompts = computed(() =>
  prompts
    .filter((prompt) => tutorial.recommendations.includes(prompt.slug) || prompt.relatedTools.some((toolSlug) => toolSlugs.value.includes(toolSlug)))
    .slice(0, 3)
)
const relatedComparisons = computed(() =>
  comparisons
    .filter((comparison) => comparison.toolSlugs.some((toolSlug) => toolSlugs.value.includes(toolSlug)) || comparison.categorySlugs.some((categorySlug) => tutorial.categorySlugs.includes(categorySlug)))
    .slice(0, 2)
)

const toc = [
  { id: 'overview', label: '学习概览' },
  { id: 'goal', label: '教程目标' },
  { id: 'prepare', label: '准备工作' },
  { id: 'steps', label: '步骤拆解' },
  { id: 'prompt', label: '提示词' },
  { id: 'practice', label: '实战任务' },
  { id: 'errors', label: '常见错误' },
  { id: 'tips', label: '优化建议' },
  { id: 'faq', label: 'FAQ' }
]

const activeSection = ref('overview')
const completedSteps = ref<number[]>([])
const copiedPromptIndex = ref<number | null>(null)
const copyFailed = ref(false)
const favorite = ref(false)
const favoriteLoading = ref(false)
const progressKey = `tutorial-progress-${tutorial.slug}`
const favoriteKey = `tutorial-favorite-${tutorial.slug}`

const completionText = computed(() => `已完成 ${completedSteps.value.length} / ${tutorial.steps.length} 步`)
const completionPercent = computed(() => tutorial.steps.length ? Math.round((completedSteps.value.length / tutorial.steps.length) * 100) : 0)

function cleanTitle(item: { slug: string, title: string }) {
  return CLEAN_TUTORIALS[item.slug]?.title || item.title
}

function cleanDescription(item: { slug: string, description?: string }) {
  return CLEAN_TUTORIALS[item.slug]?.description || item.description || ''
}

function stepTip(index: number) {
  const tips = [
    '先写下你自己的真实任务，不要直接套空泛模板。',
    '把已有材料整理成列表，再交给 AI 处理。',
    '要求 AI 输出固定格式，方便你检查和复制。',
    '不要一次追求完美，先得到第一版再追问优化。',
    '最后人工核对事实、数字、引用和语气。'
  ]
  return tips[index % tips.length]
}

function stepPitfall(index: number) {
  const pitfalls = [
    '只写一个主题会导致输出泛泛而谈。',
    '没有提供上下文时，模型容易自行补全不存在的信息。',
    '不限制格式会增加后续整理成本。',
    '直接发布 AI 结果容易出现事实错误或语气不自然。',
    '不复盘有效 Prompt，下次还会重复试错。'
  ]
  return pitfalls[index % pitfalls.length]
}

function loadLocalState() {
  if (!import.meta.client) return
  try {
    completedSteps.value = JSON.parse(localStorage.getItem(progressKey) || '[]')
    favorite.value = localStorage.getItem(favoriteKey) === '1'
  } catch {
    completedSteps.value = []
  }
}

function toggleStep(index: number) {
  const exists = completedSteps.value.includes(index)
  completedSteps.value = exists ? completedSteps.value.filter((item) => item !== index) : [...completedSteps.value, index]
  if (import.meta.client) localStorage.setItem(progressKey, JSON.stringify(completedSteps.value))
}

async function syncFavoriteStatus() {
  if (!isLoggedIn.value || !accessToken.value) return
  try {
    const data = await $fetch<{ favorited: boolean }>('/api/favorites/status', {
      query: { type: 'tutorial', slug: tutorial.slug },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    favorite.value = data.favorited
    if (import.meta.client) localStorage.setItem(favoriteKey, favorite.value ? '1' : '0')
  } catch (error) {
    console.warn('[favorite] load failed', error)
  }
}

async function toggleFavorite() {
  if (favoriteLoading.value) return

  if (!isLoggedIn.value) {
    await navigateTo({ path: '/login', query: { redirect: `/tutorial/${tutorial.slug}` } })
    return
  }

  favoriteLoading.value = true
  const nextFavorite = !favorite.value
  const previousFavorite = favorite.value
  favorite.value = nextFavorite
  if (import.meta.client) localStorage.setItem(favoriteKey, nextFavorite ? '1' : '0')

  try {
    await $fetch('/api/favorites', {
      method: nextFavorite ? 'POST' : 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` },
      body: { type: 'tutorial', slug: tutorial.slug }
    })
  } catch (error) {
    favorite.value = previousFavorite
    if (import.meta.client) localStorage.setItem(favoriteKey, previousFavorite ? '1' : '0')
    console.warn('[favorite] update failed', error)
  } finally {
    favoriteLoading.value = false
  }
}

async function copyPromptBlock(prompt: string, index: number) {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(prompt)
    copiedPromptIndex.value = index
    copyFailed.value = false
  } catch {
    copyFailed.value = true
  }
  setTimeout(() => {
    copiedPromptIndex.value = null
    copyFailed.value = false
  }, 1500)
}

onMounted(async () => {
  await initAuth()
  loadLocalState()
  await syncFavoriteStatus()
  const sections = toc.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.find((entry) => entry.isIntersecting)
    if (visible?.target?.id) activeSection.value = visible.target.id
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0.01 })
  sections.forEach((section) => observer.observe(section))
  onBeforeUnmount(() => observer.disconnect())
})

useSeoMeta(buildPageSeo({
  title: `${clean.value.title}：步骤、提示词和常见错误`,
  description: clean.value.description,
  path: `/tutorial/${tutorial.slug}`,
  type: 'article'
}, config.public.siteUrl))
useCanonicalLink(`/tutorial/${tutorial.slug}`, config.public.siteUrl)
</script>

<template>
  <div class="bg-slate-50">
    <ReadingProgress v-if="!missingTutorial" />
    <JsonLd
      v-if="!missingTutorial"
      :data="[
        buildArticleJsonLd({ headline: clean.title, description: clean.description, url: pageUrl, dateModified: tutorial.updatedAt }),
        buildBreadcrumbJsonLd([
          { name: '首页', url: createCanonicalUrl('/', config.public.siteUrl) },
          { name: '教程', url: createCanonicalUrl('/tutorial', config.public.siteUrl) },
          { name: clean.title, url: pageUrl }
        ]),
        buildFaqJsonLd(tutorial.faq)
      ]"
    />

    <section v-if="missingTutorial" class="py-16">
      <PageContainer>
        <div class="rounded-[18px] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 class="text-2xl font-bold text-slate-950">没有找到这篇教程</h1>
          <p class="mt-3 text-sm leading-6 text-slate-600">这篇教程可能已下架、链接已变更，或还没有发布到正式内容库。</p>
          <NuxtLink to="/tutorial" class="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700">
            返回教程中心
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section v-else class="border-b border-blue-100 bg-gradient-to-br from-white via-blue-50 to-violet-50 py-10">
      <PageContainer>
        <TestLaunchBanner />

        <nav class="mt-8 text-sm text-slate-500">
          <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/tutorial" class="hover:text-blue-600">教程</NuxtLink>
          <span class="mx-2">/</span>
          <span>{{ clean.title }}</span>
        </nav>

        <div class="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <BaseBadge tone="primary">{{ clean.type }}</BaseBadge>
            <h1 class="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{{ clean.title }}</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{{ clean.description }}</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <BaseBadge><Clock class="mr-1 inline h-3.5 w-3.5" />{{ tutorial.duration }}</BaseBadge>
              <BaseBadge><Users class="mr-1 inline h-3.5 w-3.5" />{{ tutorial.audience.join(' / ') }}</BaseBadge>
              <BaseBadge tone="success">{{ clean.difficulty }}</BaseBadge>
              <BaseBadge>更新 {{ tutorial.updatedAt }}</BaseBadge>
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-blue-600 active:scale-[0.98]"
                :disabled="favoriteLoading"
                @click="toggleFavorite"
              >
                <Bookmark class="h-4 w-4" />
                {{ favorite ? '已收藏' : '收藏教程' }}
              </button>
              <a href="#steps" class="inline-flex min-h-11 items-center justify-center rounded-xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700 transition hover:-translate-y-px hover:bg-blue-50 active:scale-[0.98]">
                开始学习
              </a>
            </div>
          </div>

          <aside class="hidden rounded-[20px] border border-white bg-white/90 p-5 shadow-xl shadow-blue-100 lg:block">
            <h2 class="font-bold text-slate-950">目录</h2>
            <nav class="mt-4 grid gap-2">
              <a
                v-for="item in toc"
                :key="item.id"
                :href="`#${item.id}`"
                class="rounded-xl px-3 py-2 text-sm transition"
                :class="activeSection === item.id ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'"
              >
                {{ item.label }}
              </a>
            </nav>
          </aside>
        </div>
      </PageContainer>
    </section>

    <section v-if="!missingTutorial" class="py-10">
      <PageContainer class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article class="grid gap-6">
          <section id="overview" class="rounded-[18px] border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 class="text-2xl font-bold text-slate-950">学习概览</h2>
                <p class="mt-2 text-sm leading-6 text-slate-600">{{ clean.outcome }}</p>
              </div>
              <div class="min-w-[180px] rounded-2xl bg-blue-50 p-4">
                <p class="text-sm font-semibold text-blue-800">{{ completionText }}</p>
                <div class="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div class="h-full rounded-full bg-blue-600 transition-all duration-300" :style="{ width: `${completionPercent}%` }" />
                </div>
              </div>
            </div>

            <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">预计耗时</p>
                <p class="mt-2 font-bold text-slate-950">{{ tutorial.duration }}</p>
              </div>
              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">难度</p>
                <p class="mt-2 font-bold text-slate-950">{{ clean.difficulty }}</p>
              </div>
              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">适合人群</p>
                <p class="mt-2 text-sm font-bold leading-6 text-slate-950">{{ tutorial.audience.join(' / ') }}</p>
              </div>
              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">使用工具</p>
                <p class="mt-2 text-sm font-bold leading-6 text-slate-950">{{ tools.map((tool) => tool.name).join(' / ') || 'AI 工具' }}</p>
              </div>
            </div>

            <div class="mt-6 grid gap-3 md:grid-cols-2">
              <div class="rounded-2xl bg-emerald-50 p-4">
                <p class="font-bold text-emerald-950">你将学会什么</p>
                <ul class="mt-3 grid gap-2">
                  <li v-for="item in clean.learn" :key="item" class="flex gap-2 text-sm text-emerald-900">
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0" />
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="rounded-2xl bg-violet-50 p-4">
                <p class="font-bold text-violet-950">完成后可以做什么</p>
                <p class="mt-3 text-sm leading-7 text-violet-900">{{ clean.outcome }}</p>
              </div>
            </div>
          </section>

          <section id="goal" class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <h2 class="flex items-center gap-2 text-2xl font-bold text-slate-950"><Target class="h-6 w-6 text-blue-600" />教程目标</h2>
            <p class="mt-4 text-base leading-8 text-slate-600">{{ clean.outcome }}</p>
            <div class="mt-5 flex flex-wrap gap-3">
              <NuxtLink v-for="tool in tools" :key="tool.slug" :to="`/tool/${tool.slug}`" class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 transition hover:border-blue-300 hover:bg-blue-50">
                <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="32" rounded="rounded-xl" />
                <span class="text-sm font-semibold text-slate-800">{{ tool.name }}</span>
              </NuxtLink>
            </div>
          </section>

          <section id="prepare" class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <h2 class="text-2xl font-bold text-slate-950">准备工作</h2>
            <ul class="mt-4 grid gap-3">
              <li v-for="item in ['准备一个真实任务', '整理已有材料和参考样例', '确认输出格式和使用场景']" :key="item" class="flex gap-3 text-sm leading-7 text-slate-600">
                <CheckCircle2 class="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                {{ item }}
              </li>
            </ul>
          </section>

          <section id="steps" class="rounded-[18px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 class="text-2xl font-bold text-slate-950">步骤拆解</h2>
                <p class="mt-2 text-sm text-slate-600">按顺序完成，每一步都保留可检查的中间结果。</p>
              </div>
              <BaseBadge tone="primary">{{ completionText }}</BaseBadge>
            </div>
            <ol class="mt-6 grid gap-4">
              <TutorialStepCard
                v-for="(step, index) in tutorial.steps"
                :key="index"
                :index="index + 1"
                :title="step.title || `第 ${index + 1} 步`"
                :body="step.body || '完成当前步骤，并保存中间结果。'"
                :tip="stepTip(index)"
                :pitfall="stepPitfall(index)"
                :completed="completedSteps.includes(index)"
                @toggle="toggleStep(index)"
              />
            </ol>
          </section>

          <section id="prompt" class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <h2 class="text-2xl font-bold text-slate-950">可复制提示词</h2>
            <p class="mt-2 text-sm text-slate-600">复制后把变量替换成你的真实任务信息，再让 AI 输出第一版结果。</p>
            <div class="mt-5 grid gap-5">
              <article v-for="(block, index) in clean.promptBlocks" :key="block.title" class="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 class="font-bold text-white">{{ block.title }}</h3>
                  <button type="button" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-emerald-700 active:scale-[0.98]" @click="copyPromptBlock(block.prompt, index)">
                    <Copy class="h-4 w-4" />
                    {{ copiedPromptIndex === index ? '已复制' : '复制提示词' }}
                  </button>
                </div>
                <pre class="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-100">{{ block.prompt }}</pre>
              </article>
            </div>
            <p v-if="copyFailed" class="mt-3 text-sm font-semibold text-red-600">复制失败，请手动复制。</p>
          </section>

          <section id="practice" class="rounded-[18px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg">
            <h2 class="text-2xl font-bold text-slate-950">试着完成这个小任务</h2>
            <p class="mt-3 text-base leading-8 text-slate-700">{{ clean.practiceTask }}</p>
            <a href="#steps" class="mt-5 inline-flex min-h-10 items-center justify-center rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-violet-700 active:scale-[0.98]">
              回到步骤开始做
            </a>
          </section>

          <section id="errors" class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <h2 class="text-2xl font-bold text-slate-950">常见错误</h2>
            <div class="mt-5 grid gap-4 md:grid-cols-3">
              <div v-for="(error, index) in tutorial.commonErrors" :key="index" class="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">错误做法</p>
                <h3 class="mt-2 font-bold text-slate-950">{{ error.title || '输入过于宽泛' }}</h3>
                <p class="mt-3 text-xs font-bold uppercase tracking-wide text-amber-700">为什么不行</p>
                <p class="mt-1 text-sm leading-6 text-slate-700">{{ stepPitfall(index) }}</p>
                <p class="mt-3 text-xs font-bold uppercase tracking-wide text-amber-700">推荐做法</p>
                <p class="mt-1 text-sm leading-6 text-slate-700">{{ error.fix || stepTip(index) }}</p>
              </div>
            </div>
          </section>

          <section id="tips" class="rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
            <h2 class="text-2xl font-bold text-slate-950">优化建议</h2>
            <ul class="mt-4 grid gap-3 md:grid-cols-2">
              <li v-for="tip in ['把好结果沉淀成可复用模板', '用真实案例替换空泛描述', '要求 AI 输出自检清单', '重要内容交叉使用另一个工具核对']" :key="tip" class="rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">{{ tip }}</li>
            </ul>
          </section>

          <FeedbackCard />

          <section class="grid gap-3 rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            <NuxtLink v-if="previousTutorial" :to="`/tutorial/${previousTutorial.slug}`" class="rounded-2xl bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-blue-50">
              <p class="text-xs font-semibold text-slate-500">上一篇</p>
              <p class="mt-1 font-bold text-slate-950">{{ cleanTitle(previousTutorial) }}</p>
            </NuxtLink>
            <NuxtLink to="/tutorial" class="rounded-2xl bg-blue-600 p-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
              返回教程中心
            </NuxtLink>
            <NuxtLink v-if="nextTutorial" :to="`/tutorial/${nextTutorial.slug}`" class="rounded-2xl bg-slate-50 p-4 text-right transition hover:-translate-y-0.5 hover:bg-blue-50">
              <p class="text-xs font-semibold text-slate-500">下一篇</p>
              <p class="mt-1 font-bold text-slate-950">{{ cleanTitle(nextTutorial) }}</p>
            </NuxtLink>
          </section>
        </article>

        <aside id="related" class="grid content-start gap-5">
          <TutorialActionBar :title="clean.title" :url="pageUrl" />
          <ContactCard />
          <NextTutorialCard
            :tutorials="relatedTutorials.map((item) => ({ slug: item.slug, title: cleanTitle(item), description: cleanDescription(item), duration: item.duration }))"
            :prompts="relatedPrompts.map((item) => ({ slug: item.slug, title: item.title }))"
            :tools="tools.map((tool) => ({ slug: tool.slug, name: tool.name, icon: tool.icon as string }))"
            :comparisons="relatedComparisons.map((item) => ({ slug: item.slug, title: item.title }))"
          />

          <section id="faq" class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="text-lg font-bold text-slate-950">FAQ</h2>
            <div class="mt-4 grid gap-3">
              <details v-for="item in tutorial.faq" :key="item.question" class="rounded-xl border border-slate-200 p-3">
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

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}
</style>
