<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { handleAuthCallback } = useAuth()

const status = ref('正在完成登录...')
const error = ref('')
const redirectTarget = computed(() => String(route.query.redirect || '/'))

onMounted(async () => {
  try {
    await handleAuthCallback()
    status.value = '登录成功，正在跳转...'
    await navigateTo(redirectTarget.value)
  } catch (err: any) {
    error.value = err?.message || '登录回调处理失败，请重新登录。'
    status.value = '登录失败'
  }
})
</script>

<template>
  <div class="bg-slate-50 py-14">
    <PageContainer class="max-w-xl">
      <section class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-blue-100/50">
        <BaseBadge tone="primary">登录回调</BaseBadge>
        <h1 class="mt-4 text-2xl font-black text-slate-950">{{ status }}</h1>
        <p v-if="!error" class="mt-3 text-sm text-slate-600">请稍候，正在确认 Supabase 登录状态。</p>
        <p v-else class="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
        <NuxtLink
          v-if="error"
          :to="{ path: '/login', query: { redirect: redirectTarget } }"
          class="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          返回登录
        </NuxtLink>
      </section>
    </PageContainer>
  </div>
</template>
