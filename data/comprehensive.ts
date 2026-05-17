import type { Category } from '~~/types/category'
import type { ComparisonItem, PromptItem, RankingItem, TutorialItem } from '~~/types/content'
import type { Tool, ToolPricing } from '~~/types/tool'
import { brandIconPaths } from './brand-icon-paths'
import { commonFaqs } from './mock-faqs'

const updatedAt = '2026-05-10'

const categoryInfo = [
  ['AI 写作', 'ai-writing', '写文章、周报、邮件、论文润色和内容改写'],
  ['AI 对话', 'ai-chat', '通用问答、中文助手、多模态聊天和任务拆解'],
  ['AI 绘图', 'ai-image', '生成图片、海报、头像、电商图和创意视觉'],
  ['AI 视频', 'ai-video', '生成短片、分镜、口播视频和视频素材'],
  ['AI PPT', 'ai-ppt', '生成演示文稿、提案、课程讲义和汇报初稿'],
  ['AI 办公', 'ai-office', '会议纪要、表格分析、知识库、文档处理和效率协作'],
  ['AI 编程', 'ai-code', '代码补全、项目理解、测试生成、重构和调试'],
  ['AI 研究', 'ai-research', '论文阅读、资料整理、文献摘要和调研卡片'],
  ['AI 搜索', 'ai-search', '带来源的搜索、竞品调研、事实核对和资料追踪'],
  ['AI 音频', 'ai-audio', '配音、转写、播客剪辑、音乐生成和声音处理'],
  ['AI 设计', 'ai-design', '海报、品牌视觉、模板设计、UI 灵感和营销物料'],
  ['AI 数据', 'ai-data', '表格清洗、指标解释、可视化建议和分析报告']
] as const

export const categories: Category[] = categoryInfo.map(([name, slug, description]) => ({
  name,
  slug,
  href: `/category/${slug}`,
  description,
  intro: `${name} 分类整理适合中文用户直接上手的工具、教程和提示词，重点解决“选哪个、怎么用、用完怎么检查”的问题。`,
  body: `${name} 不是简单罗列工具名称。这个页面会把工具按免费情况、中文支持、平台形态和适合人群拆开，帮助新手先找到低门槛工具，再通过教程和 Prompt 模板完成真实任务。选择时建议先明确任务，例如写周报、做 PPT、生成海报、整理论文或写代码，再比较免费额度、导出限制、中文输出质量和是否需要人工核对。`,
  toolSlugs: [],
  relatedTutorials: ['chatgpt-guide', 'deepseek-beginner', 'ai-ppt-gamma'],
  relatedPrompts: ['weekly-report-summary', 'ppt-outline', 'xiaohongshu-copy'],
  seoTitle: `${name}工具推荐：免费情况、中文支持和新手选择建议`,
  seoDescription: `${description}，整理适合中文用户的工具、教程、提示词和对比入口。`,
  updatedAt
}))

type ToolSpec = {
  name: string
  slug: string
  categorySlug: string
  pricing: ToolPricing
  platform: string
  audience: string[]
  icon?: string
  tags: string[]
  officialUrl: string
}

