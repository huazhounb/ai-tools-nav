import type { ToolPricing } from '~~/types/tool'

export type ToolScoreKey = 'chinese' | 'writing' | 'coding' | 'image' | 'video' | 'research' | 'office' | 'search' | 'easeOfUse' | 'costPerformance'

export interface MockTool {
  id: string
  name: string
  slug: string
  summary: string
  description: string
  longDescription: string
  category: string
  categorySlug: string
  categorySlugs: string[]
  pricing: ToolPricing
  freeStatus: string
  icon: string
  officialUrl: string
  chineseSupport: string
  audience: string[]
  audiences: string[]
  platform: string
  platforms: string[]
  popularity: number
  recommendedScore: number
  editorScore: number
  updatedAt: string
  createdAt: string
  hasTutorial: boolean
  isFeatured: boolean
  isSponsored: boolean
  sponsorLabel?: string
  tags: string[]
  conclusion: string
  features: string[]
  threshold: string
  pros: string[]
  cons: string[]
  scenarios: string[]
  notFor: string[]
  alternatives: string[]
  isTested: boolean
  faq: Array<{ question: string, answer: string }>
  relatedTutorials: string[]
  scores: Record<ToolScoreKey, number>
  stats: { views: number, likes: number, saves: number, clicks: number, comments: number }
  seoTitle: string
  seoDescription: string
  status: 'published' | 'draft' | 'archived'
  source: 'editor' | 'user-submitted'
}

