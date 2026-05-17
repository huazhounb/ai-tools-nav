<script setup lang="ts">
const emit = defineEmits<{
  verify: [token: string]
  reset: []
}>()

const { siteKey, isConfigured, isProduction } = useCaptcha()
const container = ref<HTMLElement | null>(null)
const widgetId = ref<string | null>(null)
const renderError = ref('')

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string
      reset: (id?: string) => void
      remove?: (id: string) => void
    }
    __turnstileLoading?: Promise<void>
  }
}

function loadScript() {
  if (!import.meta.client) return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  if (window.__turnstileLoading) return window.__turnstileLoading

  window.__turnstileLoading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Turnstile 脚本加载失败')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Turnstile 脚本加载失败'))
    document.head.appendChild(script)
  })

  return window.__turnstileLoading
}

async function renderCaptcha() {
  if (!import.meta.client || !isConfigured.value || !container.value || widgetId.value) return
  renderError.value = ''
  await loadScript()
  if (!window.turnstile) return

  widgetId.value = window.turnstile.render(container.value, {
    sitekey: siteKey.value,
    callback: (token: string) => emit('verify', token),
    'expired-callback': () => emit('reset'),
    'error-callback': () => emit('reset')
  })
}

function reset() {
  emit('reset')
  if (import.meta.client && window.turnstile && widgetId.value) {
    window.turnstile.reset(widgetId.value)
  }
}

defineExpose({ reset })

onMounted(() => {
  nextTick(() => {
    renderCaptcha().catch((error) => {
      renderError.value = error?.message || 'Turnstile 验证码加载失败'
      emit('reset')
    })
  })
})

watch(siteKey, () => {
  if (import.meta.client && window.turnstile?.remove && widgetId.value) {
    window.turnstile.remove(widgetId.value)
    widgetId.value = null
  }
  nextTick(() => {
    renderCaptcha().catch((error) => {
      renderError.value = error?.message || 'Turnstile 验证码加载失败'
      emit('reset')
    })
  })
})

onBeforeUnmount(() => {
  if (import.meta.client && window.turnstile?.remove && widgetId.value) {
    window.turnstile.remove(widgetId.value)
  }
})
</script>

<template>
  <div>
    <div v-if="isConfigured" ref="container" />
    <div v-else class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
      {{ isProduction ? '验证服务暂未配置' : '验证码未配置，当前仅用于开发调试。' }}
    </div>
    <div v-if="renderError" class="mt-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
      {{ renderError }}
    </div>
  </div>
</template>
