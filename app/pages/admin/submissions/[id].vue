<script setup lang="ts">
definePageMeta({ middleware: 'admin' })

const route = useRoute()
const { initAuth, accessToken } = useAuth()

const submission = ref<any | null>(null)
const loading = ref(true)
const publishing = ref(false)
const status = ref<'approved' | 'rejected' | 'needs_edit'>('approved')
const reviewNote = ref('')
const toast = reactive<{ message: string, type: 'success' | 'error' | 'warning' | 'info' }>({
  message: '',
  type: 'info'
})

const typeLabel: Record<string, string> = {
  tool: '工具',
  tutorial: '教程',
  prompt: '提示词',
  comparison: '工具对比'
}

const publishedSlug = computed(() => submission.value?.payload?.publishedSlug || '')
const frontPath = computed(() => {
  const type = submission.value?.published_target_type
  const slug = publishedSlug.value
  if (!type || !slug) return ''
  if (type === 'tool') return `/tool/${slug}`
  if (type === 'tutorial') return `/tutorial/${slug}`
  if (type === 'prompt') return `/prompts/${slug}`
  if (type === 'comparison') return `/compare/${slug}`
  return ''
})

const publishStatus = computed(() => {
  if (submission.value?.deleted_at || submission.value?.status === 'deleted' || submission.value?.payload?.softDeleted) return '已删除'
  if (submission.value?.published_target_id && submission.value?.unpublished_at) return '已下架'
  if (submission.value?.published_target_id) return '已发布'
  if (submission.value?.status === 'approved') return '待发布'
  return '未发布'
})

const canPublish = computed(() => submission.value?.status === 'approved' && !submission.value?.published_target_id)
const canUnpublish = computed(() => submission.value?.published_target_id && !submission.value?.unpublished_at && submission.value?.status !== 'deleted' && !submission.value?.payload?.softDeleted)
const canDelete = computed(() => submission.value?.status !== 'deleted' && !submission.value?.deleted_at && !submission.value?.payload?.softDeleted)

function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
  toast.message = message
  toast.type = type
}

function clearToast() {
  toast.message = ''
}

onMounted(async () => {
  await initAuth()
  await loadSubmission()
})

async function loadSubmission() {
  loading.value = true
  try {
    const data = await $fetch<{ submission: any }>(`/api/admin/submissions/${route.params.id}`, {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    submission.value = data.submission
    reviewNote.value = data.submission.review_note || ''
    if (['approved', 'rejected', 'needs_edit'].includes(data.submission.status)) status.value = data.submission.status
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '加载投稿详情失败。', 'error')
  } finally {
    loading.value = false
  }
}

async function submitReview() {
  try {
    const data = await $fetch<{ success: boolean, message?: string, submission: any, published?: any }>(`/api/admin/submissions/${route.params.id}/review`, {
      method: 'POST',
      body: { status: status.value, reviewNote: reviewNote.value },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.success === false ? data.message || '审核已更新，但发布失败。' : data.published ? '审核已通过，内容已发布到前台。' : '审核状态已更新。', data.success === false ? 'warning' : 'success')
    await loadSubmission()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '审核失败。', 'error')
  }
}

async function publishNow() {
  publishing.value = true
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${route.params.id}/publish`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(`已发布到前台，slug：${data.published?.slug || '-'}。`)
    await loadSubmission()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '发布失败。', 'error')
  } finally {
    publishing.value = false
  }
}

async function unpublishNow() {
  if (!window.confirm('确定要从前台下架这个内容吗？下架后前台将不再显示，但审核记录会保留。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${route.params.id}/unpublish`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已下架前台内容。')
    await loadSubmission()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '下架失败。', 'error')
  }
}

async function deleteNow() {
  if (!window.confirm('确定要删除这条审核记录吗？如果内容已发布，前台内容不会被自动下架。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${route.params.id}/delete`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已删除审核记录。')
    await loadSubmission()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '删除审核记录失败。', 'error')
  }
}