const toolSpecs: ToolSpec[] = [
  { name: 'ChatGPT', slug: 'chatgpt', categorySlug: 'ai-chat', pricing: 'freemium', platform: 'Web / App / API', audience: ['学生', '职场用户', '开发者', '内容创作者'], tags: ['通用助手', '英文写作', '多模态'], officialUrl: 'https://chatgpt.com/' },
  { name: 'DeepSeek', slug: 'deepseek', categorySlug: 'ai-chat', pricing: 'freemium', platform: 'Web / App / API', audience: ['学生', '办公族', '程序员'], tags: ['中文友好', '写作', '编程'], officialUrl: 'https://www.deepseek.com/' },
  { name: 'Claude', slug: 'claude', categorySlug: 'ai-writing', pricing: 'freemium', platform: 'Web / App / API', audience: ['写作者', '研究员', '产品经理'], tags: ['长文', '文档分析', '写作'], officialUrl: 'https://claude.ai/' },
  { name: 'Notion AI', slug: 'notion-ai', categorySlug: 'ai-office', pricing: 'paid', platform: 'Web / App', audience: ['知识工作者', '团队协作者', '产品经理'], tags: ['知识库', '写作', '协作'], officialUrl: 'https://www.notion.com/ai' },
  { name: 'Canva AI', slug: 'canva-ai', categorySlug: 'ai-design', pricing: 'freemium', platform: 'Web / App', audience: ['运营', '自媒体', '教师'], tags: ['设计', '模板', '海报'], officialUrl: 'https://www.canva.com/magic/' },
  { name: 'Cursor', slug: 'cursor', categorySlug: 'ai-code', pricing: 'freemium', platform: '桌面客户端', audience: ['程序员', '独立开发者'], tags: ['编程', 'IDE', '代码理解'], officialUrl: 'https://cursor.com/' },
  { name: 'Midjourney', slug: 'midjourney', categorySlug: 'ai-image', pricing: 'paid', platform: 'Web / Discord', audience: ['设计师', '插画师', '品牌视觉人员'], tags: ['绘图', '设计', '风格探索'], officialUrl: 'https://www.midjourney.com/' },
  { name: 'Gamma', slug: 'gamma', categorySlug: 'ai-ppt', pricing: 'freemium', platform: 'Web', audience: ['产品经理', '教师', '销售'], tags: ['PPT', '演示文稿', '提案'], officialUrl: 'https://gamma.app/' },
  { name: '通义千问', slug: 'tongyi', categorySlug: 'ai-office', pricing: 'freemium', platform: 'Web / App / API', audience: ['办公族', '企业用户', '开发者'], tags: ['中文办公', '文档', 'API'], officialUrl: 'https://tongyi.aliyun.com/' },
  { name: '豆包', slug: 'doubao', categorySlug: 'ai-chat', pricing: 'free', platform: 'Web / App / 浏览器插件', audience: ['新手', '办公族', '自媒体'], tags: ['办公', '免费', '多模态'], officialUrl: 'https://www.doubao.com/' },
  { name: 'Kimi', slug: 'kimi', categorySlug: 'ai-research', pricing: 'freemium', platform: 'Web / App', audience: ['学生', '论文党', '研究员'], tags: ['长文本', '阅读', '总结'], officialUrl: 'https://kimi.moonshot.cn/' },
  { name: '即梦 AI', slug: 'jimeng', categorySlug: 'ai-image', pricing: 'freemium', platform: 'Web / App', audience: ['设计师', '自媒体', '电商运营'], tags: ['生图', '视频', '设计'], officialUrl: 'https://jimeng.jianying.com/' },
  { name: '文心一言', slug: 'wenxin', categorySlug: 'ai-chat', pricing: 'freemium', platform: 'Web / App', audience: ['办公族', '学生', '内容创作者'], tags: ['中文问答', '办公', '百度生态'], officialUrl: 'https://yiyan.baidu.com/' },
  { name: 'Runway', slug: 'runway', categorySlug: 'ai-video', pricing: 'freemium', platform: 'Web', audience: ['视频创作者', '设计师', '品牌团队'], tags: ['视频', '生成式影像', '创意'], officialUrl: 'https://runwayml.com/' },
  { name: 'Perplexity', slug: 'perplexity', categorySlug: 'ai-search', pricing: 'freemium', platform: 'Web / App', audience: ['研究员', '学生', '产品经理'], tags: ['AI搜索', '来源追踪', '英文资料'], officialUrl: 'https://www.perplexity.ai/' },
  { name: 'Stable Diffusion', slug: 'stable-diffusion', categorySlug: 'ai-image', pricing: 'freemium', platform: 'Web / 本地部署', audience: ['设计师', '开发者', 'AI 绘图玩家'], tags: ['开源', '绘图', '模型生态'], officialUrl: 'https://stability.ai/' },
  { name: 'Gemini', slug: 'gemini', categorySlug: 'ai-chat', pricing: 'freemium', platform: 'Web / App / API', audience: ['学生', '办公族', '开发者'], tags: ['多模态', '搜索生态', '英文资料'], officialUrl: 'https://gemini.google.com/' },
  { name: '秘塔 AI 搜索', slug: 'metaso', categorySlug: 'ai-search', pricing: 'free', platform: 'Web', audience: ['学生', '研究员', '内容创作者'], tags: ['中文搜索', '资料整理', '来源'], officialUrl: 'https://metaso.cn/' },
  { name: 'Tome', slug: 'tome', categorySlug: 'ai-ppt', pricing: 'freemium', platform: 'Web', audience: ['创业者', '销售', '产品经理'], tags: ['PPT', '叙事', '提案'], officialUrl: 'https://tome.app/' },
  { name: 'GitHub Copilot', slug: 'github-copilot', categorySlug: 'ai-code', pricing: 'paid', platform: 'IDE 插件', audience: ['程序员', '团队开发者'], tags: ['代码补全', 'IDE', '工程'], officialUrl: 'https://github.com/features/copilot' },
  { name: 'Codeium', slug: 'codeium', categorySlug: 'ai-code', pricing: 'freemium', platform: 'IDE 插件', audience: ['程序员', '学生开发者'], tags: ['代码补全', '免费额度', 'IDE'], officialUrl: 'https://codeium.com/' },
  { name: 'Pika', slug: 'pika', categorySlug: 'ai-video', pricing: 'freemium', platform: 'Web', audience: ['短视频创作者', '设计师'], tags: ['视频生成', '动效', '创意'], officialUrl: 'https://pika.art/' },
  { name: '可灵 AI', slug: 'kling', categorySlug: 'ai-video', pricing: 'freemium', platform: 'Web / App', audience: ['短视频创作者', '品牌团队'], tags: ['中文视频', '分镜', '短片'], officialUrl: 'https://klingai.kuaishou.com/' },
  { name: '讯飞星火', slug: 'sparkdesk', categorySlug: 'ai-office', pricing: 'freemium', platform: 'Web / App / API', audience: ['办公族', '教师', '学生'], tags: ['中文办公', '教育', '语音'], officialUrl: 'https://xinghuo.xfyun.cn/' },
  { name: 'WPS AI', slug: 'wps-ai', categorySlug: 'ai-office', pricing: 'freemium', platform: '桌面客户端 / App', audience: ['办公族', '学生', '行政人员'], tags: ['文档', '表格', 'PPT'], officialUrl: 'https://ai.wps.cn/' },
  { name: '腾讯元宝', slug: 'yuanbao', categorySlug: 'ai-chat', pricing: 'free', platform: 'Web / App', audience: ['办公族', '学生', '微信生态用户'], tags: ['中文问答', '资料总结', '搜索'], officialUrl: 'https://yuanbao.tencent.com/' },
  { name: '通义灵码', slug: 'tongyi-lingma', categorySlug: 'ai-code', pricing: 'freemium', platform: 'IDE 插件', audience: ['程序员', '企业开发者'], tags: ['代码补全', '中文编程', '阿里生态'], officialUrl: 'https://lingma.aliyun.com/' },
  { name: 'Trae', slug: 'trae', categorySlug: 'ai-code', pricing: 'freemium', platform: '桌面客户端', audience: ['程序员', 'AI 编程新手'], tags: ['AI IDE', '项目理解', '代码生成'], officialUrl: 'https://www.trae.ai/' },
  { name: 'ElevenLabs', slug: 'elevenlabs', categorySlug: 'ai-audio', pricing: 'freemium', platform: 'Web / API', audience: ['视频创作者', '播客作者', '课程制作者'], tags: ['配音', '声音克隆', '多语言'], officialUrl: 'https://elevenlabs.io/' },
  { name: '剪映 AI', slug: 'jianying-ai', categorySlug: 'ai-video', pricing: 'freemium', platform: '桌面客户端 / App', audience: ['自媒体', '短视频创作者', '运营'], tags: ['剪辑', '字幕', '短视频'], officialUrl: 'https://www.capcut.cn/' },
  { name: 'ChatPDF', slug: 'chatpdf', categorySlug: 'ai-research', pricing: 'freemium', platform: 'Web', audience: ['学生', '研究员', '职场用户'], tags: ['PDF', '阅读', '总结'], officialUrl: 'https://www.chatpdf.com/' },
  { name: 'Tableau GPT', slug: 'tableau-gpt', categorySlug: 'ai-data', pricing: 'paid', platform: 'Web / 企业服务', audience: ['数据分析师', '运营', '管理者'], tags: ['数据分析', 'BI', '可视化'], officialUrl: 'https://www.tableau.com/' }
]

const categoryName = (slug: string) => categories.find((item) => item.slug === slug)?.name || 'AI 工具'
const pricingText: Record<ToolPricing, string> = {
  free: '基础功能免费',
  freemium: '有免费额度',
  paid: '付费为主'
}

