<script setup lang="ts">
import { BookOpen, CalendarDays, ExternalLink, Monitor, UsersRound } from 'lucide-vue-next'
import type { Tool } from '~~/types/tool'

const props = defineProps<{
  tool: Tool
}>()

const pricingTone = {
  free: 'success',
  freemium: 'primary',
  paid: 'default'
} as const

const pricingLabelMap: Record<string, string> = {
  free: '免费',
  freemium: '有免费额度',
  paid: '付费'
}

const chineseLabelMap: Record<string, string> = {
  excellent: '优秀',
  good: '良好',
  normal: '一般'
}

const pricingKey = computed(() => props.tool.pricing || props.tool.freeStatus)
const pricingLabel = computed(() => pricingLabelMap[pricingKey.value] || props.tool.freeStatus)
const pricingToneValue = computed(() => pricingTone[pricingKey.value as keyof typeof pricingTone] || 'default')
const chineseLabel = computed(() => chineseLabelMap[props.tool.chineseSupport] || props.tool.chineseSupport)
const audiences = computed(() => props.tool.audiences?.length ? props.tool.audiences : props.tool.audience)
const platforms = computed(() => props.tool.platforms?.length ? props.tool.platforms.join(' / ') : props.tool.platform)
</script>

<template>
  <NuxtLink
    :to="`/tool/${tool.slug}`"
    class="group flex min-h-[360px] flex-col rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex min-w-0 items-center gap-3">
        <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :category="tool.category" :size="48" />
        <div class="min-w-0">
          <h3 class="truncate text-lg font-bold text-slate-950">{{ tool.name }}</h3>
          <BaseBadge class="mt-1">{{ tool.category }}</BaseBadge>
        </div>
      </div>
      <div class="flex shrink-0 flex-col items-end gap-2">
        <BaseBadge :tone="pricingToneValue">{{ pricingLabel }}</BaseBadge>
        <BaseBadge v-if="tool.hasTutorial" tone="primary">附教程</BaseBadge>
      </div>
    </div>

    <p class="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{{ tool.description || tool.summary }}</p>

    <div class="mt-5 grid gap-3 text-sm text-slate-600">
      <div class="flex items-center gap-2">
        <UsersRound class="h-4 w-4 shrink-0 text-blue-600" />
        <span class="line-clamp-1">适合 {{ audiences.join(' / ') }}</span>
      </div>
      <div class="flex items-center gap-2">
        <Monitor class="h-4 w-4 shrink-0 text-violet-600" />
        <span class="line-clamp-1">{{ platforms }}</span>
      </div>
      <div class="flex items-center gap-2">
        <BookOpen class="h-4 w-4 shrink-0 text-emerald-600" />
        <span>中文支持：{{ chineseLabel }}</span>
      </div>
    </div>

    <div class="mt-5 flex flex-wrap gap-2">
      <BaseBadge v-for="tag in tool.tags.slice(0, 3)" :key="tag">{{ tag }}</BaseBadge>
    </div>

    <div class="mt-auto flex items-center justify-between gap-4 pt-5">
      <span class="inline-flex items-center gap-1.5 text-xs text-slate-500">
        <CalendarDays class="h-3.5 w-3.5" />
        {{ tool.updatedAt }}
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition group-hover:bg-blue-600">
        查看详情
        <ExternalLink class="h-3.5 w-3.5" />
      </span>
    </div>
  </NuxtLink>
</template>
