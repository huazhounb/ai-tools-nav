<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'default' | 'primary' | 'success' | 'warning'
  }>(),
  {
    tone: 'default'
  }
)
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium"
    :class="{
      'border-border bg-white text-muted': tone === 'default',
      'border-blue-200 bg-blue-50 text-primary': tone === 'primary',
      'border-emerald-200 bg-emerald-50 text-emerald-700': tone === 'success',
      'border-amber-200 bg-amber-50 text-amber-700': tone === 'warning'
    }"
  >
    <slot />
  </span>
</template>
