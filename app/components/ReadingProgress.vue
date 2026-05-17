<script setup lang="ts">
const progress = ref(0)

function updateProgress() {
  if (!import.meta.client) return
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - window.innerHeight
  progress.value = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <div class="fixed left-0 top-0 z-[80] h-1 w-full bg-transparent" aria-hidden="true">
    <div class="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 transition-[width] duration-150" :style="{ width: `${progress}%` }" />
  </div>
</template>