async function deleteWithTargetNow() {
  if (!window.confirm('确定要删除审核记录并下架前台内容吗？此操作会让前台不再显示该内容。')) return
  try {
    const data = await $fetch<any>(`/api/admin/submissions/${route.params.id}/delete-with-target`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    showToast(data.message || '已下架前台内容并删除审核记录。')
    await loadSubmission()
  } catch (err: any) {
    showToast(err?.data?.statusMessage || err?.message || '删除并下架失败。', 'error')
  }
}
</script>

<template>
  <AdminLayout title="投稿详情" description="查看投稿内容、审核、发布、下架或软删除投稿记录。">
    <AdminToast :message="toast.message" :type="toast.type" @close="clearToast" />

    <div v-if="loading" class="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">正在加载投稿...</div>
    <div v-else-if="submission" class="grid gap-6">
      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <BaseBadge tone="primary">{{ typeLabel[submission.type] || submission.type }}</BaseBadge>
            <h2 class="mt-3 text-2xl font-black text-slate-950">{{ submission.title }}</h2>
            <p class="mt-2 text-sm text-slate-500">提交人：{{ submission.submitter?.email || submission.user_id }}</p>
          </div>
          <AdminStatusBadge :status="submission.status" />
        </div>
        <dl class="mt-5 grid gap-4 text-sm md:grid-cols-2">
          <div><dt class="font-semibold text-slate-900">审核状态</dt><dd class="mt-1 text-slate-600">{{ submission.status }}</dd></div>
          <div><dt class="font-semibold text-slate-900">发布状态</dt><dd class="mt-1 text-slate-600">{{ publishStatus }}</dd></div>
          <div><dt class="font-semibold text-slate-900">联系方式</dt><dd class="mt-1 text-slate-600">{{ submission.contact || '未填写' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">URL</dt><dd class="mt-1 text-slate-600">{{ submission.url || '未填写' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">分类</dt><dd class="mt-1 text-slate-600">{{ submission.category || '未填写' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">创建时间</dt><dd class="mt-1 text-slate-600">{{ submission.created_at }}</dd></div>
          <div><dt class="font-semibold text-slate-900">审核时间</dt><dd class="mt-1 text-slate-600">{{ submission.reviewed_at || '未审核' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">审核人</dt><dd class="mt-1 text-slate-600">{{ submission.reviewer?.email || submission.reviewed_by || '未审核' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">发布目标类型</dt><dd class="mt-1 text-slate-600">{{ submission.published_target_type || '未发布' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">发布目标 ID</dt><dd class="mt-1 break-all text-slate-600">{{ submission.published_target_id || '未发布' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">发布时间</dt><dd class="mt-1 text-slate-600">{{ submission.published_at || '未发布' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">下架时间</dt><dd class="mt-1 text-slate-600">{{ submission.unpublished_at || '未下架' }}</dd></div>
          <div><dt class="font-semibold text-slate-900">删除时间</dt><dd class="mt-1 text-slate-600">{{ submission.deleted_at || '未删除' }}</dd></div>
          <div>
            <dt class="font-semibold text-slate-900">前台链接</dt>
            <dd class="mt-1 text-slate-600">
              <NuxtLink v-if="frontPath" :to="frontPath" class="font-semibold text-blue-600 hover:text-blue-700">{{ frontPath }}</NuxtLink>
              <span v-else>未发布</span>
            </dd>
          </div>
        </dl>
        <div class="mt-5">
          <h3 class="font-semibold text-slate-900">简介</h3>
          <p class="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">{{ submission.description }}</p>
        </div>
        <div class="mt-5">
          <h3 class="font-semibold text-slate-900">Payload</h3>
          <pre class="mt-2 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-slate-100">{{ JSON.stringify(submission.payload || {}, null, 2) }}</pre>
        </div>
      </section>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-bold text-slate-950">审核与发布操作</h2>
        <p class="mt-2 text-sm leading-6 text-slate-500">通过会自动发布到正式内容表；下架只改正式内容状态为 archived；删除记录为软删除。</p>
        <div class="mt-4 grid gap-4">
          <select v-model="status" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm">
            <option value="approved">通过</option>
            <option value="rejected">拒绝</option>
            <option value="needs_edit">需要修改</option>
          </select>
          <textarea v-model="reviewNote" class="min-h-28 rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="审核备注，会显示给投稿用户并通过邮件通知。" />
          <div class="flex flex-wrap gap-3">
            <button v-if="canDelete" type="button" class="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white" @click="submitReview">保存审核结果</button>
            <button v-if="canPublish" type="button" class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 disabled:opacity-60" :disabled="publishing" @click="publishNow">
              {{ publishing ? '正在发布...' : '发布到前台' }}
            </button>
            <button v-else-if="submission.unpublished_at" type="button" class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400" disabled>
              重新发布后续支持
            </button>
            <button v-if="canUnpublish" type="button" class="rounded-xl border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50" @click="unpublishNow">下架前台内容</button>
            <button v-if="canDelete" type="button" class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50" @click="deleteNow">删除审核记录</button>
            <button v-if="canUnpublish" type="button" class="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50" @click="deleteWithTargetNow">删除并下架</button>
          </div>
        </div>
      </section>
    </div>
  </AdminLayout>
</template>
