<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { loading, signUpWithEmail } = useAuth()
const { isConfigured } = useCaptcha()

const captchaRef = ref<{ reset: () => void } | null>(null)
const username = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const captchaToken = ref('')
const error = ref('')
const message = ref('')

const redirectTarget = computed(() => String(route.query.redirect || '/'))
const registerDisabled = computed(() => loading.value || !isConfigured.value || !captchaToken.value)

function resetCaptcha() {
  captchaToken.value = ''
  captchaRef.value?.reset()
}

function normalizeUsername(value: string) {
  return value.trim().toLowerCase()
}

async function submit() {
  error.value = ''
  message.value = ''

  const normalizedUsername = normalizeUsername(username.value)
  if (!/^[a-z0-9_]{3,32}$/.test(normalizedUsername)) {
    error.value = '用户名只能使用 3-32 位小写字母、数字或下划线。'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = '两次输入的密码不一致。'
    return
  }

  if (!isConfigured.value) {
    error.value = '注册验证码未配置，请检查 NUXT_PUBLIC_TURNSTILE_SITE_KEY。'
    return
  }

  if (!captchaToken.value) {
    error.value = '请先完成验证码。'
    return
  }

  try {
    const result = await signUpWithEmail(email.value.trim(), password.value, name.value.trim(), captchaToken.value, normalizedUsername)
    resetCaptcha()
    if (result.session) {
      await navigateTo(redirectTarget.value)
      return
    }
    message.value = '注册成功，请查看邮箱完成验证后再登录。'
  } catch (err: any) {
    resetCaptcha()
    error.value = err?.message || '注册失败，请检查邮箱、用户名、密码和验证码后重试。'
  }
}
</script>

<template>
  <div class="bg-slate-50 py-14">
    <PageContainer class="max-w-xl">
      <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/50">
        <BaseBadge tone="primary">账号注册</BaseBadge>
        <h1 class="mt-4 text-3xl font-black text-slate-950">注册 AI 工具箱</h1>
        <p class="mt-3 text-sm leading-6 text-slate-600">
          注册后可以提交 AI 工具、教程、提示词和工具对比，投稿会进入人工审核队列。
        </p>

        <form class="mt-6 grid gap-4" @submit.prevent="submit">
          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            用户名
            <input
              v-model="username"
              required
              type="text"
              autocomplete="username"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="huazhounb"
            >
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            昵称
            <input
              v-model="name"
              required
              type="text"
              autocomplete="name"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="你的昵称"
            >
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            邮箱
            <input
              v-model="email"
              required
              type="email"
              autocomplete="email"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="you@example.com"
            >
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            密码
            <input
              v-model="password"
              required
              type="password"
              autocomplete="new-password"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="至少 6 位密码"
            >
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-800">
            确认密码
            <input
              v-model="confirmPassword"
              required
              type="password"
              autocomplete="new-password"
              class="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="再次输入密码"
            >
          </label>

          <CaptchaTurnstile ref="captchaRef" @verify="captchaToken = $event" @reset="captchaToken = ''" />

          <button
            type="submit"
            class="min-h-12 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            :disabled="registerDisabled"
          >
            {{ loading ? '注册中...' : '注册' }}
          </button>

          <p v-if="!isConfigured" class="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            注册验证码未配置，请检查环境变量后重启服务。
          </p>
          <p v-else-if="!captchaToken" class="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
            请先完成验证码后再注册。
          </p>
          <p v-if="error" class="rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
          <p v-if="message" class="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{{ message }}</p>
        </form>

        <p class="mt-6 text-center text-sm text-slate-600">
          已有账号？
          <NuxtLink class="font-semibold text-blue-600 hover:text-blue-700" :to="{ path: '/login', query: route.query }">去登录</NuxtLink>
        </p>
      </section>
    </PageContainer>
  </div>
</template>
