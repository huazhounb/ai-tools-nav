<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string
  }>(),
  {
    modelValue: ''
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: []
  clear: []
}>()

const isComposing = ref(false)
const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

function submitSearch() {
  if (isComposing.value) return
  emit('search')
}

function clearSearch() {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<template>
  <form
    class="relative flex w-full flex-col gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-blue-100/70 backdrop-blur sm:flex-row"
    role="search"
    @submit.prevent="submitSearch"
  >
    <label class="sr-only" for="home-search">搜索 AI 工具、教程或提示词</label>
    <div class="relative min-w-0 flex-1">
      <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </span>
      <input
        id="home-search"
        v-model="inputValue"
        class="min-h-13 w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        type="text"
        autocomplete="off"
        inputmode="search"
        enterkeyhint="search"
        placeholder="搜索工具、任务或场景，例如：AI 绘图、PPT、论文、编程"
        @compositionstart="isComposing = true"
        @compositionend="isComposing = false"
        @keydown.enter.prevent="submitSearch"
      >
      <button
        v-if="inputValue"
        type="button"
        class="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        aria-label="清空搜索"
        @click="clearSearch"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
        </svg>
      </button>
    </div>
    <button
      class="min-h-13 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
      type="submit"
    >
      搜索
    </button>
  </form>
</template>
