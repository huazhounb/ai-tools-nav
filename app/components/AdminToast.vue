<script setup lang="ts">
const props = withDefaults(defineProps<{
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}>(), {
  type: 'info',
  duration: 3000
})

const emit = defineEmits<{
  close: []
}>()

let timer: ReturnType<typeof setTimeout> | undefined

const toneClass = computed(() => {
  if (props.type === 'success') return 'border-emerald-200 bg-emerald-50 text-emerald-800'
  if (props.type === 'error') return 'border-red-200 bg-red-50 text-red-800'
  if (props.type === 'warning') return 'border-amber-200 bg-amber-50 text-amber-800'
  return 'border-blue-200 bg-blue-50 text-blue-800'
})

function resetTimer() {
  if (timer) clearTimeout(timer)
  if (!props.message) return
  timer = setTimeout(() => emit('close'), props.duration)
}

watch(() => props.message, resetTimer, { immediate: true })

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div v-if="message" class="mb-4 flex items-start justify-between gap-3 rounded-xl border p-3 text-sm font-medium" :class="toneClass">
    <span>{{ message }}</span>
    <button type="button" class="rounded-md px-2 text-lg leading-none opacity-70 hover:opacity-100" aria-label="关闭提示" @click="emit('close')">
      ×
    </button>
  </div>
</template>
