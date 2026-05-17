<script setup lang="ts">
type SubmissionType = 'tool' | 'tutorial' | 'prompt' | 'comparison'

const props = defineProps<{
  initialType?: SubmissionType
}>()

const { initAuth, accessToken } = useAuth()

const typeOptions = [
  { value: 'tool', label: '提交 AI 工具' },
  { value: 'tutorial', label: '提交教程' },
  { value: 'prompt', label: '提交提示词' },
  { value: 'comparison', label: '提交工具对比' }
] as const

const form = reactive({
  type: props.initialType || 'tool' as SubmissionType,
  title: '',
  url: '',
  category: '',
  description: '',
  contact: '',
  officialUrl: '',
  freeStatus: '',
  chineseSupport: '',
  recommendedReason: '',
  relatedTools: '',
  difficulty: '',
  estimatedMinutes: '',
  outline: '',
  applicableModels: '',
  task: '',
  promptText: '',
  variables: '',
  toolNames: '',
  scenario: '',
  recommendation: ''
})

const errors = ref<Record<string, string>>({})
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')

watch(() => props.initialType, (value) => {
  if (value) form.type = value
})

onMounted(() => initAuth())

function validate() {
  const nextErrors: Record<string, string> = {}
  if (!['tool', 'tutorial', 'prompt', 'comparison'].includes(form.type)) nextErrors.type = '请选择正确的投稿类型'
  if (!form.title.trim()) nextErrors.title = '请填写标题'
  if (!form.description.trim()) nextErrors.description = '请填写简介'
  errors.value = nextErrors
  return Object.keys(nextErrors).length === 0
}

function toList(value: string) {
  return value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean)
}

function buildPayload() {
  if (form.type === 'tool') {
    return {
      officialUrl: form.officialUrl,
      freeStatus: form.freeStatus,
      chineseSupport: form.chineseSupport,
      recommendedReason: form.recommendedReason
    }
  }
  if (form.type === 'tutorial') {
    return {
      relatedTools: toList(form.relatedTools),
      difficulty: form.difficulty,
      estimatedMinutes: Number(form.estimatedMinutes) || null,
      outline: form.outline
    }
  }
  if (form.type === 'prompt') {
    return {
      applicableModels: toList(form.applicableModels),
      task: form.task,
      promptText: form.promptText,
      variables: toList(form.variables)
    }
  }
  return {
    toolNames: toList(form.toolNames),
    scenario: form.scenario,
    recommendation: form.recommendation
  }
}

async function submitForm() {
  if (!validate()) return

  status.value = 'submitting'
  errorMessage.value = ''

  try {
    await $fetch('/api/submissions', {
      method: 'POST',
      body: {
        type: form.type,
        title: form.title.trim(),
        url: form.url.trim() || null,
        category: form.category.trim() || null,
        description: form.description.trim(),
        contact: form.contact.trim() || null,
        payload: buildPayload()
      },
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })

    status.value = 'success'
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || err?.message || '提交失败，请稍后重试。'
  }
}
</script>

<template>
  <form class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" @submit.prevent="submitForm">
    <div class="grid gap-5">
      <label class="grid gap-2 text-sm font-medium text-slate-900">
        投稿类型
        <select v-model="form.type" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-700">
          <option v-for="item in typeOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
        <span v-if="errors.type" class="text-xs text-red-600">{{ errors.type }}</span>
      </label>

      <label class="grid gap-2 text-sm font-medium text-slate-900">
        标题
        <input v-model="form.title" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" type="text" placeholder="例如：DeepSeek 周报总结教程">
        <span v-if="errors.title" class="text-xs text-red-600">{{ errors.title }}</span>
      </label>

      <div class="grid gap-5 md:grid-cols-2">
        <label class="grid gap-2 text-sm font-medium text-slate-900">
          链接，可选
          <input v-model="form.url" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" type="url" placeholder="https://example.com">
        </label>
        <label class="grid gap-2 text-sm font-medium text-slate-900">
          分类
          <input v-model="form.category" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" type="text" placeholder="AI 写作 / AI 绘图 / AI 编程">
        </label>
      </div>

      <label class="grid gap-2 text-sm font-medium text-slate-900">
        简介
        <textarea v-model="form.description" class="min-h-32 rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="说明内容解决什么问题、适合谁、有哪些限制。" />
        <span v-if="errors.description" class="text-xs text-red-600">{{ errors.description }}</span>
      </label>

      <div v-if="form.type === 'tool'" class="grid gap-5 rounded-2xl bg-slate-50 p-4 md:grid-cols-2">
        <input v-model="form.officialUrl" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="官网链接">
        <input v-model="form.freeStatus" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="免费情况">
        <input v-model="form.chineseSupport" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="中文支持">
        <input v-model="form.recommendedReason" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="推荐理由">
      </div>

      <div v-else-if="form.type === 'tutorial'" class="grid gap-5 rounded-2xl bg-slate-50 p-4 md:grid-cols-2">
        <input v-model="form.relatedTools" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="相关工具，用逗号分隔">
        <input v-model="form.difficulty" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="难度">
        <input v-model="form.estimatedMinutes" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="预计耗时（分钟）">
        <input v-model="form.outline" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="教程大纲">
      </div>

      <div v-else-if="form.type === 'prompt'" class="grid gap-5 rounded-2xl bg-slate-50 p-4">
        <input v-model="form.applicableModels" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="适用模型，用逗号分隔">
        <input v-model="form.task" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="适用任务">
        <textarea v-model="form.promptText" class="min-h-28 rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Prompt 正文" />
        <input v-model="form.variables" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="变量，用逗号分隔">
      </div>

      <div v-else class="grid gap-5 rounded-2xl bg-slate-50 p-4">
        <input v-model="form.toolNames" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="对比工具，用逗号分隔">
        <input v-model="form.scenario" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" placeholder="适用场景">
        <textarea v-model="form.recommendation" class="min-h-24 rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="推荐结论" />
      </div>

      <label class="grid gap-2 text-sm font-medium text-slate-900">
        联系方式，可选
        <input v-model="form.contact" class="min-h-11 rounded-xl border border-slate-200 px-3 text-sm" type="text" placeholder="邮箱 / 微信 / 其他联系方式">
      </label>

      <button type="submit" class="min-h-11 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 disabled:bg-slate-400" :disabled="status === 'submitting'">
        {{ status === 'submitting' ? '提交中...' : '提交审核' }}
      </button>

      <div v-if="status === 'success'" class="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
        <p>提交成功，内容将进入审核队列。</p>
        <NuxtLink to="/account/submissions" class="mt-2 inline-flex font-semibold text-emerald-800 underline">
          查看我的投稿状态
        </NuxtLink>
      </div>
      <p v-if="status === 'error'" class="rounded-xl bg-red-50 p-3 text-sm text-red-700">{{ errorMessage }}</p>
    </div>
  </form>
</template>
