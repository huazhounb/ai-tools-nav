<script setup lang="ts">
defineProps<{
  label: string
  value: number | string
  hint?: string
}>()
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-sm text-slate-500">{{ label }}</p>
    <p class="mt-2 text-3xl font-black text-slate-950">{{ value }}</p>
    <p v-if="hint" class="mt-2 text-xs text-slate-500">{{ hint }}</p>
  </div>
</template>
