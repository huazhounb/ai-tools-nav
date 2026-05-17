type SupabaseRequestOptions = {
  method?: string
  body?: unknown
  accessToken?: string
}

export function useSupabase() {
  const config = useRuntimeConfig()
  const env = import.meta.env as Record<string, string | undefined>
  const supabaseUrl = computed(() => String(config.public.supabaseUrl || env.NUXT_PUBLIC_SUPABASE_URL || env.VITE_SUPABASE_URL || '').replace(/\/$/, ''))
  const supabaseAnonKey = computed(() => String(config.public.supabaseAnonKey || env.NUXT_PUBLIC_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || ''))

  function assertConfig() {
    if (!supabaseUrl.value || !supabaseAnonKey.value) {
      throw new Error('Supabase public config is missing. Set NUXT_PUBLIC_SUPABASE_URL and NUXT_PUBLIC_SUPABASE_ANON_KEY.')
    }
  }

  async function authFetch<T>(path: string, options: SupabaseRequestOptions = {}) {
    assertConfig()
    return await $fetch<T>(`${supabaseUrl.value}${path}`, {
      method: options.method || 'GET',
      body: options.body,
      headers: {
        apikey: supabaseAnonKey.value,
        Authorization: options.accessToken ? `Bearer ${options.accessToken}` : `Bearer ${supabaseAnonKey.value}`,
        'Content-Type': 'application/json'
      }
    })
  }

  function getOAuthUrl(provider: 'google') {
    assertConfig()
    const redirectTo = `${window.location.origin}/auth/callback`
    const params = new URLSearchParams({
      provider,
      redirect_to: redirectTo
    })
    return `${supabaseUrl.value}/auth/v1/authorize?${params.toString()}`
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
    authFetch,
    getOAuthUrl
  }
}
