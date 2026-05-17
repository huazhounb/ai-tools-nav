<script setup lang="ts">
const links = [
  { label: '概览', to: { path: '/admin' } },
  { label: '用户管理', to: { path: '/admin/users' } },
  { label: '投稿审核', to: { path: '/admin/submissions' } },
  { label: '工具审核', to: { path: '/admin/submissions', query: { type: 'tool' } } },
  { label: '教程审核', to: { path: '/admin/submissions', query: { type: 'tutorial' } } },
  { label: '提示词审核', to: { path: '/admin/submissions', query: { type: 'prompt' } } },
  { label: '对比审核', to: { path: '/admin/submissions', query: { type: 'comparison' } } }
]
</script>

<template>
  <aside class="w-full rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:w-64">
    <nav class="grid gap-1 text-sm font-semibold text-slate-700">
      <NuxtLink
        v-for="item in links"
        :key="item.label"
        :to="item.to"
        class="rounded-xl px-3 py-2 hover:bg-slate-50"
        active-class="bg-blue-50 text-blue-700"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
