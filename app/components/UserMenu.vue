<script setup lang="ts">
const { initAuth, isLoggedIn, displayName, avatarUrl, user, signOut } = useAuth()
const open = ref(false)

onMounted(() => {
  initAuth()
})

const initials = computed(() => {
  const name = displayName.value || user.value?.email || 'U'
  return name.slice(0, 1).toUpperCase()
})

async function handleSignOut() {
  open.value = false
  await signOut()
}
</script>

<template>
  <div class="relative">
    <NuxtLink
      v-if="!isLoggedIn"
      to="/login"
      class="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700"
    >
      登录
    </NuxtLink>

    <button
      v-else
      type="button"
      class="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
      @click="open = !open"
    >
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        alt="用户头像"
        class="h-8 w-8 rounded-full object-cover"
        referrerpolicy="no-referrer"
      >
      <span v-else class="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">{{ initials }}</span>
      <span class="hidden max-w-[120px] truncate sm:inline">{{ displayName }}</span>
    </button>

    <div
      v-if="isLoggedIn && open"
      class="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
    >
      <div class="border-b border-slate-100 p-4">
        <p class="truncate text-sm font-semibold text-slate-950">{{ displayName }}</p>
        <p class="mt-1 truncate text-xs text-slate-500">{{ user?.email }}</p>
      </div>
      <NuxtLink to="/submit?type=tool" class="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        提交工具
      </NuxtLink>
      <NuxtLink to="/submit?type=tutorial" class="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        提交教程
      </NuxtLink>
      <NuxtLink to="/submit?type=prompt" class="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        提交提示词
      </NuxtLink>
      <NuxtLink to="/submit?type=comparison" class="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        提交工具对比
      </NuxtLink>
      <NuxtLink to="/account/submissions" class="block border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        我的投稿
      </NuxtLink>
      <NuxtLink to="/account/favorites" class="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" @click="open = false">
        我的收藏
      </NuxtLink>
      <button
        type="button"
        class="block w-full border-t border-slate-100 px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
        @click="handleSignOut"
      >
        退出登录
      </button>
    </div>
  </div>
</template>