export const mockTools: MockTool[] = [
  {
    id: "tool-chatgpt",
    name: "ChatGPT",
    slug: "chatgpt",
    summary: "适合通用问答、内容写作、资料整理、代码解释和多模态任务，是中文用户搭建 AI 工作流时最常用的入口之一。",
    description: "适合通用问答、内容写作、资料整理、代码解释和多模态任务，是中文用户搭建 AI 工作流时最常用的入口之一。",
    longDescription: "适合通用问答、内容写作、资料整理、代码解释和多模态任务，是中文用户搭建 AI 工作流时最常用的入口之一。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-office",
      "ai-code",
      "ai-research"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://chatgpt.com/favicon.ico",
    officialUrl: "https://chatgpt.com",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "职场用户",
      "开发者",
      "内容创作者"
    ],
    audiences: [
      "学生",
      "职场用户",
      "开发者",
      "内容创作者"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 3337,
    recommendedScore: 70,
    editorScore: 70,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "通用助手",
      "英文写作",
      "多模态"
    ],
    conclusion: "ChatGPT 更适合先从通用助手任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "通用助手",
      "英文写作",
      "多模态",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "ChatGPT 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "ChatGPT 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.8,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 4.9,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 3337,
      likes: 197,
      saves: 67,
      clicks: 931,
      comments: 1
    },
    seoTitle: "ChatGPT 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "ChatGPT 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-claude",
    name: "Claude",
    slug: "claude",
    summary: "适合长文写作、文档分析和复杂推理任务，尤其适合需要清晰表达和上下文稳定性的内容工作。",
    description: "适合长文写作、文档分析和复杂推理任务，尤其适合需要清晰表达和上下文稳定性的内容工作。",
    longDescription: "适合长文写作、文档分析和复杂推理任务，尤其适合需要清晰表达和上下文稳定性的内容工作。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-research"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/claude.png",
    officialUrl: "https://claude.ai",
    chineseSupport: "良好",
    audience: [
      "写作者",
      "研究员",
      "产品经理",
      "开发者"
    ],
    audiences: [
      "写作者",
      "研究员",
      "产品经理",
      "开发者"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 3474,
    recommendedScore: 77,
    editorScore: 77,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "长文写作",
      "文档分析",
      "严谨表达"
    ],
    conclusion: "Claude 更适合先从长文写作任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "长文写作",
      "文档分析",
      "严谨表达",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Claude 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Claude 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.3,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 3474,
      likes: 214,
      saves: 74,
      clicks: 962,
      comments: 2
    },
    seoTitle: "Claude 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Claude 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-gemini",
    name: "Gemini",
    slug: "gemini",
    summary: "适合 Google 生态用户处理搜索、邮件、文档和多模态资料，英文资料理解和跨应用协作体验较好。",
    description: "适合 Google 生态用户处理搜索、邮件、文档和多模态资料，英文资料理解和跨应用协作体验较好。",
    longDescription: "适合 Google 生态用户处理搜索、邮件、文档和多模态资料，英文资料理解和跨应用协作体验较好。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-search",
      "ai-office",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://gemini.google.com/favicon.ico",
    officialUrl: "https://gemini.google.com",
    chineseSupport: "良好",
    audience: [
      "学生",
      "办公族",
      "研究员"
    ],
    audiences: [
      "学生",
      "办公族",
      "研究员"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 3611,
    recommendedScore: 84,
    editorScore: 84,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "多模态",
      "Google 生态",
      "英文资料"
    ],
    conclusion: "Gemini 更适合先从多模态任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "多模态",
      "Google 生态",
      "英文资料",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Gemini 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Gemini 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.5,
      office: 4.6,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 3611,
      likes: 231,
      saves: 81,
      clicks: 993,
      comments: 3
    },
    seoTitle: "Gemini 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Gemini 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-deepseek",
    name: "DeepSeek",
    slug: "deepseek",
    summary: "适合中文问答、代码辅助、资料整理和高频写作任务，性价比突出，适合作为中文用户的默认助手。",
    description: "适合中文问答、代码辅助、资料整理和高频写作任务，性价比突出，适合作为中文用户的默认助手。",
    longDescription: "适合中文问答、代码辅助、资料整理和高频写作任务，性价比突出，适合作为中文用户的默认助手。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-code",
      "ai-office",
      "ai-research"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/deepseek.ico",
    officialUrl: "https://www.deepseek.com",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "办公族",
      "程序员"
    ],
    audiences: [
      "学生",
      "办公族",
      "程序员"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 3748,
    recommendedScore: 91,
    editorScore: 91,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文友好",
      "推理",
      "编程"
    ],
    conclusion: "DeepSeek 更适合先从中文友好任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文友好",
      "推理",
      "编程",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "DeepSeek 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "DeepSeek 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.5,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 4.6,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 3748,
      likes: 248,
      saves: 88,
      clicks: 1024,
      comments: 4
    },
    seoTitle: "DeepSeek 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "DeepSeek 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-kimi",
    name: "Kimi",
    slug: "kimi",
    summary: "适合长文档阅读、论文摘要、会议材料整理和中文资料分析，适合先把复杂资料压缩成结构化结论。",
    description: "适合长文档阅读、论文摘要、会议材料整理和中文资料分析，适合先把复杂资料压缩成结构化结论。",
    longDescription: "适合长文档阅读、论文摘要、会议材料整理和中文资料分析，适合先把复杂资料压缩成结构化结论。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-research",
      "ai-search"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/kimi.ico",
    officialUrl: "https://kimi.moonshot.cn",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "研究员",
      "论文党"
    ],
    audiences: [
      "学生",
      "研究员",
      "论文党"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 3885,
    recommendedScore: 73,
    editorScore: 73,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "长文本",
      "阅读",
      "总结"
    ],
    conclusion: "Kimi 更适合先从长文本任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "长文本",
      "阅读",
      "总结",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Kimi 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Kimi 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.6,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.8,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 3885,
      likes: 265,
      saves: 95,
      clicks: 1055,
      comments: 5
    },
    seoTitle: "Kimi 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Kimi 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-doubao",
    name: "豆包",
    slug: "doubao",
    summary: "适合中文聊天、办公写作、图片理解和日常移动端任务，适合新手快速完成内容草稿和生活问答。",
    description: "适合中文聊天、办公写作、图片理解和日常移动端任务，适合新手快速完成内容草稿和生活问答。",
    longDescription: "适合中文聊天、办公写作、图片理解和日常移动端任务，适合新手快速完成内容草稿和生活问答。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-office",
      "ai-audio",
      "ai-social-media"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/doubao.png",
    officialUrl: "https://www.doubao.com",
    chineseSupport: "优秀",
    audience: [
      "新手",
      "办公族",
      "自媒体"
    ],
    audiences: [
      "新手",
      "办公族",
      "自媒体"
    ],
    platform: "Web / App / 浏览器插件",
    platforms: [
      "Web",
      "App",
      "浏览器插件"
    ],
    popularity: 4022,
    recommendedScore: 80,
    editorScore: 80,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "免费",
      "中文办公",
      "多模态"
    ],
    conclusion: "豆包 更适合先从免费任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "免费",
      "中文办公",
      "多模态",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "豆包 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "豆包 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.8,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4022,
      likes: 282,
      saves: 102,
      clicks: 1086,
      comments: 6
    },
    seoTitle: "豆包 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "豆包 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-tongyi",
    name: "通义千问",
    slug: "tongyi",
    summary: "适合中文办公、企业应用、文档处理和 API 接入，适合需要接入阿里生态或企业流程的团队。",
    description: "适合中文办公、企业应用、文档处理和 API 接入，适合需要接入阿里生态或企业流程的团队。",
    longDescription: "适合中文办公、企业应用、文档处理和 API 接入，适合需要接入阿里生态或企业流程的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-office",
      "ai-code",
      "ai-data"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/tongyi.svg",
    officialUrl: "https://tongyi.aliyun.com",
    chineseSupport: "优秀",
    audience: [
      "办公族",
      "企业用户",
      "开发者"
    ],
    audiences: [
      "办公族",
      "企业用户",
      "开发者"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 4159,
    recommendedScore: 87,
    editorScore: 87,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文办公",
      "文档",
      "API"
    ],
    conclusion: "通义千问 更适合先从中文办公任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文办公",
      "文档",
      "API",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "通义千问 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "通义千问 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.9,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4159,
      likes: 299,
      saves: 109,
      clicks: 1117,
      comments: 7
    },
    seoTitle: "通义千问 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "通义千问 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-wenxin",
    name: "文心一言",
    slug: "wenxin",
    summary: "适合中文问答、资料总结和办公写作，适合需要结合百度生态资料和中文场景的用户。",
    description: "适合中文问答、资料总结和办公写作，适合需要结合百度生态资料和中文场景的用户。",
    longDescription: "适合中文问答、资料总结和办公写作，适合需要结合百度生态资料和中文场景的用户。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-research",
      "ai-office"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/wenxin.png",
    officialUrl: "https://yiyan.baidu.com",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "办公族",
      "内容创作者"
    ],
    audiences: [
      "学生",
      "办公族",
      "内容创作者"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 4296,
    recommendedScore: 94,
    editorScore: 94,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文问答",
      "办公",
      "百度生态"
    ],
    conclusion: "文心一言 更适合先从中文问答任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文问答",
      "办公",
      "百度生态",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "文心一言 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "文心一言 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4296,
      likes: 316,
      saves: 116,
      clicks: 1148,
      comments: 8
    },
    seoTitle: "文心一言 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "文心一言 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-yuanbao",
    name: "腾讯元宝",
    slug: "yuanbao",
    summary: "适合中文问答、文档总结和微信生态相关的日常效率任务，适合移动端高频使用。",
    description: "适合中文问答、文档总结和微信生态相关的日常效率任务，适合移动端高频使用。",
    longDescription: "适合中文问答、文档总结和微信生态相关的日常效率任务，适合移动端高频使用。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-office",
      "ai-search"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/yuanbao.png",
    officialUrl: "https://yuanbao.tencent.com",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "办公族",
      "内容创作者"
    ],
    audiences: [
      "学生",
      "办公族",
      "内容创作者"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 4433,
    recommendedScore: 76,
    editorScore: 76,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文问答",
      "资料整理",
      "腾讯生态"
    ],
    conclusion: "腾讯元宝 更适合先从中文问答任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文问答",
      "资料整理",
      "腾讯生态",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "腾讯元宝 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "腾讯元宝 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4433,
      likes: 333,
      saves: 123,
      clicks: 1179,
      comments: 0
    },
    seoTitle: "腾讯元宝 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "腾讯元宝 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-sparkdesk",
    name: "讯飞星火",
    slug: "sparkdesk",
    summary: "适合中文语音、教育学习、办公写作和多终端助手场景，语音和中文本地化能力较强。",
    description: "适合中文语音、教育学习、办公写作和多终端助手场景，语音和中文本地化能力较强。",
    longDescription: "适合中文语音、教育学习、办公写作和多终端助手场景，语音和中文本地化能力较强。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing",
      "ai-office",
      "ai-audio",
      "ai-translation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/sparkdesk.ico",
    officialUrl: "https://xinghuo.xfyun.cn",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "教师",
      "办公族"
    ],
    audiences: [
      "学生",
      "教师",
      "办公族"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 4570,
    recommendedScore: 83,
    editorScore: 83,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文语音",
      "教育",
      "办公"
    ],
    conclusion: "讯飞星火 更适合先从中文语音任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文语音",
      "教育",
      "办公",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "讯飞星火 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "讯飞星火 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 4.6,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4570,
      likes: 350,
      saves: 130,
      clicks: 1210,
      comments: 1
    },
    seoTitle: "讯飞星火 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "讯飞星火 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-grok",
    name: "Grok",
    slug: "grok",
    summary: "适合关注实时事件、英文资讯和社交平台语境的用户，用于快速理解热点和生成讨论角度。",
    description: "适合关注实时事件、英文资讯和社交平台语境的用户，用于快速理解热点和生成讨论角度。",
    longDescription: "适合关注实时事件、英文资讯和社交平台语境的用户，用于快速理解热点和生成讨论角度。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-search",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://grok.com/favicon.ico",
    officialUrl: "https://grok.com",
    chineseSupport: "一般",
    audience: [
      "社媒用户",
      "研究员",
      "内容创作者"
    ],
    audiences: [
      "社媒用户",
      "研究员",
      "内容创作者"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 4707,
    recommendedScore: 90,
    editorScore: 90,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "实时信息",
      "X 生态",
      "问答"
    ],
    conclusion: "Grok 更适合先从实时信息任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "实时信息",
      "X 生态",
      "问答",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Grok 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Grok 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.8,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4707,
      likes: 367,
      saves: 137,
      clicks: 1241,
      comments: 2
    },
    seoTitle: "Grok 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Grok 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-poe",
    name: "Poe",
    slug: "poe",
    summary: "适合想在一个入口体验多种模型和自定义 Bot 的用户，适合测试提示词和比较模型输出风格。",
    description: "适合想在一个入口体验多种模型和自定义 Bot 的用户，适合测试提示词和比较模型输出风格。",
    longDescription: "适合想在一个入口体验多种模型和自定义 Bot 的用户，适合测试提示词和比较模型输出风格。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-prompt",
      "ai-browser-extension"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://poe.com/favicon.ico",
    officialUrl: "https://poe.com",
    chineseSupport: "良好",
    audience: [
      "AI 新手",
      "提示词玩家",
      "内容创作者"
    ],
    audiences: [
      "AI 新手",
      "提示词玩家",
      "内容创作者"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 4844,
    recommendedScore: 72,
    editorScore: 72,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "多模型",
      "机器人",
      "模板"
    ],
    conclusion: "Poe 更适合先从多模型任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "多模型",
      "机器人",
      "模板",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Poe 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Poe 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 4844,
      likes: 384,
      saves: 144,
      clicks: 1272,
      comments: 3
    },
    seoTitle: "Poe 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Poe 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-monica",
    name: "Monica",
    slug: "monica",
    summary: "适合在浏览器里做网页总结、翻译、写作和跨站问答，适合希望 AI 随时伴随网页工作的用户。",
    description: "适合在浏览器里做网页总结、翻译、写作和跨站问答，适合希望 AI 随时伴随网页工作的用户。",
    longDescription: "适合在浏览器里做网页总结、翻译、写作和跨站问答，适合希望 AI 随时伴随网页工作的用户。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 浏览器插件",
    categorySlug: "ai-browser-extension",
    categorySlugs: [
      "ai-browser-extension",
      "ai-chat",
      "ai-writing",
      "ai-search"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://monica.im/favicon.ico",
    officialUrl: "https://monica.im",
    chineseSupport: "良好",
    audience: [
      "办公族",
      "学生",
      "内容创作者"
    ],
    audiences: [
      "办公族",
      "学生",
      "内容创作者"
    ],
    platform: "Web / App / 浏览器插件",
    platforms: [
      "Web",
      "App",
      "浏览器插件"
    ],
    popularity: 4981,
    recommendedScore: 79,
    editorScore: 79,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "浏览器助手",
      "网页总结",
      "翻译"
    ],
    conclusion: "Monica 更适合先从浏览器助手任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "浏览器助手",
      "网页总结",
      "翻译",
      "AI 浏览器插件"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Monica 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Monica 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 4981,
      likes: 401,
      saves: 151,
      clicks: 1303,
      comments: 4
    },
    seoTitle: "Monica 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Monica 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-pi",
    name: "Pi",
    slug: "pi",
    summary: "适合轻量对话、想法整理和表达练习，不适合作为严肃资料检索工具，但很适合日常交流式启发。",
    description: "适合轻量对话、想法整理和表达练习，不适合作为严肃资料检索工具，但很适合日常交流式启发。",
    longDescription: "适合轻量对话、想法整理和表达练习，不适合作为严肃资料检索工具，但很适合日常交流式启发。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 对话",
    categorySlug: "ai-chat",
    categorySlugs: [
      "ai-chat",
      "ai-writing"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "https://pi.ai/favicon.ico",
    officialUrl: "https://pi.ai",
    chineseSupport: "良好",
    audience: [
      "AI 新手",
      "学生",
      "日常用户"
    ],
    audiences: [
      "AI 新手",
      "学生",
      "日常用户"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 5118,
    recommendedScore: 86,
    editorScore: 86,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "陪伴式对话",
      "表达润色",
      "想法整理"
    ],
    conclusion: "Pi 更适合先从陪伴式对话任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "陪伴式对话",
      "表达润色",
      "想法整理",
      "AI 对话"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Pi 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Pi 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.8,
      costPerformance: 3.6
    },
    stats: {
      views: 5118,
      likes: 418,
      saves: 158,
      clicks: 1334,
      comments: 5
    },
    seoTitle: "Pi 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Pi 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-cursor",
    name: "Cursor",
    slug: "cursor",
    summary: "适合在真实项目里理解代码、定位问题、生成修改方案和重构，是开发者把 AI 接入工程工作流的核心工具。",
    description: "适合在真实项目里理解代码、定位问题、生成修改方案和重构，是开发者把 AI 接入工程工作流的核心工具。",
    longDescription: "适合在真实项目里理解代码、定位问题、生成修改方案和重构，是开发者把 AI 接入工程工作流的核心工具。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/cursor.png",
    officialUrl: "https://cursor.com",
    chineseSupport: "良好",
    audience: [
      "程序员",
      "独立开发者"
    ],
    audiences: [
      "程序员",
      "独立开发者"
    ],
    platform: "桌面客户端",
    platforms: [
      "桌面客户端"
    ],
    popularity: 5255,
    recommendedScore: 93,
    editorScore: 93,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI IDE",
      "代码理解",
      "重构"
    ],
    conclusion: "Cursor 更适合先从AI IDE任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI IDE",
      "代码理解",
      "重构",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Cursor 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Cursor 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 5255,
      likes: 435,
      saves: 165,
      clicks: 1365,
      comments: 6
    },
    seoTitle: "Cursor 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Cursor 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-github-copilot",
    name: "GitHub Copilot",
    slug: "github-copilot",
    summary: "适合团队开发、IDE 代码补全、测试生成和工程化协作，适合已经使用 GitHub 工作流的开发者。",
    description: "适合团队开发、IDE 代码补全、测试生成和工程化协作，适合已经使用 GitHub 工作流的开发者。",
    longDescription: "适合团队开发、IDE 代码补全、测试生成和工程化协作，适合已经使用 GitHub 工作流的开发者。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
    officialUrl: "https://github.com/features/copilot",
    chineseSupport: "良好",
    audience: [
      "程序员",
      "团队开发者"
    ],
    audiences: [
      "程序员",
      "团队开发者"
    ],
    platform: "IDE 插件",
    platforms: [
      "IDE 插件"
    ],
    popularity: 5392,
    recommendedScore: 75,
    editorScore: 75,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: true,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "代码补全",
      "工程协作",
      "IDE"
    ],
    conclusion: "GitHub Copilot 更适合先从代码补全任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "代码补全",
      "工程协作",
      "IDE",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "GitHub Copilot 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "GitHub Copilot 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 5392,
      likes: 452,
      saves: 172,
      clicks: 1396,
      comments: 7
    },
    seoTitle: "GitHub Copilot 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "GitHub Copilot 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-codeium",
    name: "Codeium",
    slug: "codeium",
    summary: "适合学生和个人开发者使用的 AI 代码补全工具，适合预算有限但需要 IDE 辅助的编程学习和项目开发。",
    description: "适合学生和个人开发者使用的 AI 代码补全工具，适合预算有限但需要 IDE 辅助的编程学习和项目开发。",
    longDescription: "适合学生和个人开发者使用的 AI 代码补全工具，适合预算有限但需要 IDE 辅助的编程学习和项目开发。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/codeium.png",
    officialUrl: "https://codeium.com",
    chineseSupport: "良好",
    audience: [
      "程序员",
      "学生开发者"
    ],
    audiences: [
      "程序员",
      "学生开发者"
    ],
    platform: "IDE 插件",
    platforms: [
      "IDE 插件"
    ],
    popularity: 5529,
    recommendedScore: 82,
    editorScore: 82,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "代码补全",
      "免费额度",
      "IDE"
    ],
    conclusion: "Codeium 更适合先从代码补全任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "代码补全",
      "免费额度",
      "IDE",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Codeium 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Codeium 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 4.6
    },
    stats: {
      views: 5529,
      likes: 469,
      saves: 179,
      clicks: 1427,
      comments: 8
    },
    seoTitle: "Codeium 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Codeium 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-replit-ai",
    name: "Replit AI",
    slug: "replit-ai",
    summary: "适合在线写代码、快速做原型和学习编程，适合不想配置本地环境的学生和独立开发者。",
    description: "适合在线写代码、快速做原型和学习编程，适合不想配置本地环境的学生和独立开发者。",
    longDescription: "适合在线写代码、快速做原型和学习编程，适合不想配置本地环境的学生和独立开发者。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/replit-ai.png",
    officialUrl: "https://replit.com/ai",
    chineseSupport: "良好",
    audience: [
      "学生",
      "独立开发者",
      "教育用户"
    ],
    audiences: [
      "学生",
      "独立开发者",
      "教育用户"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 5666,
    recommendedScore: 89,
    editorScore: 89,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "在线 IDE",
      "原型开发",
      "部署"
    ],
    conclusion: "Replit AI 更适合先从在线 IDE任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "在线 IDE",
      "原型开发",
      "部署",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Replit AI 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Replit AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.6,
      costPerformance: 3.6
    },
    stats: {
      views: 5666,
      likes: 486,
      saves: 186,
      clicks: 1458,
      comments: 0
    },
    seoTitle: "Replit AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Replit AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-windsurf",
    name: "Windsurf",
    slug: "windsurf",
    summary: "适合用 AI 驱动项目开发和代码修改，强调从需求到多文件修改的连续工作流。",
    description: "适合用 AI 驱动项目开发和代码修改，强调从需求到多文件修改的连续工作流。",
    longDescription: "适合用 AI 驱动项目开发和代码修改，强调从需求到多文件修改的连续工作流。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/windsurf.png",
    officialUrl: "https://windsurf.com",
    chineseSupport: "良好",
    audience: [
      "程序员",
      "AI 编程新手"
    ],
    audiences: [
      "程序员",
      "AI 编程新手"
    ],
    platform: "桌面客户端",
    platforms: [
      "桌面客户端"
    ],
    popularity: 5803,
    recommendedScore: 71,
    editorScore: 71,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI IDE",
      "项目理解",
      "代码生成"
    ],
    conclusion: "Windsurf 更适合先从AI IDE任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI IDE",
      "项目理解",
      "代码生成",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Windsurf 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Windsurf 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.8,
      costPerformance: 3.6
    },
    stats: {
      views: 5803,
      likes: 503,
      saves: 193,
      clicks: 1489,
      comments: 1
    },
    seoTitle: "Windsurf 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Windsurf 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-v0",
    name: "v0",
    slug: "v0",
    summary: "适合用自然语言生成前端界面、产品原型和组件草稿，适合设计到代码的快速验证。",
    description: "适合用自然语言生成前端界面、产品原型和组件草稿，适合设计到代码的快速验证。",
    longDescription: "适合用自然语言生成前端界面、产品原型和组件草稿，适合设计到代码的快速验证。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-design",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/v0.png",
    officialUrl: "https://v0.dev",
    chineseSupport: "良好",
    audience: [
      "前端开发者",
      "产品经理",
      "设计师"
    ],
    audiences: [
      "前端开发者",
      "产品经理",
      "设计师"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 5940,
    recommendedScore: 78,
    editorScore: 78,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "前端生成",
      "React",
      "原型"
    ],
    conclusion: "v0 更适合先从前端生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "前端生成",
      "React",
      "原型",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "v0 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "v0 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 5940,
      likes: 520,
      saves: 200,
      clicks: 1520,
      comments: 2
    },
    seoTitle: "v0 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "v0 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-bolt-new",
    name: "Bolt.new",
    slug: "bolt-new",
    summary: "适合快速创建可运行 Web App 原型，从需求描述到项目文件生成都比较顺手。",
    description: "适合快速创建可运行 Web App 原型，从需求描述到项目文件生成都比较顺手。",
    longDescription: "适合快速创建可运行 Web App 原型，从需求描述到项目文件生成都比较顺手。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/bolt-new.png",
    officialUrl: "https://bolt.new",
    chineseSupport: "良好",
    audience: [
      "独立开发者",
      "产品经理",
      "创业者"
    ],
    audiences: [
      "独立开发者",
      "产品经理",
      "创业者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 6077,
    recommendedScore: 85,
    editorScore: 85,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "Web App",
      "原型",
      "全栈生成"
    ],
    conclusion: "Bolt.new 更适合先从Web App任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "Web App",
      "原型",
      "全栈生成",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Bolt.new 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Bolt.new 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.3,
      costPerformance: 3.6
    },
    stats: {
      views: 6077,
      likes: 537,
      saves: 207,
      clicks: 1551,
      comments: 3
    },
    seoTitle: "Bolt.new 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Bolt.new 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-lovable",
    name: "Lovable",
    slug: "lovable",
    summary: "适合非纯开发背景的用户把产品想法做成 Web App 原型，适合验证小工具、后台和落地页。",
    description: "适合非纯开发背景的用户把产品想法做成 Web App 原型，适合验证小工具、后台和落地页。",
    longDescription: "适合非纯开发背景的用户把产品想法做成 Web App 原型，适合验证小工具、后台和落地页。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/lovable.png",
    officialUrl: "https://lovable.dev",
    chineseSupport: "良好",
    audience: [
      "创业者",
      "产品经理",
      "独立开发者"
    ],
    audiences: [
      "创业者",
      "产品经理",
      "独立开发者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 6214,
    recommendedScore: 92,
    editorScore: 92,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "Web App",
      "产品原型",
      "低代码"
    ],
    conclusion: "Lovable 更适合先从Web App任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "Web App",
      "产品原型",
      "低代码",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Lovable 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Lovable 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 6214,
      likes: 554,
      saves: 214,
      clicks: 1582,
      comments: 4
    },
    seoTitle: "Lovable 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Lovable 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-trae",
    name: "Trae",
    slug: "trae",
    summary: "适合中文开发者尝试 AI IDE 和项目级代码辅助，适合解释代码、补测试和生成项目改动建议。",
    description: "适合中文开发者尝试 AI IDE 和项目级代码辅助，适合解释代码、补测试和生成项目改动建议。",
    longDescription: "适合中文开发者尝试 AI IDE 和项目级代码辅助，适合解释代码、补测试和生成项目改动建议。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/trae.png",
    officialUrl: "https://www.trae.ai",
    chineseSupport: "优秀",
    audience: [
      "程序员",
      "AI 编程新手"
    ],
    audiences: [
      "程序员",
      "AI 编程新手"
    ],
    platform: "桌面客户端",
    platforms: [
      "桌面客户端"
    ],
    popularity: 6351,
    recommendedScore: 74,
    editorScore: 74,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI IDE",
      "项目理解",
      "代码生成"
    ],
    conclusion: "Trae 更适合先从AI IDE任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI IDE",
      "项目理解",
      "代码生成",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Trae 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Trae 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 6351,
      likes: 571,
      saves: 221,
      clicks: 1613,
      comments: 5
    },
    seoTitle: "Trae 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Trae 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-devin",
    name: "Devin",
    slug: "devin",
    summary: "适合把相对完整的软件任务交给 AI Agent 尝试执行，适合团队评估自动化开发流程和边界。",
    description: "适合把相对完整的软件任务交给 AI Agent 尝试执行，适合团队评估自动化开发流程和边界。",
    longDescription: "适合把相对完整的软件任务交给 AI Agent 尝试执行，适合团队评估自动化开发流程和边界。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 编程",
    categorySlug: "ai-code",
    categorySlugs: [
      "ai-code",
      "ai-agent",
      "ai-automation"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "/brand-icons/devin.png",
    officialUrl: "https://devin.ai",
    chineseSupport: "一般",
    audience: [
      "开发团队",
      "创业团队"
    ],
    audiences: [
      "开发团队",
      "创业团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 6488,
    recommendedScore: 81,
    editorScore: 81,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI 工程师",
      "任务执行",
      "自动化开发"
    ],
    conclusion: "Devin 更适合先从AI 工程师任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI 工程师",
      "任务执行",
      "自动化开发",
      "AI 编程"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Devin 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Devin 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 6488,
      likes: 588,
      saves: 228,
      clicks: 1644,
      comments: 6
    },
    seoTitle: "Devin 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Devin 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-perplexity",
    name: "Perplexity",
    slug: "perplexity",
    summary: "适合带来源的 AI 搜索、资料追踪、英文资料核对和研究任务，适合先找证据再写结论。",
    description: "适合带来源的 AI 搜索、资料追踪、英文资料核对和研究任务，适合先找证据再写结论。",
    longDescription: "适合带来源的 AI 搜索、资料追踪、英文资料核对和研究任务，适合先找证据再写结论。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-research",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.perplexity.ai/favicon.ico",
    officialUrl: "https://www.perplexity.ai",
    chineseSupport: "良好",
    audience: [
      "研究员",
      "学生",
      "产品经理"
    ],
    audiences: [
      "研究员",
      "学生",
      "产品经理"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 6625,
    recommendedScore: 88,
    editorScore: 88,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI 搜索",
      "来源追踪",
      "英文资料"
    ],
    conclusion: "Perplexity 更适合先从AI 搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI 搜索",
      "来源追踪",
      "英文资料",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Perplexity 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Perplexity 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.8,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 6625,
      likes: 605,
      saves: 235,
      clicks: 1675,
      comments: 7
    },
    seoTitle: "Perplexity 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Perplexity 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-metaso",
    name: "秘塔 AI 搜索",
    slug: "metaso",
    summary: "适合中文资料搜索、论文调研、来源整理和问答式检索，是中文用户做资料收集的高频工具。",
    description: "适合中文资料搜索、论文调研、来源整理和问答式检索，是中文用户做资料收集的高频工具。",
    longDescription: "适合中文资料搜索、论文调研、来源整理和问答式检索，是中文用户做资料收集的高频工具。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-research",
      "ai-writing"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/metaso.png",
    officialUrl: "https://metaso.cn",
    chineseSupport: "优秀",
    audience: [
      "学生",
      "研究员",
      "内容创作者"
    ],
    audiences: [
      "学生",
      "研究员",
      "内容创作者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 6762,
    recommendedScore: 70,
    editorScore: 70,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文搜索",
      "资料整理",
      "来源"
    ],
    conclusion: "秘塔 AI 搜索 更适合先从中文搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文搜索",
      "资料整理",
      "来源",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "秘塔 AI 搜索 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "秘塔 AI 搜索 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.9,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 6762,
      likes: 622,
      saves: 242,
      clicks: 1706,
      comments: 8
    },
    seoTitle: "秘塔 AI 搜索 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "秘塔 AI 搜索 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-felo",
    name: "Felo",
    slug: "felo",
    summary: "适合跨语言搜索和资料总结，可以帮助中文用户发现海外资料并转成可读摘要。",
    description: "适合跨语言搜索和资料总结，可以帮助中文用户发现海外资料并转成可读摘要。",
    longDescription: "适合跨语言搜索和资料总结，可以帮助中文用户发现海外资料并转成可读摘要。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-research",
      "ai-translation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://felo.ai/favicon.ico",
    officialUrl: "https://felo.ai",
    chineseSupport: "良好",
    audience: [
      "研究员",
      "学生",
      "跨语言用户"
    ],
    audiences: [
      "研究员",
      "学生",
      "跨语言用户"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 6899,
    recommendedScore: 77,
    editorScore: 77,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "跨语言搜索",
      "资料总结",
      "来源"
    ],
    conclusion: "Felo 更适合先从跨语言搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "跨语言搜索",
      "资料总结",
      "来源",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Felo 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Felo 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.3,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 6899,
      likes: 639,
      saves: 249,
      clicks: 1737,
      comments: 0
    },
    seoTitle: "Felo 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Felo 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-you-com",
    name: "You.com",
    slug: "you-com",
    summary: "适合需要搜索和对话结合的用户，适合英文资料查找、总结和网页问答。",
    description: "适合需要搜索和对话结合的用户，适合英文资料查找、总结和网页问答。",
    longDescription: "适合需要搜索和对话结合的用户，适合英文资料查找、总结和网页问答。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-chat"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://you.com/favicon.ico",
    officialUrl: "https://you.com",
    chineseSupport: "一般",
    audience: [
      "研究员",
      "学生",
      "办公族"
    ],
    audiences: [
      "研究员",
      "学生",
      "办公族"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 7036,
    recommendedScore: 84,
    editorScore: 84,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI 搜索",
      "多模型",
      "网页问答"
    ],
    conclusion: "You.com 更适合先从AI 搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI 搜索",
      "多模型",
      "网页问答",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "You.com 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "You.com 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.5,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7036,
      likes: 656,
      saves: 256,
      clicks: 1768,
      comments: 1
    },
    seoTitle: "You.com 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "You.com 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-phind",
    name: "Phind",
    slug: "phind",
    summary: "适合程序员搜索技术问题、对比方案和理解错误日志，搜索结果更偏工程场景。",
    description: "适合程序员搜索技术问题、对比方案和理解错误日志，搜索结果更偏工程场景。",
    longDescription: "适合程序员搜索技术问题、对比方案和理解错误日志，搜索结果更偏工程场景。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-code"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.phind.com/favicon.ico",
    officialUrl: "https://www.phind.com",
    chineseSupport: "一般",
    audience: [
      "程序员",
      "技术研究者"
    ],
    audiences: [
      "程序员",
      "技术研究者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 7173,
    recommendedScore: 91,
    editorScore: 91,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "技术搜索",
      "代码问答",
      "来源"
    ],
    conclusion: "Phind 更适合先从技术搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "技术搜索",
      "代码问答",
      "来源",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Phind 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Phind 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7173,
      likes: 673,
      saves: 263,
      clicks: 1799,
      comments: 2
    },
    seoTitle: "Phind 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Phind 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-exa",
    name: "Exa",
    slug: "exa",
    summary: "适合开发者构建 AI 搜索、Agent 检索和网页语义搜索能力，偏技术接入场景。",
    description: "适合开发者构建 AI 搜索、Agent 检索和网页语义搜索能力，偏技术接入场景。",
    longDescription: "适合开发者构建 AI 搜索、Agent 检索和网页语义搜索能力，偏技术接入场景。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/exa.png",
    officialUrl: "https://exa.ai",
    chineseSupport: "一般",
    audience: [
      "开发者",
      "研究团队"
    ],
    audiences: [
      "开发者",
      "研究团队"
    ],
    platform: "API / Web",
    platforms: [
      "API",
      "Web"
    ],
    popularity: 7310,
    recommendedScore: 73,
    editorScore: 73,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "语义搜索",
      "API",
      "网页检索"
    ],
    conclusion: "Exa 更适合先从语义搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "语义搜索",
      "API",
      "网页检索",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: true,
    faq: [
      {
        question: "Exa 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Exa 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7310,
      likes: 690,
      saves: 270,
      clicks: 1830,
      comments: 3
    },
    seoTitle: "Exa 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Exa 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-consensus",
    name: "Consensus",
    slug: "consensus",
    summary: "适合围绕研究问题查找论文证据和结论摘要，适合论文选题和文献综述前期整理。",
    description: "适合围绕研究问题查找论文证据和结论摘要，适合论文选题和文献综述前期整理。",
    longDescription: "适合围绕研究问题查找论文证据和结论摘要，适合论文选题和文献综述前期整理。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 搜索",
    categorySlug: "ai-search",
    categorySlugs: [
      "ai-search",
      "ai-research"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://consensus.app/favicon.ico",
    officialUrl: "https://consensus.app",
    chineseSupport: "一般",
    audience: [
      "研究员",
      "学生",
      "论文党"
    ],
    audiences: [
      "研究员",
      "学生",
      "论文党"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 7447,
    recommendedScore: 80,
    editorScore: 80,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "论文搜索",
      "证据总结",
      "研究问题"
    ],
    conclusion: "Consensus 更适合先从论文搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "论文搜索",
      "证据总结",
      "研究问题",
      "AI 搜索"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Consensus 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Consensus 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.9,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7447,
      likes: 707,
      saves: 277,
      clicks: 1861,
      comments: 4
    },
    seoTitle: "Consensus 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Consensus 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-midjourney",
    name: "Midjourney",
    slug: "midjourney",
    summary: "适合高质量插画、视觉探索、海报风格和创意图像生成，适合对画面质感要求高的设计场景。",
    description: "适合高质量插画、视觉探索、海报风格和创意图像生成，适合对画面质感要求高的设计场景。",
    longDescription: "适合高质量插画、视觉探索、海报风格和创意图像生成，适合对画面质感要求高的设计场景。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://www.midjourney.com/favicon.ico",
    officialUrl: "https://www.midjourney.com",
    chineseSupport: "一般",
    audience: [
      "设计师",
      "插画师",
      "品牌视觉人员"
    ],
    audiences: [
      "设计师",
      "插画师",
      "品牌视觉人员"
    ],
    platform: "Web / Discord",
    platforms: [
      "Web",
      "Discord"
    ],
    popularity: 7584,
    recommendedScore: 87,
    editorScore: 87,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "绘图",
      "风格",
      "创意"
    ],
    conclusion: "Midjourney 更适合先从绘图任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "绘图",
      "风格",
      "创意",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Midjourney 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Midjourney 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7584,
      likes: 724,
      saves: 284,
      clicks: 1892,
      comments: 5
    },
    seoTitle: "Midjourney 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Midjourney 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-stable-diffusion",
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    summary: "适合开源绘图、本地部署、模型生态和可控图像生成，适合愿意学习参数和工作流的用户。",
    description: "适合开源绘图、本地部署、模型生态和可控图像生成，适合愿意学习参数和工作流的用户。",
    longDescription: "适合开源绘图、本地部署、模型生态和可控图像生成，适合愿意学习参数和工作流的用户。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/stable-diffusion.svg",
    officialUrl: "https://stability.ai",
    chineseSupport: "良好",
    audience: [
      "设计师",
      "开发者",
      "AI 绘图玩家"
    ],
    audiences: [
      "设计师",
      "开发者",
      "AI 绘图玩家"
    ],
    platform: "Web / 本地部署",
    platforms: [
      "Web",
      "本地部署"
    ],
    popularity: 7721,
    recommendedScore: 94,
    editorScore: 94,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "开源",
      "绘图",
      "模型生态"
    ],
    conclusion: "Stable Diffusion 更适合先从开源任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "开源",
      "绘图",
      "模型生态",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Stable Diffusion 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Stable Diffusion 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 4.8
    },
    stats: {
      views: 7721,
      likes: 741,
      saves: 291,
      clicks: 1923,
      comments: 6
    },
    seoTitle: "Stable Diffusion 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Stable Diffusion 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-jimeng",
    name: "即梦 AI",
    slug: "jimeng",
    summary: "适合中文图片生成、短视频灵感、海报和电商视觉，中文提示词理解和移动端体验较友好。",
    description: "适合中文图片生成、短视频灵感、海报和电商视觉，中文提示词理解和移动端体验较友好。",
    longDescription: "适合中文图片生成、短视频灵感、海报和电商视觉，中文提示词理解和移动端体验较友好。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-video",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/jimeng.ico",
    officialUrl: "https://jimeng.jianying.com",
    chineseSupport: "优秀",
    audience: [
      "设计师",
      "自媒体",
      "电商运营"
    ],
    audiences: [
      "设计师",
      "自媒体",
      "电商运营"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 7858,
    recommendedScore: 76,
    editorScore: 76,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文生图",
      "视频",
      "海报"
    ],
    conclusion: "即梦 AI 更适合先从中文生图任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文生图",
      "视频",
      "海报",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "即梦 AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "即梦 AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 7858,
      likes: 758,
      saves: 298,
      clicks: 1954,
      comments: 7
    },
    seoTitle: "即梦 AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "即梦 AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-canva-ai",
    name: "Canva AI",
    slug: "canva-ai",
    summary: "适合海报、PPT、社媒图、电商图和轻量设计自动化，适合非专业设计用户快速出图。",
    description: "适合海报、PPT、社媒图、电商图和轻量设计自动化，适合非专业设计用户快速出图。",
    longDescription: "适合海报、PPT、社媒图、电商图和轻量设计自动化，适合非专业设计用户快速出图。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 设计",
    categorySlug: "ai-design",
    categorySlugs: [
      "ai-design",
      "ai-image",
      "ai-ppt",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/canva-ai.svg",
    officialUrl: "https://www.canva.com/magic",
    chineseSupport: "良好",
    audience: [
      "运营",
      "设计师",
      "教师"
    ],
    audiences: [
      "运营",
      "设计师",
      "教师"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 7995,
    recommendedScore: 83,
    editorScore: 83,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "设计",
      "海报",
      "模板"
    ],
    conclusion: "Canva AI 更适合先从设计任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "设计",
      "海报",
      "模板",
      "AI 设计"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Canva AI 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Canva AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 7995,
      likes: 775,
      saves: 305,
      clicks: 1985,
      comments: 8
    },
    seoTitle: "Canva AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Canva AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-adobe-firefly",
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    summary: "适合商业设计、生成填充和 Adobe 创意流程，适合对版权和设计软件生态更敏感的团队。",
    description: "适合商业设计、生成填充和 Adobe 创意流程，适合对版权和设计软件生态更敏感的团队。",
    longDescription: "适合商业设计、生成填充和 Adobe 创意流程，适合对版权和设计软件生态更敏感的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/adobe-firefly.svg",
    officialUrl: "https://firefly.adobe.com",
    chineseSupport: "良好",
    audience: [
      "设计师",
      "品牌团队",
      "商业设计师"
    ],
    audiences: [
      "设计师",
      "品牌团队",
      "商业设计师"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 8132,
    recommendedScore: 90,
    editorScore: 90,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "商业设计",
      "生成填充",
      "Adobe 生态"
    ],
    conclusion: "Adobe Firefly 更适合先从商业设计任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "商业设计",
      "生成填充",
      "Adobe 生态",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Adobe Firefly 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Adobe Firefly 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 8132,
      likes: 792,
      saves: 312,
      clicks: 2016,
      comments: 0
    },
    seoTitle: "Adobe Firefly 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Adobe Firefly 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-leonardo-ai",
    name: "Leonardo AI",
    slug: "leonardo-ai",
    summary: "适合游戏资产、风格化图像和创意视觉生成，适合需要稳定风格和批量视觉素材的团队。",
    description: "适合游戏资产、风格化图像和创意视觉生成，适合需要稳定风格和批量视觉素材的团队。",
    longDescription: "适合游戏资产、风格化图像和创意视觉生成，适合需要稳定风格和批量视觉素材的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://leonardo.ai/favicon.ico",
    officialUrl: "https://leonardo.ai",
    chineseSupport: "一般",
    audience: [
      "游戏美术",
      "设计师",
      "创意团队"
    ],
    audiences: [
      "游戏美术",
      "设计师",
      "创意团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 8269,
    recommendedScore: 72,
    editorScore: 72,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "游戏资产",
      "风格训练",
      "图像生成"
    ],
    conclusion: "Leonardo AI 更适合先从游戏资产任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "游戏资产",
      "风格训练",
      "图像生成",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Leonardo AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Leonardo AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 8269,
      likes: 809,
      saves: 319,
      clicks: 2047,
      comments: 1
    },
    seoTitle: "Leonardo AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Leonardo AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-ideogram",
    name: "Ideogram",
    slug: "ideogram",
    summary: "适合生成带文字的海报、Logo 灵感和排版视觉，适合需要图中文字更稳定的设计任务。",
    description: "适合生成带文字的海报、Logo 灵感和排版视觉，适合需要图中文字更稳定的设计任务。",
    longDescription: "适合生成带文字的海报、Logo 灵感和排版视觉，适合需要图中文字更稳定的设计任务。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://ideogram.ai/favicon.ico",
    officialUrl: "https://ideogram.ai",
    chineseSupport: "一般",
    audience: [
      "设计师",
      "海报创作者",
      "品牌运营"
    ],
    audiences: [
      "设计师",
      "海报创作者",
      "品牌运营"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 8406,
    recommendedScore: 79,
    editorScore: 79,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "文字海报",
      "Logo",
      "排版"
    ],
    conclusion: "Ideogram 更适合先从文字海报任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "文字海报",
      "Logo",
      "排版",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Ideogram 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Ideogram 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.6,
      costPerformance: 3.6
    },
    stats: {
      views: 8406,
      likes: 826,
      saves: 326,
      clicks: 2078,
      comments: 2
    },
    seoTitle: "Ideogram 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Ideogram 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-dall-e",
    name: "DALL·E",
    slug: "dall-e",
    summary: "适合在 ChatGPT 工作流中完成图片生成和编辑，适合从文案到配图的一体化创作。",
    description: "适合在 ChatGPT 工作流中完成图片生成和编辑，适合从文案到配图的一体化创作。",
    longDescription: "适合在 ChatGPT 工作流中完成图片生成和编辑，适合从文案到配图的一体化创作。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design",
      "ai-chat"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/dall-e.svg",
    officialUrl: "https://openai.com/dall-e",
    chineseSupport: "良好",
    audience: [
      "内容创作者",
      "产品经理",
      "设计师"
    ],
    audiences: [
      "内容创作者",
      "产品经理",
      "设计师"
    ],
    platform: "Web / API",
    platforms: [
      "Web",
      "API"
    ],
    popularity: 8543,
    recommendedScore: 86,
    editorScore: 86,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "图像生成",
      "编辑",
      "OpenAI"
    ],
    conclusion: "DALL·E 更适合先从图像生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "图像生成",
      "编辑",
      "OpenAI",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "DALL·E 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "DALL·E 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 8543,
      likes: 843,
      saves: 333,
      clicks: 2109,
      comments: 3
    },
    seoTitle: "DALL·E 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "DALL·E 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-microsoft-designer",
    name: "Microsoft Designer",
    slug: "microsoft-designer",
    summary: "适合快速生成社媒图、海报和营销视觉，适合微软生态用户做轻量设计。",
    description: "适合快速生成社媒图、海报和营销视觉，适合微软生态用户做轻量设计。",
    longDescription: "适合快速生成社媒图、海报和营销视觉，适合微软生态用户做轻量设计。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 设计",
    categorySlug: "ai-design",
    categorySlugs: [
      "ai-design",
      "ai-image",
      "ai-ppt"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/microsoft-designer.png",
    officialUrl: "https://designer.microsoft.com",
    chineseSupport: "良好",
    audience: [
      "办公族",
      "设计新手",
      "营销人员"
    ],
    audiences: [
      "办公族",
      "设计新手",
      "营销人员"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 8680,
    recommendedScore: 93,
    editorScore: 93,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "设计模板",
      "海报",
      "微软生态"
    ],
    conclusion: "Microsoft Designer 更适合先从设计模板任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "设计模板",
      "海报",
      "微软生态",
      "AI 设计"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Microsoft Designer 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Microsoft Designer 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 8680,
      likes: 860,
      saves: 340,
      clicks: 2140,
      comments: 4
    },
    seoTitle: "Microsoft Designer 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Microsoft Designer 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-figma-ai",
    name: "Figma AI",
    slug: "figma-ai",
    summary: "适合 UI 设计、原型构思和设计协作，适合设计团队把想法快速转成可编辑稿。",
    description: "适合 UI 设计、原型构思和设计协作，适合设计团队把想法快速转成可编辑稿。",
    longDescription: "适合 UI 设计、原型构思和设计协作，适合设计团队把想法快速转成可编辑稿。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 设计",
    categorySlug: "ai-design",
    categorySlugs: [
      "ai-design",
      "ai-code"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/figma-ai.png",
    officialUrl: "https://www.figma.com/ai",
    chineseSupport: "良好",
    audience: [
      "产品设计师",
      "UI 设计师",
      "前端开发者"
    ],
    audiences: [
      "产品设计师",
      "UI 设计师",
      "前端开发者"
    ],
    platform: "Web / 桌面客户端",
    platforms: [
      "Web",
      "桌面客户端"
    ],
    popularity: 8817,
    recommendedScore: 75,
    editorScore: 75,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "UI 设计",
      "原型",
      "协作"
    ],
    conclusion: "Figma AI 更适合先从UI 设计任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "UI 设计",
      "原型",
      "协作",
      "AI 设计"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Figma AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Figma AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 8817,
      likes: 877,
      saves: 347,
      clicks: 2171,
      comments: 5
    },
    seoTitle: "Figma AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Figma AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-remove-bg",
    name: "Remove.bg",
    slug: "remove-bg",
    summary: "适合商品图、头像和素材抠图，适合需要快速去背景的电商和设计工作。",
    description: "适合商品图、头像和素材抠图，适合需要快速去背景的电商和设计工作。",
    longDescription: "适合商品图、头像和素材抠图，适合需要快速去背景的电商和设计工作。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design",
      "ai-ecommerce"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/remove-bg.png",
    officialUrl: "https://www.remove.bg",
    chineseSupport: "良好",
    audience: [
      "电商运营",
      "设计师",
      "自媒体"
    ],
    audiences: [
      "电商运营",
      "设计师",
      "自媒体"
    ],
    platform: "Web / API",
    platforms: [
      "Web",
      "API"
    ],
    popularity: 8954,
    recommendedScore: 82,
    editorScore: 82,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "抠图",
      "背景移除",
      "电商图"
    ],
    conclusion: "Remove.bg 更适合先从抠图任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "抠图",
      "背景移除",
      "电商图",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Remove.bg 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Remove.bg 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 8954,
      likes: 894,
      saves: 354,
      clicks: 2202,
      comments: 6
    },
    seoTitle: "Remove.bg 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Remove.bg 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-magnific-ai",
    name: "Magnific AI",
    slug: "magnific-ai",
    summary: "适合图片放大、细节增强和质感提升，适合电商图、视觉资产和摄影后期。",
    description: "适合图片放大、细节增强和质感提升，适合电商图、视觉资产和摄影后期。",
    longDescription: "适合图片放大、细节增强和质感提升，适合电商图、视觉资产和摄影后期。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 绘图",
    categorySlug: "ai-image",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://magnific.ai/favicon.ico",
    officialUrl: "https://magnific.ai",
    chineseSupport: "一般",
    audience: [
      "设计师",
      "摄影师",
      "电商运营"
    ],
    audiences: [
      "设计师",
      "摄影师",
      "电商运营"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9091,
    recommendedScore: 89,
    editorScore: 89,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "图片放大",
      "细节增强",
      "质感"
    ],
    conclusion: "Magnific AI 更适合先从图片放大任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "图片放大",
      "细节增强",
      "质感",
      "AI 绘图"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Magnific AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Magnific AI 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9091,
      likes: 911,
      saves: 361,
      clicks: 2233,
      comments: 7
    },
    seoTitle: "Magnific AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Magnific AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-runway",
    name: "Runway",
    slug: "runway",
    summary: "适合生成式视频、镜头实验、品牌短片和创意影像，是视频生成方向的代表性工具。",
    description: "适合生成式视频、镜头实验、品牌短片和创意影像，是视频生成方向的代表性工具。",
    longDescription: "适合生成式视频、镜头实验、品牌短片和创意影像，是视频生成方向的代表性工具。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-image"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/runway.png",
    officialUrl: "https://runwayml.com",
    chineseSupport: "一般",
    audience: [
      "视频创作者",
      "设计师",
      "品牌团队"
    ],
    audiences: [
      "视频创作者",
      "设计师",
      "品牌团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9228,
    recommendedScore: 71,
    editorScore: 71,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "视频生成",
      "影像实验",
      "创意"
    ],
    conclusion: "Runway 更适合先从视频生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "视频生成",
      "影像实验",
      "创意",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Runway 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Runway 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9228,
      likes: 928,
      saves: 368,
      clicks: 2264,
      comments: 8
    },
    seoTitle: "Runway 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Runway 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-pika",
    name: "Pika",
    slug: "pika",
    summary: "适合短视频动效、创意片段和社媒视频实验，上手较轻，适合先做灵感验证。",
    description: "适合短视频动效、创意片段和社媒视频实验，上手较轻，适合先做灵感验证。",
    longDescription: "适合短视频动效、创意片段和社媒视频实验，上手较轻，适合先做灵感验证。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-image"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://pika.art/favicon.ico",
    officialUrl: "https://pika.art",
    chineseSupport: "一般",
    audience: [
      "短视频创作者",
      "设计师"
    ],
    audiences: [
      "短视频创作者",
      "设计师"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9365,
    recommendedScore: 78,
    editorScore: 78,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "视频生成",
      "动效",
      "创意"
    ],
    conclusion: "Pika 更适合先从视频生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "视频生成",
      "动效",
      "创意",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Pika 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Pika 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 9365,
      likes: 945,
      saves: 375,
      clicks: 2295,
      comments: 0
    },
    seoTitle: "Pika 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Pika 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-kling",
    name: "可灵 AI",
    slug: "kling",
    summary: "适合中文视频生成、分镜测试和短片创作，适合中文短视频团队尝试 AI 视频流程。",
    description: "适合中文视频生成、分镜测试和短片创作，适合中文短视频团队尝试 AI 视频流程。",
    longDescription: "适合中文视频生成、分镜测试和短片创作，适合中文短视频团队尝试 AI 视频流程。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-image"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/kling.png",
    officialUrl: "https://klingai.kuaishou.com",
    chineseSupport: "优秀",
    audience: [
      "短视频创作者",
      "品牌团队"
    ],
    audiences: [
      "短视频创作者",
      "品牌团队"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 9502,
    recommendedScore: 85,
    editorScore: 85,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文视频",
      "分镜",
      "短片"
    ],
    conclusion: "可灵 AI 更适合先从中文视频任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文视频",
      "分镜",
      "短片",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "可灵 AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "可灵 AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9502,
      likes: 962,
      saves: 382,
      clicks: 2326,
      comments: 1
    },
    seoTitle: "可灵 AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "可灵 AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-luma-dream-machine",
    name: "Luma Dream Machine",
    slug: "luma-dream-machine",
    summary: "适合生成镜头运动自然的短片和创意视频，适合用文字或图像做视频草稿。",
    description: "适合生成镜头运动自然的短片和创意视频，适合用文字或图像做视频草稿。",
    longDescription: "适合生成镜头运动自然的短片和创意视频，适合用文字或图像做视频草稿。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-image"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/luma-dream-machine.svg",
    officialUrl: "https://lumalabs.ai/dream-machine",
    chineseSupport: "一般",
    audience: [
      "视频创作者",
      "设计师"
    ],
    audiences: [
      "视频创作者",
      "设计师"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9639,
    recommendedScore: 92,
    editorScore: 92,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "视频生成",
      "镜头运动",
      "创意短片"
    ],
    conclusion: "Luma Dream Machine 更适合先从视频生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "视频生成",
      "镜头运动",
      "创意短片",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Luma Dream Machine 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Luma Dream Machine 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9639,
      likes: 979,
      saves: 389,
      clicks: 2357,
      comments: 2
    },
    seoTitle: "Luma Dream Machine 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Luma Dream Machine 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-heygen",
    name: "HeyGen",
    slug: "heygen",
    summary: "适合数字人视频、口播内容和多语言培训材料，适合需要批量生成讲解视频的团队。",
    description: "适合数字人视频、口播内容和多语言培训材料，适合需要批量生成讲解视频的团队。",
    longDescription: "适合数字人视频、口播内容和多语言培训材料，适合需要批量生成讲解视频的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-social-media",
      "ai-translation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/heygen.svg",
    officialUrl: "https://www.heygen.com",
    chineseSupport: "良好",
    audience: [
      "企业培训",
      "自媒体",
      "销售团队"
    ],
    audiences: [
      "企业培训",
      "自媒体",
      "销售团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9776,
    recommendedScore: 74,
    editorScore: 74,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "数字人",
      "口播视频",
      "多语言"
    ],
    conclusion: "HeyGen 更适合先从数字人任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "数字人",
      "口播视频",
      "多语言",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "HeyGen 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "HeyGen 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9776,
      likes: 996,
      saves: 396,
      clicks: 2388,
      comments: 3
    },
    seoTitle: "HeyGen 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "HeyGen 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-synthesia",
    name: "Synthesia",
    slug: "synthesia",
    summary: "适合企业培训、产品说明和多语言视频，适合把文档转成标准化讲解内容。",
    description: "适合企业培训、产品说明和多语言视频，适合把文档转成标准化讲解内容。",
    longDescription: "适合企业培训、产品说明和多语言视频，适合把文档转成标准化讲解内容。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-office",
      "ai-translation"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://www.synthesia.io/favicon.ico",
    officialUrl: "https://www.synthesia.io",
    chineseSupport: "良好",
    audience: [
      "企业培训",
      "HR",
      "教育团队"
    ],
    audiences: [
      "企业培训",
      "HR",
      "教育团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 9913,
    recommendedScore: 81,
    editorScore: 81,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "数字人",
      "培训视频",
      "企业内容"
    ],
    conclusion: "Synthesia 更适合先从数字人任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "数字人",
      "培训视频",
      "企业内容",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Synthesia 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Synthesia 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 9913,
      likes: 1013,
      saves: 403,
      clicks: 2419,
      comments: 4
    },
    seoTitle: "Synthesia 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Synthesia 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-capcut-ai",
    name: "CapCut AI",
    slug: "capcut-ai",
    summary: "适合剪辑、字幕、模板和短视频制作，适合自媒体团队把素材快速做成可发布视频。",
    description: "适合剪辑、字幕、模板和短视频制作，适合自媒体团队把素材快速做成可发布视频。",
    longDescription: "适合剪辑、字幕、模板和短视频制作，适合自媒体团队把素材快速做成可发布视频。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/capcut-ai.ico",
    officialUrl: "https://www.capcut.com",
    chineseSupport: "优秀",
    audience: [
      "短视频创作者",
      "自媒体",
      "运营"
    ],
    audiences: [
      "短视频创作者",
      "自媒体",
      "运营"
    ],
    platform: "Web / App / 桌面客户端",
    platforms: [
      "Web",
      "App",
      "桌面客户端"
    ],
    popularity: 10050,
    recommendedScore: 88,
    editorScore: 88,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "剪辑",
      "字幕",
      "短视频"
    ],
    conclusion: "CapCut AI 更适合先从剪辑任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "剪辑",
      "字幕",
      "短视频",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "CapCut AI 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "CapCut AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 10050,
      likes: 1030,
      saves: 410,
      clicks: 2450,
      comments: 5
    },
    seoTitle: "CapCut AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "CapCut AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-veo",
    name: "Veo",
    slug: "veo",
    summary: "适合关注高质量视频生成能力的创作者和团队，适合评估未来视频创作流程。",
    description: "适合关注高质量视频生成能力的创作者和团队，适合评估未来视频创作流程。",
    longDescription: "适合关注高质量视频生成能力的创作者和团队，适合评估未来视频创作流程。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://deepmind.google/favicon.ico",
    officialUrl: "https://deepmind.google/technologies/veo",
    chineseSupport: "一般",
    audience: [
      "视频创作者",
      "影视团队",
      "品牌团队"
    ],
    audiences: [
      "视频创作者",
      "影视团队",
      "品牌团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10187,
    recommendedScore: 70,
    editorScore: 70,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "视频生成",
      "高质量镜头",
      "Google"
    ],
    conclusion: "Veo 更适合先从视频生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "视频生成",
      "高质量镜头",
      "Google",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Veo 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Veo 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 10187,
      likes: 1047,
      saves: 417,
      clicks: 2481,
      comments: 6
    },
    seoTitle: "Veo 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Veo 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-sora",
    name: "Sora",
    slug: "sora",
    summary: "适合复杂场景视频生成和创意短片探索，适合作为视频生成能力评估和创意实验工具。",
    description: "适合复杂场景视频生成和创意短片探索，适合作为视频生成能力评估和创意实验工具。",
    longDescription: "适合复杂场景视频生成和创意短片探索，适合作为视频生成能力评估和创意实验工具。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://sora.com/favicon.ico",
    officialUrl: "https://openai.com/sora",
    chineseSupport: "良好",
    audience: [
      "视频创作者",
      "品牌团队",
      "内容团队"
    ],
    audiences: [
      "视频创作者",
      "品牌团队",
      "内容团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10324,
    recommendedScore: 77,
    editorScore: 77,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "视频生成",
      "复杂场景",
      "OpenAI"
    ],
    conclusion: "Sora 更适合先从视频生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "视频生成",
      "复杂场景",
      "OpenAI",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Sora 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Sora 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 10324,
      likes: 1064,
      saves: 424,
      clicks: 2512,
      comments: 7
    },
    seoTitle: "Sora 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Sora 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-gamma",
    name: "Gamma",
    slug: "gamma",
    summary: "适合快速生成演示文稿、课程讲义、提案和汇报初稿，适合从大纲到页面结构一键起步。",
    description: "适合快速生成演示文稿、课程讲义、提案和汇报初稿，适合从大纲到页面结构一键起步。",
    longDescription: "适合快速生成演示文稿、课程讲义、提案和汇报初稿，适合从大纲到页面结构一键起步。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI PPT",
    categorySlug: "ai-ppt",
    categorySlugs: [
      "ai-ppt",
      "ai-office",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://gamma.app/favicon.ico",
    officialUrl: "https://gamma.app",
    chineseSupport: "良好",
    audience: [
      "产品经理",
      "教师",
      "销售"
    ],
    audiences: [
      "产品经理",
      "教师",
      "销售"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10461,
    recommendedScore: 84,
    editorScore: 84,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: true,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "PPT",
      "演示文稿",
      "提案"
    ],
    conclusion: "Gamma 更适合先从PPT任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "PPT",
      "演示文稿",
      "提案",
      "AI PPT"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Gamma 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Gamma 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.6,
      costPerformance: 3.6
    },
    stats: {
      views: 10461,
      likes: 1081,
      saves: 431,
      clicks: 2543,
      comments: 8
    },
    seoTitle: "Gamma 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Gamma 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-tome",
    name: "Tome",
    slug: "tome",
    summary: "适合故事化演示、销售提案和轻量商业汇报，适合把想法转成叙事型页面。",
    description: "适合故事化演示、销售提案和轻量商业汇报，适合把想法转成叙事型页面。",
    longDescription: "适合故事化演示、销售提案和轻量商业汇报，适合把想法转成叙事型页面。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI PPT",
    categorySlug: "ai-ppt",
    categorySlugs: [
      "ai-ppt",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://tome.app/favicon.ico",
    officialUrl: "https://tome.app",
    chineseSupport: "良好",
    audience: [
      "创业者",
      "销售",
      "产品经理"
    ],
    audiences: [
      "创业者",
      "销售",
      "产品经理"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10598,
    recommendedScore: 91,
    editorScore: 91,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "PPT",
      "叙事",
      "提案"
    ],
    conclusion: "Tome 更适合先从PPT任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "PPT",
      "叙事",
      "提案",
      "AI PPT"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Tome 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Tome 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 10598,
      likes: 1098,
      saves: 438,
      clicks: 2574,
      comments: 0
    },
    seoTitle: "Tome 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Tome 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-beautiful-ai",
    name: "Beautiful.ai",
    slug: "beautiful-ai",
    summary: "适合商务演示、销售材料和规范化 PPT 排版，适合对视觉一致性要求高的团队。",
    description: "适合商务演示、销售材料和规范化 PPT 排版，适合对视觉一致性要求高的团队。",
    longDescription: "适合商务演示、销售材料和规范化 PPT 排版，适合对视觉一致性要求高的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI PPT",
    categorySlug: "ai-ppt",
    categorySlugs: [
      "ai-ppt",
      "ai-design",
      "ai-office"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "/brand-icons/beautiful-ai.png",
    officialUrl: "https://www.beautiful.ai",
    chineseSupport: "良好",
    audience: [
      "销售",
      "市场",
      "管理者"
    ],
    audiences: [
      "销售",
      "市场",
      "管理者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10735,
    recommendedScore: 73,
    editorScore: 73,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "PPT 模板",
      "排版",
      "商业演示"
    ],
    conclusion: "Beautiful.ai 更适合先从PPT 模板任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "PPT 模板",
      "排版",
      "商业演示",
      "AI PPT"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Beautiful.ai 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Beautiful.ai 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 10735,
      likes: 1115,
      saves: 445,
      clicks: 2605,
      comments: 1
    },
    seoTitle: "Beautiful.ai 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Beautiful.ai 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-napkin-ai",
    name: "Napkin AI",
    slug: "napkin-ai",
    summary: "适合把文字转成示意图、流程图和演示视觉，适合为文档或 PPT 增加信息图。",
    description: "适合把文字转成示意图、流程图和演示视觉，适合为文档或 PPT 增加信息图。",
    longDescription: "适合把文字转成示意图、流程图和演示视觉，适合为文档或 PPT 增加信息图。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI PPT",
    categorySlug: "ai-ppt",
    categorySlugs: [
      "ai-ppt",
      "ai-design",
      "ai-office"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/napkin-ai.png",
    officialUrl: "https://www.napkin.ai",
    chineseSupport: "良好",
    audience: [
      "产品经理",
      "咨询顾问",
      "教师"
    ],
    audiences: [
      "产品经理",
      "咨询顾问",
      "教师"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 10872,
    recommendedScore: 80,
    editorScore: 80,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "文字转图",
      "流程图",
      "演示辅助"
    ],
    conclusion: "Napkin AI 更适合先从文字转图任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "文字转图",
      "流程图",
      "演示辅助",
      "AI PPT"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Napkin AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Napkin AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 10872,
      likes: 1132,
      saves: 452,
      clicks: 2636,
      comments: 2
    },
    seoTitle: "Napkin AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Napkin AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-notion-ai",
    name: "Notion AI",
    slug: "notion-ai",
    summary: "适合知识库整理、会议记录、项目文档和团队协作写作，适合把碎片信息变成可追踪文档。",
    description: "适合知识库整理、会议记录、项目文档和团队协作写作，适合把碎片信息变成可追踪文档。",
    longDescription: "适合知识库整理、会议记录、项目文档和团队协作写作，适合把碎片信息变成可追踪文档。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 办公",
    categorySlug: "ai-office",
    categorySlugs: [
      "ai-office",
      "ai-writing"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "/brand-icons/notion-ai.svg",
    officialUrl: "https://www.notion.com/ai",
    chineseSupport: "良好",
    audience: [
      "知识工作者",
      "产品经理",
      "团队协作用户"
    ],
    audiences: [
      "知识工作者",
      "产品经理",
      "团队协作用户"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 11009,
    recommendedScore: 87,
    editorScore: 87,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "知识库",
      "文档",
      "协作"
    ],
    conclusion: "Notion AI 更适合先从知识库任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "知识库",
      "文档",
      "协作",
      "AI 办公"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Notion AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Notion AI 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11009,
      likes: 1149,
      saves: 459,
      clicks: 2667,
      comments: 3
    },
    seoTitle: "Notion AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Notion AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-feishu-minutes",
    name: "飞书妙记",
    slug: "feishu-minutes",
    summary: "适合中文会议转写、会议摘要和行动项整理，适合已经使用飞书协作的团队。",
    description: "适合中文会议转写、会议摘要和行动项整理，适合已经使用飞书协作的团队。",
    longDescription: "适合中文会议转写、会议摘要和行动项整理，适合已经使用飞书协作的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 会议纪要",
    categorySlug: "ai-meeting",
    categorySlugs: [
      "ai-meeting",
      "ai-office"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/feishu-minutes.png",
    officialUrl: "https://www.feishu.cn/product/minutes",
    chineseSupport: "优秀",
    audience: [
      "办公族",
      "团队管理者",
      "会议组织者"
    ],
    audiences: [
      "办公族",
      "团队管理者",
      "会议组织者"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 11146,
    recommendedScore: 94,
    editorScore: 94,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "会议转写",
      "摘要",
      "行动项"
    ],
    conclusion: "飞书妙记 更适合先从会议转写任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "会议转写",
      "摘要",
      "行动项",
      "AI 会议纪要"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "飞书妙记 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "飞书妙记 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11146,
      likes: 1166,
      saves: 466,
      clicks: 2698,
      comments: 4
    },
    seoTitle: "飞书妙记 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "飞书妙记 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-otter-ai",
    name: "Otter.ai",
    slug: "otter-ai",
    summary: "适合英文会议记录、访谈转写和会议摘要，适合跨国团队和英文资料整理。",
    description: "适合英文会议记录、访谈转写和会议摘要，适合跨国团队和英文资料整理。",
    longDescription: "适合英文会议记录、访谈转写和会议摘要，适合跨国团队和英文资料整理。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 会议纪要",
    categorySlug: "ai-meeting",
    categorySlugs: [
      "ai-meeting",
      "ai-office",
      "ai-audio"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/otter-ai.png",
    officialUrl: "https://otter.ai",
    chineseSupport: "一般",
    audience: [
      "海外团队",
      "会议组织者",
      "销售"
    ],
    audiences: [
      "海外团队",
      "会议组织者",
      "销售"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 11283,
    recommendedScore: 76,
    editorScore: 76,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "会议记录",
      "英文转写",
      "摘要"
    ],
    conclusion: "Otter.ai 更适合先从会议记录任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "会议记录",
      "英文转写",
      "摘要",
      "AI 会议纪要"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Otter.ai 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Otter.ai 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11283,
      likes: 1183,
      saves: 473,
      clicks: 2729,
      comments: 5
    },
    seoTitle: "Otter.ai 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Otter.ai 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-fireflies-ai",
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    summary: "适合远程会议自动记录、会议搜索和销售通话整理，适合需要会议资产沉淀的团队。",
    description: "适合远程会议自动记录、会议搜索和销售通话整理，适合需要会议资产沉淀的团队。",
    longDescription: "适合远程会议自动记录、会议搜索和销售通话整理，适合需要会议资产沉淀的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 会议纪要",
    categorySlug: "ai-meeting",
    categorySlugs: [
      "ai-meeting",
      "ai-office",
      "ai-automation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/fireflies-ai.png",
    officialUrl: "https://fireflies.ai",
    chineseSupport: "一般",
    audience: [
      "销售团队",
      "远程团队",
      "项目经理"
    ],
    audiences: [
      "销售团队",
      "远程团队",
      "项目经理"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 11420,
    recommendedScore: 83,
    editorScore: 83,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "会议助手",
      "自动记录",
      "CRM"
    ],
    conclusion: "Fireflies.ai 更适合先从会议助手任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "会议助手",
      "自动记录",
      "CRM",
      "AI 会议纪要"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Fireflies.ai 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Fireflies.ai 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6,
      automation: 4.3
    },
    stats: {
      views: 11420,
      likes: 1200,
      saves: 480,
      clicks: 2760,
      comments: 6
    },
    seoTitle: "Fireflies.ai 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Fireflies.ai 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-granola",
    name: "Granola",
    slug: "granola",
    summary: "适合把个人会议笔记和录音转成结构化总结，适合会议密集型知识工作者。",
    description: "适合把个人会议笔记和录音转成结构化总结，适合会议密集型知识工作者。",
    longDescription: "适合把个人会议笔记和录音转成结构化总结，适合会议密集型知识工作者。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 会议纪要",
    categorySlug: "ai-meeting",
    categorySlugs: [
      "ai-meeting",
      "ai-office"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/granola.png",
    officialUrl: "https://www.granola.ai",
    chineseSupport: "一般",
    audience: [
      "产品经理",
      "创业者",
      "会议密集用户"
    ],
    audiences: [
      "产品经理",
      "创业者",
      "会议密集用户"
    ],
    platform: "桌面客户端",
    platforms: [
      "桌面客户端"
    ],
    popularity: 11557,
    recommendedScore: 90,
    editorScore: 90,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "会议笔记",
      "个人助理",
      "摘要"
    ],
    conclusion: "Granola 更适合先从会议笔记任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "会议笔记",
      "个人助理",
      "摘要",
      "AI 会议纪要"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Granola 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Granola 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.3,
      costPerformance: 3.6
    },
    stats: {
      views: 11557,
      likes: 1217,
      saves: 487,
      clicks: 2791,
      comments: 7
    },
    seoTitle: "Granola 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Granola 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-microsoft-copilot",
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    summary: "适合 Microsoft 365 用户在 Word、Excel、PPT 和 Teams 中使用 AI 提升办公效率。",
    description: "适合 Microsoft 365 用户在 Word、Excel、PPT 和 Teams 中使用 AI 提升办公效率。",
    longDescription: "适合 Microsoft 365 用户在 Word、Excel、PPT 和 Teams 中使用 AI 提升办公效率。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 办公",
    categorySlug: "ai-office",
    categorySlugs: [
      "ai-office",
      "ai-chat",
      "ai-ppt"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "/brand-icons/microsoft-copilot.svg",
    officialUrl: "https://copilot.microsoft.com",
    chineseSupport: "良好",
    audience: [
      "企业用户",
      "办公族",
      "管理者"
    ],
    audiences: [
      "企业用户",
      "办公族",
      "管理者"
    ],
    platform: "Web / App / Office 插件",
    platforms: [
      "Web",
      "App",
      "Office 插件"
    ],
    popularity: 11694,
    recommendedScore: 72,
    editorScore: 72,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "Office",
      "Word",
      "Excel",
      "PPT"
    ],
    conclusion: "Microsoft Copilot 更适合先从Office任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "Office",
      "Word",
      "Excel",
      "PPT",
      "AI 办公"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Microsoft Copilot 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Microsoft Copilot 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11694,
      likes: 1234,
      saves: 494,
      clicks: 2822,
      comments: 8
    },
    seoTitle: "Microsoft Copilot 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Microsoft Copilot 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-wps-ai",
    name: "WPS AI",
    slug: "wps-ai",
    summary: "适合中文办公、文档写作、表格处理和 PPT 生成，适合 WPS 用户在本地办公流程中使用。",
    description: "适合中文办公、文档写作、表格处理和 PPT 生成，适合 WPS 用户在本地办公流程中使用。",
    longDescription: "适合中文办公、文档写作、表格处理和 PPT 生成，适合 WPS 用户在本地办公流程中使用。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 办公",
    categorySlug: "ai-office",
    categorySlugs: [
      "ai-office",
      "ai-ppt",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/wps-ai.ico",
    officialUrl: "https://ai.wps.cn",
    chineseSupport: "优秀",
    audience: [
      "中文办公用户",
      "学生",
      "企业用户"
    ],
    audiences: [
      "中文办公用户",
      "学生",
      "企业用户"
    ],
    platform: "Web / App / 桌面客户端",
    platforms: [
      "Web",
      "App",
      "桌面客户端"
    ],
    popularity: 11831,
    recommendedScore: 79,
    editorScore: 79,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "中文办公",
      "WPS 文档",
      "PPT"
    ],
    conclusion: "WPS AI 更适合先从中文办公任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "中文办公",
      "WPS 文档",
      "PPT",
      "AI 办公"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "WPS AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "WPS AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11831,
      likes: 1251,
      saves: 501,
      clicks: 2853,
      comments: 0
    },
    seoTitle: "WPS AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "WPS AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-elicit",
    name: "Elicit",
    slug: "elicit",
    summary: "适合围绕研究问题查找论文、整理证据表和快速理解相关研究方向。",
    description: "适合围绕研究问题查找论文、整理证据表和快速理解相关研究方向。",
    longDescription: "适合围绕研究问题查找论文、整理证据表和快速理解相关研究方向。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://elicit.com/favicon.ico",
    officialUrl: "https://elicit.com",
    chineseSupport: "一般",
    audience: [
      "研究员",
      "学生",
      "论文党"
    ],
    audiences: [
      "研究员",
      "学生",
      "论文党"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 11968,
    recommendedScore: 86,
    editorScore: 86,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "文献检索",
      "研究问题",
      "论文摘要"
    ],
    conclusion: "Elicit 更适合先从文献检索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "文献检索",
      "研究问题",
      "论文摘要",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Elicit 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Elicit 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.6,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 11968,
      likes: 1268,
      saves: 508,
      clicks: 2884,
      comments: 1
    },
    seoTitle: "Elicit 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Elicit 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-scite",
    name: "Scite",
    slug: "scite",
    summary: "适合分析论文引用关系、判断研究被支持或质疑的情况，适合写文献综述和引用检查。",
    description: "适合分析论文引用关系、判断研究被支持或质疑的情况，适合写文献综述和引用检查。",
    longDescription: "适合分析论文引用关系、判断研究被支持或质疑的情况，适合写文献综述和引用检查。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://scite.ai/favicon.ico",
    officialUrl: "https://scite.ai",
    chineseSupport: "一般",
    audience: [
      "研究员",
      "论文作者",
      "高校用户"
    ],
    audiences: [
      "研究员",
      "论文作者",
      "高校用户"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12105,
    recommendedScore: 93,
    editorScore: 93,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "引用分析",
      "论文证据",
      "学术检索"
    ],
    conclusion: "Scite 更适合先从引用分析任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "引用分析",
      "论文证据",
      "学术检索",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Scite 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Scite 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.8,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12105,
      likes: 1285,
      saves: 515,
      clicks: 2915,
      comments: 2
    },
    seoTitle: "Scite 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Scite 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-semantic-scholar",
    name: "Semantic Scholar",
    slug: "semantic-scholar",
    summary: "适合免费学术搜索、论文推荐和引用关系查看，适合研究前期资料收集。",
    description: "适合免费学术搜索、论文推荐和引用关系查看，适合研究前期资料收集。",
    longDescription: "适合免费学术搜索、论文推荐和引用关系查看，适合研究前期资料收集。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "/brand-icons/semantic-scholar.png",
    officialUrl: "https://www.semanticscholar.org",
    chineseSupport: "一般",
    audience: [
      "学生",
      "研究员",
      "论文党"
    ],
    audiences: [
      "学生",
      "研究员",
      "论文党"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12242,
    recommendedScore: 75,
    editorScore: 75,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "学术搜索",
      "论文推荐",
      "引用"
    ],
    conclusion: "Semantic Scholar 更适合先从学术搜索任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "学术搜索",
      "论文推荐",
      "引用",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Semantic Scholar 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Semantic Scholar 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.9,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 4.5
    },
    stats: {
      views: 12242,
      likes: 1302,
      saves: 522,
      clicks: 2946,
      comments: 3
    },
    seoTitle: "Semantic Scholar 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Semantic Scholar 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-research-rabbit",
    name: "Research Rabbit",
    slug: "research-rabbit",
    summary: "适合发现相关论文、作者和研究网络，适合从一篇核心论文扩展阅读范围。",
    description: "适合发现相关论文、作者和研究网络，适合从一篇核心论文扩展阅读范围。",
    longDescription: "适合发现相关论文、作者和研究网络，适合从一篇核心论文扩展阅读范围。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "https://www.researchrabbit.ai/favicon.ico",
    officialUrl: "https://www.researchrabbit.ai",
    chineseSupport: "一般",
    audience: [
      "研究员",
      "学生",
      "文献综述作者"
    ],
    audiences: [
      "研究员",
      "学生",
      "文献综述作者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12379,
    recommendedScore: 82,
    editorScore: 82,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "论文网络",
      "相关推荐",
      "文献管理"
    ],
    conclusion: "Research Rabbit 更适合先从论文网络任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "论文网络",
      "相关推荐",
      "文献管理",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Research Rabbit 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Research Rabbit 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.3,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12379,
      likes: 1319,
      saves: 529,
      clicks: 2977,
      comments: 4
    },
    seoTitle: "Research Rabbit 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Research Rabbit 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-zotero-ai",
    name: "Zotero AI",
    slug: "zotero-ai",
    summary: "适合在文献管理流程中加入摘要、笔记和 PDF 问答，适合长期研究资料沉淀。",
    description: "适合在文献管理流程中加入摘要、笔记和 PDF 问答，适合长期研究资料沉淀。",
    longDescription: "适合在文献管理流程中加入摘要、笔记和 PDF 问答，适合长期研究资料沉淀。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-office"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/zotero-ai.ico",
    officialUrl: "https://www.zotero.org",
    chineseSupport: "良好",
    audience: [
      "研究员",
      "学生",
      "论文党"
    ],
    audiences: [
      "研究员",
      "学生",
      "论文党"
    ],
    platform: "浏览器插件 / 桌面客户端",
    platforms: [
      "浏览器插件",
      "桌面客户端"
    ],
    popularity: 12516,
    recommendedScore: 89,
    editorScore: 89,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "文献管理",
      "PDF 问答",
      "笔记"
    ],
    conclusion: "Zotero AI 更适合先从文献管理任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "文献管理",
      "PDF 问答",
      "笔记",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Zotero AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Zotero AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.5,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12516,
      likes: 1336,
      saves: 536,
      clicks: 3008,
      comments: 5
    },
    seoTitle: "Zotero AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Zotero AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-chatpdf",
    name: "ChatPDF",
    slug: "chatpdf",
    summary: "适合快速阅读论文、报告和合同，帮助用户围绕 PDF 提问并整理重点。",
    description: "适合快速阅读论文、报告和合同，帮助用户围绕 PDF 提问并整理重点。",
    longDescription: "适合快速阅读论文、报告和合同，帮助用户围绕 PDF 提问并整理重点。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.chatpdf.com/favicon.ico",
    officialUrl: "https://www.chatpdf.com",
    chineseSupport: "良好",
    audience: [
      "学生",
      "研究员",
      "职场用户"
    ],
    audiences: [
      "学生",
      "研究员",
      "职场用户"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12653,
    recommendedScore: 71,
    editorScore: 71,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "PDF",
      "阅读",
      "总结"
    ],
    conclusion: "ChatPDF 更适合先从PDF任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "PDF",
      "阅读",
      "总结",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "ChatPDF 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "ChatPDF 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.6,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12653,
      likes: 1353,
      saves: 543,
      clicks: 3039,
      comments: 6
    },
    seoTitle: "ChatPDF 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "ChatPDF 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-humata",
    name: "Humata",
    slug: "humata",
    summary: "适合多文档问答、PDF 资料分析和长文档摘要，适合复杂资料的初步整理。",
    description: "适合多文档问答、PDF 资料分析和长文档摘要，适合复杂资料的初步整理。",
    longDescription: "适合多文档问答、PDF 资料分析和长文档摘要，适合复杂资料的初步整理。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-office"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/humata.ico",
    officialUrl: "https://www.humata.ai",
    chineseSupport: "良好",
    audience: [
      "研究员",
      "法律从业者",
      "办公族"
    ],
    audiences: [
      "研究员",
      "法律从业者",
      "办公族"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12790,
    recommendedScore: 78,
    editorScore: 78,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "文档问答",
      "PDF",
      "资料分析"
    ],
    conclusion: "Humata 更适合先从文档问答任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "文档问答",
      "PDF",
      "资料分析",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Humata 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Humata 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.8,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12790,
      likes: 1370,
      saves: 550,
      clicks: 3070,
      comments: 7
    },
    seoTitle: "Humata 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Humata 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-jenni-ai",
    name: "Jenni AI",
    slug: "jenni-ai",
    summary: "适合学术写作、段落扩写和引用辅助，适合写论文初稿和组织论证结构。",
    description: "适合学术写作、段落扩写和引用辅助，适合写论文初稿和组织论证结构。",
    longDescription: "适合学术写作、段落扩写和引用辅助，适合写论文初稿和组织论证结构。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/jenni-ai.svg",
    officialUrl: "https://jenni.ai",
    chineseSupport: "良好",
    audience: [
      "学生",
      "论文作者",
      "研究员"
    ],
    audiences: [
      "学生",
      "论文作者",
      "研究员"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 12927,
    recommendedScore: 85,
    editorScore: 85,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "学术写作",
      "引用",
      "论文草稿"
    ],
    conclusion: "Jenni AI 更适合先从学术写作任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "学术写作",
      "引用",
      "论文草稿",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Jenni AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Jenni AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.8,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.9,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 12927,
      likes: 1387,
      saves: 557,
      clicks: 3101,
      comments: 8
    },
    seoTitle: "Jenni AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Jenni AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-paperpal",
    name: "Paperpal",
    slug: "paperpal",
    summary: "适合论文英文润色、语法检查和投稿前语言优化，适合非英语母语研究者。",
    description: "适合论文英文润色、语法检查和投稿前语言优化，适合非英语母语研究者。",
    longDescription: "适合论文英文润色、语法检查和投稿前语言优化，适合非英语母语研究者。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 论文研究",
    categorySlug: "ai-research",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/paperpal.png",
    officialUrl: "https://paperpal.com",
    chineseSupport: "良好",
    audience: [
      "论文作者",
      "研究员",
      "学生"
    ],
    audiences: [
      "论文作者",
      "研究员",
      "学生"
    ],
    platform: "Web / 插件",
    platforms: [
      "Web",
      "插件"
    ],
    popularity: 13064,
    recommendedScore: 92,
    editorScore: 92,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "论文润色",
      "语法",
      "投稿"
    ],
    conclusion: "Paperpal 更适合先从论文润色任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "论文润色",
      "语法",
      "投稿",
      "AI 论文研究"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Paperpal 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Paperpal 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 4.3,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 13064,
      likes: 1404,
      saves: 564,
      clicks: 3132,
      comments: 0
    },
    seoTitle: "Paperpal 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Paperpal 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-elevenlabs",
    name: "ElevenLabs",
    slug: "elevenlabs",
    summary: "适合高质量 AI 配音、声音克隆和多语言音频内容制作，适合视频和课程创作者。",
    description: "适合高质量 AI 配音、声音克隆和多语言音频内容制作，适合视频和课程创作者。",
    longDescription: "适合高质量 AI 配音、声音克隆和多语言音频内容制作，适合视频和课程创作者。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 音频",
    categorySlug: "ai-audio",
    categorySlugs: [
      "ai-audio",
      "ai-video",
      "ai-translation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://elevenlabs.io/favicon.ico",
    officialUrl: "https://elevenlabs.io",
    chineseSupport: "一般",
    audience: [
      "视频创作者",
      "播客作者",
      "课程制作者"
    ],
    audiences: [
      "视频创作者",
      "播客作者",
      "课程制作者"
    ],
    platform: "Web / API",
    platforms: [
      "Web",
      "API"
    ],
    popularity: 13201,
    recommendedScore: 74,
    editorScore: 74,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "配音",
      "声音克隆",
      "多语言"
    ],
    conclusion: "ElevenLabs 更适合先从配音任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "配音",
      "声音克隆",
      "多语言",
      "AI 音频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "ElevenLabs 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "ElevenLabs 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.6,
      costPerformance: 3.6
    },
    stats: {
      views: 13201,
      likes: 1421,
      saves: 571,
      clicks: 3163,
      comments: 1
    },
    seoTitle: "ElevenLabs 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "ElevenLabs 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-suno",
    name: "Suno",
    slug: "suno",
    summary: "适合从歌词或主题生成音乐 Demo，适合短视频配乐、创意音乐和内容测试。",
    description: "适合从歌词或主题生成音乐 Demo，适合短视频配乐、创意音乐和内容测试。",
    longDescription: "适合从歌词或主题生成音乐 Demo，适合短视频配乐、创意音乐和内容测试。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 音频",
    categorySlug: "ai-audio",
    categorySlugs: [
      "ai-audio",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://suno.com/favicon.ico",
    officialUrl: "https://suno.com",
    chineseSupport: "一般",
    audience: [
      "音乐创作者",
      "自媒体",
      "营销人员"
    ],
    audiences: [
      "音乐创作者",
      "自媒体",
      "营销人员"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 13338,
    recommendedScore: 81,
    editorScore: 81,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "音乐生成",
      "歌词",
      "旋律"
    ],
    conclusion: "Suno 更适合先从音乐生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "音乐生成",
      "歌词",
      "旋律",
      "AI 音频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Suno 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Suno 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.8,
      costPerformance: 3.6
    },
    stats: {
      views: 13338,
      likes: 1438,
      saves: 578,
      clicks: 3194,
      comments: 2
    },
    seoTitle: "Suno 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Suno 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-udio",
    name: "Udio",
    slug: "udio",
    summary: "适合生成不同风格歌曲和音乐片段，适合音乐灵感探索和短内容配乐。",
    description: "适合生成不同风格歌曲和音乐片段，适合音乐灵感探索和短内容配乐。",
    longDescription: "适合生成不同风格歌曲和音乐片段，适合音乐灵感探索和短内容配乐。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 音频",
    categorySlug: "ai-audio",
    categorySlugs: [
      "ai-audio",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/udio.ico",
    officialUrl: "https://www.udio.com",
    chineseSupport: "一般",
    audience: [
      "音乐创作者",
      "自媒体",
      "播客作者"
    ],
    audiences: [
      "音乐创作者",
      "自媒体",
      "播客作者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 13475,
    recommendedScore: 88,
    editorScore: 88,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "音乐生成",
      "歌曲创作",
      "风格探索"
    ],
    conclusion: "Udio 更适合先从音乐生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "音乐生成",
      "歌曲创作",
      "风格探索",
      "AI 音频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Udio 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Udio 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 13475,
      likes: 1455,
      saves: 585,
      clicks: 3225,
      comments: 3
    },
    seoTitle: "Udio 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Udio 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-whisper",
    name: "Whisper",
    slug: "whisper",
    summary: "适合语音转文字、字幕生成和本地转写流程，适合开发者和音视频内容团队。",
    description: "适合语音转文字、字幕生成和本地转写流程，适合开发者和音视频内容团队。",
    longDescription: "适合语音转文字、字幕生成和本地转写流程，适合开发者和音视频内容团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 音频",
    categorySlug: "ai-audio",
    categorySlugs: [
      "ai-audio",
      "ai-meeting",
      "ai-translation"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "https://openai.com/favicon.ico",
    officialUrl: "https://openai.com/research/whisper",
    chineseSupport: "良好",
    audience: [
      "开发者",
      "字幕制作者",
      "研究员"
    ],
    audiences: [
      "开发者",
      "字幕制作者",
      "研究员"
    ],
    platform: "API / 本地部署",
    platforms: [
      "API",
      "本地部署"
    ],
    popularity: 13612,
    recommendedScore: 70,
    editorScore: 70,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "语音识别",
      "转写",
      "开源"
    ],
    conclusion: "Whisper 更适合先从语音识别任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "语音识别",
      "转写",
      "开源",
      "AI 音频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Whisper 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Whisper 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 4.5
    },
    stats: {
      views: 13612,
      likes: 1472,
      saves: 592,
      clicks: 3256,
      comments: 4
    },
    seoTitle: "Whisper 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Whisper 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-promptperfect",
    name: "PromptPerfect",
    slug: "promptperfect",
    summary: "适合优化提示词表达、改写结构和对比不同模型输出，适合提升提示词稳定性。",
    description: "适合优化提示词表达、改写结构和对比不同模型输出，适合提升提示词稳定性。",
    longDescription: "适合优化提示词表达、改写结构和对比不同模型输出，适合提升提示词稳定性。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 提示词",
    categorySlug: "ai-prompt",
    categorySlugs: [
      "ai-prompt",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://promptperfect.jina.ai/favicon.ico",
    officialUrl: "https://promptperfect.jina.ai",
    chineseSupport: "一般",
    audience: [
      "提示词玩家",
      "运营",
      "AI 新手"
    ],
    audiences: [
      "提示词玩家",
      "运营",
      "AI 新手"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 13749,
    recommendedScore: 77,
    editorScore: 77,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "提示词优化",
      "Prompt",
      "模板"
    ],
    conclusion: "PromptPerfect 更适合先从提示词优化任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "提示词优化",
      "Prompt",
      "模板",
      "AI 提示词"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "PromptPerfect 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "PromptPerfect 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 13749,
      likes: 1489,
      saves: 599,
      clicks: 3287,
      comments: 5
    },
    seoTitle: "PromptPerfect 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "PromptPerfect 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-flowgpt",
    name: "FlowGPT",
    slug: "flowgpt",
    summary: "适合查找提示词模板和学习别人如何组织任务，适合新手快速找到可改造的 Prompt。",
    description: "适合查找提示词模板和学习别人如何组织任务，适合新手快速找到可改造的 Prompt。",
    longDescription: "适合查找提示词模板和学习别人如何组织任务，适合新手快速找到可改造的 Prompt。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 提示词",
    categorySlug: "ai-prompt",
    categorySlugs: [
      "ai-prompt",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://flowgpt.com/favicon.ico",
    officialUrl: "https://flowgpt.com",
    chineseSupport: "良好",
    audience: [
      "AI 新手",
      "提示词玩家",
      "内容创作者"
    ],
    audiences: [
      "AI 新手",
      "提示词玩家",
      "内容创作者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 13886,
    recommendedScore: 84,
    editorScore: 84,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "提示词社区",
      "模板",
      "分享"
    ],
    conclusion: "FlowGPT 更适合先从提示词社区任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "提示词社区",
      "模板",
      "分享",
      "AI 提示词"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "FlowGPT 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "FlowGPT 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.6,
      costPerformance: 3.6
    },
    stats: {
      views: 13886,
      likes: 1506,
      saves: 606,
      clicks: 3318,
      comments: 6
    },
    seoTitle: "FlowGPT 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "FlowGPT 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-zapier-ai",
    name: "Zapier AI",
    slug: "zapier-ai",
    summary: "适合把常用 SaaS 工具串起来，用 AI 触发邮件、表格、CRM 和通知流程。",
    description: "适合把常用 SaaS 工具串起来，用 AI 触发邮件、表格、CRM 和通知流程。",
    longDescription: "适合把常用 SaaS 工具串起来，用 AI 触发邮件、表格、CRM 和通知流程。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 自动化",
    categorySlug: "ai-automation",
    categorySlugs: [
      "ai-automation",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/zapier-ai.ico",
    officialUrl: "https://zapier.com/ai",
    chineseSupport: "良好",
    audience: [
      "运营",
      "销售",
      "产品经理"
    ],
    audiences: [
      "运营",
      "销售",
      "产品经理"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 14023,
    recommendedScore: 91,
    editorScore: 91,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "自动化",
      "应用连接",
      "工作流"
    ],
    conclusion: "Zapier AI 更适合先从自动化任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "自动化",
      "应用连接",
      "工作流",
      "AI 自动化"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Zapier AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Zapier AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6,
      automation: 4.9
    },
    stats: {
      views: 14023,
      likes: 1523,
      saves: 613,
      clicks: 3349,
      comments: 7
    },
    seoTitle: "Zapier AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Zapier AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-make-ai",
    name: "Make AI",
    slug: "make-ai",
    summary: "适合可视化搭建自动化流程，把表单、文档、通知和 AI 处理连接起来。",
    description: "适合可视化搭建自动化流程，把表单、文档、通知和 AI 处理连接起来。",
    longDescription: "适合可视化搭建自动化流程，把表单、文档、通知和 AI 处理连接起来。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 自动化",
    categorySlug: "ai-automation",
    categorySlugs: [
      "ai-automation",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.make.com/favicon.ico",
    officialUrl: "https://www.make.com/en/ai-automation",
    chineseSupport: "良好",
    audience: [
      "运营",
      "自动化玩家",
      "创业团队"
    ],
    audiences: [
      "运营",
      "自动化玩家",
      "创业团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 14160,
    recommendedScore: 73,
    editorScore: 73,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "流程自动化",
      "可视化编排",
      "集成"
    ],
    conclusion: "Make AI 更适合先从流程自动化任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "流程自动化",
      "可视化编排",
      "集成",
      "AI 自动化"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Make AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Make AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6,
      automation: 4.3
    },
    stats: {
      views: 14160,
      likes: 1540,
      saves: 620,
      clicks: 3380,
      comments: 8
    },
    seoTitle: "Make AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Make AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-dify",
    name: "Dify",
    slug: "dify",
    summary: "适合搭建 AI 应用、知识库问答和工作流 Agent，适合希望低代码接入大模型的团队。",
    description: "适合搭建 AI 应用、知识库问答和工作流 Agent，适合希望低代码接入大模型的团队。",
    longDescription: "适合搭建 AI 应用、知识库问答和工作流 Agent，适合希望低代码接入大模型的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI Agent",
    categorySlug: "ai-agent",
    categorySlugs: [
      "ai-agent",
      "ai-automation",
      "ai-code"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/dify.png",
    officialUrl: "https://dify.ai",
    chineseSupport: "优秀",
    audience: [
      "开发者",
      "企业团队",
      "产品经理"
    ],
    audiences: [
      "开发者",
      "企业团队",
      "产品经理"
    ],
    platform: "Web / 自部署",
    platforms: [
      "Web",
      "自部署"
    ],
    popularity: 14297,
    recommendedScore: 80,
    editorScore: 80,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "AI 应用",
      "Agent",
      "RAG"
    ],
    conclusion: "Dify 更适合先从AI 应用任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "AI 应用",
      "Agent",
      "RAG",
      "AI Agent"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Dify 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Dify 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 14297,
      likes: 1557,
      saves: 627,
      clicks: 3411,
      comments: 0
    },
    seoTitle: "Dify 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Dify 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-coze",
    name: "Coze",
    slug: "coze",
    summary: "适合创建智能体、Bot 和自动化流程，适合中文用户做客服、内容和知识库应用。",
    description: "适合创建智能体、Bot 和自动化流程，适合中文用户做客服、内容和知识库应用。",
    longDescription: "适合创建智能体、Bot 和自动化流程，适合中文用户做客服、内容和知识库应用。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI Agent",
    categorySlug: "ai-agent",
    categorySlugs: [
      "ai-agent",
      "ai-automation",
      "ai-chat"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/coze.png",
    officialUrl: "https://www.coze.com",
    chineseSupport: "优秀",
    audience: [
      "产品经理",
      "运营",
      "开发者"
    ],
    audiences: [
      "产品经理",
      "运营",
      "开发者"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 14434,
    recommendedScore: 87,
    editorScore: 87,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "智能体",
      "Bot",
      "工作流"
    ],
    conclusion: "Coze 更适合先从智能体任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "智能体",
      "Bot",
      "工作流",
      "AI Agent"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Coze 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Coze 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 4.8,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 14434,
      likes: 1574,
      saves: 634,
      clicks: 3442,
      comments: 1
    },
    seoTitle: "Coze 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Coze 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-langchain",
    name: "LangChain",
    slug: "langchain",
    summary: "适合开发者构建 RAG、Agent 和多工具调用应用，是 AI 应用工程化的重要框架。",
    description: "适合开发者构建 RAG、Agent 和多工具调用应用，是 AI 应用工程化的重要框架。",
    longDescription: "适合开发者构建 RAG、Agent 和多工具调用应用，是 AI 应用工程化的重要框架。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI Agent",
    categorySlug: "ai-agent",
    categorySlugs: [
      "ai-agent",
      "ai-code",
      "ai-automation"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "https://www.langchain.com/favicon.ico",
    officialUrl: "https://www.langchain.com",
    chineseSupport: "一般",
    audience: [
      "开发者",
      "AI 工程师"
    ],
    audiences: [
      "开发者",
      "AI 工程师"
    ],
    platform: "Python / JavaScript",
    platforms: [
      "Python",
      "JavaScript"
    ],
    popularity: 14571,
    recommendedScore: 94,
    editorScore: 94,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "Agent",
      "RAG",
      "开发框架"
    ],
    conclusion: "LangChain 更适合先从Agent任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "Agent",
      "RAG",
      "开发框架",
      "AI Agent"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "LangChain 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "LangChain 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 14571,
      likes: 1591,
      saves: 641,
      clicks: 3473,
      comments: 2
    },
    seoTitle: "LangChain 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "LangChain 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-autogen",
    name: "AutoGen",
    slug: "autogen",
    summary: "适合研究和开发多智能体协作流程，适合实验复杂自动化任务。",
    description: "适合研究和开发多智能体协作流程，适合实验复杂自动化任务。",
    longDescription: "适合研究和开发多智能体协作流程，适合实验复杂自动化任务。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI Agent",
    categorySlug: "ai-agent",
    categorySlugs: [
      "ai-agent",
      "ai-code",
      "ai-automation"
    ],
    pricing: "free",
    freeStatus: "免费",
    icon: "https://microsoft.github.io/autogen/stable/_static/favicon.ico",
    officialUrl: "https://microsoft.github.io/autogen",
    chineseSupport: "一般",
    audience: [
      "开发者",
      "AI 研究员"
    ],
    audiences: [
      "开发者",
      "AI 研究员"
    ],
    platform: "Python",
    platforms: [
      "Python"
    ],
    popularity: 14708,
    recommendedScore: 76,
    editorScore: 76,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "多智能体",
      "自动化",
      "开源"
    ],
    conclusion: "AutoGen 更适合先从多智能体任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "多智能体",
      "自动化",
      "开源",
      "AI Agent"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "AutoGen 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "AutoGen 可以免费用吗？",
        answer: "当前标注为“免费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 4.7,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 14708,
      likes: 1608,
      saves: 648,
      clicks: 3504,
      comments: 3
    },
    seoTitle: "AutoGen 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "AutoGen 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-n8n-ai",
    name: "n8n AI",
    slug: "n8n-ai",
    summary: "适合把 AI 节点接入自动化工作流，适合自部署和对数据控制要求较高的团队。",
    description: "适合把 AI 节点接入自动化工作流，适合自部署和对数据控制要求较高的团队。",
    longDescription: "适合把 AI 节点接入自动化工作流，适合自部署和对数据控制要求较高的团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 自动化",
    categorySlug: "ai-automation",
    categorySlugs: [
      "ai-automation",
      "ai-agent"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/n8n-ai.ico",
    officialUrl: "https://n8n.io",
    chineseSupport: "良好",
    audience: [
      "运营",
      "开发者",
      "自动化玩家"
    ],
    audiences: [
      "运营",
      "开发者",
      "自动化玩家"
    ],
    platform: "Web / 自部署",
    platforms: [
      "Web",
      "自部署"
    ],
    popularity: 14845,
    recommendedScore: 83,
    editorScore: 83,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "开源自动化",
      "工作流",
      "AI 节点"
    ],
    conclusion: "n8n AI 更适合先从开源自动化任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "开源自动化",
      "工作流",
      "AI 节点",
      "AI 自动化"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "n8n AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "n8n AI 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6,
      automation: 4.3
    },
    stats: {
      views: 14845,
      likes: 1625,
      saves: 655,
      clicks: 3535,
      comments: 4
    },
    seoTitle: "n8n AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "n8n AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-grammarly",
    name: "Grammarly",
    slug: "grammarly",
    summary: "适合英文邮件、简历、论文和商务写作润色，适合需要稳定英文表达的中文用户。",
    description: "适合英文邮件、简历、论文和商务写作润色，适合需要稳定英文表达的中文用户。",
    longDescription: "适合英文邮件、简历、论文和商务写作润色，适合需要稳定英文表达的中文用户。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 写作",
    categorySlug: "ai-writing",
    categorySlugs: [
      "ai-writing",
      "ai-translation",
      "ai-browser-extension"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.grammarly.com/favicon.ico",
    officialUrl: "https://www.grammarly.com",
    chineseSupport: "一般",
    audience: [
      "学生",
      "职场用户",
      "英文写作者"
    ],
    audiences: [
      "学生",
      "职场用户",
      "英文写作者"
    ],
    platform: "Web / App / 浏览器插件",
    platforms: [
      "Web",
      "App",
      "浏览器插件"
    ],
    popularity: 14982,
    recommendedScore: 90,
    editorScore: 90,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "英文润色",
      "语法",
      "邮件"
    ],
    conclusion: "Grammarly 更适合先从英文润色任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "英文润色",
      "语法",
      "邮件",
      "AI 写作"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Grammarly 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Grammarly 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.8,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.3,
      costPerformance: 3.6
    },
    stats: {
      views: 14982,
      likes: 1642,
      saves: 662,
      clicks: 3566,
      comments: 5
    },
    seoTitle: "Grammarly 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Grammarly 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-jasper",
    name: "Jasper",
    slug: "jasper",
    summary: "适合营销团队批量生成广告、博客、邮件和社媒内容，强调品牌语气和内容流程。",
    description: "适合营销团队批量生成广告、博客、邮件和社媒内容，强调品牌语气和内容流程。",
    longDescription: "适合营销团队批量生成广告、博客、邮件和社媒内容，强调品牌语气和内容流程。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 写作",
    categorySlug: "ai-writing",
    categorySlugs: [
      "ai-writing",
      "ai-social-media",
      "ai-ecommerce"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://www.jasper.ai/favicon.ico",
    officialUrl: "https://www.jasper.ai",
    chineseSupport: "一般",
    audience: [
      "营销团队",
      "品牌团队",
      "内容运营"
    ],
    audiences: [
      "营销团队",
      "品牌团队",
      "内容运营"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15119,
    recommendedScore: 72,
    editorScore: 72,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "营销文案",
      "品牌语气",
      "内容生产"
    ],
    conclusion: "Jasper 更适合先从营销文案任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "营销文案",
      "品牌语气",
      "内容生产",
      "AI 写作"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Jasper 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Jasper 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 15119,
      likes: 1659,
      saves: 669,
      clicks: 3597,
      comments: 6
    },
    seoTitle: "Jasper 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Jasper 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-copy-ai",
    name: "Copy.ai",
    slug: "copy-ai",
    summary: "适合销售邮件、商品文案、广告标题和运营内容生产，适合营销团队提高草稿速度。",
    description: "适合销售邮件、商品文案、广告标题和运营内容生产，适合营销团队提高草稿速度。",
    longDescription: "适合销售邮件、商品文案、广告标题和运营内容生产，适合营销团队提高草稿速度。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 写作",
    categorySlug: "ai-writing",
    categorySlugs: [
      "ai-writing",
      "ai-ecommerce",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/copy-ai.svg",
    officialUrl: "https://www.copy.ai",
    chineseSupport: "一般",
    audience: [
      "运营",
      "销售",
      "电商团队"
    ],
    audiences: [
      "运营",
      "销售",
      "电商团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15256,
    recommendedScore: 79,
    editorScore: 79,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "营销文案",
      "销售邮件",
      "电商内容"
    ],
    conclusion: "Copy.ai 更适合先从营销文案任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "营销文案",
      "销售邮件",
      "电商内容",
      "AI 写作"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Copy.ai 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Copy.ai 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 15256,
      likes: 1676,
      saves: 676,
      clicks: 3628,
      comments: 7
    },
    seoTitle: "Copy.ai 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Copy.ai 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-jobscan",
    name: "Jobscan",
    slug: "jobscan",
    summary: "适合根据岗位 JD 优化英文简历和关键词匹配，适合投递海外岗位或外企岗位。",
    description: "适合根据岗位 JD 优化英文简历和关键词匹配，适合投递海外岗位或外企岗位。",
    longDescription: "适合根据岗位 JD 优化英文简历和关键词匹配，适合投递海外岗位或外企岗位。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 简历求职",
    categorySlug: "ai-resume",
    categorySlugs: [
      "ai-resume"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/jobscan.svg",
    officialUrl: "https://www.jobscan.co",
    chineseSupport: "一般",
    audience: [
      "求职者",
      "学生",
      "转行用户"
    ],
    audiences: [
      "求职者",
      "学生",
      "转行用户"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15393,
    recommendedScore: 86,
    editorScore: 86,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "简历匹配",
      "ATS",
      "求职优化"
    ],
    conclusion: "Jobscan 更适合先从简历匹配任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "简历匹配",
      "ATS",
      "求职优化",
      "AI 简历求职"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Jobscan 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Jobscan 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 15393,
      likes: 1693,
      saves: 683,
      clicks: 3659,
      comments: 8
    },
    seoTitle: "Jobscan 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Jobscan 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-kickresume",
    name: "Kickresume",
    slug: "kickresume",
    summary: "适合生成简历、求职信和个人介绍，适合需要快速整理求职材料的用户。",
    description: "适合生成简历、求职信和个人介绍，适合需要快速整理求职材料的用户。",
    longDescription: "适合生成简历、求职信和个人介绍，适合需要快速整理求职材料的用户。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 简历求职",
    categorySlug: "ai-resume",
    categorySlugs: [
      "ai-resume",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/kickresume.png",
    officialUrl: "https://www.kickresume.com",
    chineseSupport: "良好",
    audience: [
      "求职者",
      "学生",
      "职场用户"
    ],
    audiences: [
      "求职者",
      "学生",
      "职场用户"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15530,
    recommendedScore: 93,
    editorScore: 93,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "简历生成",
      "求职信",
      "模板"
    ],
    conclusion: "Kickresume 更适合先从简历生成任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "简历生成",
      "求职信",
      "模板",
      "AI 简历求职"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Kickresume 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "Kickresume 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.6,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 15530,
      likes: 1710,
      saves: 690,
      clicks: 3690,
      comments: 0
    },
    seoTitle: "Kickresume 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Kickresume 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-shopify-magic",
    name: "Shopify Magic",
    slug: "shopify-magic",
    summary: "适合 Shopify 卖家生成商品描述、邮件和店铺内容，适合独立站运营。",
    description: "适合 Shopify 卖家生成商品描述、邮件和店铺内容，适合独立站运营。",
    longDescription: "适合 Shopify 卖家生成商品描述、邮件和店铺内容，适合独立站运营。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 电商运营",
    categorySlug: "ai-ecommerce",
    categorySlugs: [
      "ai-ecommerce",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/shopify-magic.png",
    officialUrl: "https://www.shopify.com/magic",
    chineseSupport: "良好",
    audience: [
      "电商运营",
      "独立站卖家"
    ],
    audiences: [
      "电商运营",
      "独立站卖家"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15667,
    recommendedScore: 75,
    editorScore: 75,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "商品文案",
      "电商运营",
      "Shopify"
    ],
    conclusion: "Shopify Magic 更适合先从商品文案任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "商品文案",
      "电商运营",
      "Shopify",
      "AI 电商运营"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Shopify Magic 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Shopify Magic 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.8,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 15667,
      likes: 1727,
      saves: 697,
      clicks: 3721,
      comments: 1
    },
    seoTitle: "Shopify Magic 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Shopify Magic 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-photoroom",
    name: "PhotoRoom",
    slug: "photoroom",
    summary: "适合电商商品图制作、背景替换和批量视觉优化，适合小商家快速出图。",
    description: "适合电商商品图制作、背景替换和批量视觉优化，适合小商家快速出图。",
    longDescription: "适合电商商品图制作、背景替换和批量视觉优化，适合小商家快速出图。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 电商运营",
    categorySlug: "ai-ecommerce",
    categorySlugs: [
      "ai-ecommerce",
      "ai-image",
      "ai-design"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.photoroom.com/favicon.ico",
    officialUrl: "https://www.photoroom.com",
    chineseSupport: "良好",
    audience: [
      "电商运营",
      "设计师",
      "小商家"
    ],
    audiences: [
      "电商运营",
      "设计师",
      "小商家"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 15804,
    recommendedScore: 82,
    editorScore: 82,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "商品图",
      "背景替换",
      "电商视觉"
    ],
    conclusion: "PhotoRoom 更适合先从商品图任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "商品图",
      "背景替换",
      "电商视觉",
      "AI 电商运营"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "PhotoRoom 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "PhotoRoom 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 4.7,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 15804,
      likes: 1744,
      saves: 704,
      clicks: 3752,
      comments: 2
    },
    seoTitle: "PhotoRoom 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "PhotoRoom 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-surfer-ai",
    name: "Surfer AI",
    slug: "surfer-ai",
    summary: "适合 SEO 文章生成和内容优化，适合需要围绕关键词做搜索流量的内容团队。",
    description: "适合 SEO 文章生成和内容优化，适合需要围绕关键词做搜索流量的内容团队。",
    longDescription: "适合 SEO 文章生成和内容优化，适合需要围绕关键词做搜索流量的内容团队。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 写作",
    categorySlug: "ai-writing",
    categorySlugs: [
      "ai-writing",
      "ai-social-media"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "/brand-icons/surfer-ai.png",
    officialUrl: "https://surferseo.com/ai",
    chineseSupport: "一般",
    audience: [
      "SEO 编辑",
      "内容运营",
      "营销团队"
    ],
    audiences: [
      "SEO 编辑",
      "内容运营",
      "营销团队"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 15941,
    recommendedScore: 89,
    editorScore: 89,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "SEO 写作",
      "内容优化",
      "关键词"
    ],
    conclusion: "Surfer AI 更适合先从SEO 写作任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "SEO 写作",
      "内容优化",
      "关键词",
      "AI 写作"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Surfer AI 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Surfer AI 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 4.7,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 15941,
      likes: 1761,
      saves: 711,
      clicks: 3783,
      comments: 3
    },
    seoTitle: "Surfer AI 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Surfer AI 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-buffer-ai",
    name: "Buffer AI Assistant",
    slug: "buffer-ai",
    summary: "适合社媒文案、标题改写和内容排期，适合多平台自媒体运营。",
    description: "适合社媒文案、标题改写和内容排期，适合多平台自媒体运营。",
    longDescription: "适合社媒文案、标题改写和内容排期，适合多平台自媒体运营。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 自媒体内容",
    categorySlug: "ai-social-media",
    categorySlugs: [
      "ai-social-media",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/buffer-ai.png",
    officialUrl: "https://buffer.com/ai-assistant",
    chineseSupport: "良好",
    audience: [
      "自媒体",
      "运营",
      "品牌团队"
    ],
    audiences: [
      "自媒体",
      "运营",
      "品牌团队"
    ],
    platform: "Web / App",
    platforms: [
      "Web",
      "App"
    ],
    popularity: 16078,
    recommendedScore: 71,
    editorScore: 71,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "社媒文案",
      "排期",
      "标题"
    ],
    conclusion: "Buffer AI Assistant 更适合先从社媒文案任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "社媒文案",
      "排期",
      "标题",
      "AI 自媒体内容"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Buffer AI Assistant 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Buffer AI Assistant 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.5,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 16078,
      likes: 1778,
      saves: 718,
      clicks: 3814,
      comments: 4
    },
    seoTitle: "Buffer AI Assistant 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Buffer AI Assistant 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-opusclip",
    name: "OpusClip",
    slug: "opusclip",
    summary: "适合把长视频、播客或直播切成短视频片段，适合自媒体内容复用。",
    description: "适合把长视频、播客或直播切成短视频片段，适合自媒体内容复用。",
    longDescription: "适合把长视频、播客或直播切成短视频片段，适合自媒体内容复用。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.opus.pro/favicon.ico",
    officialUrl: "https://www.opus.pro",
    chineseSupport: "良好",
    audience: [
      "短视频创作者",
      "播客作者",
      "自媒体"
    ],
    audiences: [
      "短视频创作者",
      "播客作者",
      "自媒体"
    ],
    platform: "Web",
    platforms: [
      "Web"
    ],
    popularity: 16215,
    recommendedScore: 78,
    editorScore: 78,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "长视频切片",
      "短视频",
      "字幕"
    ],
    conclusion: "OpusClip 更适合先从长视频切片任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "长视频切片",
      "短视频",
      "字幕",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "OpusClip 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "OpusClip 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.9,
      costPerformance: 3.6
    },
    stats: {
      views: 16215,
      likes: 1795,
      saves: 725,
      clicks: 3845,
      comments: 5
    },
    seoTitle: "OpusClip 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "OpusClip 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-descript",
    name: "Descript",
    slug: "descript",
    summary: "适合用文字编辑音视频、生成字幕和修复音频，适合播客和课程内容制作。",
    description: "适合用文字编辑音视频、生成字幕和修复音频，适合播客和课程内容制作。",
    longDescription: "适合用文字编辑音视频、生成字幕和修复音频，适合播客和课程内容制作。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 视频",
    categorySlug: "ai-video",
    categorySlugs: [
      "ai-video",
      "ai-audio",
      "ai-social-media"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "https://www.descript.com/favicon.ico",
    officialUrl: "https://www.descript.com",
    chineseSupport: "一般",
    audience: [
      "播客作者",
      "视频创作者",
      "课程制作者"
    ],
    audiences: [
      "播客作者",
      "视频创作者",
      "课程制作者"
    ],
    platform: "桌面客户端 / Web",
    platforms: [
      "桌面客户端",
      "Web"
    ],
    popularity: 16352,
    recommendedScore: 85,
    editorScore: 85,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "剪辑",
      "转写",
      "音频修复"
    ],
    conclusion: "Descript 更适合先从剪辑任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "剪辑",
      "转写",
      "音频修复",
      "AI 视频"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Descript 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Descript 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 4.6,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 16352,
      likes: 1812,
      saves: 732,
      clicks: 3876,
      comments: 6
    },
    seoTitle: "Descript 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Descript 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-deepl",
    name: "DeepL",
    slug: "deepl",
    summary: "适合中英和多语言翻译、商务邮件润色和跨语言资料理解，译文自然度较高。",
    description: "适合中英和多语言翻译、商务邮件润色和跨语言资料理解，译文自然度较高。",
    longDescription: "适合中英和多语言翻译、商务邮件润色和跨语言资料理解，译文自然度较高。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 翻译",
    categorySlug: "ai-translation",
    categorySlugs: [
      "ai-translation",
      "ai-writing"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/deepl.png",
    officialUrl: "https://www.deepl.com",
    chineseSupport: "良好",
    audience: [
      "翻译从业者",
      "学生",
      "外贸运营"
    ],
    audiences: [
      "翻译从业者",
      "学生",
      "外贸运营"
    ],
    platform: "Web / App / API",
    platforms: [
      "Web",
      "App",
      "API"
    ],
    popularity: 16489,
    recommendedScore: 92,
    editorScore: 92,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "翻译",
      "润色",
      "多语言"
    ],
    conclusion: "DeepL 更适合先从翻译任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "上手门槛较低，新手可以直接从模板任务开始。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "翻译",
      "润色",
      "多语言",
      "AI 翻译"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "DeepL 适合新手吗？",
        answer: "适合，新手可以从模板和教程开始。"
      },
      {
        question: "DeepL 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.9,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 4.5,
      costPerformance: 3.6
    },
    stats: {
      views: 16489,
      likes: 1829,
      saves: 739,
      clicks: 3907,
      comments: 7
    },
    seoTitle: "DeepL 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "DeepL 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-quillbot",
    name: "QuillBot",
    slug: "quillbot",
    summary: "适合英文改写、润色和摘要，适合论文写作和英文学习场景。",
    description: "适合英文改写、润色和摘要，适合论文写作和英文学习场景。",
    longDescription: "适合英文改写、润色和摘要，适合论文写作和英文学习场景。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 写作",
    categorySlug: "ai-writing",
    categorySlugs: [
      "ai-writing",
      "ai-translation"
    ],
    pricing: "freemium",
    freeStatus: "有免费额度",
    icon: "/brand-icons/quillbot.png",
    officialUrl: "https://quillbot.com",
    chineseSupport: "一般",
    audience: [
      "学生",
      "英文写作者",
      "论文党"
    ],
    audiences: [
      "学生",
      "英文写作者",
      "论文党"
    ],
    platform: "Web / 浏览器插件",
    platforms: [
      "Web",
      "浏览器插件"
    ],
    popularity: 16626,
    recommendedScore: 74,
    editorScore: 74,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "改写",
      "润色",
      "语法"
    ],
    conclusion: "QuillBot 更适合先从改写任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "改写",
      "润色",
      "语法",
      "AI 写作"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "QuillBot 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "QuillBot 可以免费用吗？",
        answer: "当前标注为“有免费额度”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 4.3,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 2.2,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 16626,
      likes: 1846,
      saves: 746,
      clicks: 3938,
      comments: 8
    },
    seoTitle: "QuillBot 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "QuillBot 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  },
  {
    id: "tool-tableau-gpt",
    name: "Tableau GPT",
    slug: "tableau-gpt",
    summary: "适合 BI 场景下用自然语言理解数据、生成分析结论和解释指标变化。",
    description: "适合 BI 场景下用自然语言理解数据、生成分析结论和解释指标变化。",
    longDescription: "适合 BI 场景下用自然语言理解数据、生成分析结论和解释指标变化。 对中文用户来说，建议先用一个真实任务验证输出质量，再根据价格、中文支持、平台形态和数据安全要求决定是否纳入长期工作流。",
    category: "AI 数据分析",
    categorySlug: "ai-data",
    categorySlugs: [
      "ai-data",
      "ai-office"
    ],
    pricing: "paid",
    freeStatus: "付费",
    icon: "https://www.tableau.com/favicon.ico",
    officialUrl: "https://www.tableau.com/products/tableau-gpt",
    chineseSupport: "一般",
    audience: [
      "数据分析师",
      "运营",
      "管理者"
    ],
    audiences: [
      "数据分析师",
      "运营",
      "管理者"
    ],
    platform: "Web / 企业服务",
    platforms: [
      "Web",
      "企业服务"
    ],
    popularity: 16763,
    recommendedScore: 81,
    editorScore: 81,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    hasTutorial: false,
    isFeatured: false,
    isSponsored: false,
    sponsorLabel: "",
    tags: [
      "数据分析",
      "BI",
      "自然语言问数"
    ],
    conclusion: "Tableau GPT 更适合先从数据分析任务切入，确认输出稳定后再扩展到团队流程。",
    features: [
      "任务拆解",
      "内容生成",
      "资料整理",
      "结果改写",
      "辅助决策"
    ],
    threshold: "需要先理解工具的基本工作流，再处理正式任务。",
    pros: [
      "适合和教程、提示词搭配使用",
      "能提升重复任务效率",
      "适合作为第一版草稿工具",
      "可以沉淀到固定工作流"
    ],
    cons: [
      "正式发布前仍需要人工核对",
      "价格和免费额度可能变化",
      "复杂任务需要多轮调整"
    ],
    scenarios: [
      "数据分析",
      "BI",
      "自然语言问数",
      "AI 数据分析"
    ],
    notFor: [
      "不能人工审核的正式交付",
      "要求事实百分百准确且无来源核对的任务",
      "涉及敏感数据但没有授权的场景"
    ],
    alternatives: [],
    isTested: false,
    faq: [
      {
        question: "Tableau GPT 适合新手吗？",
        answer: "可以使用，但建议先看教程理解基础工作流。"
      },
      {
        question: "Tableau GPT 可以免费用吗？",
        answer: "当前标注为“付费”，具体额度和价格以官网为准。"
      }
    ],
    relatedTutorials: [],
    scores: {
      chinese: 3.6,
      writing: 2.4,
      coding: 1.5,
      image: 1.3,
      video: 1.2,
      research: 2,
      office: 4.6,
      search: 1.8,
      easeOfUse: 3.8,
      costPerformance: 3.6
    },
    stats: {
      views: 16763,
      likes: 1863,
      saves: 753,
      clicks: 3969,
      comments: 0
    },
    seoTitle: "Tableau GPT 怎么样：功能、免费情况、中文支持和替代工具",
    seoDescription: "Tableau GPT 工具详情，包含适合人群、平台、优缺点、使用场景、免费情况和相关教程。",
    status: "published",
    source: "editor"
  }
]

export default mockTools
