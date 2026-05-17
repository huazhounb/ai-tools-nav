<script setup lang="ts">
definePageMeta({ middleware: 'admin' })

const { initAuth, accessToken } = useAuth()
const loading = ref(true)
const error = ref('')
const stats = ref({
  usersTotal: 0,
  usersToday: 0,
  submissionsTotal: 0,
  submissionsPending: 0,
  submissionsApproved: 0,
  submissionsRejected: 0,
  toolLikesTotal: 0,
  submissionsToday: 0
})

onMounted(async () => {
  await initAuth()
  await loadStats()
})

async function loadStats() {
  loading.value = true
  error.value = ''
  try {
    stats.value = await $fetch('/api/admin/stats', {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
  } catch (err: any) {
    error.value = err?.data?.statusMessage || err?.message || '统计数据加载失败。'
  } finally {
    loading.value = false
  }
}

const cards = computed(() => [
  { label: '总用户数', value: stats.value.usersTotal },
  { label: '今日新增用户', value: stats.value.usersToday },
  { label: '总投稿数', value: stats.value.submissionsTotal },
  { label: '待审核投稿', value: stats.value.submissionsPending },
  { label: '已通过投稿', value: stats.value.submissionsApproved },
  { label: '已拒绝投稿', value: stats.value.submissionsRejected },
  { label: '工具点赞数', value: stats.value.toolLikesTotal },
  { label: '今日新增投稿', value: stats.value.submissionsToday }
])
</script>

<template>
  <AdminLayout title="管理后台" description="查看用户、投稿、内容审核和站点运营数据。">
    <p v-if="error" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
    <div v-if="loading" class="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">正在加载统计...</div>
    <div v-else class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <AdminStatCard v-for="item in cards" :key="item.label" :label="item.label" :value="item.value" />
    </div>
  </AdminLayout>
</template>
