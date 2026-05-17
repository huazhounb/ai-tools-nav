<script setup lang="ts">
import { Copy, Mail, MessageSquare } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  url: string
}>()

const copied = ref(false)

async function copyLink() {
  if (!import.meta.client) return
  await navigator.clipboard.writeText(props.url)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1600)
}
</script>

<template>
  <div class="rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm">
    <p class="text-sm font-semibold text-slate-950">觉得这篇教程有用？</p>
    <div class="mt-3 grid gap-2">
      <button type="button" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700" @click="copyLink">
        <Copy class="h-4 w-4" />
        {{ copied ? '链接已复制' : '复制教程链接' }}
      </button>
      <a
        :href="`mailto:nangong3366@gmail.com?subject=${encodeURIComponent(`AI工具箱教程反馈：${title}`)}`"
        class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
      >
        <Mail class="h-4 w-4" />
        反馈问题
      </a>
      <NuxtLink to="/submit?type=tutorial" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">
        <MessageSquare class="h-4 w-4" />
        投稿教程
      </NuxtLink>
    </div>
  </div>
</template>
