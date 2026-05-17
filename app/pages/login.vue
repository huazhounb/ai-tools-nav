<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { initAuth, isLoggedIn, loading, signInWithIdentifier, signInWithGoogle } = useAuth()
const { isConfigured } = useCaptcha()

const captchaRef = ref<{ reset: () => void } | null>(null)
const identifier = ref('')
const password = ref('')
const captchaToken = ref('')
const error = ref('')

const redirectTarget = computed(() => String(route.query.redirect || '/'))
const loginDisabled = computed(() => loading.value || !isConfigured.value || !captchaToken.value)

function resetCaptcha() {
  captchaToken.value = ''
  captchaRef.value?.reset()
}

onMounted(async () => {
  await initAuth()
  if (isLoggedIn.value) await navigateTo(redirectTarget.value)
})

async function submit() {
  error.value = ''

  if (!isConfigured.value) {
    error.value = '登录验证码未配置，请检查 NUXT_PUBLIC_TURNSTILE_SITE_KEY。'
    return
  }

  if (!captchaToken.value) {
    error.value = '请先完成验证码。'
    return
  }

  try {
    await signInWithIdentifier(identifier.value.trim(), password.value, captchaToken.value)
    await navigateTo(redirectTarget.value)
  } catch (err: any) {
    resetCaptcha()
    error.value = err?.message || '登录失败，请检查账号、密码和验证码。'
  }
}

async function handleGoogleLogin() {
  error.value = ''
  try {
    await signInWithGoogle(redirectTarget.value)
  } catch (err: any) {
    error.value = err?.message || 'Google 登录启动失败，请稍后重试。'
  }
}
</script>

<template>
  <div class="bg-slate-50 py-14">
    <PageContainer class="max-w-xl">
      <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/50">
        <BaseBadge tone="primary">账号登录</BaseBadge>
        <h1 class="mt-4 text-3xl font-black text-slate-950">登录 AI 工具箱</h1>
        <p class="mt-3 text-sm leading-6 text-slate-600">
          登录后可以提交 AI 工具、教程、提示词和工具对比，也可以查看完整教程、复制提示词和使用工具对比功能。
        </p>

        <form class="mt-6 grid gap-4" @submit.prevent="submit">
          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            邮箱或用户名
            <input
              v-model="identifier"
              required
              type="text"
              autocomplete="username"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="you@example.com 或 admin"
            >
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            密码
            <input
              v-model="password"
              required
              type="password"
              autocomplete="current-password"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="请输入密码"
            >
          </label>

          <CaptchaTurnstile ref="captchaRef" @verify="captchaToken = $event" @reset="captchaToken = ''" />

          <button
            type="submit"
            class="min-h-12 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            :disabled="loginDisabled"
          >
            {{ loading ? '登录中...' : '登录' }}
          </button>

          <p v-if="!isConfigured" class="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            登录验证码未配置，请检查环境变量后重启服务。
          </p>
          <p v-else-if="!captchaToken" class="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
            请先完成验证码后再登录。
          </p>
          <p v-if="error" class="rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
        </form>

        <div class="my-6 flex items-center gap-3 text-xs text-slate-400">
          <span class="h-px flex-1 bg-slate-200" />
          或
          <span class="h-px flex-1 bg-slate-200" />
        </div>

        <LoginButtons mode="login" :loading="loading" @google="handleGoogleLogin" />

        <p class="mt-6 text-center text-sm text-slate-600">
          还没有账号？
          <NuxtLink class="font-semibold text-blue-600 hover:text-blue-700" :to="{ path: '/register', query: route.query }">去注册</NuxtLink>
        </p>
      </section>
    </PageContainer>
  </div>
</template>