export const mockTools: Tool[] = toolSpecs.map((spec) => ({
  name: spec.name,
  slug: spec.slug,
  summary: `${spec.name} 适合${spec.audience.slice(0, 2).join('、')}处理${spec.tags.slice(0, 2).join('、')}相关任务，适合先用示例任务验证效果，再进入正式工作流。`,
  category: categoryName(spec.categorySlug),
  categorySlug: spec.categorySlug,
  pricing: spec.pricing,
  freeStatus: pricingText[spec.pricing],
  icon: spec.icon || brandIconPaths[spec.slug] || `/brand-icons/${spec.slug}.svg`,
  chineseSupport: ['ai-chat', 'ai-office', 'ai-research', 'ai-search'].includes(spec.categorySlug) ? '优秀' : '良好',
  audience: spec.audience,
  platform: spec.platform,
  updatedAt,
  hasTutorial: ['chatgpt', 'deepseek', 'cursor', 'midjourney', 'gamma', 'kimi', 'jimeng', 'canva-ai', 'notion-ai', 'doubao'].includes(spec.slug),
  tags: spec.tags,
  conclusion: `${spec.name} 更适合${spec.audience[0]}从“明确任务”开始使用，不建议把生成结果不经核对直接发布或交付。`,
  features: ['任务拆解与内容生成', '根据上下文改写和优化', '输出结构化清单或表格', '辅助生成可复制模板', '结合人工校对形成最终结果'],
  threshold: spec.platform.includes('桌面') || spec.categorySlug === 'ai-code' ? '中等，需要理解基础工作流和项目上下文。' : '较低，输入明确任务和素材后即可开始试用。',
  pros: ['上手路径清晰，适合做第一版草稿', '能把零散素材整理成结构化结果', '适合与教程和提示词模板搭配使用', '对重复性内容生产有明显提效'],
  cons: ['事实、价格和政策信息需要回到官方核对', '复杂任务需要多轮提示词和人工判断', '免费额度和功能限制可能随官方策略变化'],
  scenarios: spec.tags.concat(['新手入门', '效率提升']).slice(0, 5),
  notFor: ['需要完全自动交付且不能人工审核的任务', '涉及敏感数据且没有合规授权的场景', '要求结果百分百准确的事实判断'],
  alternatives: toolSpecs.filter((item) => item.slug !== spec.slug && item.categorySlug === spec.categorySlug).slice(0, 4).map((item) => item.slug),
  officialUrl: spec.officialUrl,
  isTested: ['chatgpt', 'deepseek', 'doubao', 'kimi', 'cursor', 'jimeng', 'tongyi'].includes(spec.slug),
  faq: [
    { question: `${spec.name} 适合新手吗？`, answer: `${spec.name} 可以作为新手入口，但建议先从一个具体任务开始，例如写周报、生成大纲、整理资料或制作初稿。` },
    { question: `${spec.name} 可以免费使用吗？`, answer: `${spec.name} 当前标注为“${pricingText[spec.pricing]}”。具体额度、价格和限制应以官方页面为准。` },
    { question: `${spec.name} 生成内容能直接使用吗？`, answer: '不建议直接使用。正式发布前需要人工核对事实、语气、版权、隐私和业务上下文。' },
    { question: `${spec.name} 和同类工具怎么选？`, answer: `先看任务是否属于${categoryName(spec.categorySlug)}，再比较中文支持、平台、免费额度和是否已有教程。` },
    { question: `${spec.name} 适合中文用户吗？`, answer: `本站将其中文支持标注为${['ai-chat', 'ai-office', 'ai-research', 'ai-search'].includes(spec.categorySlug) ? '优秀' : '良好'}，实际体验仍建议用你的真实任务测试。` }
  ],
  relatedTutorials: tutorialSlugsByTool(spec.slug),
  status: 'active',
  statusNote: '已预留官网核对入口，价格和可用性以官方为准。',
  checkedAt: updatedAt,
  seoTitle: `${spec.name} 怎么样：功能、免费情况、中文支持和替代工具`,
  seoDescription: `${spec.name} 工具详情，包含适合人群、平台、优缺点、使用场景、价格说明、FAQ 和相关教程。`
}))

function tutorialSlugsByTool(slug: string) {
  const map: Record<string, string[]> = {
    chatgpt: ['chatgpt-guide'],
    deepseek: ['deepseek-beginner'],
    gamma: ['ai-ppt-gamma'],
    midjourney: ['midjourney-prompt-tips'],
    cursor: ['cursor-beginner'],
    notion: ['notion-ai-office'],
    'notion-ai': ['notion-ai-office'],
    'canva-ai': ['canva-ai-poster'],
    kimi: ['kimi-long-doc-summary'],
    jimeng: ['jimeng-image-guide'],
    doubao: ['xiaohongshu-ai-copy']
  }
  return map[slug] || []
}

export const tutorials: TutorialItem[] = [
  ['ChatGPT 高效使用指南', 'chatgpt-guide', 'chatgpt', '新手入门'],
  ['DeepSeek 新手入门教程', 'deepseek-beginner', 'deepseek', '新手入门'],
  ['如何用 AI 一键生成 PPT', 'ai-ppt-gamma', 'gamma', 'AI PPT'],
  ['Midjourney 提示词技巧', 'midjourney-prompt-tips', 'midjourney', 'AI 绘图'],
  ['如何用 AI 写小红书文案', 'xiaohongshu-ai-copy', 'doubao', '自媒体'],
  ['如何用 AI 写论文大纲', 'paper-outline-ai', 'kimi', 'AI 论文'],
  ['Cursor 编程入门教程', 'cursor-beginner', 'cursor', 'AI 编程'],
  ['Notion AI 办公效率教程', 'notion-ai-office', 'notion-ai', 'AI 办公'],
  ['Canva AI 设计海报教程', 'canva-ai-poster', 'canva-ai', 'AI 设计'],
  ['Kimi 长文档总结教程', 'kimi-long-doc-summary', 'kimi', 'AI 论文'],
  ['即梦 AI 生成图片教程', 'jimeng-image-guide', 'jimeng', 'AI 绘图'],
  ['6 款 AI 绘图工具对比教程', 'ai-image-tools-comparison-guide', 'jimeng', '工具评测']
].map(([title, slug, toolSlug, category], index) => ({
  title,
  slug,
  description: `${title} 面向中文用户，把准备素材、输入提示词、检查结果和继续优化拆成可执行步骤。`,
  audience: index % 3 === 0 ? ['AI 新手', '办公族'] : index % 3 === 1 ? ['学生', '研究员'] : ['自媒体', '设计师'],
  duration: `${10 + index * 2} 分钟`,
  tools: [toolSlug],
  steps: [
    { title: '明确任务目标', body: '先写清楚你要完成什么、交付给谁、输出格式是什么，避免只输入一个宽泛主题。' },
    { title: '准备原始素材', body: '收集背景、限制条件、参考样式和必须保留的信息，敏感内容需要脱敏。' },
    { title: '输入结构化提示词', body: '把角色、任务、素材、约束和输出格式一次性说明，先生成第一版草稿。' },
    { title: '检查事实和格式', body: '核对名称、数字、链接、价格、引用和不能凭空生成的内容。' },
    { title: '二次优化输出', body: '针对语气、长度、结构、标题或视觉风格继续追问，直到能进入人工定稿。' }
  ],
  prompt: `你是一个中文 AI 工具使用顾问。请根据我的任务生成可执行方案。\n任务：{{任务}}\n目标用户：{{目标用户}}\n素材：{{素材}}\n输出格式：步骤清单 + 可复制提示词 + 检查项。`,
  commonErrors: [
    { title: '只输入一句主题', fix: '补充目标、对象、素材和输出格式，否则结果会很空。' },
    { title: '不检查事实', fix: '涉及价格、数据、政策、引用和官网信息时必须人工核对。' }
  ],
  recommendations: ['weekly-report-summary', 'ppt-outline', 'xiaohongshu-copy'],
  faq: [
    { question: `${title} 适合零基础吗？`, answer: '适合。教程按任务拆解，不要求先理解模型原理。' },
    { question: '教程里的 Prompt 可以直接复制吗？', answer: '可以，但应替换变量并补充真实素材。' },
    { question: '生成结果能直接交付吗？', answer: '不建议。正式交付前需要人工核对事实、格式和语气。' },
    { question: '如果结果不好怎么办？', answer: '先补充背景和约束，再让 AI 按问题逐项修改。' }
  ],
  updatedAt
  ,
  seoTitle: `${title}：步骤、提示词和常见错误`,
  seoDescription: `${title}，包含适合人群、使用工具、详细步骤、可复制提示词、FAQ 和相关推荐。`
}))

