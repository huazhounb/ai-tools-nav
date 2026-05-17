import { supabaseRestFetch } from '../../../../server/utils/supabaseServer'

type ResolveLoginBody = {
  identifier?: string
}

function normalizeIdentifier(identifier: string) {
  return identifier.trim().toLowerCase()
}

function getSupabaseAuthConfig() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NUXT_PUBLIC_SUPABASE_URL || ''
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

  if (!supabaseUrl || !serviceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Supabase 服务端配置缺失，请设置 SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY。'
    })
  }

  return {
    supabaseUrl: supabaseUrl.replace(/\/$/, ''),
    serviceRoleKey
  }
}

type AdminUser = {
  email?: string | null
  user_metadata?: Record<string, unknown>
}

async function resolveEmailFromAuthUsers(identifier: string) {
  const { supabaseUrl, serviceRoleKey } = getSupabaseAuthConfig()
  const response = await $fetch<{ users?: AdminUser[] }>(`${supabaseUrl}/auth/v1/admin/users`, {
    query: {
      page: 1,
      per_page: 1000
    },
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    }
  })

  const matchedUser = response.users?.find((user) => {
    const email = String(user.email || '').toLowerCase()
    const username = String(user.user_metadata?.username || '').toLowerCase()
    return username === identifier || email.split('@')[0] === identifier
  })

  return matchedUser?.email || null
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ResolveLoginBody>(event)
  const identifier = normalizeIdentifier(body.identifier || '')

  if (!identifier) {
    throw createError({
      statusCode: 400,
      statusMessage: '请输入邮箱或用户名。'
    })
  }

  if (identifier.includes('@')) {
    return { email: identifier }
  }

  const rows = await supabaseRestFetch<Array<{ email: string | null }>>(
    `profiles?username=eq.${encodeURIComponent(identifier)}&select=email&limit=1`,
    { service: true }
  )
  const email = rows[0]?.email

  if (email) {
    return { email }
  }

  const authEmail = await resolveEmailFromAuthUsers(identifier)

  if (!authEmail) {
    throw createError({
      statusCode: 404,
      statusMessage: '账号不存在，请检查邮箱或用户名。'
    })
  }

  return { email: authEmail }
})
