<script setup lang="ts">
const navItems = [
  { label: '首页', href: '/' },
  { label: '免费工具', href: '/tools/free' },
  { label: '工具分类', href: '/category' },
  { label: '教程', href: '/tutorial' },
  { label: '提示词', href: '/prompts' },
  { label: '工具对比', href: '/compare' },
  { label: '榜单', href: '/rankings' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
    <PageContainer class="flex min-h-16 items-center justify-between gap-4 py-3">
      <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="AI工具箱首页">
        <span class="text-blue-600">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            <path d="M12 8v8M8.5 10l3.5 2 3.5-2" stroke="#7C3AED" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span class="text-base font-bold tracking-normal text-slate-950">AI工具箱</span>
      </NuxtLink>

      <AdminEntryButton />

      <nav class="hidden items-center gap-1 lg:flex" aria-label="主导航">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <UserMenu />
    </PageContainer>
  </header>
</template>