export const prompts: PromptItem[] = [
  ['小红书爆款文案提示词', 'xiaohongshu-copy', '自媒体', ['豆包', 'DeepSeek']],
  ['论文大纲生成提示词', 'paper-outline', '论文', ['Kimi', 'DeepSeek']],
  ['PPT 大纲生成提示词', 'ppt-outline', 'PPT', ['Gamma', 'DeepSeek']],
  ['周报总结提示词', 'weekly-report-summary', '办公', ['DeepSeek', '豆包']],
  ['简历优化提示词', 'resume-polish', '求职', ['ChatGPT', 'Claude']],
  ['代码解释提示词', 'code-explain', '编程', ['Cursor', 'DeepSeek']],
  ['代码优化提示词', 'code-optimize', '编程', ['Cursor', '通义灵码']],
  ['Midjourney 产品海报提示词', 'midjourney-product-poster', '绘图', ['Midjourney']],
  ['AI 绘图头像提示词', 'ai-avatar-image', '绘图', ['即梦 AI', 'Stable Diffusion']],
  ['短视频脚本提示词', 'short-video-script', '视频', ['豆包', 'DeepSeek']],
  ['直播带货脚本提示词', 'live-commerce-script', '电商', ['豆包', 'ChatGPT']],
  ['电商详情页文案提示词', 'ecommerce-detail-copy', '电商', ['ChatGPT', '豆包']],
  ['数据分析报告提示词', 'data-analysis-report', '数据分析', ['DeepSeek', 'Tableau GPT']],
  ['英文邮件润色提示词', 'english-email-polish', '写作', ['ChatGPT', 'Claude']],
  ['读书笔记总结提示词', 'reading-notes', '学习', ['Kimi', 'DeepSeek']]
].map(([title, slug, scene, models]) => ({
  title,
  slug,
  description: `${title} 适合${scene}场景，强调变量替换、输出格式和人工检查项。`,
  models: models as string[],
  tasks: [scene as string, '中文任务', '效率提升'],
  body: `请根据以下信息完成${scene}任务。\n背景：{{背景}}\n目标用户：{{目标用户}}\n原始素材：{{原始素材}}\n输出要求：{{输出要求}}\n请先给出结构化结果，再列出需要人工核对的内容。`,
  variables: [
    { name: '背景', description: '说明任务发生的场景、行业、对象和限制条件。' },
    { name: '目标用户', description: '说明最终内容给谁看，决定语气和细节。' },
    { name: '原始素材', description: '粘贴已有文案、数据、会议记录、论文片段或产品信息。' },
    { name: '输出要求', description: '说明字数、格式、语气、表格字段和禁止事项。' }
  ],
  usage: ['替换所有变量', '先生成第一版', '检查事实和语气', '按具体问题继续追问优化'],
  effect: '能快速得到可编辑初稿，适合进入人工修改和发布前审核。',
  badExample: '帮我写一个高级一点的内容，越吸引人越好。',
  relatedPrompts: ['weekly-report-summary', 'ppt-outline', 'xiaohongshu-copy'].filter((item) => item !== slug),
  relatedTools: ['deepseek', 'chatgpt', 'doubao', 'kimi'],
  updatedAt,
  seoTitle: `${title}：可复制 Prompt 模板和变量说明`,
  seoDescription: `${title}，包含适用模型、变量解释、使用方法、失败示例和相关工具。`
}))

export const comparisons: ComparisonItem[] = [
  ['DeepSeek vs 豆包 vs 通义千问', 'deepseek-vs-doubao-vs-tongyi', ['deepseek', 'doubao', 'tongyi'], '中文通用助手'],
  ['ChatGPT vs Claude vs Gemini', 'chatgpt-vs-claude-vs-gemini', ['chatgpt', 'claude', 'gemini'], '海外通用模型'],
  ['Midjourney vs Stable Diffusion vs 即梦 AI', 'midjourney-vs-stable-diffusion-vs-jimeng', ['midjourney', 'stable-diffusion', 'jimeng'], 'AI 绘图'],
  ['Gamma vs Canva AI vs Tome', 'gamma-vs-canva-ai-vs-tome', ['gamma', 'canva-ai', 'tome'], 'AI PPT'],
  ['Cursor vs GitHub Copilot vs Codeium', 'cursor-vs-github-copilot-vs-codeium', ['cursor', 'github-copilot', 'codeium'], 'AI 编程'],
  ['Kimi vs 通义千问 vs 文心一言', 'kimi-vs-tongyi-vs-wenxin', ['kimi', 'tongyi', 'wenxin'], '中文办公研究'],
  ['Perplexity vs 秘塔 AI 搜索 vs Kimi', 'perplexity-vs-metaso-vs-kimi', ['perplexity', 'metaso', 'kimi'], 'AI 搜索'],
  ['Runway vs Pika vs 可灵 AI', 'runway-vs-pika-vs-kling', ['runway', 'pika', 'kling'], 'AI 视频']
].map(([title, slug, toolSlugs, scene]) => ({
  title,
  slug,
  description: `${title} 对比${scene}场景下的中文体验、免费额度、平台支持、上手门槛和适合人群。`,
  conclusion: `如果你主要做${scene}任务，先按免费额度和中文支持筛选，再用一个真实任务同时测试三款工具。`,
  quickAdvice: [
    `想低成本试用：先选免费或有免费额度的工具。`,
    `想稳定交付：选平台成熟、可导出、可核对的工具。`,
    `想深入使用：优先看教程、API、插件和生态能力。`
  ],
  toolSlugs: toolSlugs as string[],
  rows: ['中文能力', '推理能力', '写作能力', '代码能力', '图片能力', '长文本能力', '免费额度', '付费价格', '平台支持', '适合人群', '使用门槛', '生态能力'].map((label) => ({
    label,
    values: Object.fromEntries((toolSlugs as string[]).map((toolSlug) => [toolSlug, label.includes('免费') ? '以官方实时额度为准' : label.includes('门槛') ? '低到中，需要真实任务测试' : '适合对应场景，需人工核对结果']))
  })),
  prosCons: Object.fromEntries((toolSlugs as string[]).map((toolSlug) => [toolSlug, {
    pros: ['上手路径清晰', '适合真实任务试用', '可与教程和提示词搭配'],
    cons: ['价格和额度变化需核对', '复杂任务需要人工判断', '不适合无审核自动交付']
  }])),
  recommendation: `最终建议：不要只看模型热度。用你的实际任务分别测试${(toolSlugs as string[]).join('、')}，比较输出质量、修改成本和是否能进入正式流程。`,
  faq: [
    { question: `${title} 哪个最适合新手？`, answer: '新手优先选择中文体验好、免费额度明确、有教程和模板的工具。' },
    { question: '对比结论会过期吗？', answer: '会。AI 工具更新很快，正式付费或商用前应回到官网核对。' },
    { question: '是否可以只选一个工具？', answer: '可以，但建议至少保留一个替代工具，避免额度、访问或能力变化影响工作。' },
    { question: '对比表里的分数是绝对排名吗？', answer: '不是。页面强调任务适配，不把不同类型能力简单合并成一个绝对分数。' }
  ],
  relatedTutorials: ['deepseek-beginner', 'chatgpt-guide', 'ai-ppt-gamma'],
  updatedAt,
  seoTitle: `${title}：价格、中文支持、适合人群和推荐结论`,
  seoDescription: `${title} 对比页，包含快速选择建议、完整对比表、优缺点、FAQ 和相关教程。`
}))

