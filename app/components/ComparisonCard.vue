<script setup lang="ts">
import type { MockComparison } from '~~/data/mock-comparisons'
import { mockTools } from '~~/data/mock-tools'

const props = defineProps<{
  comparison: MockComparison
}>()

const tools = computed(() => props.comparison.toolSlugs.map((slug) => mockTools.find((tool) => tool.slug === slug)).filter(Boolean))
const { requireLogin } = useAuth()

async function openComparison() {
  const href = `/compare/${props.comparison.slug}`
  const ok = await requireLogin(href)
  if (ok) await navigateTo(href)
}
</script>

<template>
  <NuxtLink
    :to="`/compare/${comparison.slug}`"
    @click.prevent="openComparison"
    class="group block rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/70"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex -space-x-2">
        <BrandIcon
          v-for="tool in tools"
          :key="tool!.slug"
          :icon="tool!.icon"
          :slug="tool!.slug"
          :name="tool!.name"
          :size="38"
          rounded="rounded-xl"
          class="ring-2 ring-white"
        />
      </div>
      <BaseBadge tone="primary">{{ tools.length }} 工具</BaseBadge>
    </div>
    <h3 class="mt-5 text-lg font-bold text-slate-950">{{ comparison.title }}</h3>
    <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{{ comparison.description }}</p>
    <p class="mt-4 rounded-2xl bg-blue-50 p-3 text-sm font-medium leading-6 text-blue-800">{{ comparison.conclusion }}</p>
    <div class="mt-5 flex items-center justify-between">
      <span class="text-xs text-slate-500">更新 {{ comparison.updatedAt }}</span>
      <span class="text-sm font-semibold text-blue-600 group-hover:text-blue-700">查看完整对比</span>
    </div>
  </NuxtLink>
</template>
