<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    mode?: 'login' | 'register'
    loading?: boolean
  }>(),
  {
    mode: 'login',
    loading: false
  }
)

const emit = defineEmits<{
  google: []
  wechat: []
}>()

const config = useRuntimeConfig()
const publicConfig = config.public as Record<string, unknown>
const googleEnabled = computed(() => String(publicConfig.googleLoginEnabled ?? 'true') !== 'false')
const wechatEnabled = computed(() => String(publicConfig.wechatLoginEnabled ?? 'false') === 'true')
</script>

<template>
  <div class="grid gap-3">
    <button
      type="button"
      class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
      :disabled="props.loading || !googleEnabled"
      @click="emit('google')"
    >
      <span class="grid h-5 w-5 place-items-center rounded-full bg-white text-sm font-bold text-blue-600">G</span>
      使用 Google {{ props.mode === 'login' ? '登录' : '注册' }}
    </button>

    <button
      type="button"
      class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-400"
      :disabled="props.loading || !wechatEnabled"
      @click="emit('wechat')"
    >
      微信扫码登录
      <span v-if="!wechatEnabled" class="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">微信登录暂未开放</span>
    </button>
  </div>
</template>
