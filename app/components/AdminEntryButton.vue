<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'

const { initAuth, isAdmin } = useAuth()

onMounted(() => {
  initAuth()
})
</script>

<template>
  <NuxtLink
    v-if="isAdmin"
    to="/admin"
    class="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
    aria-label="进入管理后台"
  >
    <ShieldCheck class="h-4 w-4" />
    <span class="hidden sm:inline">管理</span>
  </NuxtLink>
</template>
