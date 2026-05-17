<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

type FavoriteItem = {
  id: string
  target_type: 'tool' | 'tutorial' | 'prompt' | 'comparison'
  target_slug: string
  title: string
  summary: string
  href: string
  created_at: string
}

const { initAuth, accessToken } = useAuth()

const loading = ref(true)
const error = ref('')
const favorites = ref<FavoriteItem[]>([])
const activeType = ref<'all' | FavoriteItem['target_type']>('all')

const typeTabs = [
  { value: 'all', label: '全部' },
  { value: 'tutorial', label: '教程' },
  { value: 'prompt', label: '提示词' },
  { value: 'comparison', label: '对比' },
  { value: 'tool', label: '工具' }
] as const

const typeLabel: Record<FavoriteItem['target_type'], string> = {
  tool: '工具',
  tutorial: '教程',
  prompt: '提示词',
  comparison: '对比'
}

const filteredFavorites = computed(() => {
  if (activeType.value === 'all') return favorites.value
  return favorites.value.filter((item) => item.target_type === activeType.value)
})

async function loadFavorites() {
  loading.value = true
  error.value = ''
  try {
    const data = await $fetch<{ favorites: FavoriteItem[] }>('/api/favorites', {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    favorites.value = data.favorites || []
  } catch (err: any) {
    error.value = err?.data?.statusMessage || err?.message || '加载收藏失败。'
  } finally {
    loading.value = false
  }
}

async function removeFavorite(item: FavoriteItem) {
  const previous = favorites.value
  favorites.value = favorites.value.filter((favorite) => favorite.id !== item.id)

  try {
    await $fetch('/api/favorites', {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken.value}` },
      body: {
        type: item.target_type,
        slug: item.target_slug
      }
    })
  } catch (err: any) {
    favorites.value = previous
    error.value = err?.data?.statusMessage || err?.message || '取消收藏失败。'
  }
}

onMounted(async () => {
  await initAuth()
  await loadFavorites()
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-10">
      <PageContainer>
        <BaseBadge tone="primary">个人中心</BaseBadge>
        <h1 class="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">我的收藏</h1>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          这里会保存你收藏过的教程、提示词、工具对比和工具页面，之后登录账号就能继续查看。
        </p>
      </PageContainer>
    </section>

    <section class="py-10">
      <PageContainer>
        <p v-if="error" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>

        <div class="mb-5 flex flex-wrap gap-2">
          <button
            v-for="tab in typeTabs"
            :key="tab.value"
            type="button"
            class="min-h-10 rounded-xl px-4 text-sm font-semibold transition"
            :class="activeType === tab.value ? 'bg-blue-600 text-white shadow-sm shadow-blue-100' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'"
            @click="activeType = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div v-if="loading" class="p-6 text-sm text-slate-500">正在加载收藏...</div>
          <div v-else-if="!favorites.length" class="p-8 text-center">
            <h2 class="text-lg font-bold text-slate-950">还没有收藏内容</h2>
            <p class="mt-2 text-sm text-slate-500">看到有用的教程或提示词时，点击收藏后会显示在这里。</p>
            <NuxtLink to="/tutorial" class="mt-5 inline-flex min-h-10 items-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
              去看教程
            </NuxtLink>
          </div>
          <div v-else-if="!filteredFavorites.length" class="p-8 text-center">
            <h2 class="text-lg font-bold text-slate-950">当前分类没有收藏</h2>
            <p class="mt-2 text-sm text-slate-500">切换到其他分类，或者继续浏览内容。</p>
          </div>
          <div v-else class="divide-y divide-slate-100">
            <article v-for="item in filteredFavorites" :key="item.id" class="grid gap-4 p-5 lg:grid-cols-[1fr_auto]">
              <div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{{ typeLabel[item.target_type] }}</span>
                <NuxtLink :to="item.href" class="mt-3 block text-lg font-bold text-slate-950 hover:text-blue-700">
                  {{ item.title }}
                </NuxtLink>
                <p class="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{{ item.summary }}</p>
                <p class="mt-3 text-xs text-slate-400">
                  收藏时间：{{ item.created_at ? new Date(item.created_at).toLocaleString('zh-CN') : '-' }}
                </p>
              </div>
              <div class="flex items-start gap-2 lg:justify-end">
                <NuxtLink :to="item.href" class="inline-flex min-h-10 items-center rounded-xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                  查看
                </NuxtLink>
                <button
                  type="button"
                  class="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  @click="removeFavorite(item)"
                >
                  取消收藏
                </button>
              </div>
            </article>
          </div>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
