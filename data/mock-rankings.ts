export interface MockRanking { [key: string]: any }

export const mockRankings: MockRanking[] = [
  {
    id: "ranking-ai-text-model-arena",
    title: "AI 文本模型榜",
    slug: "ai-text-model-arena",
    summary: "AI 文本模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 文本模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-writing",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "text",
    toolSlugs: [
      "chatgpt",
      "claude",
      "deepseek",
      "kimi",
      "doubao",
      "tongyi",
      "gemini",
      "wenxin"
    ],
    tools: [
      {
        slug: "chatgpt",
        rank: 1,
        reason: "ChatGPT 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "claude",
        rank: 2,
        reason: "Claude 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "deepseek",
        rank: 3,
        reason: "DeepSeek 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 4,
        reason: "Kimi 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 5,
        reason: "豆包 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "tongyi",
        rank: 6,
        reason: "通义千问 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "gemini",
        rank: 7,
        reason: "Gemini 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "wenxin",
        rank: 8,
        reason: "文心一言 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按中文写作、长文表达、推理稳定性和易用性综合排序。",
    rules: "按中文写作、长文表达、推理稳定性和易用性综合排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "chatgpt-guide",
      "deepseek-beginner",
      "kimi-long-doc-summary"
    ],
    relatedComparisons: [
      "chatgpt-vs-claude-vs-gemini",
      "deepseek-vs-doubao-vs-tongyi"
    ],
    seoTitle: "AI 文本模型榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 文本模型榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-code-model-arena",
    title: "AI 编程模型榜",
    slug: "ai-code-model-arena",
    summary: "AI 编程模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 编程模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-code",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "code",
    toolSlugs: [
      "cursor",
      "deepseek",
      "github-copilot",
      "claude",
      "chatgpt",
      "windsurf",
      "codeium",
      "phind"
    ],
    tools: [
      {
        slug: "cursor",
        rank: 1,
        reason: "Cursor 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "deepseek",
        rank: 2,
        reason: "DeepSeek 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "github-copilot",
        rank: 3,
        reason: "GitHub Copilot 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "claude",
        rank: 4,
        reason: "Claude 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "chatgpt",
        rank: 5,
        reason: "ChatGPT 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "windsurf",
        rank: 6,
        reason: "Windsurf 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "codeium",
        rank: 7,
        reason: "Codeium 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "phind",
        rank: 8,
        reason: "Phind 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按代码理解、项目改动、调试能力和开发者上手成本排序。",
    rules: "按代码理解、项目改动、调试能力和开发者上手成本排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "deepseek-beginner",
      "kimi-long-doc-summary",
      "doubao-writing-guide"
    ],
    relatedComparisons: [
      "deepseek-vs-doubao-vs-tongyi",
      "kimi-vs-tongyi-vs-wenxin"
    ],
    seoTitle: "AI 编程模型榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 编程模型榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-search-model-arena",
    title: "AI 搜索模型榜",
    slug: "ai-search-model-arena",
    summary: "AI 搜索模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 搜索模型榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-search",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "search",
    toolSlugs: [
      "perplexity",
      "metaso",
      "kimi",
      "felo",
      "you-com",
      "phind",
      "exa",
      "consensus"
    ],
    tools: [
      {
        slug: "perplexity",
        rank: 1,
        reason: "Perplexity 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "metaso",
        rank: 2,
        reason: "秘塔 AI 搜索 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 3,
        reason: "Kimi 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "felo",
        rank: 4,
        reason: "Felo 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "you-com",
        rank: 5,
        reason: "You.com 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "phind",
        rank: 6,
        reason: "Phind 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "exa",
        rank: 7,
        reason: "Exa 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "consensus",
        rank: 8,
        reason: "Consensus 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按来源质量、资料覆盖、中文检索和结论可验证性排序。",
    rules: "按来源质量、资料覆盖、中文检索和结论可验证性排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "kimi-long-doc-summary",
      "doubao-writing-guide",
      "tongyi-office-guide"
    ],
    relatedComparisons: [
      "kimi-vs-tongyi-vs-wenxin",
      "grok-vs-chatgpt-vs-claude"
    ],
    seoTitle: "AI 搜索模型榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 搜索模型榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-image-model-arena",
    title: "AI 图像生成榜",
    slug: "ai-image-model-arena",
    summary: "AI 图像生成榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 图像生成榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-image",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "image",
    toolSlugs: [
      "midjourney",
      "stable-diffusion",
      "jimeng",
      "dall-e",
      "adobe-firefly",
      "leonardo-ai",
      "ideogram",
      "canva-ai"
    ],
    tools: [
      {
        slug: "midjourney",
        rank: 1,
        reason: "Midjourney 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "stable-diffusion",
        rank: 2,
        reason: "Stable Diffusion 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "jimeng",
        rank: 3,
        reason: "即梦 AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "dall-e",
        rank: 4,
        reason: "DALL·E 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "adobe-firefly",
        rank: 5,
        reason: "Adobe Firefly 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "leonardo-ai",
        rank: 6,
        reason: "Leonardo AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "ideogram",
        rank: 7,
        reason: "Ideogram 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "canva-ai",
        rank: 8,
        reason: "Canva AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按画面质量、可控性、中文理解和商用友好度排序。",
    rules: "按画面质量、可控性、中文理解和商用友好度排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "doubao-writing-guide",
      "tongyi-office-guide",
      "claude-long-writing"
    ],
    relatedComparisons: [
      "grok-vs-chatgpt-vs-claude",
      "cursor-vs-github-copilot-vs-codeium"
    ],
    seoTitle: "AI 图像生成榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 图像生成榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-video-model-arena",
    title: "AI 视频生成榜",
    slug: "ai-video-model-arena",
    summary: "AI 视频生成榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 视频生成榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-video",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "video",
    toolSlugs: [
      "runway",
      "kling",
      "pika",
      "luma-dream-machine",
      "sora",
      "veo",
      "heygen",
      "capcut-ai"
    ],
    tools: [
      {
        slug: "runway",
        rank: 1,
        reason: "Runway 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kling",
        rank: 2,
        reason: "可灵 AI 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "pika",
        rank: 3,
        reason: "Pika 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "luma-dream-machine",
        rank: 4,
        reason: "Luma Dream Machine 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "sora",
        rank: 5,
        reason: "Sora 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "veo",
        rank: 6,
        reason: "Veo 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "heygen",
        rank: 7,
        reason: "HeyGen 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "capcut-ai",
        rank: 8,
        reason: "CapCut AI 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按镜头质量、生成稳定性、中文体验和短视频适配度排序。",
    rules: "按镜头质量、生成稳定性、中文体验和短视频适配度排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "tongyi-office-guide",
      "claude-long-writing",
      "cursor-beginner"
    ],
    relatedComparisons: [
      "cursor-vs-github-copilot-vs-codeium",
      "windsurf-vs-cursor-vs-trae"
    ],
    seoTitle: "AI 视频生成榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 视频生成榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-office-model-arena",
    title: "AI 办公效率榜",
    slug: "ai-office-model-arena",
    summary: "AI 办公效率榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 办公效率榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-office",
    rankingType: "model-arena",
    type: "model-arena",
    arenaType: "office",
    toolSlugs: [
      "microsoft-copilot",
      "wps-ai",
      "notion-ai",
      "tongyi",
      "gamma",
      "feishu-minutes",
      "otter-ai",
      "granola"
    ],
    tools: [
      {
        slug: "microsoft-copilot",
        rank: 1,
        reason: "Microsoft Copilot 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "wps-ai",
        rank: 2,
        reason: "WPS AI 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "notion-ai",
        rank: 3,
        reason: "Notion AI 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "tongyi",
        rank: 4,
        reason: "通义千问 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "gamma",
        rank: 5,
        reason: "Gamma 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "feishu-minutes",
        rank: 6,
        reason: "飞书妙记 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "otter-ai",
        rank: 7,
        reason: "Otter.ai 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "granola",
        rank: 8,
        reason: "Granola 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按文档、会议、PPT、知识库和团队协作效率排序。",
    rules: "按文档、会议、PPT、知识库和团队协作效率排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "claude-long-writing",
      "cursor-beginner",
      "github-copilot-guide"
    ],
    relatedComparisons: [
      "windsurf-vs-cursor-vs-trae",
      "v0-vs-bolt-new-vs-lovable"
    ],
    seoTitle: "AI 办公效率榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 办公效率榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-free-ai-tools",
    title: "免费 AI 工具榜",
    slug: "free-ai-tools",
    summary: "免费 AI 工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "免费 AI 工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-chat",
    rankingType: "free",
    type: "free",
    arenaType: "office",
    toolSlugs: [
      "deepseek",
      "doubao",
      "kimi",
      "metaso",
      "semantic-scholar",
      "research-rabbit",
      "trae",
      "capcut-ai"
    ],
    tools: [
      {
        slug: "deepseek",
        rank: 1,
        reason: "DeepSeek 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 2,
        reason: "豆包 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 3,
        reason: "Kimi 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "metaso",
        rank: 4,
        reason: "秘塔 AI 搜索 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "semantic-scholar",
        rank: 5,
        reason: "Semantic Scholar 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "research-rabbit",
        rank: 6,
        reason: "Research Rabbit 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "trae",
        rank: 7,
        reason: "Trae 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "capcut-ai",
        rank: 8,
        reason: "CapCut AI 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "优先选择免费或免费额度实用、中文用户可直接上手的工具。",
    rules: "优先选择免费或免费额度实用、中文用户可直接上手的工具。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "cursor-beginner",
      "github-copilot-guide",
      "windsurf-project-guide"
    ],
    relatedComparisons: [
      "v0-vs-bolt-new-vs-lovable",
      "replit-ai-vs-copilot-vs-cursor"
    ],
    seoTitle: "免费 AI 工具榜：2026 中文 AI 工具推荐",
    seoDescription: "免费 AI 工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-writing-tools",
    title: "AI 写作工具榜",
    slug: "ai-writing-tools",
    summary: "AI 写作工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 写作工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-writing",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "text",
    toolSlugs: [
      "chatgpt",
      "claude",
      "deepseek",
      "kimi",
      "doubao",
      "tongyi",
      "grammarly",
      "jasper"
    ],
    tools: [
      {
        slug: "chatgpt",
        rank: 1,
        reason: "ChatGPT 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "claude",
        rank: 2,
        reason: "Claude 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "deepseek",
        rank: 3,
        reason: "DeepSeek 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 4,
        reason: "Kimi 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 5,
        reason: "豆包 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "tongyi",
        rank: 6,
        reason: "通义千问 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "grammarly",
        rank: 7,
        reason: "Grammarly 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "jasper",
        rank: 8,
        reason: "Jasper 在AI 写作场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按写作质量、中文表达、长文能力和内容工作流适配度排序。",
    rules: "按写作质量、中文表达、长文能力和内容工作流适配度排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "github-copilot-guide",
      "windsurf-project-guide",
      "v0-frontend-page"
    ],
    relatedComparisons: [
      "replit-ai-vs-copilot-vs-cursor",
      "perplexity-vs-metaso-vs-kimi"
    ],
    seoTitle: "AI 写作工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 写作工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-coding-tools",
    title: "AI 编程工具榜",
    slug: "ai-coding-tools",
    summary: "AI 编程工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 编程工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-code",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "code",
    toolSlugs: [
      "cursor",
      "github-copilot",
      "windsurf",
      "trae",
      "codeium",
      "replit-ai",
      "v0",
      "bolt-new"
    ],
    tools: [
      {
        slug: "cursor",
        rank: 1,
        reason: "Cursor 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "github-copilot",
        rank: 2,
        reason: "GitHub Copilot 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "windsurf",
        rank: 3,
        reason: "Windsurf 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "trae",
        rank: 4,
        reason: "Trae 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "codeium",
        rank: 5,
        reason: "Codeium 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "replit-ai",
        rank: 6,
        reason: "Replit AI 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "v0",
        rank: 7,
        reason: "v0 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "bolt-new",
        rank: 8,
        reason: "Bolt.new 在AI 编程场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按项目理解、代码生成、调试能力和开发效率排序。",
    rules: "按项目理解、代码生成、调试能力和开发效率排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "windsurf-project-guide",
      "v0-frontend-page",
      "bolt-new-prototype"
    ],
    relatedComparisons: [
      "perplexity-vs-metaso-vs-kimi",
      "felo-vs-perplexity-vs-you-com"
    ],
    seoTitle: "AI 编程工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 编程工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-image-tools",
    title: "AI 绘图工具榜",
    slug: "ai-image-tools",
    summary: "AI 绘图工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 绘图工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-image",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "image",
    toolSlugs: [
      "midjourney",
      "stable-diffusion",
      "jimeng",
      "adobe-firefly",
      "ideogram",
      "leonardo-ai",
      "dall-e",
      "canva-ai"
    ],
    tools: [
      {
        slug: "midjourney",
        rank: 1,
        reason: "Midjourney 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "stable-diffusion",
        rank: 2,
        reason: "Stable Diffusion 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "jimeng",
        rank: 3,
        reason: "即梦 AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "adobe-firefly",
        rank: 4,
        reason: "Adobe Firefly 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "ideogram",
        rank: 5,
        reason: "Ideogram 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "leonardo-ai",
        rank: 6,
        reason: "Leonardo AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "dall-e",
        rank: 7,
        reason: "DALL·E 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "canva-ai",
        rank: 8,
        reason: "Canva AI 在AI 绘图场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按画面质感、风格稳定、中文提示词和设计工作流排序。",
    rules: "按画面质感、风格稳定、中文提示词和设计工作流排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "v0-frontend-page",
      "bolt-new-prototype",
      "lovable-web-app"
    ],
    relatedComparisons: [
      "felo-vs-perplexity-vs-you-com",
      "phind-vs-perplexity-vs-exa"
    ],
    seoTitle: "AI 绘图工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 绘图工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-video-tools",
    title: "AI 视频工具榜",
    slug: "ai-video-tools",
    summary: "AI 视频工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 视频工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-video",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "video",
    toolSlugs: [
      "runway",
      "kling",
      "pika",
      "luma-dream-machine",
      "heygen",
      "synthesia",
      "capcut-ai",
      "opusclip"
    ],
    tools: [
      {
        slug: "runway",
        rank: 1,
        reason: "Runway 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kling",
        rank: 2,
        reason: "可灵 AI 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "pika",
        rank: 3,
        reason: "Pika 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "luma-dream-machine",
        rank: 4,
        reason: "Luma Dream Machine 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "heygen",
        rank: 5,
        reason: "HeyGen 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "synthesia",
        rank: 6,
        reason: "Synthesia 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "capcut-ai",
        rank: 7,
        reason: "CapCut AI 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "opusclip",
        rank: 8,
        reason: "OpusClip 在AI 视频场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按视频生成、剪辑、数字人、字幕和社媒发布效率排序。",
    rules: "按视频生成、剪辑、数字人、字幕和社媒发布效率排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "bolt-new-prototype",
      "lovable-web-app",
      "midjourney-prompt-guide"
    ],
    relatedComparisons: [
      "phind-vs-perplexity-vs-exa",
      "midjourney-vs-stable-diffusion-vs-jimeng"
    ],
    seoTitle: "AI 视频工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 视频工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-ppt-tools",
    title: "AI PPT 工具榜",
    slug: "ai-ppt-tools",
    summary: "AI PPT 工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI PPT 工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-ppt",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "office",
    toolSlugs: [
      "gamma",
      "canva-ai",
      "tome",
      "beautiful-ai",
      "napkin-ai",
      "microsoft-copilot",
      "wps-ai",
      "tongyi"
    ],
    tools: [
      {
        slug: "gamma",
        rank: 1,
        reason: "Gamma 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "canva-ai",
        rank: 2,
        reason: "Canva AI 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "tome",
        rank: 3,
        reason: "Tome 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "beautiful-ai",
        rank: 4,
        reason: "Beautiful.ai 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "napkin-ai",
        rank: 5,
        reason: "Napkin AI 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "microsoft-copilot",
        rank: 6,
        reason: "Microsoft Copilot 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "wps-ai",
        rank: 7,
        reason: "WPS AI 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "tongyi",
        rank: 8,
        reason: "通义千问 在AI PPT场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按大纲生成、页面美化、演示叙事和中文办公适配排序。",
    rules: "按大纲生成、页面美化、演示叙事和中文办公适配排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "lovable-web-app",
      "midjourney-prompt-guide",
      "jimeng-image-guide"
    ],
    relatedComparisons: [
      "midjourney-vs-stable-diffusion-vs-jimeng",
      "dall-e-vs-midjourney-vs-firefly"
    ],
    seoTitle: "AI PPT 工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI PPT 工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-research-tools",
    title: "AI 论文研究榜",
    slug: "ai-research-tools",
    summary: "AI 论文研究榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 论文研究榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-research",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "research",
    toolSlugs: [
      "elicit",
      "scite",
      "semantic-scholar",
      "research-rabbit",
      "kimi",
      "chatpdf",
      "humata",
      "paperpal"
    ],
    tools: [
      {
        slug: "elicit",
        rank: 1,
        reason: "Elicit 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "scite",
        rank: 2,
        reason: "Scite 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "semantic-scholar",
        rank: 3,
        reason: "Semantic Scholar 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "research-rabbit",
        rank: 4,
        reason: "Research Rabbit 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 5,
        reason: "Kimi 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "chatpdf",
        rank: 6,
        reason: "ChatPDF 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "humata",
        rank: 7,
        reason: "Humata 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "paperpal",
        rank: 8,
        reason: "Paperpal 在AI 论文研究场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按文献检索、论文阅读、引用分析和研究整理能力排序。",
    rules: "按文献检索、论文阅读、引用分析和研究整理能力排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "midjourney-prompt-guide",
      "jimeng-image-guide",
      "stable-diffusion-beginner"
    ],
    relatedComparisons: [
      "dall-e-vs-midjourney-vs-firefly",
      "canva-ai-vs-microsoft-designer-vs-figma-ai"
    ],
    seoTitle: "AI 论文研究榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 论文研究榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-search-tools",
    title: "AI 搜索工具榜",
    slug: "ai-search-tools",
    summary: "AI 搜索工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 搜索工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-search",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "search",
    toolSlugs: [
      "perplexity",
      "metaso",
      "felo",
      "you-com",
      "phind",
      "exa",
      "consensus",
      "kimi"
    ],
    tools: [
      {
        slug: "perplexity",
        rank: 1,
        reason: "Perplexity 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "metaso",
        rank: 2,
        reason: "秘塔 AI 搜索 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "felo",
        rank: 3,
        reason: "Felo 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "you-com",
        rank: 4,
        reason: "You.com 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "phind",
        rank: 5,
        reason: "Phind 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "exa",
        rank: 6,
        reason: "Exa 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "consensus",
        rank: 7,
        reason: "Consensus 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 8,
        reason: "Kimi 在AI 搜索场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按搜索质量、来源透明度、跨语言能力和中文资料覆盖排序。",
    rules: "按搜索质量、来源透明度、跨语言能力和中文资料覆盖排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "jimeng-image-guide",
      "stable-diffusion-beginner",
      "canva-ai-poster"
    ],
    relatedComparisons: [
      "canva-ai-vs-microsoft-designer-vs-figma-ai",
      "ideogram-vs-midjourney-vs-leonardo-ai"
    ],
    seoTitle: "AI 搜索工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 搜索工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-social-media-tools",
    title: "AI 自媒体工具榜",
    slug: "ai-social-media-tools",
    summary: "AI 自媒体工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 自媒体工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-social-media",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "text",
    toolSlugs: [
      "capcut-ai",
      "opusclip",
      "doubao",
      "canva-ai",
      "buffer-ai",
      "heygen",
      "copy-ai",
      "shopify-magic"
    ],
    tools: [
      {
        slug: "capcut-ai",
        rank: 1,
        reason: "CapCut AI 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "opusclip",
        rank: 2,
        reason: "OpusClip 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 3,
        reason: "豆包 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "canva-ai",
        rank: 4,
        reason: "Canva AI 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "buffer-ai",
        rank: 5,
        reason: "Buffer AI Assistant 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "heygen",
        rank: 6,
        reason: "HeyGen 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "copy-ai",
        rank: 7,
        reason: "Copy.ai 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "shopify-magic",
        rank: 8,
        reason: "Shopify Magic 在AI 自媒体内容场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按选题、脚本、剪辑、封面和多平台发布效率排序。",
    rules: "按选题、脚本、剪辑、封面和多平台发布效率排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "stable-diffusion-beginner",
      "canva-ai-poster",
      "ideogram-text-poster"
    ],
    relatedComparisons: [
      "ideogram-vs-midjourney-vs-leonardo-ai",
      "runway-vs-pika-vs-kling"
    ],
    seoTitle: "AI 自媒体工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 自媒体工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-ai-office-tools",
    title: "AI 办公工具榜",
    slug: "ai-office-tools",
    summary: "AI 办公工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "AI 办公工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-office",
    rankingType: "scenario",
    type: "scenario",
    arenaType: "office",
    toolSlugs: [
      "microsoft-copilot",
      "wps-ai",
      "notion-ai",
      "feishu-minutes",
      "otter-ai",
      "fireflies-ai",
      "gamma",
      "granola"
    ],
    tools: [
      {
        slug: "microsoft-copilot",
        rank: 1,
        reason: "Microsoft Copilot 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "wps-ai",
        rank: 2,
        reason: "WPS AI 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "notion-ai",
        rank: 3,
        reason: "Notion AI 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "feishu-minutes",
        rank: 4,
        reason: "飞书妙记 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "otter-ai",
        rank: 5,
        reason: "Otter.ai 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "fireflies-ai",
        rank: 6,
        reason: "Fireflies.ai 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "gamma",
        rank: 7,
        reason: "Gamma 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "granola",
        rank: 8,
        reason: "Granola 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按会议、文档、PPT、知识库和团队协作效率排序。",
    rules: "按会议、文档、PPT、知识库和团队协作效率排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "canva-ai-poster",
      "ideogram-text-poster",
      "adobe-firefly-commercial-design"
    ],
    relatedComparisons: [
      "runway-vs-pika-vs-kling",
      "sora-vs-veo-vs-runway"
    ],
    seoTitle: "AI 办公工具榜：2026 中文 AI 工具推荐",
    seoDescription: "AI 办公工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-user-liked-tools",
    title: "用户点赞榜",
    slug: "user-liked-tools",
    summary: "用户点赞榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "用户点赞榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-chat",
    rankingType: "user-liked",
    type: "user-liked",
    arenaType: "office",
    toolSlugs: [
      "deepseek",
      "chatgpt",
      "cursor",
      "kimi",
      "doubao",
      "midjourney",
      "gamma",
      "perplexity"
    ],
    tools: [
      {
        slug: "deepseek",
        rank: 1,
        reason: "DeepSeek 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "chatgpt",
        rank: 2,
        reason: "ChatGPT 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "cursor",
        rank: 3,
        reason: "Cursor 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 4,
        reason: "Kimi 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 5,
        reason: "豆包 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "midjourney",
        rank: 6,
        reason: "Midjourney 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "gamma",
        rank: 7,
        reason: "Gamma 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "perplexity",
        rank: 8,
        reason: "Perplexity 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按站内用户点赞数、收藏和近期互动热度排序。",
    rules: "按站内用户点赞数、收藏和近期互动热度排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "ideogram-text-poster",
      "adobe-firefly-commercial-design",
      "runway-video-guide"
    ],
    relatedComparisons: [
      "sora-vs-veo-vs-runway",
      "heygen-vs-synthesia-vs-capcut-ai"
    ],
    seoTitle: "用户点赞榜：2026 中文 AI 工具推荐",
    seoDescription: "用户点赞榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-weekly-popular-tools",
    title: "本周热门榜",
    slug: "weekly-popular-tools",
    summary: "本周热门榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "本周热门榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-chat",
    rankingType: "popular",
    type: "popular",
    arenaType: "office",
    toolSlugs: [
      "deepseek",
      "doubao",
      "chatgpt",
      "jimeng",
      "kimi",
      "canva-ai",
      "cursor",
      "runway"
    ],
    tools: [
      {
        slug: "deepseek",
        rank: 1,
        reason: "DeepSeek 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 2,
        reason: "豆包 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "chatgpt",
        rank: 3,
        reason: "ChatGPT 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "jimeng",
        rank: 4,
        reason: "即梦 AI 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "kimi",
        rank: 5,
        reason: "Kimi 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "canva-ai",
        rank: 6,
        reason: "Canva AI 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "cursor",
        rank: 7,
        reason: "Cursor 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "runway",
        rank: 8,
        reason: "Runway 在AI 对话场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按最近浏览、点击、点赞和内容更新活跃度综合排序。",
    rules: "按最近浏览、点击、点赞和内容更新活跃度综合排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "adobe-firefly-commercial-design",
      "runway-video-guide",
      "pika-video-guide"
    ],
    relatedComparisons: [
      "heygen-vs-synthesia-vs-capcut-ai",
      "gamma-vs-canva-ai-vs-tome"
    ],
    seoTitle: "本周热门榜：2026 中文 AI 工具推荐",
    seoDescription: "本周热门榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-new-ai-tools",
    title: "最新收录榜",
    slug: "new-ai-tools",
    summary: "最新收录榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "最新收录榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-agent",
    rankingType: "new",
    type: "new",
    arenaType: "office",
    toolSlugs: [
      "coze",
      "dify",
      "lovable",
      "bolt-new",
      "v0",
      "granola",
      "napkin-ai",
      "luma-dream-machine"
    ],
    tools: [
      {
        slug: "coze",
        rank: 1,
        reason: "Coze 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "dify",
        rank: 2,
        reason: "Dify 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "lovable",
        rank: 3,
        reason: "Lovable 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "bolt-new",
        rank: 4,
        reason: "Bolt.new 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "v0",
        rank: 5,
        reason: "v0 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "granola",
        rank: 6,
        reason: "Granola 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "napkin-ai",
        rank: 7,
        reason: "Napkin AI 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "luma-dream-machine",
        rank: 8,
        reason: "Luma Dream Machine 在AI Agent场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按近期新增、内容完整度和中文用户适配度排序。",
    rules: "按近期新增、内容完整度和中文用户适配度排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "runway-video-guide",
      "pika-video-guide",
      "kling-video-guide"
    ],
    relatedComparisons: [
      "gamma-vs-canva-ai-vs-tome",
      "notion-ai-vs-feishu-minutes-vs-otter"
    ],
    seoTitle: "最新收录榜：2026 中文 AI 工具推荐",
    seoDescription: "最新收录榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  },
  {
    id: "ranking-cost-effective-tools",
    title: "高性价比工具榜",
    slug: "cost-effective-tools",
    summary: "高性价比工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    description: "高性价比工具榜基于编辑评分、用户行为和中文场景适配度整理，帮助你快速缩小选择范围。",
    categorySlug: "ai-office",
    rankingType: "free",
    type: "free",
    arenaType: "office",
    toolSlugs: [
      "deepseek",
      "doubao",
      "metaso",
      "codeium",
      "semantic-scholar",
      "research-rabbit",
      "trae",
      "wps-ai"
    ],
    tools: [
      {
        slug: "deepseek",
        rank: 1,
        reason: "DeepSeek 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "doubao",
        rank: 2,
        reason: "豆包 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "metaso",
        rank: 3,
        reason: "秘塔 AI 搜索 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "codeium",
        rank: 4,
        reason: "Codeium 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "semantic-scholar",
        rank: 5,
        reason: "Semantic Scholar 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "research-rabbit",
        rank: 6,
        reason: "Research Rabbit 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "trae",
        rank: 7,
        reason: "Trae 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      },
      {
        slug: "wps-ai",
        rank: 8,
        reason: "WPS AI 在AI 办公场景中表现稳定，适合中文用户优先测试。"
      }
    ],
    rankingRule: "按免费额度、功能覆盖、中文体验和上手成本排序。",
    rules: "按免费额度、功能覆盖、中文体验和上手成本排序。",
    weights: {
      editorScore: 0.45,
      likes: 0.2,
      views: 0.15,
      clicks: 0.1,
      freshness: 0.1
    },
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    relatedTutorials: [
      "pika-video-guide",
      "kling-video-guide",
      "luma-dream-machine-guide"
    ],
    relatedComparisons: [
      "notion-ai-vs-feishu-minutes-vs-otter",
      "microsoft-copilot-vs-wps-ai-vs-tongyi"
    ],
    seoTitle: "高性价比工具榜：2026 中文 AI 工具推荐",
    seoDescription: "高性价比工具榜，包含入选工具、排名规则、推荐理由和适合人群。",
    status: "published"
  }
]
export const rankings = mockRankings
export default mockRankings
