<script setup lang="ts">
import { Clipboard, Copy, FileText, Sparkles } from 'lucide-vue-next'
import type { MockPrompt } from '~~/data/mock-prompts'

const props = defineProps<{
  prompt?: MockPrompt
  title?: string
  scene?: string
  content?: string
  href?: string
  models?: string[]
  tags?: string[]
  summary?: string
}>()

const copied = ref(false)
const failed = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const item = computed(() => props.prompt)
const title = computed(() => item.value?.title || props.title || '')
const scene = computed(() => item.value?.task || props.scene || '提示词')
const content = computed(() => item.value?.body || props.content || '')
const href = computed(() => item.value?.slug ? `/prompts/${item.value.slug}` : props.href || '#')
const hasValidSlug = computed(() => href.value !== '#')
const models = computed(() => item.value?.models || props.models || [])
const tags = computed(() => item.value?.tags || props.tags || [])
const summary = computed(() => item.value?.description || props.summary || '')
const variableCount = computed(() => item.value?.variables?.length ?? 0)
const copyCount = computed(() => item.value?.copyCount ?? 0)
const difficultyLabel = computed(() => {
  const difficulty = item.value?.difficulty
  if (difficulty === 'advanced') return '高级'
  if (difficulty === 'intermediate') return '进阶'
  return '新手'
})
const { requireLogin } = useAuth()

async function copyPrompt() {
  if (!import.meta.client) return
  const ok = await requireLogin('/prompts')
  if (!ok) return
  try {
    await navigator.clipboard.writeText(content.value)
    copied.value = true
    failed.value = false
  } catch {
    failed.value = true
    copied.value = false
  }
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    copied.value = false
    failed.value = false
  }, 1800)
}

async function openPrompt() {
  if (!hasValidSlug.value) {
    console.warn('[PromptCard] prompt slug is missing')
    return
  }
  await navigateTo(href.value)
}
</script>

<template>
  <article class="flex h-full flex-col rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/70">
    <div class="flex items-start justify-between gap-3">
      <div class="flex flex-wrap gap-2">
        <BaseBadge tone="primary">{{ scene }}</BaseBadge>
        <BaseBadge>{{ difficultyLabel }}</BaseBadge>
      </div>
      <span class="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
        <Clipboard class="h-5 w-5" />
      </span>
    </div>

    <h3 class="mt-4 text-lg font-bold text-slate-950">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">{{ summary }}</p>

    <pre class="mt-4 line-clamp-5 min-h-[118px] whitespace-pre-wrap rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-inset ring-slate-100">{{ content }}</pre>

    <div class="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
      <span class="rounded-xl bg-slate-50 px-2 py-2">
        <strong class="block text-sm text-slate-950">{{ models.slice(0, 2).join(' / ') }}</strong>
        适用模型
      </span>
      <span class="rounded-xl bg-slate-50 px-2 py-2">
        <strong class="block text-sm text-slate-950">{{ variableCount }}</strong>
        变量
      </span>
      <span class="rounded-xl bg-slate-50 px-2 py-2">
        <strong class="block text-sm text-slate-950">{{ copyCount }}</strong>
        复制
      </span>
    </div>

    <div v-if="tags.length" class="mt-4 flex flex-wrap gap-2">
      <BaseBadge v-for="tag in tags.slice(0, 4)" :key="tag">{{ tag }}</BaseBadge>
    </div>

    <p v-if="failed" class="mt-3 text-xs font-semibold text-red-600">复制失败，请手动复制</p>
    <p v-else-if="copied" class="mt-3 text-xs font-semibold text-emerald-600">已复制</p>

    <div class="mt-auto flex items-center gap-3 pt-5">
      <button
        type="button"
        class="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
        @click="copyPrompt"
      >
        <Copy class="h-4 w-4" />
        {{ copied ? '已复制' : '复制提示词' }}
      </button>
      <button
        type="button"
        class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="!hasValidSlug"
        @click.stop="openPrompt"
      >
        <FileText class="h-4 w-4" />
        详情
      </button>
    </div>
  </article>
</template>
