<script setup lang="ts">
import { siClaude, siCursor, siNotion } from 'simple-icons'
import type { ToolIcon } from '~~/types/tool'
import { getToolIconPath } from '~/utils/tool-icons'

const props = withDefaults(
  defineProps<{
    icon?: string | ToolIcon
    name: string
    slug?: string
    size?: number
    rounded?: string
    category?: string
  }>(),
  {
    size: 48,
    rounded: 'rounded-2xl',
    category: ''
  }
)

type SimpleIcon = {
  title: string
  path: string
  hex: string
}

const imageFailed = ref(false)

watch(
  () => [props.icon, props.slug, props.name],
  () => {
    imageFailed.value = false
  }
)

const localSrc = computed(() => {
  return getToolIconPath({
    slug: props.slug,
    name: props.name,
    icon: props.icon
  })
})

const simpleIconMap: Record<string, SimpleIcon> = {
  siClaude,
  siCursor,
  siNotion
}

const simpleIcon = computed<SimpleIcon | undefined>(() => {
  if (typeof props.icon === 'string') return undefined
  if (props.icon?.type !== 'simple-icons' || !props.icon.name) return undefined
  return simpleIconMap[toSimpleIconKey(props.icon.name)]
})

const fallbackColor = computed(() => {
  const category = props.category || ''
  if (category.includes('绘图') || category.includes('图片') || category.includes('设计')) return '#7C3AED'
  if (category.includes('编程')) return '#2563EB'
  if (category.includes('搜索')) return '#10B981'
  if (category.includes('PPT') || category.includes('办公')) return '#F59E0B'
  return '#2563EB'
})

const color = computed(() => {
  if (typeof props.icon !== 'string' && props.icon?.color) return props.icon.color
  if (simpleIcon.value?.hex) return `#${simpleIcon.value.hex.replace('#', '')}`
  return fallbackColor.value
})

const bgColor = computed(() => localSrc.value && !imageFailed.value ? '#ffffff' : withAlpha(color.value, 0.1))

const fallbackText = computed(() => {
  const trimmed = props.name.trim()
  if (!trimmed) return '?'
  const first = trimmed[0]
  return /[a-z0-9]/i.test(first) ? first.toUpperCase() : first
})

function toSimpleIconKey(name: string) {
  return `si${name
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('')}`
}

function withAlpha(hex: string, alpha: number) {
  const normalized = hex.replace('#', '')
  const full = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized.padEnd(6, '0').slice(0, 6)
  const value = Number.parseInt(full, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
</script>

<template>
  <span
    class="inline-grid shrink-0 place-items-center overflow-hidden border border-slate-200 shadow-sm"
    :class="rounded"
    :style="{ width: `${size}px`, height: `${size}px`, backgroundColor: bgColor }"
  >
    <img
      v-if="localSrc && !imageFailed"
      :src="localSrc"
      :alt="`${name} icon`"
      class="block max-h-[76%] max-w-[76%] object-contain"
      loading="lazy"
      decoding="async"
      @error="imageFailed = true"
    >
    <svg
      v-else-if="simpleIcon"
      viewBox="0 0 24 24"
      class="block"
      :style="{ width: `${Math.round(size * 0.56)}px`, height: `${Math.round(size * 0.56)}px`, color }"
      role="img"
      :aria-label="`${name} logo`"
    >
      <path :d="simpleIcon.path" fill="currentColor" />
    </svg>
    <span
      v-else
      class="grid h-full w-full place-items-center bg-gradient-to-br text-sm font-bold text-white"
      :class="rounded"
      :style="{ backgroundImage: `linear-gradient(135deg, ${color}, ${withAlpha(color, 0.62)})` }"
    >
      {{ fallbackText }}
    </span>
  </span>
</template>
