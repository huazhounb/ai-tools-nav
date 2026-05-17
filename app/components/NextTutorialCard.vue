<script setup lang="ts">
defineProps<{
  tutorials: Array<{ slug: string, title: string, description?: string, duration?: string }>
  prompts?: Array<{ slug: string, title: string }>
  tools?: Array<{ slug: string, name: string, icon?: string }>
  comparisons?: Array<{ slug: string, title: string }>
}>()
</script>

<template>
  <section class="rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
    <h2 class="text-lg font-bold text-slate-950">下一步推荐</h2>

    <div class="mt-4 grid gap-3">
      <NuxtLink
        v-for="item in tutorials.slice(0, 3)"
        :key="item.slug"
        :to="`/tutorial/${item.slug}`"
        class="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
      >
        <p class="font-semibold text-slate-950 group-hover:text-blue-700">{{ item.title }}</p>
        <p class="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
        <p v-if="item.duration" class="mt-2 text-xs font-semibold text-blue-600">{{ item.duration }}</p>
      </NuxtLink>
    </div>

    <div v-if="tools?.length" class="mt-5">
      <p class="text-sm font-bold text-slate-950">相关工具</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <NuxtLink v-for="tool in tools.slice(0, 4)" :key="tool.slug" :to="`/tool/${tool.slug}`" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">
          <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="24" rounded="rounded-lg" />
          {{ tool.name }}
        </NuxtLink>
      </div>
    </div>

    <div v-if="prompts?.length" class="mt-5">
      <p class="text-sm font-bold text-slate-950">相关提示词</p>
      <div class="mt-3 grid gap-2">
        <NuxtLink v-for="prompt in prompts.slice(0, 3)" :key="prompt.slug" :to="`/prompts/${prompt.slug}`" class="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100">
          {{ prompt.title }}
        </NuxtLink>
      </div>
    </div>

    <div v-if="comparisons?.length" class="mt-5">
      <p class="text-sm font-bold text-slate-950">相关对比</p>
      <div class="mt-3 grid gap-2">
        <NuxtLink v-for="comparison in comparisons.slice(0, 2)" :key="comparison.slug" :to="`/compare/${comparison.slug}`" class="rounded-xl bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-800 transition hover:bg-violet-100">
          {{ comparison.title }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
