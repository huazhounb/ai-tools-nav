<script setup lang="ts">
import type { MockTool, ToolScoreKey } from '~~/data/mock-tools'

const props = defineProps<{
  tools?: MockTool[]
}>()

const safeTools = computed(() => props.tools || [])

const dimensions: Array<{ key: ToolScoreKey, label: string }> = [
  { key: 'chinese', label: '中文支持' },
  { key: 'writing', label: '写作能力' },
  { key: 'coding', label: '代码能力' },
  { key: 'image', label: '图片能力' },
  { key: 'research', label: '研究能力' },
  { key: 'office', label: '办公能力' },
  { key: 'easeOfUse', label: '易用性' },
  { key: 'costPerformance', label: '性价比' }
]

function barWidth(score: number) {
  return `${Math.max(1, Math.min(5, score)) * 20}%`
}
</script>

<template>
  <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
    <table class="w-full min-w-[860px] border-collapse text-sm">
      <thead class="bg-slate-50 text-left">
        <tr>
          <th class="border-b border-slate-200 px-4 py-4 text-slate-950">对比维度</th>
          <th v-for="tool in safeTools" :key="tool.slug" class="border-b border-slate-200 px-4 py-4 text-slate-950">
            <div class="flex items-center gap-2">
              <BrandIcon :icon="tool.icon" :slug="tool.slug" :name="tool.name" :size="34" rounded="rounded-xl" />
              <span>{{ tool.name }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="border-b border-slate-100 bg-slate-50 px-4 py-4 text-left font-semibold text-slate-950">免费情况</th>
          <td v-for="tool in safeTools" :key="tool.slug" class="border-b border-slate-100 px-4 py-4 text-slate-700">{{ tool.freeStatus }}</td>
        </tr>
        <tr>
          <th class="border-b border-slate-100 bg-slate-50 px-4 py-4 text-left font-semibold text-slate-950">平台支持</th>
          <td v-for="tool in safeTools" :key="tool.slug" class="border-b border-slate-100 px-4 py-4 text-slate-700">{{ tool.platform }}</td>
        </tr>
        <tr>
          <th class="border-b border-slate-100 bg-slate-50 px-4 py-4 text-left font-semibold text-slate-950">适合人群</th>
          <td v-for="tool in safeTools" :key="tool.slug" class="border-b border-slate-100 px-4 py-4 text-slate-700">{{ tool.audiences.join(' / ') }}</td>
        </tr>
        <tr v-for="dimension in dimensions" :key="dimension.key">
          <th class="border-b border-slate-100 bg-slate-50 px-4 py-4 text-left font-semibold text-slate-950">{{ dimension.label }}</th>
          <td v-for="tool in safeTools" :key="tool.slug" class="border-b border-slate-100 px-4 py-4">
            <div class="flex items-center gap-3">
              <span class="w-10 font-semibold text-slate-950">{{ tool.scores[dimension.key] }}/5</span>
              <span class="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <span class="block h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" :style="{ width: barWidth(tool.scores[dimension.key]) }" />
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <th class="bg-slate-50 px-4 py-4 text-left font-semibold text-slate-950">推荐场景</th>
          <td v-for="tool in safeTools" :key="tool.slug" class="px-4 py-4 text-slate-700">{{ tool.scenarios.slice(0, 3).join(' / ') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
