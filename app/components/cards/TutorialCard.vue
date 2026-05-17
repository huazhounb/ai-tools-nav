<script setup lang="ts">
import { Clock, Eye, GraduationCap, Wrench } from 'lucide-vue-next'
import type { MockTutorial } from '~~/data/mock-tutorials'
import { mockTools } from '~~/data/mock-tools'
import type { ToolIcon } from '~~/types/tool'
import { getTutorialCoverStyle, getTutorialToolSlugs } from '~/utils/tutorial-style'

const props = defineProps<{
  tutorial?: MockTutorial
  title?: string
  type?: string
  summary?: string
  updatedAt?: string
  views?: string | number
  href?: string
  gradient?: string
  keyword?: string
  icon?: string | ToolIcon
}>()

const tutorialCoverGradientClassSafelist = [
  'from-slate-700 via-slate-800 to-zinc-900',
  'from-blue-500 via-cyan-500 to-sky-500',
  'from-violet-500 via-indigo-500 to-blue-500',
  'from-indigo-500 via-purple-500 to-fuchsia-500',
  'from-pink-500 via-rose-500 to-orange-400',
  'from-zinc-800 via-slate-700 to-blue-700',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-cyan-500 via-blue-500 to-purple-500',
  'from-amber-400 via-orange-500 to-red-500',
  'from-blue-600 via-violet-600 to-fuchsia-600',
  'from-purple-500 via-pink-500 to-rose-500'
].join(' ')
void tutorialCoverGradientClassSafelist

const item = computed(() => props.tutorial)
const coverStyle = computed(() => getTutorialCoverStyle(item.value || {
  type: props.type,
  keyword: props.keyword,
  gradient: props.gradient,
  coverGradient: props.gradient
}))
const title = computed(() => item.value?.title || props.title || '')
const type = computed(() => coverStyle.value.label || props.type || '教程')
const summary = computed(() => item.value?.description || props.summary || '')
const updatedAt = computed(() => item.value?.updatedAt || props.updatedAt || '')
const views = computed(() => {
  const value = item.value?.views ?? props.views ?? 0
  return typeof value === 'number' ? value.toLocaleString('zh-CN') : value
})
const href = computed(() => item.value?.slug ? `/tutorial/${item.value.slug}` : props.href || '#')
const gradient = computed(() => coverStyle.value.gradientClass || 'from-blue-500 via-indigo-500 to-violet-500')
const keyword = computed(() => coverStyle.value.accentText || item.value?.keyword || props.keyword || title.value.slice(0, 8) || 'AI LEARNING')
const relatedToolSlugs = computed(() => getTutorialToolSlugs(item.value))
const firstTool = computed(() => mockTools.find((tool) => tool.slug === coverStyle.value.iconToolSlug) || mockTools.find((tool) => tool.slug === relatedToolSlugs.value[0]))
const relatedTools = computed(() => relatedToolSlugs.value.map((slug) => mockTools.find((tool) => tool.slug === slug)).filter(Boolean).slice(0, 3))
const icon = computed(() => props.icon || firstTool.value?.icon)
const difficulty = computed(() => item.value?.difficulty || '新手')
const duration = computed(() => item.value?.estimatedMinutes ? `${item.value.estimatedMinutes} 分钟` : item.value?.duration || '')
const toolNames = computed(() => relatedTools.value.length ? relatedTools.value.map((tool) => tool!.name) : item.value?.toolNames?.length ? item.value.toolNames : firstTool.value ? [firstTool.value.name] : [])
const hasValidSlug = computed(() => href.value !== '#')
</script>

<template>
  <NuxtLink
    :to="href"
    :aria-disabled="!hasValidSlug"
    class="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/70"
    @click="!hasValidSlug && console.warn('[TutorialCard] tutorial slug is missing')"
  >
    <div class="relative h-44 overflow-hidden bg-gradient-to-br p-5 text-white" :class="gradient">
      <div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
      <div class="absolute -bottom-8 left-8 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
      <div class="absolute inset-0 opacity-25" style="background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 22px 22px;" />
      <div class="relative flex items-start justify-between gap-4">
        <div class="flex items-center gap-2">
          <div v-if="relatedTools.length" class="flex -space-x-2">
            <BrandIcon
              v-for="tool in relatedTools"
              :key="tool!.slug"
              :icon="tool!.icon"
              :slug="tool!.slug"
              :name="tool!.name"
              :size="tool!.slug === firstTool?.slug ? 50 : 38"
              rounded="rounded-2xl"
              class="ring-2 ring-white/80"
            />
          </div>
          <BrandIcon v-else :icon="icon" :slug="firstTool?.slug" :name="firstTool?.name || keyword" :size="50" rounded="rounded-2xl" />
        </div>
        <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">{{ type }}</span>
      </div>
      <div class="relative mt-7">
        <p class="text-xs font-semibold uppercase tracking-wide text-white/75">AI LEARNING</p>
        <p class="mt-1 text-3xl font-black leading-none">{{ keyword }}</p>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap gap-2">
        <BaseBadge tone="primary">{{ difficulty }}</BaseBadge>
        <BaseBadge v-if="duration">{{ duration }}</BaseBadge>
      </div>
      <h3 class="mt-4 text-lg font-bold leading-6 text-slate-950">{{ title }}</h3>
      <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{{ summary }}</p>

      <div class="mt-4 grid gap-2 text-sm text-slate-600">
        <span class="inline-flex items-center gap-2">
          <Wrench class="h-4 w-4 text-blue-600" />
          {{ toolNames.join(' / ') || 'AI 工具' }}
        </span>
        <span class="inline-flex items-center gap-2">
          <Clock class="h-4 w-4 text-violet-600" />
          {{ duration || '约 15 分钟' }}
        </span>
        <span class="inline-flex items-center gap-2">
          <Eye class="h-4 w-4 text-emerald-600" />
          {{ views }} 阅读
        </span>
      </div>

      <div class="mt-auto flex items-center justify-between gap-4 pt-5">
        <span class="text-xs text-slate-500">更新 {{ updatedAt }}</span>
        <span class="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition group-hover:bg-blue-600">
          <GraduationCap class="h-3.5 w-3.5" />
          查看教程
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
