<script setup lang="ts">
defineProps<{
  submissions: any[]
  loading?: boolean
}>()

const emit = defineEmits<{
  review: [id: string, status: 'approved' | 'rejected' | 'needs_edit']
  unpublish: [id: string]
  delete: [id: string]
  deleteWithTarget: [id: string]
}>()

const typeLabel: Record<string, string> = {
  tool: '工具',
  tutorial: '教程',
  prompt: '提示词',
  comparison: '工具对比'
}

function publishStatus(item: any) {
  if (item.deleted_at || item.status === 'deleted' || item.payload?.softDeleted) return { label: '已删除', class: 'bg-slate-100 text-slate-500 ring-slate-200' }
  if (item.published_target_id && item.unpublished_at) return { label: '已下架', class: 'bg-slate-50 text-slate-600 ring-slate-200' }
  if (item.published_target_id) return { label: '已发布', class: 'bg-emerald-50 text-emerald-700 ring-emerald-200' }
  if (item.status === 'approved') return { label: '待发布', class: 'bg-amber-50 text-amber-700 ring-amber-200' }
  return { label: '未发布', class: 'bg-slate-50 text-slate-600 ring-slate-200' }
}

function isPublished(item: any) {
  return Boolean(item.published_target_id && !item.unpublished_at && item.status !== 'deleted' && !item.payload?.softDeleted)
}

function isDeleted(item: any) {
  return Boolean(item.status === 'deleted' || item.deleted_at || item.payload?.softDeleted)
}
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div v-if="loading" class="p-6 text-sm text-slate-500">正在加载投稿...</div>
    <div v-else-if="!submissions.length" class="p-6 text-sm text-slate-500">暂无符合条件的投稿。</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200 text-sm">
        <thead class="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th class="px-4 py-3">标题</th>
            <th class="px-4 py-3">类型</th>
            <th class="px-4 py-3">提交用户</th>
            <th class="px-4 py-3">审核状态</th>
            <th class="px-4 py-3">发布状态</th>
            <th class="px-4 py-3">创建时间</th>
            <th class="px-4 py-3">操作</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="item in submissions" :key="item.id" class="align-top">
            <td class="px-4 py-4">
              <NuxtLink :to="`/admin/submissions/${item.id}`" class="font-semibold text-slate-950 hover:text-blue-600">
                {{ item.title }}
              </NuxtLink>
              <p class="mt-1 line-clamp-2 max-w-md text-xs text-slate-500">{{ item.description }}</p>
            </td>
            <td class="px-4 py-4">{{ typeLabel[item.type] || item.type }}</td>
            <td class="px-4 py-4 text-slate-600">{{ item.submitter?.email || item.user_id }}</td>
            <td class="px-4 py-4"><AdminStatusBadge :status="item.status" /></td>
            <td class="px-4 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1" :class="publishStatus(item).class">
                {{ publishStatus(item).label }}
              </span>
            </td>
            <td class="px-4 py-4 text-slate-500">{{ item.created_at?.slice(0, 10) }}</td>
            <td class="px-4 py-4">
              <div class="flex flex-wrap gap-2">
                <NuxtLink :to="`/admin/submissions/${item.id}`" class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold hover:bg-slate-50">详情</NuxtLink>
                <button v-if="!isDeleted(item)" type="button" class="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white" @click="emit('review', item.id, 'approved')">通过</button>
                <button v-if="!isDeleted(item)" type="button" class="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white" @click="emit('review', item.id, 'needs_edit')">需修改</button>
                <button v-if="!isDeleted(item)" type="button" class="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white" @click="emit('review', item.id, 'rejected')">拒绝</button>
                <button v-if="isPublished(item)" type="button" class="rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50" @click="emit('unpublish', item.id)">下架</button>
                <button v-if="!isDeleted(item)" type="button" class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50" @click="emit('delete', item.id)">删除记录</button>
                <button v-if="isPublished(item)" type="button" class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50" @click="emit('deleteWithTarget', item.id)">删除并下架</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
