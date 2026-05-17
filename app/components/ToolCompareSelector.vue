<script setup lang="ts">
import { Search, X } from 'lucide-vue-next'
import type { MockTool } from '~~/data/mock-tools'

const props = defineProps<{
  tools: MockTool[]
  initialSlugs?: string[]
}>()

const emit = defineEmits<{
  compare: [tools: MockTool[]]
}>()

const search = ref('')
const category = ref('all')
const selectedSlugs = ref<string[]>([])
const loginRequired = ref(false)
const { initAuth, isLoggedIn } = useAuth()

const categories = computed(() => {
  const set = new Set<string>()
  props.tools.forEach((tool) => tool.categorySlugs.forEach((slug) => set.add(slug)))
  return ['all', ...set]
})

const categoryLabel: Record<string, string> = {
  all: '全部',
  'ai-chat': 'AI 对话',
  'ai-writing': 'AI 写作',
  'ai-image': 'AI 绘图',
  'ai-video': 'AI 视频',
  'ai-ppt': 'AI PPT',
  'ai-office': 'AI 办公',
  'ai-code': 'AI 编程',
  'ai-research': 'AI 研究',
  'ai-search': 'AI 搜索',
  'ai-design': 'AI 设计'
}

const selectedTools = computed(() => selectedSlugs.value.map((slug) => props.tools.find((tool) => tool.slug === slug)).filter(Boolean) as MockTool[])
const filteredTools = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  return props.tools.filter((tool) => {
    const matchKeyword = !keyword || [tool.name, tool.summary, tool.category, ...tool.tags].join(' ').toLowerCase().includes(keyword)
    const matchCategory = category.value === 'all' || tool.categorySlugs.includes(category.value)
    return matchKeyword && matchCategory
  })
})

watch(
  () => props.initialSlugs,
  (slugs) => {
    if (!slugs?.length) return
    selectedSlugs.value = slugs.filter((slug) => props.tools.some((tool) => tool.slug === slug)).slice(0, 4)
    if (selectedSlugs.value.length >= 2) loginRequired.value = true
  },
  { immediate: true }
)

function toggleTool(slug: string) {
  if (selectedSlugs.value.includes(slug)) {
    selectedSlugs.value = selectedSlugs.value.filter((item) => item !== slug)
    return
  }
  if (selectedSlugs.value.length >= 4) return
  selectedSlugs.value = [...selectedSlugs.value, slug]
}

function removeTool(slug: string) {
  selectedSlugs.value = selectedSlugs.value.filter((item) => item !== slug)
}

function startCompare() {
  if (selectedTools.value.length < 2) return
  if (!isLoggedIn.value) {
    loginRequired.value = true
    return
  }
  loginRequired.value = false
  emit('compare', selectedTools.value)
}

onMounted(async () => {
  await initAuth()
  if (selectedTools.value.length >= 2 && isLoggedIn.value) {
    loginRequired.value = false
    emit('compare', selectedTools.value)
  }
})
</script>

<template>
  <section class="rounded-[24px] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/60">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-slate-950">选择工具对比</h2>
        <p class="mt-2 text-sm text-slate-600">选择 2-4 个 AI 工具，生成一张可横向比较的能力表。</p>
      </div>
      <button
        type="button"
        class="min-h-11 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        :disabled="selectedTools.length < 2"
        @click="startCompare"
      >
        {{ selectedTools.length < 2 ? '至少选择 2 个工具开始对比' : '生成对比' }}
      </button>
    </div>

    <LoginRequiredCard
      v-if="loginRequired"
      class="mt-5"
      :redirect="`/compare?tools=${selectedSlugs.join(',')}`"
      description="登录后可以选择 2-4 个 AI 工具生成完整对比表。"
    />

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="tool in selectedTools"
        :key="tool.slug"
        class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800"
      >
        <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="24" rounded="rounded-lg" />
        {{ tool.name }}
        <button type="button" class="text-blue-500 hover:text-blue-800" @click="removeTool(tool.slug)">
          <X class="h-4 w-4" />
        </button>
      </span>
    </div>

    <div class="mt-5 grid gap-3 md:grid-cols-[1fr_220px]">
      <label class="relative block">
        <Search class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          v-model="search"
          type="search"
          placeholder="搜索工具名称，例如 ChatGPT、DeepSeek、Cursor"
          class="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
      </label>
      <select v-model="category" class="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-blue-500">
        <option v-for="item in categories" :key="item" :value="item">{{ categoryLabel[item] || item }}</option>
      </select>
    </div>

    <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <button
        v-for="tool in filteredTools"
        :key="tool.slug"
        type="button"
        class="rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/50"
        :class="selectedSlugs.includes(tool.slug) ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'"
        :disabled="!selectedSlugs.includes(tool.slug) && selectedSlugs.length >= 4"
        @click="toggleTool(tool.slug)"
      >
        <div class="flex items-center gap-3">
          <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="40" rounded="rounded-xl" />
          <div class="min-w-0">
            <p class="truncate font-bold text-slate-950">{{ tool.name }}</p>
            <p class="text-xs text-slate-500">{{ tool.category }}</p>
          </div>
        </div>
        <p class="mt-3 line-clamp-2 text-xs leading-5 text-slate-600">{{ tool.summary }}</p>
      </button>
    </div>
  </section>
</template>
