<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-8">
    <PageContainer>
      <div class="mb-6">
        <BaseBadge tone="primary">Admin</BaseBadge>
        <h1 class="mt-3 text-3xl font-black text-slate-950">{{ title }}</h1>
        <p v-if="description" class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>
      </div>
      <div class="grid gap-6 lg:grid-cols-[256px_1fr]">
        <AdminSidebar />
        <main>
          <slot />
        </main>
      </div>
    </PageContainer>
  </div>
</template>
