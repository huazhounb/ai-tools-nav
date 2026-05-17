<script setup lang="ts">
import type { MockRanking } from '~~/data/mock-rankings'
import { mockTools } from '~~/data/mock-tools'

const props = defineProps<{
  ranking: MockRanking
}>()

const topTools = computed(() => props.ranking.tools.slice(0, 3).map((item) => mockTools.find((tool) => tool.slug === item.slug)).filter(Boolean))
</script>

<template>
  <NuxtLink
    :to="`/rankings/${ranking.slug}`"
    class="group block rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/70"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex -space-x-2">
        <BrandIcon
          v-for="tool in topTools"
          :key="tool!.slug"
          :icon="tool!.icon"
          :slug="tool!.slug"
          :name="tool!.name"
          :size="40"
          rounded="rounded-xl"
          class="ring-2 ring-white"
        />
      </div>
      <BaseBadge tone="primary">{{ ranking.tools.length }} 个工具</BaseBadge>
    </div>
    <h3 class="mt-5 text-lg font-bold text-slate-950">{{ ranking.title }}</h3>
    <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{{ ranking.description }}</p>
    <div class="mt-4 rounded-2xl bg-amber-50 p-3">
      <p class="text-xs font-semibold text-amber-800">榜单规则</p>
      <p class="mt-1 line-clamp-2 text-sm leading-6 text-amber-900">{{ ranking.rules.join(' / ') }}</p>
    </div>
    <div class="mt-5 flex items-center justify-between">
      <span class="text-xs text-slate-500">更新 {{ ranking.updatedAt }}</span>
      <span class="text-sm font-semibold text-blue-600 group-hover:text-blue-700">查看榜单</span>
    </div>
  </NuxtLink>
</template>

