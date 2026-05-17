export function useCaptcha() {
  const config = useRuntimeConfig()
  const env = import.meta.env as Record<string, string | undefined>
  const siteKey = computed(() => String(config.public.turnstileSiteKey || env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || ''))
  const isConfigured = computed(() => Boolean(siteKey.value))
  const isProduction = computed(() => import.meta.env.PROD)

  return {
    siteKey,
    isConfigured,
    isProduction
  }
}
