<script setup lang="ts">
import { mockTools } from '~~/data/mock-tools'
import { buildHomeJsonLd } from '~/utils/jsonld'
import { buildPageSeo, useCanonicalLink } from '~/utils/seo'

const config = useRuntimeConfig()

const seo = buildPageSeo({
  title: 'AI工具箱 - 中文 AI 工具导航、教程、提示词和工具对比',
  description: '按任务查找中文用户可用的 AI 工具，提供免费工具、实测教程、场景方案、可复制提示词和 DeepSeek、豆包、通义等工具对比。',
  path: '/'
}, config.public.siteUrl)

useSeoMeta(seo)
useCanonicalLink('/', config.public.siteUrl)

const searchQuery = ref('')
const hasSearched = ref(false)
const resultsSection = ref<HTMLElement | null>(null)

const hotSearches = ['AI 绘图', 'PPT', '论文写作', '编程', '短视频脚本', '周报总结', '简历优化', '数据分析']

const heroTools = ['chatgpt', 'deepseek', 'claude', 'notion-ai', 'canva-ai', 'cursor', 'midjourney', 'tongyi']
  .map((slug) => mockTools.find((tool) => tool.slug === slug))
  .filter(Boolean)

const deepseek = mockTools.find((tool) => tool.slug === 'deepseek')!

const taskEntrances = [
  { title: '学生', desc: '适合写作业、论文大纲、知识总结和资料整理。', count: 6, href: '/scenarios/student', gradient: 'from-emerald-500 to-blue-500', icon: 'M12 4 21 9l-9 5-9-5 9-5Zm4 8v4c0 1.7-1.8 3-4 3s-4-1.3-4-3v-4' },
  { title: '办公族', desc: '适合周报总结、PPT 制作、表格处理和文档润色。', count: 6, href: '/scenarios/office', gradient: 'from-amber-500 to-orange-500', icon: 'M8 7V5h8v2m-11 0h14v12H5V7Zm4 5h6' },
  { title: '设计师', desc: '适合 AI 绘图、海报设计、灵感参考和素材生成。', count: 6, href: '/scenarios/designer', gradient: 'from-blue-500 to-violet-500', icon: 'M12 4a8 8 0 1 0 0 16h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h2a2 2 0 0 0 0-4h-2Z' },
  { title: '程序员', desc: '适合代码解释、Bug 修复、接口文档和重构建议。', count: 6, href: '/scenarios/developer', gradient: 'from-sky-500 to-blue-600', icon: 'm8 9-4 3 4 3m8-6 4 3-4 3M14 6l-4 12' },
  { title: '自媒体', desc: '适合短视频脚本、小红书文案、标题优化和选题策划。', count: 6, href: '/scenarios/creator', gradient: 'from-violet-500 to-pink-500', icon: 'M8 11a4 4 0 1 0 8 0V8a4 4 0 1 0-8 0v3Zm4 4v4m-5 0h10' },
  { title: '论文党', desc: '适合论文大纲、文献总结、语言润色和研究资料整理。', count: 6, href: '/scenarios/paper', gradient: 'from-yellow-400 to-blue-500', icon: 'M6 5h9a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 3V5Zm3 4h6M9 13h6' }
]
const identityToolSlugs = [
  ['deepseek', 'kimi', 'chatgpt', 'gamma', 'canva-ai', 'chatpdf'],
  ['tongyi', 'wps-ai', 'notion-ai', 'doubao', 'gamma', 'yuanbao'],
  ['midjourney', 'jimeng', 'canva-ai', 'stable-diffusion', 'gamma', 'tome'],
  ['cursor', 'github-copilot', 'codeium', 'deepseek', 'trae', 'tongyi-lingma'],
  ['doubao', 'chatgpt', 'jimeng', 'runway', 'jianying-ai', 'canva-ai'],
  ['kimi', 'chatpdf', 'deepseek', 'perplexity', 'wenxin', 'metaso']
]

function toolsForIdentity(index: number) {
  return (identityToolSlugs[index] || [])
    .map((slug) => mockTools.find((tool) => tool.slug === slug))
    .filter(Boolean)
}