const rankingDefs = [
  ['免费 AI 工具榜', 'free-ai-tools', ['doubao', 'deepseek', 'kimi', 'metaso', 'yuanbao', 'jimeng', 'wps-ai', 'codeium']],
  ['AI 写作工具榜', 'ai-writing-tools', ['chatgpt', 'claude', 'deepseek', 'doubao', 'kimi', 'tongyi', 'wenxin', 'yuanbao']],
  ['AI 绘图工具榜', 'ai-image-tools', ['midjourney', 'jimeng', 'stable-diffusion', 'canva-ai']],
  ['AI PPT 工具榜', 'ai-ppt-tools', ['gamma', 'canva-ai', 'tome', 'wps-ai']],
  ['AI 编程工具榜', 'ai-code-tools', ['cursor', 'github-copilot', 'codeium', 'tongyi-lingma', 'trae', 'deepseek']],
  ['AI 论文工具榜', 'ai-paper-tools', ['kimi', 'chatpdf', 'deepseek', 'metaso', 'perplexity']],
  ['AI 视频工具榜', 'ai-video-tools', ['runway', 'pika', 'kling', 'jianying-ai', 'jimeng']],
  ['AI 办公效率榜', 'ai-office-tools', ['doubao', 'tongyi', 'wps-ai', 'notion-ai', 'gamma', 'sparkdesk']]
] as const

export const rankings: RankingItem[] = rankingDefs.map(([title, slug, slugs]) => ({
  title,
  slug,
  description: `${title} 按中文体验、免费情况、上手门槛、教程完整度和真实任务适配度整理。`,
  updatedAt,
  rules: ['中文用户能否快速上手', '是否有免费或试用入口', '结果是否便于人工核对和继续编辑', '是否适合具体任务而不是只看热度'],
  tools: slugs.map((toolSlug, index) => ({
    slug: toolSlug,
    rank: index + 1,
    reason: `第 ${index + 1} 名主要因为它在该榜单场景中有较清晰的使用路径和可验证输出。`
  })),
  relatedTutorials: ['deepseek-beginner', 'ai-ppt-gamma', 'kimi-long-doc-summary'],
  relatedComparisons: ['deepseek-vs-doubao-vs-tongyi', 'chatgpt-vs-claude-vs-gemini'],
  seoTitle: `${title}：排名规则、推荐理由和适合人群`,
  seoDescription: `${title}，按中文体验、免费情况、上手门槛和真实任务适配度整理。`
}))

export const categoryFaqs = commonFaqs.category

const cleanCategoryMeta: Record<string, {
  name: string
  description: string
  intro: string
  body: string
}> = {
  'ai-writing': {
    name: 'AI 写作',
    description: '文章、周报、邮件、论文润色、营销文案和内容改写',
    intro: 'AI 写作工具推荐：适合中文用户写文章、做总结、改文案、写论文大纲、润色邮件和整理资料。',
    body: 'AI 写作工具适合解决从空白起稿、资料整理、结构优化、语气改写到最终校对的内容生产问题。新手选择时不要只看模型名，应该先判断自己的任务是通用写作、长文档总结、营销文案、论文辅助还是办公协作，再看中文支持、免费额度、导出限制和是否有可复制提示词。免费工具适合做初稿和低风险内容，但正式发布前需要人工核对事实、引用、价格、政策和品牌语气，避免生成内容太像模板或出现未经确认的信息。'
  },
  'ai-chat': { name: 'AI 对话', description: '通用问答、中文助手、多模态聊天和任务拆解', intro: 'AI 对话工具适合把模糊问题拆成可执行步骤。', body: '选择 AI 对话工具时，优先看中文理解、上下文长度、多模态能力和是否适合你的工作流。' },
  'ai-image': { name: 'AI 绘图', description: '生成图片、海报、头像、电商图和创意视觉', intro: 'AI 绘图工具适合快速生成视觉草图、封面和商品场景。', body: '选择 AI 绘图工具时，要比较画面质感、中文提示词理解、商用规则和后期编辑能力。' },
  'ai-video': { name: 'AI 视频', description: '生成短片、分镜、口播视频和视频素材', intro: 'AI 视频工具适合短视频脚本、分镜生成和素材制作。', body: '选择 AI 视频工具时，要关注生成时长、镜头稳定性、字幕能力和商用限制。' },
  'ai-ppt': { name: 'AI PPT', description: '生成演示文稿、提案、课程讲义和汇报初稿', intro: 'AI PPT 工具适合从大纲直接生成演示初稿。', body: 'AI PPT 适合提速但不适合完全替代人工，核心结论、数据和品牌样式仍需要校对。' },
  'ai-office': { name: 'AI 办公', description: '会议纪要、表格分析、知识库、文档处理和协作', intro: 'AI 办公工具适合周报、会议纪要、知识库和文档协作。', body: '办公场景要优先考虑数据安全、中文文档处理、团队协作和与现有软件的集成。' },
  'ai-code': { name: 'AI 编程', description: '代码补全、项目理解、测试生成、重构和调试', intro: 'AI 编程工具适合写代码、读项目、补测试和解释报错。', body: 'AI 编程工具需要结合代码审查使用，不能把生成代码不经测试直接合并。' },
  'ai-research': { name: 'AI 论文研究', description: '论文阅读、资料整理、文献摘要和调研卡片', intro: 'AI 论文研究工具适合读文献、做摘要和整理研究资料。', body: '论文研究场景必须保留引用核对，AI 可以辅助总结但不能替代真实阅读和学术判断。' },
  'ai-search': { name: 'AI 搜索', description: '带来源的搜索、竞品调研、事实核对和资料追踪', intro: 'AI 搜索工具适合查资料、找来源和做事实核对。', body: 'AI 搜索工具要重点看来源透明度、引用质量、中文网页覆盖和是否能继续追问。' },
  'ai-audio': { name: 'AI 音频', description: '配音、转写、播客剪辑、音乐生成和声音处理', intro: 'AI 音频工具适合配音、转写和声音创作。', body: '音频工具要关注声音授权、语种支持、情绪控制和商用风险。' },
  'ai-design': { name: 'AI 设计', description: '海报、品牌视觉、模板设计、UI 灵感和营销物料', intro: 'AI 设计工具适合快速生成海报、模板和品牌视觉草案。', body: '设计场景不能只看生成速度，还要看版式控制、素材授权和后期编辑能力。' },
  'ai-data': { name: 'AI 数据分析', description: '表格清洗、指标解释、可视化建议和分析报告', intro: 'AI 数据分析工具适合理解表格、解释指标和生成分析报告。', body: '数据分析场景要保证数据脱敏，并对公式、统计口径和结论做人工复核。' }
}

