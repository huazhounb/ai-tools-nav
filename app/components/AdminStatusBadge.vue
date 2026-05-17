<script setup lang="ts">
const props = defineProps<{ status?: string }>()

const labelMap: Record<string, string> = {
  pending: '待审核',
  approved: '已通过',
  rejected: '已拒绝',
  needs_edit: '需要修改',
  deleted: '已删除'
}

const toneClass = computed(() => {
  if (props.status === 'approved') return 'bg-emerald-50 text-emerald-700 ring-emerald-200'
  if (props.status === 'rejected') return 'bg-red-50 text-red-700 ring-red-200'
  if (props.status === 'needs_edit') return 'bg-amber-50 text-amber-700 ring-amber-200'
  if (props.status === 'deleted') return 'bg-slate-100 text-slate-500 ring-slate-200'
  return 'bg-blue-50 text-blue-700 ring-blue-200'
})
</script>

<template>
  <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset" :class="toneClass">
    {{ labelMap[status || 'pending'] || status || '待审核' }}
  </span>
</template>
