export default defineNuxtRouteMiddleware(async (to) => {
  if (!import.meta.client) return

  const { initAuth, isLoggedIn } = useAuth()
  await initAuth()

  if (!isLoggedIn.value) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})