for (const category of categories as any[]) {
  const meta = cleanCategoryMeta[category.slug]
  if (!meta) continue
  Object.assign(category, {
    name: meta.name,
    description: meta.description,
    intro: meta.intro,
    body: meta.body,
    updatedAt,
    seoTitle: `${meta.name}工具推荐：免费情况、中文支持和新手选择建议`,
    seoDescription: `${meta.description}，整理适合中文用户的 AI 工具、教程、提示词和对比入口。`
  })
}

const categorySlugsByTool: Record<string, string[]> = {
  chatgpt: ['ai-writing', 'ai-chat', 'ai-office', 'ai-code', 'ai-research', 'ai-search', 'ai-audio', 'ai-data'],
  deepseek: ['ai-writing', 'ai-chat', 'ai-office', 'ai-code', 'ai-research', 'ai-search', 'ai-data'],
  claude: ['ai-writing', 'ai-chat', 'ai-code', 'ai-research'],
  'notion-ai': ['ai-writing', 'ai-office', 'ai-ppt'],
  'canva-ai': ['ai-writing', 'ai-image', 'ai-ppt', 'ai-design', 'ai-video'],
  cursor: ['ai-code'],
  midjourney: ['ai-image', 'ai-design'],
  gamma: ['ai-writing', 'ai-ppt', 'ai-office', 'ai-design'],
  tongyi: ['ai-writing', 'ai-chat', 'ai-office', 'ai-research', 'ai-data'],
  doubao: ['ai-writing', 'ai-chat', 'ai-office', 'ai-search', 'ai-video', 'ai-audio'],
  kimi: ['ai-writing', 'ai-chat', 'ai-research', 'ai-search', 'ai-data'],
  jimeng: ['ai-image', 'ai-video', 'ai-design'],
  wenxin: ['ai-writing', 'ai-chat', 'ai-research', 'ai-search'],
  runway: ['ai-video', 'ai-image', 'ai-design', 'ai-audio'],
  perplexity: ['ai-writing', 'ai-research', 'ai-search', 'ai-data'],
  'stable-diffusion': ['ai-image', 'ai-design'],
  gemini: ['ai-chat', 'ai-image', 'ai-code', 'ai-search', 'ai-data', 'ai-video'],
  metaso: ['ai-writing', 'ai-research', 'ai-search', 'ai-data'],
  tome: ['ai-ppt', 'ai-design'],
  'github-copilot': ['ai-code'],
  codeium: ['ai-code'],
  pika: ['ai-video', 'ai-image', 'ai-design', 'ai-audio'],
  kling: ['ai-video', 'ai-image', 'ai-audio'],
  sparkdesk: ['ai-chat', 'ai-office', 'ai-audio'],
  'wps-ai': ['ai-office', 'ai-ppt', 'ai-data'],
  yuanbao: ['ai-chat', 'ai-office', 'ai-search'],
  'tongyi-lingma': ['ai-code'],
  trae: ['ai-code'],
  elevenlabs: ['ai-audio', 'ai-video'],
  'jianying-ai': ['ai-video', 'ai-audio'],
  chatpdf: ['ai-research'],
  'tableau-gpt': ['ai-data']
}

const cleanToolNames: Record<string, string> = {
  tongyi: '通义千问',
  doubao: '豆包',
  jimeng: '即梦 AI',
  wenxin: '文心一言',
  metaso: '秘塔 AI 搜索',
  kling: '可灵 AI',
  sparkdesk: '讯飞星火',
  yuanbao: '腾讯元宝',
  'tongyi-lingma': '通义灵码',
  'jianying-ai': '剪映 AI'
}

const chineseSupportByTool: Record<string, string> = {
  chatgpt: 'good',
  claude: 'good',
  deepseek: 'excellent',
  kimi: 'excellent',
  doubao: 'excellent',
  tongyi: 'excellent',
  wenxin: 'excellent',
  metaso: 'excellent',
  yuanbao: 'excellent'
}

function normalizePlatforms(platform: string) {
  const platforms = ['Web', 'App', 'API', '浏览器插件', '桌面客户端']
  const result = platforms.filter((item) => platform.includes(item) || (item === '桌面客户端' && platform.includes('桌面')) || (item === '浏览器插件' && platform.includes('插件')))
  return result.length ? result : ['Web']
}

function normalizeAudiences(audience: string[]) {
  const joined = audience.join(' ')
  const result = [
    joined.includes('学生') ? '学生' : '',
    joined.includes('办公') || joined.includes('职场') ? '办公族' : '',
    joined.includes('程序') || joined.includes('开发') ? '程序员' : '',
    joined.includes('设计') ? '设计师' : '',
    joined.includes('自媒体') || joined.includes('内容') || joined.includes('运营') ? '自媒体' : '',
    joined.includes('研究') || joined.includes('论文') ? '研究员' : '',
    joined.includes('写作') || joined.includes('内容') ? '内容创作者' : ''
  ].filter(Boolean)
  return [...new Set(result.length ? result : audience)]
}

function applyToolCategoryFields(tool: any, index: number) {
  const categorySlugs = categorySlugsByTool[tool.slug] || [tool.categorySlug]
  const primaryCategory = cleanCategoryMeta[categorySlugs[0]]?.name || tool.category
  tool.name = cleanToolNames[tool.slug] || tool.name
  tool.categorySlugs = categorySlugs
  tool.categorySlug = categorySlugs[0]
  tool.category = primaryCategory
  tool.description = tool.summary
  tool.freeStatus = tool.pricing
  tool.chineseSupport = chineseSupportByTool[tool.slug] || (categorySlugs.includes('ai-writing') || categorySlugs.includes('ai-chat') ? 'good' : 'normal')
  tool.platforms = normalizePlatforms(tool.platform)
  tool.audiences = normalizeAudiences(tool.audience)
  tool.popularity = 100 - index
  tool.recommendedScore = (tool.hasTutorial ? 30 : 0) + tool.tags.length + (tool.pricing === 'free' ? 20 : tool.pricing === 'freemium' ? 12 : 0)
  tool.seoTitle = `${tool.name} 怎么样：功能、免费情况、中文支持和替代工具`
  tool.seoDescription = `${tool.name} 工具详情，包含适合人群、平台、优缺点、使用场景、FAQ 和相关教程。`
}

