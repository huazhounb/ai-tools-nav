<script setup lang="ts">
import type { SponsorSlot as SponsorSlotModel } from '~~/types/ad'

const props = withDefaults(
  defineProps<{
    slot?: SponsorSlotModel
    compact?: boolean
  }>(),
  {
    compact: false
  }
)

const isExternal = computed(() => Boolean(props.slot?.href.startsWith('http')))
</script>

<template>
  <article
    v-if="slot"
    class="relative overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-sm"
    :class="{ 'p-4': compact }"
  >
    <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-200/50 blur-2xl" />
    <div class="absolute -bottom-12 left-12 h-28 w-28 rounded-full bg-blue-200/60 blur-2xl" />

    <div class="relative flex items-start justify-between gap-3">
      <div>
        <p class="text-xs font-semibold uppercase tracking-normal text-violet-700">{{ slot.sponsorName }}</p>
        <h2 class="mt-2 font-bold text-slate-950" :class="compact ? 'text-base' : 'text-2xl'">{{ slot.title }}</h2>
      </div>
      <BaseBadge tone="warning">{{ slot.disclosure }}</BaseBadge>
    </div>

    <p class="relative mt-4 text-sm leading-6 text-slate-700">{{ slot.summary }}</p>
    <p class="relative mt-3 text-xs leading-5 text-amber-800">{{ slot.relevance }}</p>

    <div v-if="slot.audience.length" class="relative mt-4 flex flex-wrap gap-2">
      <BaseBadge v-for="item in slot.audience.slice(0, 3)" :key="item">{{ item }}</BaseBadge>
    </div>

    <a
      v-if="isExternal"
      :href="slot.href"
      target="_blank"
      rel="noopener noreferrer sponsored"
      class="relative mt-5 inline-flex min-h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 ring-1 ring-violet-100 transition hover:bg-violet-50"
    >
      {{ slot.ctaLabel }}
    </a>
    <NuxtLink
      v-else
      :to="slot.href"
      class="relative mt-5 inline-flex min-h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 ring-1 ring-violet-100 transition hover:bg-violet-50"
    >
      {{ slot.ctaLabel }}
    </NuxtLink>
  </article>
</template>
