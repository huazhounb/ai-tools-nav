import { getProfileByUserId, getSupabaseUser, type SupabaseProfile, type SupabaseUser } from './supabaseServer'

export function getAccessToken(event: any) {
  const header = getHeader(event, 'authorization') || ''
  return header.replace(/^Bearer\s+/i, '').trim()
}

export async function getCurrentUser(event: any): Promise<SupabaseUser | null> {
  const accessToken = getAccessToken(event)
  if (!accessToken) return null
  return await getSupabaseUser(accessToken)
}

export async function requireUser(event: any): Promise<SupabaseUser> {
  const user = await getCurrentUser(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: '请先登录后再继续操作。'
    })
  }
  return user
}

export async function getCurrentProfile(event: any): Promise<SupabaseProfile | null> {
  const user = await getCurrentUser(event)
  if (!user) return null
  return await getProfileByUserId(user.id)
}

export async function requireAdmin(event: any) {
  const user = await requireUser(event)
  const profile = await getProfileByUserId(user.id)

  if (profile?.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: '无权访问管理员后台。'
    })
  }

  return { user, profile }
}