mockTools.forEach(applyToolCategoryFields)

function addTool(tool: any) {
  if (mockTools.some((item) => item.slug === tool.slug)) return
  mockTools.push({
    name: tool.name,
    slug: tool.slug,
    summary: tool.description,
    description: tool.description,
    category: 'AI 写作',
    categorySlug: 'ai-writing',
    categorySlugs: tool.categorySlugs,
    pricing: tool.freeStatus,
    freeStatus: tool.freeStatus,
    icon: tool.icon,
    chineseSupport: tool.chineseSupport,
    audience: tool.audiences,
    audiences: tool.audiences,
    platform: tool.platforms.join(' / '),
    platforms: tool.platforms,
    updatedAt,
    hasTutorial: tool.hasTutorial,
    tags: tool.tags,
    conclusion: `${tool.name} 适合把写作任务拆成大纲、初稿、改写和校对流程，但正式发布前仍需要人工核对事实和语气。`,
    features: ['生成文章初稿', '改写和润色', '标题和大纲生成', '营销文案辅助', '语法和表达优化'],
    threshold: '较低，输入任务背景、目标读者和输出格式后即可开始。',
    pros: ['上手快', '适合高频写作任务', '能提升初稿效率', '适合配合提示词模板使用'],
    cons: ['事实需要人工核对', '品牌语气需要二次调整', '免费额度或价格可能变化'],
    scenarios: ['文章起稿', '营销文案', '邮件润色', '内容改写', '社媒文案'],
    notFor: ['不能人工审核的正式发布内容', '需要严格事实引用但没有来源材料的内容'],
    alternatives: ['chatgpt', 'claude', 'deepseek'],
    officialUrl: tool.officialUrl,
    isTested: false,
    faq: [
      { question: `${tool.name} 适合中文写作吗？`, answer: '适合部分中文写作流程，但需要用真实任务测试语气、事实和格式稳定性。' },
      { question: `${tool.name} 可以免费使用吗？`, answer: '页面标注仅供选型参考，具体免费额度和价格以官网为准。' },
      { question: `${tool.name} 适合新手吗？`, answer: '适合从标题、大纲、初稿和改写任务开始。' },
      { question: `${tool.name} 能写论文吗？`, answer: '可以辅助大纲、润色和摘要，但不能代替文献阅读和引用核对。' },
      { question: `${tool.name} 生成内容能直接发布吗？`, answer: '不建议，正式发布前需要人工核对事实、版权、语气和敏感信息。' }
    ],
    relatedTutorials: ['chatgpt-guide'],
    status: 'active',
    checkedAt: updatedAt,
    seoTitle: `${tool.name} 写作工具：功能、价格、中文支持和替代工具`,
    seoDescription: `${tool.name} 写作工具介绍，包含适合人群、使用场景、免费情况、中文支持和相关教程。`,
    popularity: 70,
    recommendedScore: 60
  })
}

addTool({
  name: 'Grammarly',
  slug: 'grammarly',
  description: '适合英文邮件、简历、文章和商务文本的语法检查、润色和语气优化工具。',
  freeStatus: 'freemium',
  chineseSupport: 'normal',
  platforms: ['Web', '浏览器插件', '桌面客户端'],
  audiences: ['学生', '办公族', '内容创作者'],
  tags: ['英文写作', '语法检查', '润色'],
  hasTutorial: false,
  icon: 'https://www.grammarly.com/favicon.ico',
  officialUrl: 'https://www.grammarly.com',
  categorySlugs: ['ai-writing', 'ai-office']
})

addTool({
  name: 'Jasper',
  slug: 'jasper',
  description: '面向营销团队和内容创作者的 AI 写作工具，适合生成广告文案、博客初稿和品牌化内容。',
  freeStatus: 'paid',
  chineseSupport: 'normal',
  platforms: ['Web'],
  audiences: ['内容创作者', '自媒体', '办公族'],
  tags: ['营销文案', '品牌语气', '博客'],
  hasTutorial: false,
  icon: 'https://www.jasper.ai/favicon.ico',
  officialUrl: 'https://www.jasper.ai',
  categorySlugs: ['ai-writing']
})

addTool({
  name: 'Copy.ai',
  slug: 'copy-ai',
  description: '适合快速生成广告标题、产品介绍、邮件和社媒文案的 AI 写作工具。',
  freeStatus: 'freemium',
  chineseSupport: 'normal',
  platforms: ['Web'],
  audiences: ['自媒体', '内容创作者', '办公族'],
  tags: ['广告文案', '产品介绍', '社媒内容'],
  hasTutorial: false,
  icon: '/brand-icons/copy-ai.svg',
  officialUrl: 'https://www.copy.ai',
  categorySlugs: ['ai-writing']
})

const writingPromptSlugs = [
  'xiaohongshu-copy',
  'gongzhonghao-outline',
  'weekly-report-summary',
  'resume-polish',
  'english-email-polish',
  'product-intro-copy',
  'short-video-script',
  'live-commerce-script',
  'ecommerce-detail-copy',
  'reading-notes',
  'paper-outline',
  'article-rewrite-polish'
]

function addPrompt(prompt: any) {
  if (prompts.some((item) => item.slug === prompt.slug)) return
  prompts.push({
    title: prompt.title,
    slug: prompt.slug,
    category: 'AI 写作',
    categorySlugs: ['ai-writing'],
    description: prompt.summary,
    models: prompt.applicableModels,
    applicableModels: prompt.applicableModels,
    tasks: [prompt.task],
    task: prompt.task,
    body: prompt.prompt,
    prompt: prompt.prompt,
    summary: prompt.summary,
    variables: prompt.variables.map((name: string) => ({ name, description: `替换为你的${name}。` })),
    variableNames: prompt.variables,
    usage: ['替换变量', '补充真实素材', '复制到模型中生成初稿', '人工核对事实和语气'],
    effect: '生成结构更清晰、可继续编辑的写作初稿。',
    badExample: '只输入一个宽泛主题，容易得到空泛模板。',
    relatedPrompts: ['weekly-report-summary', 'article-rewrite-polish'],
    relatedTools: prompt.relatedToolSlugs,
    relatedToolSlugs: prompt.relatedToolSlugs,
    tags: prompt.tags,
    difficulty: prompt.difficulty,
    updatedAt,
    seoTitle: `${prompt.title}：可复制模板、变量说明和使用方法`,
    seoDescription: `${prompt.title}，适合中文 ${prompt.task} 场景，包含可复制 Prompt、变量说明和相关工具。`
  })
}

