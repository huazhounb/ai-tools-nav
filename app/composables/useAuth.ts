import { createClient, type Session, type SupabaseClient, type User } from '@supabase/supabase-js'

export type UserProfile = {
  id: string
  email: string | null
  username?: string | null
  name: string | null
  avatar_url: string | null
  role: 'user' | 'admin' | string
  status?: 'active' | string
  created_at?: string
  updated_at?: string
}

let supabaseClient: SupabaseClient | null = null
let authListenerReady = false

function getPublicConfig() {
  const config = useRuntimeConfig()
  const publicConfig = config.public as Record<string, unknown>
  const env = import.meta.env as Record<string, string | undefined>

  return {
    supabaseUrl: String(publicConfig.supabaseUrl || env.NUXT_PUBLIC_SUPABASE_URL || env.VITE_SUPABASE_URL || '').replace(/\/$/, ''),
    supabaseAnonKey: String(publicConfig.supabaseAnonKey || env.NUXT_PUBLIC_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || ''),
    appBaseUrl: String(env.APP_BASE_URL || publicConfig.siteUrl || (import.meta.client ? window.location.origin : 'http://localhost:3000')).replace(/\/$/, '')
  }
}

export function getSupabaseClient() {
  if (supabaseClient) return supabaseClient

  const { supabaseUrl, supabaseAnonKey } = getPublicConfig()
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase 配置缺失，请设置 SUPABASE_URL 和 SUPABASE_ANON_KEY。')
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  })

  return supabaseClient
}

function fallbackProfile(nextUser: User): UserProfile {
  return {
    id: nextUser.id,
    email: nextUser.email ?? null,
    username: String(nextUser.user_metadata?.username || nextUser.email?.split('@')[0] || '').toLowerCase(),
    name: String(nextUser.user_metadata?.full_name || nextUser.user_metadata?.name || ''),
    avatar_url: String(nextUser.user_metadata?.avatar_url || ''),
    role: 'user',
    status: 'active'
  }
}

function getDisplayName(nextUser: User | null, nextProfile: UserProfile | null) {
  if (nextProfile?.name) return nextProfile.name
  const meta = nextUser?.user_metadata || {}
  return String(meta.full_name || meta.name || nextUser?.email || '用户')
}

export function useAuth() {
  const userState = useState<User | null>('auth-user', () => null)
  const profileState = useState<UserProfile | null>('auth-profile', () => null)
  const sessionState = useState<Session | null>('auth-session', () => null)
  const loadingState = useState('auth-loading', () => false)
  const readyState = useState('auth-ready', () => false)

  const user = computed(() => userState.value)
  const profile = computed(() => profileState.value)
  const session = computed(() => sessionState.value)
  const accessToken = computed(() => sessionState.value?.access_token || '')
  const isLoggedIn = computed(() => Boolean(userState.value && sessionState.value?.access_token))
  const isAdmin = computed(() => profileState.value?.role === 'admin')
  const loading = computed(() => loadingState.value)
  const displayName = computed(() => getDisplayName(userState.value, profileState.value))
  const avatarUrl = computed(() => {
    const meta = userState.value?.user_metadata || {}
    return String(profileState.value?.avatar_url || meta.avatar_url || '')
  })

  async function loadProfile(nextUser: User | null) {
    if (!nextUser) {
      profileState.value = null
      return null
    }

    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('id,email,username,name,avatar_url,role,status,created_at,updated_at')
      .eq('id', nextUser.id)
      .maybeSingle()

    profileState.value = error || !data ? fallbackProfile(nextUser) : data as UserProfile
    return profileState.value
  }

  async function refreshUser() {
    if (!import.meta.client) return null
    loadingState.value = true
    try {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error

      sessionState.value = data.session
      userState.value = data.session?.user ?? null
      await loadProfile(userState.value)
      readyState.value = true
      return userState.value
    } finally {
      loadingState.value = false
    }
  }

  async function initAuth() {
    if (!import.meta.client) return
    if (!readyState.value) await refreshUser()
    if (authListenerReady) return

    const supabase = getSupabaseClient()
    supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      sessionState.value = nextSession
      userState.value = nextSession?.user ?? null
      await loadProfile(userState.value)
      readyState.value = true
    })
    authListenerReady = true
  }

  async function requireLogin(redirectPath?: string) {
    await initAuth()
    if (isLoggedIn.value) return true

    const route = useRoute()
    const target = redirectPath || route.fullPath || '/'
    await navigateTo({ path: '/login', query: { redirect: target } })
    return false
  }

  async function resolveLoginEmail(identifier: string) {
    const value = identifier.trim().toLowerCase()
    if (value.includes('@')) return value

    const result = await $fetch<{ email: string }>('/api/auth/resolve-login', {
      method: 'POST',
      body: { identifier: value }
    })
    return result.email
  }

  async function signInWithIdentifier(identifier: string, password: string, captchaToken?: string) {
    loadingState.value = true
    try {
      const email = await resolveLoginEmail(identifier)
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: { captchaToken }
      })
      if (error) throw error
      sessionState.value = data.session
      userState.value = data.user
      await loadProfile(data.user)
      readyState.value = true
      return data
    } finally {
      loadingState.value = false
    }
  }

  async function signInWithEmail(email: string, password: string, captchaToken?: string) {
    return await signInWithIdentifier(email, password, captchaToken)
  }

  async function signUpWithEmail(email: string, password: string, name: string, captchaToken?: string, username?: string) {
    loadingState.value = true
    try {
      const { appBaseUrl } = getPublicConfig()
      const normalizedUsername = String(username || email.split('@')[0]).trim().toLowerCase()
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, full_name: name, username: normalizedUsername },
          emailRedirectTo: `${appBaseUrl}/auth/callback`,
          captchaToken
        }
      })
      if (error) throw error

      sessionState.value = data.session
      userState.value = data.user
      await loadProfile(data.user)
      readyState.value = true
      return data
    } finally {
      loadingState.value = false
    }
  }

  async function signInWithGoogle(redirectTo = '/') {
    const { appBaseUrl } = getPublicConfig()
    const callbackUrl = new URL(`${appBaseUrl}/auth/callback`)
    callbackUrl.searchParams.set('redirect', redirectTo)

    const supabase = getSupabaseClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: callbackUrl.toString() }
    })
    if (error) throw error
  }

  async function handleAuthCallback() {
    if (!import.meta.client) return null
    loadingState.value = true
    try {
      const supabase = getSupabaseClient()
      const url = new URL(window.location.href)

      if (url.searchParams.has('code')) {
        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)
        if (error) throw error
        sessionState.value = data.session
        userState.value = data.session?.user ?? null
        await loadProfile(userState.value)
        readyState.value = true
        return userState.value
      }

      await refreshUser()
      return userState.value
    } finally {
      loadingState.value = false
    }
  }

  async function signOut() {
    loadingState.value = true
    try {
      const supabase = getSupabaseClient()
      await supabase.auth.signOut()
      sessionState.value = null
      userState.value = null
      profileState.value = null
      readyState.value = true
      await navigateTo('/login')
    } finally {
      loadingState.value = false
    }
  }

  return {
    user,
    profile,
    session,
    accessToken,
    isLoggedIn,
    isAdmin,
    loading,
    displayName,
    avatarUrl,
    ready: readyState,
    initAuth,
    refreshUser,
    requireLogin,
    signInWithIdentifier,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    handleAuthCallback,
    signOut
  }
}
