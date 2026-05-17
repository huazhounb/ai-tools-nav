<script setup lang="ts">
const props = defineProps<{
  data: Record<string, unknown> | Record<string, unknown>[]
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(props.data)
    }
  ]
})
</script>

<template>
  <span class="hidden" aria-hidden="true" />
</template>
