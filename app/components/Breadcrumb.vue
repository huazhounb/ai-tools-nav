<script setup lang="ts">
defineProps<{
  items: Array<{ name: string, href?: string }>
}>()
</script>

<template>
  <nav aria-label="面包屑" class="flex flex-wrap items-center gap-2 text-sm text-slate-500">
    <template v-for="(item, index) in items" :key="`${item.name}-${index}`">
      <NuxtLink v-if="item.href && index < items.length - 1" :to="item.href" class="hover:text-blue-600">
        {{ item.name }}
      </NuxtLink>
      <span v-else class="font-medium text-slate-700">{{ item.name }}</span>
      <span v-if="index < items.length - 1" class="text-slate-300">/</span>
    </template>
  </nav>
</template>