const quickEntries = [
  { title: '免费 AI 工具推荐', desc: '优先整理基础功能免费或有免费额度、中文用户能直接上手的 AI 工具。', href: '/tools/free', tag: 'FREE', gradient: 'from-emerald-500 to-teal-500', icon: 'M20 12v8H4v-8m16 0H4m16 0V8H4v4m8-8v16M8.5 7.5A2.5 2.5 0 1 1 12 4a2.5 2.5 0 1 1 3.5 3.5' },
  { title: '热门榜单', desc: '按场景看 AI 写作、绘图、PPT 排名', href: '/rankings/free-ai-tools', tag: 'TOP', gradient: 'from-amber-400 to-yellow-500', icon: 'M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Zm-3 1H2v2a4 4 0 0 0 4 4m12-6h2v2a4 4 0 0 1-4 4' },
  { title: '今日推荐', desc: 'DeepSeek 适合中文写作、推理和代码解释', href: '/tool/deepseek', tag: '合作', gradient: 'from-violet-500 to-blue-600', icon: 'M12 3l2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z' },
  { title: '新手必看', desc: '从周报、论文摘要和会议纪要开始', href: '/tutorial/deepseek-beginner', tag: 'GUIDE', gradient: 'from-blue-500 to-cyan-500', icon: 'M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4Zm4 5h6m-6 4h5' }
]
const scenarioCards = [
  { title: 'AI 做 PPT', desc: '先生成大纲，再补数据和版式', tools: 8, href: '/scenarios/ai-ppt', gradient: 'from-blue-500 to-violet-500' },
  { title: '写论文', desc: '文献摘要、段落润色和引用核对', tools: 9, href: '/scenarios/paper-writing', gradient: 'from-emerald-500 to-blue-500' },
  { title: '短视频脚本', desc: '选题、分镜、口播和封面文案', tools: 7, href: '/scenarios/short-video-script', gradient: 'from-pink-500 to-violet-500' },
  { title: '自媒体文案', desc: '标题、开头、结构和改写', tools: 10, href: '/scenarios/content-copywriting', gradient: 'from-orange-500 to-amber-500' },
  { title: 'AI 绘图', desc: '生成封面、海报和商品场景图', tools: 6, href: '/scenarios/ai-image', gradient: 'from-cyan-500 to-blue-600' },
  { title: '数据分析', desc: '清洗表格、解释指标和生成结论', tools: 5, href: '/scenarios/data-analysis', gradient: 'from-slate-700 to-blue-600' }
]
const prompts = [
  {
    title: '周报总结提示词',
    scene: '办公',
    href: '/prompts/weekly-report-summary',
    content: '请根据以下工作记录，按“本周完成、关键进展、遇到问题、下周计划”整理一份简洁周报，语气专业克制，不夸大成果。'
  },
  {
    title: '论文润色提示词',
    scene: '论文',
    href: '/prompts/paper-outline',
    content: '请在不改变原意的前提下润色以下论文段落，提升学术表达和逻辑衔接，并列出主要修改原因。'
  },
  {
    title: '商品图生成提示词',
    scene: '设计',
    href: '/prompts/midjourney-product-poster',
    content: '请生成一张商品场景图，主体清晰、背景干净、光线自然，不生成真实品牌 logo 和无法确认授权的人物。'
  }
]
const tutorialIcon = (slug: string) => mockTools.find((tool) => tool.slug === slug)?.icon

