<script setup lang="ts">
definePageMeta({ middleware: 'admin' })

const { initAuth, accessToken } = useAuth()
const loading = ref(true)
const error = ref('')
const users = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const pageSize = ref(20)
const search = ref('')
const role = ref('all')
const status = ref('all')

onMounted(async () => {
  await initAuth()
  await loadUsers()
})

watch([page, search, role, status], () => loadUsers())

async function loadUsers() {
  loading.value = true
  error.value = ''
  try {
    const data = await $fetch<any>('/api/admin/users', {
      query: { page: page.value, pageSize: pageSize.value, search: search.value, role: role.value, status: status.value },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    users.value = data.items || []
    total.value = data.total || 0
  } catch (err: any) {
    error.value = err?.data?.statusMessage || err?.message || '用户列表加载失败。'
  } finally {
    loading.value = false
  }
}

function showReserved(message: string) {
  window.alert(message)
}
</script>

<template>
  <AdminLayout title="用户管理" description="查看用户邮箱、昵称、角色、状态、注册时间和投稿数量。">
    <div class="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_160px_160px]">
      <input v-model="search" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="搜索邮箱或昵称">
      <select v-model="role" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm">
        <option value="all">全部角色</option>
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>
      <select v-model="status" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm">
        <option value="all">全部状态</option>
        <option value="active">active</option>
        <option value="disabled">disabled</option>
      </select>
    </div>

    <p class="mb-3 text-sm text-slate-500">共 {{ total }} 个用户</p>
    <p v-if="error" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>

    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div v-if="loading" class="p-6 text-sm text-slate-500">正在加载用户...</div>
      <div v-else-if="!users.length" class="p-6 text-sm text-slate-500">暂无用户。</div>
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
          <thead class="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th class="px-4 py-3">用户</th>
              <th class="px-4 py-3">角色</th>
              <th class="px-4 py-3">状态</th>
              <th class="px-4 py-3">注册时间</th>
              <th class="px-4 py-3">最后登录</th>
              <th class="px-4 py-3">投稿数</th>
              <th class="px-4 py-3">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="item in users" :key="item.id">
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <img v-if="item.avatar_url" :src="item.avatar_url" class="h-9 w-9 rounded-full object-cover" alt="">
                  <span v-else class="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">{{ (item.name || item.email || 'U').slice(0, 1).toUpperCase() }}</span>
                  <div>
                    <p class="font-semibold text-slate-950">{{ item.name || '未设置昵称' }}</p>
                    <p class="text-xs text-slate-500">{{ item.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4">{{ item.role }}</td>
              <td class="px-4 py-4">{{ item.status }}</td>
              <td class="px-4 py-4 text-slate-500">{{ item.created_at?.slice(0, 10) || '-' }}</td>
              <td class="px-4 py-4 text-slate-500">{{ item.last_sign_in_at?.slice(0, 10) || '-' }}</td>
              <td class="px-4 py-4">{{ item.submissionsCount }}</td>
              <td class="px-4 py-4">
                <div class="flex flex-wrap gap-2">
                  <button class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold" type="button">查看</button>
                  <button class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-400" type="button" @click="showReserved('禁用功能已预留，第一版请在 Supabase 后台处理。')">禁用</button>
                  <button class="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-400" type="button" @click="showReserved('请先在 Supabase SQL 中手动设置管理员。')">设为管理员</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <button class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50" :disabled="page <= 1" @click="page--">上一页</button>
      <span class="text-sm text-slate-500">第 {{ page }} 页</span>
      <button class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50" :disabled="page * pageSize >= total" @click="page++">下一页</button>
    </div>
  </AdminLayout>
</template>
