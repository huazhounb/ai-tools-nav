import { mockTools } from '~~/data/mock-tools'
import type { MockTutorial } from '~~/data/mock-tutorials'

type TutorialStyleInput = Partial<MockTutorial> | null | undefined

const themeGradients: Record<string, string> = {
  chatgpt: 'from-slate-700 via-slate-800 to-zinc-900',
  deepseek: 'from-blue-500 via-cyan-500 to-sky-500',
  ppt: 'from-violet-500 via-indigo-500 to-blue-500',
  image: 'from-indigo-500 via-purple-500 to-fuchsia-500',
  'image-compare': 'from-blue-600 via-violet-600 to-fuchsia-600',
  writing: 'from-pink-500 via-rose-500 to-orange-400',
  code: 'from-zinc-800 via-slate-700 to-blue-700',
  research: 'from-emerald-500 via-teal-500 to-cyan-500',
  design: 'from-cyan-500 via-blue-500 to-purple-500',
  office: 'from-amber-400 via-orange-500 to-red-500',
  beginner: 'from-green-500 via-emerald-500 to-teal-500'
}

const categoryThemeMap: Record<string, string> = {
  beginner: 'beginner',
  'ai-writing': 'writing',
  'ai-image': 'image',
  'ai-design': 'design',
  'ai-video': 'image',
  'ai-ppt': 'ppt',
  'ai-office': 'office',
  'ai-code': 'code',
  'ai-research': 'research'
}

const accentByTheme: Record<string, string> = {
  ppt: 'PPT',
  image: 'AI 绘图',
  'image-compare': 'AI 绘图',
  writing: 'AI 写作',
  code: 'AI 编程',
  research: 'AI 研究',
  design: 'AI 设计',
  office: 'AI 办公',
  beginner: 'AI 入门'
}

function stripGradientDirection(value?: string) {
  return (value || '')
    .replace(/\bbg-gradient-to-(?:t|tr|r|br|b|bl|l|tl)\b/g, '')
    .trim()
}

function getCategoryTheme(tutorial: TutorialStyleInput) {
  const slugs = tutorial?.categorySlugs || []
  const matched = slugs.find((slug) => categoryThemeMap[slug])
  return matched ? categoryThemeMap[matched] : ''
}

export function getTutorialToolSlugs(tutorial: TutorialStyleInput) {
  const slugs = tutorial?.relatedToolSlugs?.length ? tutorial.relatedToolSlugs : tutorial?.tools
  return (slugs || []).filter(Boolean)
}

export function getTutorialCoverStyle(tutorial: TutorialStyleInput) {
  const theme = tutorial?.coverTheme || getCategoryTheme(tutorial) || 'beginner'
  const gradientClass = stripGradientDirection(tutorial?.coverGradient || tutorial?.gradient) || themeGradients[theme] || 'from-blue-500 via-indigo-500 to-violet-500'
  const toolSlugs = getTutorialToolSlugs(tutorial)
  const firstTool = mockTools.find((tool) => tool.slug === toolSlugs[0])
  const label = tutorial?.type || '教程'
  const accentText = firstTool?.name || tutorial?.keyword || accentByTheme[theme] || 'AI LEARNING'

  return {
    gradientClass,
    label,
    iconToolSlug: firstTool?.slug || toolSlugs[0] || null,
    accentText
  }
}
