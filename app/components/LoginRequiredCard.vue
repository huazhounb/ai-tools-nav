<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
  redirect?: string
}>()

const route = useRoute()
const target = computed(() => props.redirect || route.fullPath || '/')
</script>

<template>
  <div class="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
    <h3 class="text-lg font-bold text-slate-950">{{ title || '登录后继续使用' }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">
      {{ description || '登录后可以查看完整教程、复制提示词、生成工具对比和保存你的使用记录。' }}
    </p>
    <div class="mt-4 flex flex-wrap gap-3">
      <NuxtLink
        :to="{ path: '/login', query: { redirect: target } }"
        class="inline-flex min-h-10 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700"
      >
        登录
      </NuxtLink>
      <NuxtLink
        :to="{ path: '/register', query: { redirect: target } }"
        class="inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
      >
        注册
      </NuxtLink>
    </div>
  </div>
</template>
