export interface MockCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
  sortOrder: number
  isFeatured: boolean
  seoTitle: string
  seoDescription: string
  updatedAt: string
}

export const mockCategories: MockCategory[] = [
  {
    id: "category-ai-chat",
    name: "AI 对话",
    slug: "ai-chat",
    description: "对话式大模型、通用助手和多模态问答工具。",
    icon: "chat",
    color: "blue",
    sortOrder: 1,
    isFeatured: true,
    seoTitle: "AI 对话工具推荐：免费、中文和实用教程",
    seoDescription: "AI 对话工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-writing",
    name: "AI 写作",
    slug: "ai-writing",
    description: "文案、文章、邮件、脚本和内容润色工具。",
    icon: "writing",
    color: "violet",
    sortOrder: 2,
    isFeatured: true,
    seoTitle: "AI 写作工具推荐：免费、中文和实用教程",
    seoDescription: "AI 写作工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-code",
    name: "AI 编程",
    slug: "ai-code",
    description: "代码补全、项目开发、调试和应用生成工具。",
    icon: "code",
    color: "emerald",
    sortOrder: 3,
    isFeatured: true,
    seoTitle: "AI 编程工具推荐：免费、中文和实用教程",
    seoDescription: "AI 编程工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-search",
    name: "AI 搜索",
    slug: "ai-search",
    description: "带来源的搜索、研究问答和资料发现工具。",
    icon: "search",
    color: "amber",
    sortOrder: 4,
    isFeatured: true,
    seoTitle: "AI 搜索工具推荐：免费、中文和实用教程",
    seoDescription: "AI 搜索工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-image",
    name: "AI 绘图",
    slug: "ai-image",
    description: "图片生成、修图、海报和视觉创意工具。",
    icon: "image",
    color: "cyan",
    sortOrder: 5,
    isFeatured: true,
    seoTitle: "AI 绘图工具推荐：免费、中文和实用教程",
    seoDescription: "AI 绘图工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-video",
    name: "AI 视频",
    slug: "ai-video",
    description: "视频生成、数字人、剪辑和分镜工具。",
    icon: "video",
    color: "blue",
    sortOrder: 6,
    isFeatured: true,
    seoTitle: "AI 视频工具推荐：免费、中文和实用教程",
    seoDescription: "AI 视频工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-ppt",
    name: "AI PPT",
    slug: "ai-ppt",
    description: "演示文稿、路演材料和汇报内容生成工具。",
    icon: "ppt",
    color: "violet",
    sortOrder: 7,
    isFeatured: true,
    seoTitle: "AI PPT工具推荐：免费、中文和实用教程",
    seoDescription: "AI PPT工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-office",
    name: "AI 办公",
    slug: "ai-office",
    description: "文档、会议、邮件、知识库和办公效率工具。",
    icon: "office",
    color: "emerald",
    sortOrder: 8,
    isFeatured: true,
    seoTitle: "AI 办公工具推荐：免费、中文和实用教程",
    seoDescription: "AI 办公工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-research",
    name: "AI 论文研究",
    slug: "ai-research",
    description: "文献检索、论文阅读、引用分析和研究整理工具。",
    icon: "research",
    color: "amber",
    sortOrder: 9,
    isFeatured: true,
    seoTitle: "AI 论文研究工具推荐：免费、中文和实用教程",
    seoDescription: "AI 论文研究工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-audio",
    name: "AI 音频",
    slug: "ai-audio",
    description: "语音合成、配音、音乐生成和转写工具。",
    icon: "audio",
    color: "cyan",
    sortOrder: 10,
    isFeatured: true,
    seoTitle: "AI 音频工具推荐：免费、中文和实用教程",
    seoDescription: "AI 音频工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-design",
    name: "AI 设计",
    slug: "ai-design",
    description: "平面设计、品牌视觉、UI 和创意资产工具。",
    icon: "design",
    color: "blue",
    sortOrder: 11,
    isFeatured: true,
    seoTitle: "AI 设计工具推荐：免费、中文和实用教程",
    seoDescription: "AI 设计工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-data",
    name: "AI 数据分析",
    slug: "ai-data",
    description: "数据解读、报表分析、BI 和可视化辅助工具。",
    icon: "data",
    color: "violet",
    sortOrder: 12,
    isFeatured: true,
    seoTitle: "AI 数据分析工具推荐：免费、中文和实用教程",
    seoDescription: "AI 数据分析工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-browser-extension",
    name: "AI 浏览器插件",
    slug: "ai-browser-extension",
    description: "浏览器侧边栏、网页总结和跨站 AI 助手。",
    icon: "browser-extension",
    color: "emerald",
    sortOrder: 13,
    isFeatured: false,
    seoTitle: "AI 浏览器插件工具推荐：免费、中文和实用教程",
    seoDescription: "AI 浏览器插件工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-agent",
    name: "AI Agent",
    slug: "ai-agent",
    description: "智能体、工作流编排和多步骤任务执行工具。",
    icon: "agent",
    color: "amber",
    sortOrder: 14,
    isFeatured: false,
    seoTitle: "AI Agent工具推荐：免费、中文和实用教程",
    seoDescription: "AI Agent工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-automation",
    name: "AI 自动化",
    slug: "ai-automation",
    description: "应用连接、流程自动化和 AI 工作流工具。",
    icon: "automation",
    color: "cyan",
    sortOrder: 15,
    isFeatured: false,
    seoTitle: "AI 自动化工具推荐：免费、中文和实用教程",
    seoDescription: "AI 自动化工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-meeting",
    name: "AI 会议纪要",
    slug: "ai-meeting",
    description: "会议转写、摘要、行动项和团队记录工具。",
    icon: "meeting",
    color: "blue",
    sortOrder: 16,
    isFeatured: false,
    seoTitle: "AI 会议纪要工具推荐：免费、中文和实用教程",
    seoDescription: "AI 会议纪要工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-translation",
    name: "AI 翻译",
    slug: "ai-translation",
    description: "翻译、润色、本地化和跨语言写作工具。",
    icon: "translation",
    color: "violet",
    sortOrder: 17,
    isFeatured: false,
    seoTitle: "AI 翻译工具推荐：免费、中文和实用教程",
    seoDescription: "AI 翻译工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-resume",
    name: "AI 简历求职",
    slug: "ai-resume",
    description: "简历优化、求职材料和面试准备工具。",
    icon: "resume",
    color: "emerald",
    sortOrder: 18,
    isFeatured: false,
    seoTitle: "AI 简历求职工具推荐：免费、中文和实用教程",
    seoDescription: "AI 简历求职工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-ecommerce",
    name: "AI 电商运营",
    slug: "ai-ecommerce",
    description: "商品图、详情页、客服、广告和店铺运营工具。",
    icon: "ecommerce",
    color: "amber",
    sortOrder: 19,
    isFeatured: false,
    seoTitle: "AI 电商运营工具推荐：免费、中文和实用教程",
    seoDescription: "AI 电商运营工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-social-media",
    name: "AI 自媒体内容",
    slug: "ai-social-media",
    description: "短视频、图文、选题、标题和内容分发工具。",
    icon: "social-media",
    color: "cyan",
    sortOrder: 20,
    isFeatured: false,
    seoTitle: "AI 自媒体内容工具推荐：免费、中文和实用教程",
    seoDescription: "AI 自媒体内容工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  },
  {
    id: "category-ai-prompt",
    name: "AI 提示词",
    slug: "ai-prompt",
    description: "提示词优化、模板社区和 Prompt 管理工具。",
    icon: "prompt",
    color: "blue",
    sortOrder: 21,
    isFeatured: false,
    seoTitle: "AI 提示词工具推荐：免费、中文和实用教程",
    seoDescription: "AI 提示词工具分类页，整理适合中文用户的 AI 工具、教程、提示词和对比内容。",
    updatedAt: "2026-05-16"
  }
]

export const categories = mockCategories
export default mockCategories
