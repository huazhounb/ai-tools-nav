<script setup lang="ts">
definePageMeta({ middleware: 'admin' })
</script>

<template>
  <AdminLayout title="提示词管理" description="正式提示词表管理入口已预留，当前先通过投稿审核队列处理。">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">后续一键发布会把通过审核的提示词投稿写入 prompts 表。</div>
  </AdminLayout>
</template>
