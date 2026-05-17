<script setup lang="ts">
defineProps<{
  items: Array<{ name: string, href?: string }>
}>()
</script>

<template>
  <Breadcrumb :items="items" />
</template>
