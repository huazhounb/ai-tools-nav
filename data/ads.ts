import type { SponsorPlacement, SponsorSlot, SponsorSlotContext } from '~~/types/ad'

export const sponsorSlots: SponsorSlot[] = [
  {
    id: 'home-doubao-beginner',
    placement: 'home_today_tool',
    disclosure: '合作',
    title: '豆包：适合新手从中文办公和内容创作开始',
    summary: '适合需要聊天、写作、图片理解和会议纪要的中文用户。推荐从周报、短视频脚本和小红书标题这类低门槛任务开始试用。',
    sponsorName: '豆包',
    href: '/tool/doubao',
    ctaLabel: '查看工具详情',
    relevance: '面向首页新手和办公用户，属于入门级 AI 助手推荐位。',
    audience: ['AI 新手', '办公族', '自媒体'],
    toolSlugs: ['doubao'],
    categorySlugs: ['office', 'writing'],
    status: 'active',
    updatedAt: '2026-05-10'
  },
  {
    id: 'category-writing-deepseek',
    placement: 'category_featured',
    disclosure: '赞助',
    title: 'DeepSeek 写作与结构化输出推荐',
    summary: '适合把零散材料整理成周报、文章大纲、会议总结和代码解释。适合先看教程再上手，不建议直接复制未核对的事实。',
    sponsorName: 'DeepSeek',
    href: '/tool/deepseek',
    ctaLabel: '查看写作场景',
    relevance: '仅展示在写作、办公等相关分类，不进入自然排序。',
    audience: ['学生', '办公族', '程序员'],
    toolSlugs: ['deepseek'],
    categorySlugs: ['writing', 'office', 'coding'],
    status: 'active',
    updatedAt: '2026-05-10'
  },
  {
    id: 'tool-sidebar-kimi-paper',
    placement: 'tool_sidebar',
    disclosure: '合作',
    title: 'Kimi 长文阅读工作流',
    summary: '适合论文、研报、访谈材料的第一轮摘要整理。页面推荐只用于相关工具详情页侧边栏，不代表编辑排名。',
    sponsorName: 'Kimi',
    href: '/tutorial/kimi-paper-summary',
    ctaLabel: '查看教程',
    relevance: '适合阅读、写作和论文相关工具详情页的延伸阅读。',
    audience: ['学生', '论文党', '研究员'],
    toolSlugs: ['kimi', 'deepseek', 'tongyi'],
    categorySlugs: ['writing'],
    status: 'active',
    updatedAt: '2026-05-10'
  },
  {
    id: 'compare-ai-assistant-sponsored',
    placement: 'compare_sponsor',
    disclosure: '赞助',
    title: '需要先做选择？从任务场景对照开始',
    summary: '如果你还不确定选 DeepSeek、豆包还是通义，先按写作、办公、企业接入和移动端体验四个维度筛选，再进入工具详情页。',
    sponsorName: 'AI Nav 合作位',
    href: '/compare/deepseek-vs-doubao-vs-tongyi',
    ctaLabel: '继续查看对比',
    relevance: '仅用于相关对比页中部提示，不替代正文结论。',
    audience: ['AI 新手', '办公族', '企业用户'],
    comparisonSlugs: ['deepseek-vs-doubao-vs-tongyi'],
    toolSlugs: ['deepseek', 'doubao', 'tongyi'],
    status: 'active',
    updatedAt: '2026-05-10'
  },
  {
    id: 'tutorial-tool-deepseek-weekly-report',
    placement: 'tutorial_tool',
    disclosure: '合作',
    title: '用 DeepSeek 先生成周报初稿',
    summary: '适合把本周任务、会议、问题和下周计划整理成一版可修改初稿。建议人工核对项目名、日期和数字。',
    sponsorName: 'DeepSeek',
    href: '/tool/deepseek',
    ctaLabel: '查看工具',
    relevance: '仅在相关教程侧边栏展示，提醒读者可搭配工具使用。',
    audience: ['办公族', '职场新人'],
    tutorialSlugs: ['deepseek-weekly-report'],
    toolSlugs: ['deepseek'],
    categorySlugs: ['writing'],
    status: 'active',
    updatedAt: '2026-05-10'
  }
]

export function getSponsorSlots(placement: SponsorPlacement, context: SponsorSlotContext = {}) {
  return sponsorSlots
    .filter((slot) => slot.status === 'active')
    .filter((slot) => slot.placement === placement)
    .filter((slot) => matchesSponsorContext(slot, context))
}

function matchesSponsorContext(slot: SponsorSlot, context: SponsorSlotContext) {
  if (slot.categorySlugs?.length && context.categorySlug && !slot.categorySlugs.includes(context.categorySlug)) {
    return false
  }

  if (slot.toolSlugs?.length && context.toolSlug && !slot.toolSlugs.includes(context.toolSlug)) {
    return false
  }

  if (slot.toolSlugs?.length && context.toolSlugs?.length && !context.toolSlugs.some((slug) => slot.toolSlugs?.includes(slug))) {
    return false
  }

  if (slot.comparisonSlugs?.length && context.comparisonSlug && !slot.comparisonSlugs.includes(context.comparisonSlug)) {
    return false
  }

  if (slot.tutorialSlugs?.length && context.tutorialSlug && !slot.tutorialSlugs.includes(context.tutorialSlug)) {
    return false
  }

  return true
}
