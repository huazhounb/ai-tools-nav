<script setup lang="ts">
import { Heart, Flame, MousePointerClick, Eye } from 'lucide-vue-next'
import type { MockTool } from '~~/data/mock-tools'

const props = defineProps<{
  item: {
    rank: number
    reason: string
    score?: number
    tool: MockTool
  }
}>()

const likes = ref(props.item.tool.stats.likes)
const liked = ref(false)
const error = ref('')

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('liked_tools') || '[]') as string[]
  liked.value = stored.includes(props.item.tool.slug)
})

async function likeTool() {
  if (liked.value) return
  error.value = ''
  try {
    const result = await $fetch<{ success: boolean, slug: string, likes: number, liked: boolean }>(`/api/tools/${props.item.tool.slug}/like`, {
      method: 'POST'
    })
    likes.value = result.likes
    liked.value = true
    const stored = new Set(JSON.parse(localStorage.getItem('liked_tools') || '[]') as string[])
    stored.add(props.item.tool.slug)
    localStorage.setItem('liked_tools', JSON.stringify([...stored]))
  } catch {
    error.value = '点赞失败，请稍后再试'
  }
}
</script>

<template>
  <article
    class="rounded-[18px] border bg-white p-5 shadow-sm"
    :class="item.rank === 1 ? 'border-amber-300 shadow-amber-100' : item.rank === 2 ? 'border-slate-300' : item.rank === 3 ? 'border-orange-200' : 'border-slate-200'"
  >
    <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div class="flex gap-4">
        <span
          class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-lg font-black"
          :class="item.rank === 1 ? 'bg-amber-400 text-white' : item.rank === 2 ? 'bg-slate-200 text-slate-800' : item.rank === 3 ? 'bg-orange-300 text-white' : 'bg-blue-50 text-blue-700'"
        >
          {{ item.rank }}
        </span>
        <BrandIcon :icon="item.tool.icon" :slug="item.tool.slug" :name="item.tool.name" :size="52" rounded="rounded-2xl" />
        <div>
          <h3 class="text-xl font-bold text-slate-950">{{ item.tool.name }}</h3>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{{ item.tool.summary }}</p>
          <p class="mt-3 text-sm font-medium leading-6 text-slate-800">推荐理由：{{ item.reason }}</p>
        </div>
      </div>
      <div class="flex shrink-0 gap-2">
        <button
          type="button"
          class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition"
          :class="liked ? 'bg-rose-50 text-rose-600' : 'bg-rose-600 text-white hover:bg-rose-700'"
          :disabled="liked"
          @click="likeTool"
        >
          <Heart class="h-4 w-4" :class="liked ? 'fill-current' : ''" />
          {{ liked ? '已点赞' : '点赞' }} {{ likes }}
        </button>
        <NuxtLink :to="`/tool/${item.tool.slug}`" class="inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50">
          查看详情
        </NuxtLink>
      </div>
    </div>

    <div class="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-5">
      <span class="rounded-xl bg-slate-50 p-3">免费情况：<strong class="text-slate-950">{{ item.tool.freeStatus }}</strong></span>
      <span class="rounded-xl bg-slate-50 p-3">中文支持：<strong class="text-slate-950">{{ item.tool.chineseSupport }}</strong></span>
      <span class="rounded-xl bg-slate-50 p-3">平台：<strong class="text-slate-950">{{ item.tool.platform }}</strong></span>
      <span class="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3"><Eye class="h-4 w-4" />{{ item.tool.stats.views }} 浏览</span>
      <span class="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3"><MousePointerClick class="h-4 w-4" />{{ item.tool.stats.clicks }} 点击</span>
    </div>
    <div class="mt-3 flex items-center gap-2 text-xs text-slate-500">
      <Flame class="h-4 w-4 text-orange-500" />
      热度分：{{ item.score?.toFixed(1) || item.tool.editorScore }}
      <span v-if="error" class="text-red-600">{{ error }}</span>
    </div>
  </article>
</template>