addPrompt({ title: '公众号文章大纲提示词', slug: 'gongzhonghao-outline', task: '公众号文章大纲', summary: '用于把选题拆成标题、开头、正文结构和结尾行动建议。', prompt: '请根据主题「{主题}」和目标读者「{目标读者}」，生成一份公众号文章大纲，包含标题备选、开头钩子、三级结构、案例建议和结尾行动引导。', variables: ['主题', '目标读者', '文章目的'], tags: ['公众号', '大纲', '写作'], difficulty: 'beginner', applicableModels: ['ChatGPT', 'DeepSeek', 'Claude'], relatedToolSlugs: ['chatgpt', 'deepseek', 'claude'] })
addPrompt({ title: '产品介绍文案提示词', slug: 'product-intro-copy', task: '产品介绍', summary: '用于生成官网首屏、商品详情和产品说明的基础文案。', prompt: '请根据产品「{产品名称}」、目标用户「{目标用户}」和核心卖点「{核心卖点}」，生成一版产品介绍文案，包含一句话定位、三条卖点、使用场景和行动按钮文案。', variables: ['产品名称', '目标用户', '核心卖点'], tags: ['产品文案', '官网', '营销'], difficulty: 'beginner', applicableModels: ['ChatGPT', 'Claude', 'Copy.ai'], relatedToolSlugs: ['chatgpt', 'claude', 'copy-ai'] })
addPrompt({ title: '文章改写润色提示词', slug: 'article-rewrite-polish', task: '文章改写润色', summary: '用于降低机器感，调整语气、结构和表达密度。', prompt: '请在不改变原意的前提下改写以下文章，使表达更自然、更像人工写作。要求保留事实信息，减少模板化句式，优化段落衔接，并列出修改重点。原文：{原文}', variables: ['原文', '目标语气', '读者'], tags: ['改写', '润色', '降 AI 感'], difficulty: 'intermediate', applicableModels: ['ChatGPT', 'DeepSeek', 'Claude'], relatedToolSlugs: ['chatgpt', 'deepseek', 'claude'] })

for (const prompt of prompts as any[]) {
  if (writingPromptSlugs.includes(prompt.slug) || ['xiaohongshu-copy', 'weekly-report-summary', 'resume-polish', 'english-email-polish', 'short-video-script', 'live-commerce-script', 'ecommerce-detail-copy', 'reading-notes', 'paper-outline'].includes(prompt.slug)) {
    prompt.category = 'AI 写作'
    prompt.categorySlugs = [...new Set([...(prompt.categorySlugs || []), 'ai-writing'])]
    prompt.relatedToolSlugs = prompt.relatedToolSlugs || prompt.relatedTools || ['chatgpt', 'deepseek']
    prompt.applicableModels = prompt.applicableModels || prompt.models
    prompt.task = prompt.task || prompt.tasks?.[0] || '写作'
    prompt.prompt = prompt.prompt || prompt.body
    prompt.summary = prompt.summary || prompt.description
    prompt.variableNames = prompt.variableNames || prompt.variables?.map((item: any) => item.name) || []
    prompt.tags = prompt.tags || [prompt.task, '写作', '中文场景']
    prompt.difficulty = prompt.difficulty || 'beginner'
  }
}

function addTutorial(tutorial: any) {
  if (tutorials.some((item) => item.slug === tutorial.slug)) return
  tutorials.push({
    title: tutorial.title,
    slug: tutorial.slug,
    description: tutorial.description,
    audience: tutorial.audience,
    duration: tutorial.duration,
    tools: tutorial.tools,
    steps: [
      { title: '明确写作任务', body: '先写清楚目标读者、内容用途、输出格式和语气。' },
      { title: '准备素材', body: '补充事实、案例、观点和必须保留的信息。' },
      { title: '生成初稿', body: '用结构化提示词生成第一版，不直接发布。' },
      { title: '人工核对', body: '检查事实、引用、语气、重复表达和敏感信息。' },
      { title: '二次润色', body: '让 AI 按指定问题局部修改，再由人定稿。' }
    ],
    prompt: '请根据我的写作目标、读者和素材生成结构化初稿，并列出需要人工核对的项目。',
    commonErrors: [{ title: '只给主题不给素材', fix: '补充背景、目标读者和输出格式。' }],
    recommendations: ['weekly-report-summary', 'article-rewrite-polish'],
    faq: [
      { question: `${tutorial.title} 适合新手吗？`, answer: '适合，建议从一个具体写作任务开始。' },
      { question: '生成内容可以直接发布吗？', answer: '不建议，发布前需要人工核对事实、语气和版权。' }
    ],
    updatedAt,
    category: 'AI 写作',
    categorySlugs: ['ai-writing'],
    seoTitle: `${tutorial.title}：步骤、提示词和常见错误`,
    seoDescription: `${tutorial.title}，包含写作流程、可复制提示词、常见错误和相关工具。`
  })
}

addTutorial({ title: 'Claude 长文写作教程', slug: 'claude-long-writing', description: '用 Claude 处理长文大纲、段落改写和风格统一。', audience: ['内容创作者', '研究员'], duration: '18 分钟', tools: ['claude'] })
addTutorial({ title: '豆包 AI 写作教程', slug: 'doubao-ai-writing', description: '用豆包完成小红书、短视频脚本和日常办公写作。', audience: ['自媒体', '办公族'], duration: '12 分钟', tools: ['doubao'] })

const tutorialCategories: Record<string, string[]> = {
  'chatgpt-guide': ['ai-writing', 'ai-chat'],
  'deepseek-beginner': ['ai-writing', 'ai-chat', 'ai-office'],
  'xiaohongshu-ai-copy': ['ai-writing'],
  'paper-outline-ai': ['ai-writing', 'ai-research'],
  'kimi-long-doc-summary': ['ai-writing', 'ai-research'],
  'notion-ai-office': ['ai-writing', 'ai-office'],
  'claude-long-writing': ['ai-writing'],
  'doubao-ai-writing': ['ai-writing', 'ai-chat']
}

for (const tutorial of tutorials as any[]) {
  tutorial.categorySlugs = tutorialCategories[tutorial.slug] || tutorial.categorySlugs || []
  if (tutorial.categorySlugs.includes('ai-writing')) tutorial.category = 'AI 写作'
}

const comparisonCategories: Record<string, string[]> = {
  'chatgpt-vs-claude-vs-gemini': ['ai-writing', 'ai-chat'],
  'deepseek-vs-doubao-vs-tongyi': ['ai-writing', 'ai-chat', 'ai-office'],
  'kimi-vs-tongyi-vs-wenxin': ['ai-writing', 'ai-chat', 'ai-research'],
  'perplexity-vs-metaso-vs-kimi': ['ai-writing', 'ai-search', 'ai-research']
}

for (const comparison of comparisons as any[]) {
  comparison.categorySlugs = comparisonCategories[comparison.slug] || comparison.categorySlugs || []
}

const writingCategory = categories.find((item) => item.slug === 'ai-writing') as any
if (writingCategory) {
  writingCategory.toolSlugs = mockTools.filter((tool: any) => tool.categorySlugs?.includes('ai-writing')).map((tool) => tool.slug)
  writingCategory.relatedPrompts = writingPromptSlugs
  writingCategory.relatedTutorials = ['chatgpt-guide', 'deepseek-beginner', 'xiaohongshu-ai-copy', 'paper-outline-ai', 'kimi-long-doc-summary', 'notion-ai-office', 'claude-long-writing', 'doubao-ai-writing']
}
