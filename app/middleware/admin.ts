export default defineNuxtRouteMiddleware(async (to) => {
  if (!import.meta.client) return

  const { initAuth, isLoggedIn, isAdmin } = useAuth()
  await initAuth()

  if (!isLoggedIn.value) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  if (!isAdmin.value) {
    throw createError({
      statusCode: 403,
      statusMessage: '无权访问管理员后台'
    })
  }
})