const tutorials = [
  { title: 'ChatGPT 高效使用指南', type: '教程', keyword: 'ChatGPT', icon: tutorialIcon('chatgpt'), summary: '从任务背景、约束条件和输出格式开始，让通用 AI 输出更稳定。', updatedAt: '2026-05-10', views: '3.2k', href: '/tutorial/chatgpt-guide', gradient: 'bg-gradient-to-br from-blue-500 to-violet-600' },
  { title: 'Midjourney 提示词技巧', type: '技巧', keyword: 'Midjourney', icon: tutorialIcon('midjourney'), summary: '拆解主体、风格、构图和光线，减少反复试错。', updatedAt: '2026-05-10', views: '2.1k', href: '/tutorial/midjourney-prompt-tips', gradient: 'bg-gradient-to-br from-violet-500 to-pink-500' },
  { title: '用 AI 一键生成精美 PPT', type: '教程', keyword: 'PPT', icon: tutorialIcon('gamma'), summary: '用 Gamma 生成初稿，再人工校对结论、数据和品牌样式。', updatedAt: '2026-05-10', views: '1.8k', href: '/tutorial/ai-ppt-gamma', gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
  { title: 'DeepSeek 深度体验', type: '评测', keyword: 'DeepSeek', icon: tutorialIcon('deepseek'), summary: '从周报、代码解释和长文改写三个任务看它适合哪些人。', updatedAt: '2026-05-10', views: '4.6k', href: '/tool/deepseek', gradient: 'bg-gradient-to-br from-slate-700 to-blue-600' },
  { title: '6 款 AI 绘图工具对比', type: '对比', keyword: 'AI 绘图', icon: tutorialIcon('jimeng'), summary: '对比中文理解、画面质感、免费额度和商用注意事项。', updatedAt: '2026-05-10', views: '2.9k', href: '/tutorial/ai-image-tools-comparison-guide', gradient: 'bg-gradient-to-br from-emerald-500 to-blue-500' }
]
const submissions = [
  { name: 'FlowNote AI', user: '产品经理 Leo', category: '效率工具', status: 'pending', date: '2026-05-10' },
  { name: 'PromptBox 中文版', user: '运营 Ada', category: '提示词', status: 'approved', date: '2026-05-09' },
  { name: 'DesignPilot', user: '设计师 Ming', category: 'AI 设计', status: 'pending', date: '2026-05-08' }
]

const testedArticles = [
  { title: 'DeepSeek、豆包、通义写周报效果对比', summary: 'DeepSeek 逻辑更完整，豆包更适合新手直接改，通义适合办公生态。', href: '/compare/deepseek-vs-doubao-vs-tongyi' },
  { title: '6 款免费 AI 绘图工具怎么选', summary: '即梦上手更稳，Canva 更适合模板化内容，Midjourney 更重视觉质感。', href: '/rankings/ai-image-tools' }
]
const sponsorSlot = {
  id: 'home-deepseek-beginner',
  placement: 'home_today_tool',
  disclosure: '合作',
  title: 'DeepSeek：适合中文写作、推理和代码解释',
  summary: '适合需要中文问答、周报初稿、资料整理和代码解释的用户。建议从明确任务、补充背景、限制输出格式开始试用。',
  sponsorName: 'DeepSeek',
  href: '/tool/deepseek',
  ctaLabel: '查看工具详情',
  relevance: '面向首页新手和办公用户的合作推荐位，不参与自然榜单排序。',
  audience: ['AI 新手', '办公族', '程序员'],
  status: 'active',
  updatedAt: '2026-05-10'
} as const

const normalizedQuery = computed(() => searchQuery.value.trim().toLowerCase())

const filteredTools = computed(() => {
  if (!normalizedQuery.value) return mockTools
  return mockTools.filter((tool) => {
    const haystack = [
      tool.name,
      tool.summary,
      tool.category,
      tool.freeStatus,
      tool.chineseSupport,
      tool.platform,
      ...tool.audience,
      ...tool.tags,
      ...tool.scenarios
    ].join(' ').toLowerCase()
    return haystack.includes(normalizedQuery.value)
  })
})

function handleSearch() {
  hasSearched.value = true
  scrollToResults()
}

function clearSearch() {
  searchQuery.value = ''
  hasSearched.value = false
}

function applyHotKeyword(keyword: string) {
  searchQuery.value = keyword
  hasSearched.value = true
  scrollToResults()
}

function scrollToResults() {
  nextTick(() => {
    resultsSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<template>
  <div class="overflow-hidden bg-slate-50">
    <JsonLd :data="buildHomeJsonLd(config.public.siteUrl, config.public.siteName)" />

    <PageContainer class="pt-6">
      <TestLaunchBanner />
    </PageContainer>

    <section class="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      <div class="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div class="absolute right-[-80px] top-24 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div class="absolute inset-0 opacity-40" style="background-image: linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px); background-size: 36px 36px;" />

      <PageContainer class="relative grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        <div>
          <BaseBadge tone="primary">AI 工具选择 + 上手教程 + 可复制提示词</BaseBadge>
          <h1 class="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-slate-950 md:text-6xl">
            按任务找到真正适合你的 AI 工具
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            面向中文用户整理免费工具、实测教程、场景方案、提示词模板和工具对比，帮助你从“知道工具”走到“完成任务”。
          </p>

          <div class="mt-8 max-w-3xl">
            <HomeSearchBox v-model="searchQuery" @search="handleSearch" @clear="clearSearch" />
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <button
              v-for="word in hotSearches"
              :key="word"
              type="button"
              class="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
              @click="applyHotKeyword(word)"
            >
              {{ word }}
            </button>
          </div>
        </div>

        <div class="relative min-h-[460px]">
          <div class="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 opacity-20 blur-xl" />
          <div class="relative min-h-[460px] rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-2xl shadow-blue-200/70 backdrop-blur">
            <div class="flex items-center justify-between">
              <span class="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">智能推荐</span>
              <span class="text-xs font-medium text-slate-500">8 个热门工具</span>
            </div>

            <NuxtLink
              to="/tool/deepseek"
              class="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-blue-100 bg-white p-5 text-center shadow-2xl shadow-blue-200/70 transition hover:-translate-y-[52%]"
            >
              <BrandIcon :icon="deepseek.icon" :name="deepseek.name" :size="64" rounded="rounded-3xl" class="mx-auto" />
              <p class="mt-4 text-xs font-semibold text-blue-600">今日推荐</p>
              <h2 class="mt-1 text-2xl font-bold text-slate-950">DeepSeek</h2>
              <p class="mt-2 text-sm text-slate-600">免费中文 AI 助手</p>
              <span class="mt-4 inline-flex rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white">查看详情</span>
            </NuxtLink>

            <NuxtLink
              v-for="(tool, index) in heroTools"
              :key="tool!.slug"
              :to="`/tool/${tool!.slug}`"
              class="absolute rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-200/80 backdrop-blur transition hover:-translate-y-1 hover:border-blue-200"
              :class="[
                index === 0 ? 'left-6 top-16' : '',
                index === 1 ? 'right-10 top-20' : '',
                index === 2 ? 'left-16 top-40' : '',
                index === 3 ? 'right-5 top-44' : '',
                index === 4 ? 'left-7 bottom-24' : '',
                index === 5 ? 'right-16 bottom-20' : '',
                index === 6 ? 'left-32 bottom-8' : '',
                index === 7 ? 'right-8 bottom-36' : ''
              ]"
            >
              <BrandIcon :icon="tool!.icon" :name="tool!.name" :category="tool!.category" :size="48" />
              <span class="mt-2 block max-w-20 truncate text-center text-xs font-semibold text-slate-700">{{ tool!.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="py-12">
      <PageContainer>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">按身份找 AI 工具</h2>
            <p class="mt-2 text-sm text-slate-600">根据学生、办公族、设计师、程序员、自媒体和论文写作等不同场景，快速找到适合你的 AI 工具。</p>
          </div>
        </div>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="(task, index) in taskEntrances"
            :key="task.title"
            :to="task.href"
            class="group overflow-hidden rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
          >
            <div class="flex items-start justify-between gap-4">
              <span class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-sm" :class="task.gradient">
                <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path :d="task.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{{ toolsForIdentity(index).length }} 个工具</span>
            </div>
            <h3 class="mt-5 text-xl font-bold text-slate-950">{{ task.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ task.desc }}</p>
            <div class="mt-4 flex -space-x-2">
              <BrandIcon
                v-for="tool in toolsForIdentity(index)"
                :key="tool!.slug"
                :icon="tool!.icon"
                :slug="tool!.slug"
                :name="tool!.name"
                :category="tool!.category"
                :size="32"
                rounded="rounded-xl"
                class="ring-2 ring-white"
              />
            </div>
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section class="py-4">
      <PageContainer>
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="entry in quickEntries"
            :key="entry.title"
            :to="entry.href"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow-lg transition hover:-translate-y-1"
            :class="entry.gradient"
          >
            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
            <div class="relative flex items-start justify-between gap-3">
              <span class="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path :d="entry.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{{ entry.tag }}</span>
            </div>
            <h3 class="relative mt-5 text-xl font-bold">{{ entry.title }}</h3>
            <p class="relative mt-2 text-sm leading-6 text-white/85">{{ entry.desc }}</p>
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section class="py-12">
      <PageContainer class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SponsorSlot :slot="sponsorSlot as any" />
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-950">新手必看</h2>
          <div class="mt-5 grid gap-3">
            <NuxtLink
              v-for="guide in tutorials.slice(0, 3)"
              :key="guide.title"
              :to="guide.href"
              class="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white"
            >
              <BrandIcon :icon="guide.icon" :name="guide.keyword" :size="44" rounded="rounded-xl" />
              <span>
                <span class="font-semibold text-slate-950">{{ guide.title }}</span>
                <span class="mt-1 block text-sm text-slate-500">{{ guide.summary }}</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="border-y border-slate-200 bg-white py-12">
      <PageContainer>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">工具对比</h2>
            <p class="mt-2 text-sm text-slate-600">先看结论，再用价格、中文支持、适合人群和场景判断。</p>
          </div>
        </div>
        <div class="mt-6 overflow-x-auto">
          <ComparisonTable />
        </div>
      </PageContainer>
    </section>

    <section class="py-12">
      <PageContainer>
        <h2 class="text-2xl font-bold text-slate-950">场景方案</h2>
        <p class="mt-2 text-sm text-slate-600">每个场景都导向工具、教程和提示词，而不是只给工具名称。</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="scenario in scenarioCards"
            :key="scenario.title"
            :to="scenario.href"
            class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
          >
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white" :class="scenario.gradient">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M12 5v14M7 7l10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </span>
            <h3 class="mt-4 text-lg font-bold text-slate-950">{{ scenario.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ scenario.desc }}</p>
            <p class="mt-4 text-xs font-semibold text-blue-600">推荐 {{ scenario.tools }} 个工具</p>
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section class="border-y border-slate-200 bg-white py-12">
      <PageContainer>
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">提示词库</h2>
            <p class="mt-2 text-sm text-slate-600">精选可复制模板，按办公、论文、设计等任务组织。</p>
          </div>
          <NuxtLink to="/prompts/weekly-report-summary" class="text-sm font-semibold text-blue-600">更多提示词</NuxtLink>
        </div>
        <div class="mt-6 grid gap-4 lg:grid-cols-3">
          <PromptCard
            v-for="prompt in prompts"
            :key="prompt.title"
            :title="prompt.title"
            :scene="prompt.scene"
            :content="prompt.content"
            :href="prompt.href"
          />
        </div>
      </PageContainer>
    </section>

    <section class="py-12">
      <PageContainer>
        <h2 class="text-2xl font-bold text-slate-950">最新教程 / 实用文章</h2>
        <p class="mt-2 text-sm text-slate-600">教程卡片优先展示可落地任务、更新时间和阅读热度。</p>
        <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <TutorialCard
            v-for="tutorial in tutorials"
            :key="tutorial.title"
            v-bind="tutorial"
          />
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-2">
          <NuxtLink
            v-for="article in testedArticles"
            :key="article.title"
            :to="article.href"
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
          >
            <BaseBadge tone="primary">实测文章</BaseBadge>
            <h3 class="mt-3 text-lg font-bold text-slate-950">{{ article.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ article.summary }}</p>
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section class="border-y border-slate-200 bg-white py-12">
      <PageContainer class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h2 class="text-2xl font-bold text-slate-950">用户投稿</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            欢迎提交中文用户可用的 AI 工具、教程案例或提示词。投稿会人工审核，收录不等于推荐，商业合作必须标注。
          </p>
          <div class="mt-5 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/submit" class="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700">
              提交工具
            </NuxtLink>
            <NuxtLink to="/cooperation" class="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
              广告与合作
            </NuxtLink>
          </div>
        </div>
        <div class="grid gap-3 sm:grid-cols-3">
          <article v-for="item in submissions" :key="item.name" class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-blue-700 shadow-sm">{{ item.name.slice(0, 1) }}</span>
            <h3 class="mt-4 font-bold text-slate-950">{{ item.name }}</h3>
            <p class="mt-1 text-xs text-slate-500">{{ item.user }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <BaseBadge>{{ item.category }}</BaseBadge>
              <BaseBadge :tone="item.status === 'approved' ? 'success' : 'warning'">{{ item.status }}</BaseBadge>
            </div>
            <p class="mt-3 text-xs text-slate-500">{{ item.date }}</p>
          </article>
        </div>
      </PageContainer>
    </section>

    <section ref="resultsSection" class="scroll-mt-24 py-12">
      <PageContainer>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">热门 AI 工具</h2>
            <p class="mt-2 text-sm text-slate-600">
              {{ normalizedQuery ? `搜索“${searchQuery}”找到 ${filteredTools.length} 个工具` : '统一展示免费情况、中文支持、平台、适合人群、更新时间和教程状态。' }}
            </p>
          </div>
          <NuxtLink to="/category/ai-writing" class="text-sm font-semibold text-blue-600">查看工具库</NuxtLink>
        </div>

        <div v-if="filteredTools.length" class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ToolCard v-for="tool in filteredTools" :key="tool.slug" :tool="tool" />
        </div>
        <div v-else class="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h3 class="text-lg font-bold text-slate-950">暂时没有找到相关工具</h3>
          <p class="mt-2 text-sm text-slate-600">试试搜索：AI 绘图、PPT、论文、编程、视频</p>
          <button type="button" class="mt-5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700" @click="clearSearch">
            清空搜索
          </button>
        </div>
      </PageContainer>
    </section>
  </div>
</template>











