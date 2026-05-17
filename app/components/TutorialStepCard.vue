<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

defineProps<{
  index: number
  title: string
  body: string
  tip: string
  pitfall: string
  completed?: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <li
    class="group grid gap-4 rounded-[18px] border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 sm:grid-cols-[56px_1fr]"
    :class="completed ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'"
  >
    <span
      class="grid h-14 w-14 place-items-center rounded-2xl text-lg font-black text-white shadow-md transition"
      :class="completed ? 'bg-emerald-600 shadow-emerald-100' : 'bg-gradient-to-br from-blue-600 to-violet-600 shadow-blue-200'"
    >
      <CheckCircle2 v-if="completed" class="h-7 w-7" />
      <span v-else>{{ index }}</span>
    </span>

    <div>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 class="text-lg font-bold text-slate-950">{{ title }}</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600">{{ body }}</p>
        </div>
        <button
          type="button"
          class="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl px-4 text-sm font-semibold transition active:scale-[0.98]"
          :class="completed ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-950 text-white hover:-translate-y-px hover:bg-blue-600'"
          @click="$emit('toggle')"
        >
          {{ completed ? '已完成' : '我完成了' }}
        </button>
      </div>

      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl bg-blue-50 p-4">
          <p class="text-xs font-bold uppercase tracking-wide text-blue-700">实操提示</p>
          <p class="mt-1 text-sm leading-6 text-blue-950">{{ tip }}</p>
        </div>
        <div class="rounded-2xl bg-amber-50 p-4">
          <p class="text-xs font-bold uppercase tracking-wide text-amber-700">常见坑</p>
          <p class="mt-1 text-sm leading-6 text-amber-950">{{ pitfall }}</p>
        </div>
      </div>
    </div>
  </li>
</template>
