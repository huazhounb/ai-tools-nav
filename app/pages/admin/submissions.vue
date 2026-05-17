<script setup lang="ts">
definePageMeta({ middleware: 'admin' })

const { initAuth, accessToken } = useAuth()
const route = useRoute()
const router = useRouter()

const loading = ref(true)
const publishing = ref(false)
const submissions = ref<any[]>([])
const statusFilter = ref('all')
const typeFilter = ref('all')
const search = ref('')
const page = ref(1)
const pageSize = ref(20)
const total = ref(0)
const toast = reactive<{ message: string, type: 'success' | 'error' | 'warning' | 'info' }>({
  message: '',
  type: 'info'
})

const typeTitle: Record<string, string> = {
  all: '投稿审核',
  tool: '工具审核',
  tutorial: '教程审核',
  prompt: '提示词审核',
  comparison: '工具对比审核'
}

const pageTitle = computed(() => typeTitle[typeFilter.value] || '投稿审核')

function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
  toast.message = message
  toast.type = type
}

function clearToast() {
  toast.message = ''
}

function syncTypeFromRoute() {
  const nextType = String(route.query.type || 'all')
  typeFilter.value = ['tool', 'tutorial', 'prompt', 'comparison'].includes(nextType) ? nextType : 'all'
}

onMounted(async () => {
  await initAuth()
  syncTypeFromRoute()
  await loadSubmissions()
})

watch(() => route.query.type, async () => {
  syncTypeFromRoute()
  page.value = 1
  await loadSubmissions()
})

watch([statusFilter, search, page], () => loadSubmissions())

watch(typeFilter, async (value) => {
  page.value = 1
  const query = { ...route.query }
  if (value === 'all') delete query.type
  else query.type = value
  await router.replace({ path: '/admin/submissions', query })
  await loadSubmissions()
})

async function loadSubmissions() {
  loading.value = true
  try {
    const data = await $fetch<{ submissions: any[], total?: number }>('/api/admin/submissions', {
      query: {
        status: statusFilter.value,
        type: typeFilter.value,
        search: search.value,
        page: page.value,
        pageSize: pageSize.value
      },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    submissions.value = data.submissions || []
    total.value = data.total || submissions.value.length
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '加载投稿失败。', 'error')
  } finally {
    loading.value = false
  }
}

async function quickReview(id: string, status: 'approved' | 'rejected' | 'needs_edit') {
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${id}/review`, {
      method: 'POST',
      body: { status },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.success === false ? data.message : status === 'approved' ? '审核通过，内容已发布到前台。' : '审核状态已更新。', data.success === false ? 'warning' : 'success')
    await loadSubmissions()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '审核操作失败。', 'error')
  }
}

async function publishApproved() {
  if (!window.confirm('确定发布所有“已通过但未发布”的投稿吗？')) return
  publishing.value = true
  try {
    const data = await $fetch<any>('/api/admin/submissions/publish-approved', {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(`补发布完成：共 ${data.total} 条，成功 ${data.publishedCount} 条，失败 ${data.failedCount} 条。`, data.failedCount ? 'warning' : 'success')
    await loadSubmissions()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '批量发布失败。', 'error')
  } finally {
    publishing.value = false
  }
}

async function unpublishSubmission(id: string) {
  if (!window.confirm('确定要从前台下架这个内容吗？下架后前台将不再显示，但审核记录会保留。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${id}/unpublish`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已下架前台内容。')
    await loadSubmissions()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '下架失败。', 'error')
  }
}

async function deleteSubmission(id: string) {
  if (!window.confirm('确定要删除这条审核记录吗？如果内容已发布，前台内容不会被自动下架。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${id}/delete`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已删除审核记录。')
    await loadSubmissions()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '删除审核记录失败。', 'error')
  }
}

async function deleteWithTarget(id: string) {
  if (!window.confirm('确定要删除审核记录并下架前台内容吗？此操作会让前台不再显示该内容。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${id}/delete-with-target`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已下架前台内容并删除审核记录。')
    await loadSubmissions()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '删除并下架失败。', 'error')
  }
}
</script>

<template>
  <AdminLayout :title="pageTitle" description="筛选、查看并审核用户提交的工具、教程、提示词和工具对比。">
    <AdminToast :message="toast.message" :type="toast.type" @close="clearToast" />

    <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
      <button
        type="button"
        class="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        :disabled="publishing"
        @click="publishApproved"
      >
        {{ publishing ? '正在发布...' : '发布所有已通过但未发布的投稿' }}
      </button>
      <p class="text-xs text-slate-500">审核通过会自动写入正式内容表；历史数据可用此按钮补发布。</p>
    </div>

    <div class="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2">
      <input
        v-model="search"
        class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm"
        placeholder="搜索投稿标题、简介、分类或联系方式"
      >
      <select v-model="statusFilter" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm">
        <option value="all">全部状态</option>
        <option value="pending">待审核</option>
        <option value="approved">已通过</option>
        <option value="rejected">已拒绝</option>
        <option value="needs_edit">需要修改</option>
        <option value="deleted">已删除</option>
      </select>
      <select v-model="typeFilter" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm md:col-span-2">
        <option value="all">全部类型</option>
        <option value="tool">工具</option>
        <option value="tutorial">教程</option>
        <option value="prompt">提示词</option>
        <option value="comparison">工具对比</option>
      </select>
    </div>

    <AdminSubmissionTable
      :submissions="submissions"
      :loading="loading"
      @review="quickReview"
      @unpublish="unpublishSubmission"
      @delete="deleteSubmission"
      @delete-with-target="deleteWithTarget"
    />

    <div class="mt-4 flex items-center justify-between">
      <button class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50" :disabled="page <= 1" @click="page--">
        上一页
      </button>
      <span class="text-sm text-slate-500">共 {{ total }} 条，第 {{ page }} 页</span>
      <button class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50" :disabled="page * pageSize >= total" @click="page++">
        下一页
      </button>
    </div>
  </AdminLayout>
</template>
