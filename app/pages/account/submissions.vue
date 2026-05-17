<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

const { initAuth, accessToken } = useAuth()

const loading = ref(true)
const error = ref('')
const submissions = ref<any[]>([])

const statusLabel: Record<string, string> = {
  pending: '待审核',
  approved: '已通过',
  rejected: '已拒绝',
  needs_edit: '需要修改'
}

const typeLabel: Record<string, string> = {
  tool: '工具',
  tutorial: '教程',
  prompt: '提示词',
  comparison: '工具对比'
}

function statusClass(status: string) {
  if (status === 'approved') return 'bg-emerald-50 text-emerald-700 ring-emerald-200'
  if (status === 'rejected') return 'bg-red-50 text-red-700 ring-red-200'
  if (status === 'needs_edit') return 'bg-amber-50 text-amber-700 ring-amber-200'
  return 'bg-blue-50 text-blue-700 ring-blue-200'
}

async function loadSubmissions() {
  loading.value = true
  error.value = ''
  try {
    const data = await $fetch<{ submissions: any[] }>('/api/submissions/my', {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    submissions.value = data.submissions || []
  } catch (err: any) {
    error.value = err?.data?.statusMessage || err?.message || '加载投稿记录失败。'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await initAuth()
  await loadSubmissions()
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-10">
      <PageContainer>
        <BaseBadge tone="primary">个人中心</BaseBadge>
        <h1 class="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">我的投稿</h1>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          查看你提交的工具、教程、提示词和工具对比的审核进度。审核通过、拒绝或需要修改时，这里会同步显示状态和审核备注。
        </p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <p v-if="error" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>

        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div v-if="loading" class="p-6 text-sm text-slate-500">正在加载投稿记录...</div>
          <div v-else-if="!submissions.length" class="p-8 text-center">
            <h2 class="text-lg font-bold text-slate-950">还没有投稿记录</h2>
            <p class="mt-2 text-sm text-slate-500">你可以提交 AI 工具、教程、提示词或工具对比，提交后会进入人工审核队列。</p>
            <NuxtLink to="/submit?type=tool" class="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              去投稿
            </NuxtLink>
          </div>
          <div v-else class="divide-y divide-slate-100">
            <article v-for="item in submissions" :key="item.id" class="grid gap-4 p-5 lg:grid-cols-[1fr_auto]">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{{ typeLabel[item.type] || item.type }}</span>
                  <span class="rounded-full px-3 py-1 text-xs font-semibold ring-1" :class="statusClass(item.status)">
                    {{ statusLabel[item.status] || item.status }}
                  </span>
                </div>
                <h2 class="mt-3 text-lg font-bold text-slate-950">{{ item.title }}</h2>
                <p class="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
                <p v-if="item.review_note" class="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                  审核备注：{{ item.review_note }}
                </p>
              </div>
              <div class="text-sm text-slate-500 lg:text-right">
                <p>提交时间：{{ item.created_at ? new Date(item.created_at).toLocaleString('zh-CN') : '-' }}</p>
                <p class="mt-2">更新时间：{{ item.updated_at ? new Date(item.updated_at).toLocaleString('zh-CN') : '-' }}</p>
              </div>
            </article>
          </div>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
