export interface MockPrompt { [key: string]: any }

export const mockPrompts: MockPrompt[] = [
  {
    id: "prompt-xiaohongshu-copywriting",
    title: "小红书爆款文案",
    slug: "xiaohongshu-copywriting",
    summary: "小红书爆款文案模板，适合中文用户快速完成小红书种草文案任务。",
    description: "小红书爆款文案模板，适合中文用户快速完成小红书种草文案任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「小红书种草文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「小红书种草文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing",
      "ai-social-media"
    ],
    type: "写作",
    relatedToolSlugs: [
      "chatgpt",
      "doubao"
    ],
    relatedTools: [
      "chatgpt",
      "doubao"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "DeepSeek",
      "豆包"
    ],
    tasks: [
      "小红书种草文案"
    ],
    task: "小红书种草文案",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[目标人群]",
        description: "填写目标人群的真实信息，避免空泛。"
      },
      {
        name: "[核心卖点]",
        description: "填写核心卖点的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[目标人群]",
      "[核心卖点]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "小红书种草文案",
      "新手"
    ],
    difficulty: "advanced",
    views: 2600,
    likes: 120,
    copies: 300,
    copyCount: 300,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "小红书爆款文案：可复制 Prompt 模板",
    seoDescription: "小红书爆款文案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-wechat-article-outline",
    title: "公众号文章大纲",
    slug: "wechat-article-outline",
    summary: "公众号文章大纲模板，适合中文用户快速完成公众号长文结构任务。",
    description: "公众号文章大纲模板，适合中文用户快速完成公众号长文结构任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「公众号长文结构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「公众号长文结构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing",
      "ai-social-media"
    ],
    type: "写作",
    relatedToolSlugs: [
      "chatgpt",
      "claude"
    ],
    relatedTools: [
      "chatgpt",
      "claude"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "Claude",
      "DeepSeek"
    ],
    tasks: [
      "公众号长文结构"
    ],
    task: "公众号长文结构",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[读者]",
        description: "填写读者的真实信息，避免空泛。"
      },
      {
        name: "[观点]",
        description: "填写观点的真实信息，避免空泛。"
      },
      {
        name: "[案例]",
        description: "填写案例的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[读者]",
      "[观点]",
      "[案例]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "公众号长文结构",
      "可复制"
    ],
    difficulty: "beginner",
    views: 2691,
    likes: 129,
    copies: 323,
    copyCount: 323,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "公众号文章大纲：可复制 Prompt 模板",
    seoDescription: "公众号文章大纲，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-product-intro-copy",
    title: "产品介绍文案",
    slug: "product-intro-copy",
    summary: "产品介绍文案模板，适合中文用户快速完成产品介绍任务。",
    description: "产品介绍文案模板，适合中文用户快速完成产品介绍任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「产品介绍」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「产品介绍」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing",
      "ai-ecommerce"
    ],
    type: "写作",
    relatedToolSlugs: [
      "copy-ai",
      "jasper"
    ],
    relatedTools: [
      "copy-ai",
      "jasper"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "Claude",
      "DeepSeek"
    ],
    tasks: [
      "产品介绍"
    ],
    task: "产品介绍",
    variables: [
      {
        name: "[产品名称]",
        description: "填写产品名称的真实信息，避免空泛。"
      },
      {
        name: "[目标用户]",
        description: "填写目标用户的真实信息，避免空泛。"
      },
      {
        name: "[核心优势]",
        description: "填写核心优势的真实信息，避免空泛。"
      },
      {
        name: "[使用场景]",
        description: "填写使用场景的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品名称]",
      "[目标用户]",
      "[核心优势]",
      "[使用场景]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "产品介绍",
      "可复制"
    ],
    difficulty: "beginner",
    views: 2782,
    likes: 138,
    copies: 346,
    copyCount: 346,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "产品介绍文案：可复制 Prompt 模板",
    seoDescription: "产品介绍文案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-article-polish",
    title: "文章改写润色",
    slug: "article-polish",
    summary: "文章改写润色模板，适合中文用户快速完成文章润色任务。",
    description: "文章改写润色模板，适合中文用户快速完成文章润色任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「文章润色」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「文章润色」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing"
    ],
    type: "写作",
    relatedToolSlugs: [
      "grammarly",
      "chatgpt"
    ],
    relatedTools: [
      "grammarly",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude",
      "Grammarly"
    ],
    models: [
      "ChatGPT",
      "Claude",
      "Grammarly"
    ],
    tasks: [
      "文章润色"
    ],
    task: "文章润色",
    variables: [
      {
        name: "[原文]",
        description: "填写原文的真实信息，避免空泛。"
      },
      {
        name: "[目标风格]",
        description: "填写目标风格的真实信息，避免空泛。"
      },
      {
        name: "[长度]",
        description: "填写长度的真实信息，避免空泛。"
      },
      {
        name: "[禁用词]",
        description: "填写禁用词的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[原文]",
      "[目标风格]",
      "[长度]",
      "[禁用词]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "文章润色",
      "新手"
    ],
    difficulty: "beginner",
    views: 2873,
    likes: 147,
    copies: 369,
    copyCount: 369,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "文章改写润色：可复制 Prompt 模板",
    seoDescription: "文章改写润色，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-english-email-polish",
    title: "英文邮件润色",
    slug: "english-email-polish",
    summary: "英文邮件润色模板，适合中文用户快速完成英文邮件任务。",
    description: "英文邮件润色模板，适合中文用户快速完成英文邮件任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「英文邮件」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「英文邮件」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing",
      "ai-translation"
    ],
    type: "写作",
    relatedToolSlugs: [
      "deepl",
      "grammarly"
    ],
    relatedTools: [
      "deepl",
      "grammarly"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepL",
      "Grammarly"
    ],
    models: [
      "ChatGPT",
      "DeepL",
      "Grammarly"
    ],
    tasks: [
      "英文邮件"
    ],
    task: "英文邮件",
    variables: [
      {
        name: "[邮件草稿]",
        description: "填写邮件草稿的真实信息，避免空泛。"
      },
      {
        name: "[收件人]",
        description: "填写收件人的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      },
      {
        name: "[目的]",
        description: "填写目的的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[邮件草稿]",
      "[收件人]",
      "[语气]",
      "[目的]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "英文邮件",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 2964,
    likes: 156,
    copies: 392,
    copyCount: 392,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "英文邮件润色：可复制 Prompt 模板",
    seoDescription: "英文邮件润色，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-resume-optimization",
    title: "简历优化",
    slug: "resume-optimization",
    summary: "简历优化模板，适合中文用户快速完成简历优化任务。",
    description: "简历优化模板，适合中文用户快速完成简历优化任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「简历优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「简历优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-resume",
      "ai-writing"
    ],
    type: "写作",
    relatedToolSlugs: [
      "kickresume",
      "jobscan"
    ],
    relatedTools: [
      "kickresume",
      "jobscan"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "简历优化"
    ],
    task: "简历优化",
    variables: [
      {
        name: "[岗位JD]",
        description: "填写岗位JD的真实信息，避免空泛。"
      },
      {
        name: "[简历内容]",
        description: "填写简历内容的真实信息，避免空泛。"
      },
      {
        name: "[目标行业]",
        description: "填写目标行业的真实信息，避免空泛。"
      },
      {
        name: "[亮点]",
        description: "填写亮点的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[岗位JD]",
      "[简历内容]",
      "[目标行业]",
      "[亮点]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "简历优化",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3055,
    likes: 165,
    copies: 415,
    copyCount: 415,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "简历优化：可复制 Prompt 模板",
    seoDescription: "简历优化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-weekly-report",
    title: "周报总结",
    slug: "weekly-report",
    summary: "周报总结模板，适合中文用户快速完成工作周报任务。",
    description: "周报总结模板，适合中文用户快速完成工作周报任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「工作周报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「工作周报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office",
      "ai-writing"
    ],
    type: "办公",
    relatedToolSlugs: [
      "deepseek",
      "notion-ai"
    ],
    relatedTools: [
      "deepseek",
      "notion-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek",
      "通义千问"
    ],
    models: [
      "ChatGPT",
      "DeepSeek",
      "通义千问"
    ],
    tasks: [
      "工作周报"
    ],
    task: "工作周报",
    variables: [
      {
        name: "[工作记录]",
        description: "填写工作记录的真实信息，避免空泛。"
      },
      {
        name: "[成果]",
        description: "填写成果的真实信息，避免空泛。"
      },
      {
        name: "[问题]",
        description: "填写问题的真实信息，避免空泛。"
      },
      {
        name: "[下周计划]",
        description: "填写下周计划的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[工作记录]",
      "[成果]",
      "[问题]",
      "[下周计划]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "工作周报",
      "新手"
    ],
    difficulty: "beginner",
    views: 3146,
    likes: 174,
    copies: 438,
    copyCount: 438,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "周报总结：可复制 Prompt 模板",
    seoDescription: "周报总结，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-meeting-minutes",
    title: "会议纪要整理",
    slug: "meeting-minutes",
    summary: "会议纪要整理模板，适合中文用户快速完成会议纪要任务。",
    description: "会议纪要整理模板，适合中文用户快速完成会议纪要任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「会议纪要」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「会议纪要」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office",
      "ai-meeting"
    ],
    type: "办公",
    relatedToolSlugs: [
      "feishu-minutes",
      "otter-ai"
    ],
    relatedTools: [
      "feishu-minutes",
      "otter-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "通义千问",
      "Kimi"
    ],
    models: [
      "ChatGPT",
      "通义千问",
      "Kimi"
    ],
    tasks: [
      "会议纪要"
    ],
    task: "会议纪要",
    variables: [
      {
        name: "[会议记录]",
        description: "填写会议记录的真实信息，避免空泛。"
      },
      {
        name: "[参会人]",
        description: "填写参会人的真实信息，避免空泛。"
      },
      {
        name: "[决议]",
        description: "填写决议的真实信息，避免空泛。"
      },
      {
        name: "[行动项]",
        description: "填写行动项的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[会议记录]",
      "[参会人]",
      "[决议]",
      "[行动项]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "会议纪要",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3237,
    likes: 183,
    copies: 461,
    copyCount: 461,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "会议纪要整理：可复制 Prompt 模板",
    seoDescription: "会议纪要整理，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-okr-planning",
    title: "OKR 制定",
    slug: "okr-planning",
    summary: "OKR 制定模板，适合中文用户快速完成OKR 制定任务。",
    description: "OKR 制定模板，适合中文用户快速完成OKR 制定任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「OKR 制定」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「OKR 制定」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office"
    ],
    type: "办公",
    relatedToolSlugs: [
      "notion-ai",
      "microsoft-copilot"
    ],
    relatedTools: [
      "notion-ai",
      "microsoft-copilot"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "OKR 制定"
    ],
    task: "OKR 制定",
    variables: [
      {
        name: "[团队目标]",
        description: "填写团队目标的真实信息，避免空泛。"
      },
      {
        name: "[周期]",
        description: "填写周期的真实信息，避免空泛。"
      },
      {
        name: "[关键结果]",
        description: "填写关键结果的真实信息，避免空泛。"
      },
      {
        name: "[约束]",
        description: "填写约束的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[团队目标]",
      "[周期]",
      "[关键结果]",
      "[约束]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "OKR 制定",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 3328,
    likes: 192,
    copies: 484,
    copyCount: 484,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "OKR 制定：可复制 Prompt 模板",
    seoDescription: "OKR 制定，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-project-retrospective",
    title: "项目复盘",
    slug: "project-retrospective",
    summary: "项目复盘模板，适合中文用户快速完成项目复盘任务。",
    description: "项目复盘模板，适合中文用户快速完成项目复盘任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「项目复盘」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「项目复盘」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office"
    ],
    type: "办公",
    relatedToolSlugs: [
      "notion-ai",
      "deepseek"
    ],
    relatedTools: [
      "notion-ai",
      "deepseek"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "项目复盘"
    ],
    task: "项目复盘",
    variables: [
      {
        name: "[项目背景]",
        description: "填写项目背景的真实信息，避免空泛。"
      },
      {
        name: "[结果]",
        description: "填写结果的真实信息，避免空泛。"
      },
      {
        name: "[问题]",
        description: "填写问题的真实信息，避免空泛。"
      },
      {
        name: "[数据]",
        description: "填写数据的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[项目背景]",
      "[结果]",
      "[问题]",
      "[数据]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "项目复盘",
      "新手"
    ],
    difficulty: "advanced",
    views: 3419,
    likes: 201,
    copies: 507,
    copyCount: 507,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "项目复盘：可复制 Prompt 模板",
    seoDescription: "项目复盘，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-work-plan",
    title: "工作计划",
    slug: "work-plan",
    summary: "工作计划模板，适合中文用户快速完成工作计划任务。",
    description: "工作计划模板，适合中文用户快速完成工作计划任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「工作计划」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「工作计划」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office"
    ],
    type: "办公",
    relatedToolSlugs: [
      "microsoft-copilot",
      "wps-ai"
    ],
    relatedTools: [
      "microsoft-copilot",
      "wps-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "通义千问"
    ],
    models: [
      "ChatGPT",
      "通义千问"
    ],
    tasks: [
      "工作计划"
    ],
    task: "工作计划",
    variables: [
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      },
      {
        name: "[周期]",
        description: "填写周期的真实信息，避免空泛。"
      },
      {
        name: "[资源]",
        description: "填写资源的真实信息，避免空泛。"
      },
      {
        name: "[风险]",
        description: "填写风险的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[目标]",
      "[周期]",
      "[资源]",
      "[风险]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "工作计划",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3510,
    likes: 210,
    copies: 530,
    copyCount: 530,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "工作计划：可复制 Prompt 模板",
    seoDescription: "工作计划，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-data-report-summary",
    title: "数据报告总结",
    slug: "data-report-summary",
    summary: "数据报告总结模板，适合中文用户快速完成数据报告任务。",
    description: "数据报告总结模板，适合中文用户快速完成数据报告任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「数据报告」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「数据报告」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-data",
      "ai-office"
    ],
    type: "办公",
    relatedToolSlugs: [
      "tableau-gpt",
      "chatgpt"
    ],
    relatedTools: [
      "tableau-gpt",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "数据报告"
    ],
    task: "数据报告",
    variables: [
      {
        name: "[数据摘要]",
        description: "填写数据摘要的真实信息，避免空泛。"
      },
      {
        name: "[指标]",
        description: "填写指标的真实信息，避免空泛。"
      },
      {
        name: "[异常]",
        description: "填写异常的真实信息，避免空泛。"
      },
      {
        name: "[结论]",
        description: "填写结论的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[数据摘要]",
      "[指标]",
      "[异常]",
      "[结论]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "数据报告",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3601,
    likes: 219,
    copies: 553,
    copyCount: 553,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "数据报告总结：可复制 Prompt 模板",
    seoDescription: "数据报告总结，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-paper-outline",
    title: "论文大纲生成",
    slug: "paper-outline",
    summary: "论文大纲生成模板，适合中文用户快速完成论文大纲任务。",
    description: "论文大纲生成模板，适合中文用户快速完成论文大纲任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    type: "论文",
    relatedToolSlugs: [
      "kimi",
      "claude"
    ],
    relatedTools: [
      "kimi",
      "claude"
    ],
    applicableModels: [
      "ChatGPT",
      "Kimi",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Kimi",
      "Claude"
    ],
    tasks: [
      "论文大纲"
    ],
    task: "论文大纲",
    variables: [
      {
        name: "[研究主题]",
        description: "填写研究主题的真实信息，避免空泛。"
      },
      {
        name: "[学科]",
        description: "填写学科的真实信息，避免空泛。"
      },
      {
        name: "[研究问题]",
        description: "填写研究问题的真实信息，避免空泛。"
      },
      {
        name: "[要求]",
        description: "填写要求的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[研究主题]",
      "[学科]",
      "[研究问题]",
      "[要求]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "论文大纲",
      "新手"
    ],
    difficulty: "intermediate",
    views: 3692,
    likes: 228,
    copies: 576,
    copyCount: 576,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "论文大纲生成：可复制 Prompt 模板",
    seoDescription: "论文大纲生成，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-literature-review",
    title: "文献综述整理",
    slug: "literature-review",
    summary: "文献综述整理模板，适合中文用户快速完成文献综述任务。",
    description: "文献综述整理模板，适合中文用户快速完成文献综述任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「文献综述」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「文献综述」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research"
    ],
    type: "论文",
    relatedToolSlugs: [
      "elicit",
      "scite"
    ],
    relatedTools: [
      "elicit",
      "scite"
    ],
    applicableModels: [
      "Claude",
      "Kimi",
      "ChatGPT"
    ],
    models: [
      "Claude",
      "Kimi",
      "ChatGPT"
    ],
    tasks: [
      "文献综述"
    ],
    task: "文献综述",
    variables: [
      {
        name: "[文献列表]",
        description: "填写文献列表的真实信息，避免空泛。"
      },
      {
        name: "[研究主题]",
        description: "填写研究主题的真实信息，避免空泛。"
      },
      {
        name: "[时间范围]",
        description: "填写时间范围的真实信息，避免空泛。"
      },
      {
        name: "[争议]",
        description: "填写争议的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[文献列表]",
      "[研究主题]",
      "[时间范围]",
      "[争议]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "文献综述",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3783,
    likes: 237,
    copies: 599,
    copyCount: 599,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "文献综述整理：可复制 Prompt 模板",
    seoDescription: "文献综述整理，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-paper-abstract-polish",
    title: "论文摘要优化",
    slug: "paper-abstract-polish",
    summary: "论文摘要优化模板，适合中文用户快速完成论文摘要任务。",
    description: "论文摘要优化模板，适合中文用户快速完成论文摘要任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文摘要」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文摘要」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    type: "论文",
    relatedToolSlugs: [
      "paperpal",
      "jenni-ai"
    ],
    relatedTools: [
      "paperpal",
      "jenni-ai"
    ],
    applicableModels: [
      "Claude",
      "ChatGPT",
      "Paperpal"
    ],
    models: [
      "Claude",
      "ChatGPT",
      "Paperpal"
    ],
    tasks: [
      "论文摘要"
    ],
    task: "论文摘要",
    variables: [
      {
        name: "[摘要草稿]",
        description: "填写摘要草稿的真实信息，避免空泛。"
      },
      {
        name: "[期刊方向]",
        description: "填写期刊方向的真实信息，避免空泛。"
      },
      {
        name: "[研究贡献]",
        description: "填写研究贡献的真实信息，避免空泛。"
      },
      {
        name: "[字数]",
        description: "填写字数的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[摘要草稿]",
      "[期刊方向]",
      "[研究贡献]",
      "[字数]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "论文摘要",
      "可复制"
    ],
    difficulty: "beginner",
    views: 3874,
    likes: 246,
    copies: 622,
    copyCount: 622,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "论文摘要优化：可复制 Prompt 模板",
    seoDescription: "论文摘要优化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-research-question-design",
    title: "研究问题设计",
    slug: "research-question-design",
    summary: "研究问题设计模板，适合中文用户快速完成研究问题任务。",
    description: "研究问题设计模板，适合中文用户快速完成研究问题任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「研究问题」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「研究问题」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research"
    ],
    type: "论文",
    relatedToolSlugs: [
      "consensus",
      "elicit"
    ],
    relatedTools: [
      "consensus",
      "elicit"
    ],
    applicableModels: [
      "Claude",
      "Kimi"
    ],
    models: [
      "Claude",
      "Kimi"
    ],
    tasks: [
      "研究问题"
    ],
    task: "研究问题",
    variables: [
      {
        name: "[研究领域]",
        description: "填写研究领域的真实信息，避免空泛。"
      },
      {
        name: "[现象]",
        description: "填写现象的真实信息，避免空泛。"
      },
      {
        name: "[变量]",
        description: "填写变量的真实信息，避免空泛。"
      },
      {
        name: "[方法]",
        description: "填写方法的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[研究领域]",
      "[现象]",
      "[变量]",
      "[方法]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "研究问题",
      "新手"
    ],
    difficulty: "beginner",
    views: 3965,
    likes: 255,
    copies: 645,
    copyCount: 645,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "研究问题设计：可复制 Prompt 模板",
    seoDescription: "研究问题设计，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-paper-paraphrase",
    title: "论文降重改写",
    slug: "paper-paraphrase",
    summary: "论文降重改写模板，适合中文用户快速完成论文改写任务。",
    description: "论文降重改写模板，适合中文用户快速完成论文改写任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文改写」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「论文改写」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    type: "论文",
    relatedToolSlugs: [
      "quillbot",
      "paperpal"
    ],
    relatedTools: [
      "quillbot",
      "paperpal"
    ],
    applicableModels: [
      "ChatGPT",
      "QuillBot"
    ],
    models: [
      "ChatGPT",
      "QuillBot"
    ],
    tasks: [
      "论文改写"
    ],
    task: "论文改写",
    variables: [
      {
        name: "[原文]",
        description: "填写原文的真实信息，避免空泛。"
      },
      {
        name: "[保留含义]",
        description: "填写保留含义的真实信息，避免空泛。"
      },
      {
        name: "[引用要求]",
        description: "填写引用要求的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[原文]",
      "[保留含义]",
      "[引用要求]",
      "[风格]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "论文改写",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 4056,
    likes: 264,
    copies: 668,
    copyCount: 668,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "论文降重改写：可复制 Prompt 模板",
    seoDescription: "论文降重改写，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-reference-summary",
    title: "参考文献总结",
    slug: "reference-summary",
    summary: "参考文献总结模板，适合中文用户快速完成参考文献总结任务。",
    description: "参考文献总结模板，适合中文用户快速完成参考文献总结任务。",
    prompt: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「参考文献总结」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的论文助手。请基于以下信息完成「参考文献总结」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "论文",
    categorySlugs: [
      "ai-research"
    ],
    type: "论文",
    relatedToolSlugs: [
      "semantic-scholar",
      "kimi"
    ],
    relatedTools: [
      "semantic-scholar",
      "kimi"
    ],
    applicableModels: [
      "Kimi",
      "Claude"
    ],
    models: [
      "Kimi",
      "Claude"
    ],
    tasks: [
      "参考文献总结"
    ],
    task: "参考文献总结",
    variables: [
      {
        name: "[文献标题]",
        description: "填写文献标题的真实信息，避免空泛。"
      },
      {
        name: "[摘要]",
        description: "填写摘要的真实信息，避免空泛。"
      },
      {
        name: "[研究问题]",
        description: "填写研究问题的真实信息，避免空泛。"
      },
      {
        name: "[结论]",
        description: "填写结论的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[文献标题]",
      "[摘要]",
      "[研究问题]",
      "[结论]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "论文",
      "参考文献总结",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4147,
    likes: 273,
    copies: 691,
    copyCount: 691,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "参考文献总结：可复制 Prompt 模板",
    seoDescription: "参考文献总结，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-ppt-outline",
    title: "PPT 大纲生成",
    slug: "ppt-outline",
    summary: "PPT 大纲生成模板，适合中文用户快速完成PPT 大纲任务。",
    description: "PPT 大纲生成模板，适合中文用户快速完成PPT 大纲任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「PPT 大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「PPT 大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "gamma",
      "canva-ai"
    ],
    relatedTools: [
      "gamma",
      "canva-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "Gamma",
      "通义千问"
    ],
    models: [
      "ChatGPT",
      "Gamma",
      "通义千问"
    ],
    tasks: [
      "PPT 大纲"
    ],
    task: "PPT 大纲",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[听众]",
        description: "填写听众的真实信息，避免空泛。"
      },
      {
        name: "[页数]",
        description: "填写页数的真实信息，避免空泛。"
      },
      {
        name: "[目的]",
        description: "填写目的的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[听众]",
      "[页数]",
      "[目的]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "PPT 大纲",
      "新手"
    ],
    difficulty: "advanced",
    views: 4238,
    likes: 282,
    copies: 714,
    copyCount: 714,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "PPT 大纲生成：可复制 Prompt 模板",
    seoDescription: "PPT 大纲生成，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-pitch-deck-copy",
    title: "路演 PPT 文案",
    slug: "pitch-deck-copy",
    summary: "路演 PPT 文案模板，适合中文用户快速完成路演文案任务。",
    description: "路演 PPT 文案模板，适合中文用户快速完成路演文案任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「路演文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「路演文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "gamma",
      "tome"
    ],
    relatedTools: [
      "gamma",
      "tome"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "路演文案"
    ],
    task: "路演文案",
    variables: [
      {
        name: "[项目背景]",
        description: "填写项目背景的真实信息，避免空泛。"
      },
      {
        name: "[商业模式]",
        description: "填写商业模式的真实信息，避免空泛。"
      },
      {
        name: "[融资阶段]",
        description: "填写融资阶段的真实信息，避免空泛。"
      },
      {
        name: "[优势]",
        description: "填写优势的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[项目背景]",
      "[商业模式]",
      "[融资阶段]",
      "[优势]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "路演文案",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4329,
    likes: 291,
    copies: 737,
    copyCount: 737,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "路演 PPT 文案：可复制 Prompt 模板",
    seoDescription: "路演 PPT 文案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-product-launch-ppt",
    title: "产品发布 PPT",
    slug: "product-launch-ppt",
    summary: "产品发布 PPT模板，适合中文用户快速完成产品发布任务。",
    description: "产品发布 PPT模板，适合中文用户快速完成产品发布任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「产品发布」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「产品发布」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "beautiful-ai",
      "gamma"
    ],
    relatedTools: [
      "beautiful-ai",
      "gamma"
    ],
    applicableModels: [
      "ChatGPT",
      "Gamma"
    ],
    models: [
      "ChatGPT",
      "Gamma"
    ],
    tasks: [
      "产品发布"
    ],
    task: "产品发布",
    variables: [
      {
        name: "[产品名]",
        description: "填写产品名的真实信息，避免空泛。"
      },
      {
        name: "[目标用户]",
        description: "填写目标用户的真实信息，避免空泛。"
      },
      {
        name: "[卖点]",
        description: "填写卖点的真实信息，避免空泛。"
      },
      {
        name: "[发布场景]",
        description: "填写发布场景的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品名]",
      "[目标用户]",
      "[卖点]",
      "[发布场景]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "产品发布",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 4420,
    likes: 300,
    copies: 760,
    copyCount: 760,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "产品发布 PPT：可复制 Prompt 模板",
    seoDescription: "产品发布 PPT，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-course-ppt-outline",
    title: "课程 PPT 大纲",
    slug: "course-ppt-outline",
    summary: "课程 PPT 大纲模板，适合中文用户快速完成课程大纲任务。",
    description: "课程 PPT 大纲模板，适合中文用户快速完成课程大纲任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「课程大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「课程大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "gamma",
      "wps-ai"
    ],
    relatedTools: [
      "gamma",
      "wps-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "课程大纲"
    ],
    task: "课程大纲",
    variables: [
      {
        name: "[课程主题]",
        description: "填写课程主题的真实信息，避免空泛。"
      },
      {
        name: "[学生水平]",
        description: "填写学生水平的真实信息，避免空泛。"
      },
      {
        name: "[课时]",
        description: "填写课时的真实信息，避免空泛。"
      },
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[课程主题]",
      "[学生水平]",
      "[课时]",
      "[目标]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "课程大纲",
      "新手"
    ],
    difficulty: "beginner",
    views: 4511,
    likes: 309,
    copies: 783,
    copyCount: 783,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "课程 PPT 大纲：可复制 Prompt 模板",
    seoDescription: "课程 PPT 大纲，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-report-ppt-structure",
    title: "汇报 PPT 结构",
    slug: "report-ppt-structure",
    summary: "汇报 PPT 结构模板，适合中文用户快速完成汇报结构任务。",
    description: "汇报 PPT 结构模板，适合中文用户快速完成汇报结构任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「汇报结构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「汇报结构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "gamma",
      "microsoft-copilot"
    ],
    relatedTools: [
      "gamma",
      "microsoft-copilot"
    ],
    applicableModels: [
      "ChatGPT",
      "通义千问"
    ],
    models: [
      "ChatGPT",
      "通义千问"
    ],
    tasks: [
      "汇报结构"
    ],
    task: "汇报结构",
    variables: [
      {
        name: "[汇报对象]",
        description: "填写汇报对象的真实信息，避免空泛。"
      },
      {
        name: "[数据]",
        description: "填写数据的真实信息，避免空泛。"
      },
      {
        name: "[结论]",
        description: "填写结论的真实信息，避免空泛。"
      },
      {
        name: "[诉求]",
        description: "填写诉求的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[汇报对象]",
      "[数据]",
      "[结论]",
      "[诉求]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "汇报结构",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4602,
    likes: 318,
    copies: 806,
    copyCount: 806,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "汇报 PPT 结构：可复制 Prompt 模板",
    seoDescription: "汇报 PPT 结构，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-business-plan-ppt",
    title: "商业计划书 PPT",
    slug: "business-plan-ppt",
    summary: "商业计划书 PPT模板，适合中文用户快速完成商业计划书任务。",
    description: "商业计划书 PPT模板，适合中文用户快速完成商业计划书任务。",
    prompt: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「商业计划书」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的PPT助手。请基于以下信息完成「商业计划书」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "PPT",
    categorySlugs: [
      "ai-ppt"
    ],
    type: "PPT",
    relatedToolSlugs: [
      "tome",
      "gamma"
    ],
    relatedTools: [
      "tome",
      "gamma"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "商业计划书"
    ],
    task: "商业计划书",
    variables: [
      {
        name: "[行业]",
        description: "填写行业的真实信息，避免空泛。"
      },
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[用户]",
        description: "填写用户的真实信息，避免空泛。"
      },
      {
        name: "[收入模式]",
        description: "填写收入模式的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[行业]",
      "[产品]",
      "[用户]",
      "[收入模式]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "PPT",
      "商业计划书",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4693,
    likes: 327,
    copies: 829,
    copyCount: 829,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "商业计划书 PPT：可复制 Prompt 模板",
    seoDescription: "商业计划书 PPT，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-code-explain",
    title: "代码解释",
    slug: "code-explain",
    summary: "代码解释模板，适合中文用户快速完成代码解释任务。",
    description: "代码解释模板，适合中文用户快速完成代码解释任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码解释」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码解释」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "cursor",
      "github-copilot"
    ],
    relatedTools: [
      "cursor",
      "github-copilot"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "DeepSeek",
      "Claude"
    ],
    tasks: [
      "代码解释"
    ],
    task: "代码解释",
    variables: [
      {
        name: "[代码片段]",
        description: "填写代码片段的真实信息，避免空泛。"
      },
      {
        name: "[语言]",
        description: "填写语言的真实信息，避免空泛。"
      },
      {
        name: "[项目背景]",
        description: "填写项目背景的真实信息，避免空泛。"
      },
      {
        name: "[疑问]",
        description: "填写疑问的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[代码片段]",
      "[语言]",
      "[项目背景]",
      "[疑问]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "代码解释",
      "新手"
    ],
    difficulty: "intermediate",
    views: 4784,
    likes: 336,
    copies: 852,
    copyCount: 852,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "代码解释：可复制 Prompt 模板",
    seoDescription: "代码解释，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-code-optimize",
    title: "代码优化",
    slug: "code-optimize",
    summary: "代码优化模板，适合中文用户快速完成代码优化任务。",
    description: "代码优化模板，适合中文用户快速完成代码优化任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "cursor",
      "windsurf"
    ],
    relatedTools: [
      "cursor",
      "windsurf"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "DeepSeek",
      "Claude"
    ],
    tasks: [
      "代码优化"
    ],
    task: "代码优化",
    variables: [
      {
        name: "[代码片段]",
        description: "填写代码片段的真实信息，避免空泛。"
      },
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      },
      {
        name: "[限制]",
        description: "填写限制的真实信息，避免空泛。"
      },
      {
        name: "[性能问题]",
        description: "填写性能问题的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[代码片段]",
      "[目标]",
      "[限制]",
      "[性能问题]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "代码优化",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4875,
    likes: 345,
    copies: 875,
    copyCount: 875,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "代码优化：可复制 Prompt 模板",
    seoDescription: "代码优化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-bug-debugging",
    title: "Bug 定位",
    slug: "bug-debugging",
    summary: "Bug 定位模板，适合中文用户快速完成Bug 定位任务。",
    description: "Bug 定位模板，适合中文用户快速完成Bug 定位任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「Bug 定位」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「Bug 定位」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "cursor",
      "phind"
    ],
    relatedTools: [
      "cursor",
      "phind"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "Bug 定位"
    ],
    task: "Bug 定位",
    variables: [
      {
        name: "[报错信息]",
        description: "填写报错信息的真实信息，避免空泛。"
      },
      {
        name: "[复现步骤]",
        description: "填写复现步骤的真实信息，避免空泛。"
      },
      {
        name: "[相关代码]",
        description: "填写相关代码的真实信息，避免空泛。"
      },
      {
        name: "[环境]",
        description: "填写环境的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[报错信息]",
      "[复现步骤]",
      "[相关代码]",
      "[环境]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "Bug 定位",
      "可复制"
    ],
    difficulty: "beginner",
    views: 4966,
    likes: 354,
    copies: 898,
    copyCount: 898,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "Bug 定位：可复制 Prompt 模板",
    seoDescription: "Bug 定位，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-unit-test-generation",
    title: "单元测试生成",
    slug: "unit-test-generation",
    summary: "单元测试生成模板，适合中文用户快速完成单元测试任务。",
    description: "单元测试生成模板，适合中文用户快速完成单元测试任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「单元测试」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「单元测试」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "github-copilot",
      "cursor"
    ],
    relatedTools: [
      "github-copilot",
      "cursor"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "单元测试"
    ],
    task: "单元测试",
    variables: [
      {
        name: "[函数代码]",
        description: "填写函数代码的真实信息，避免空泛。"
      },
      {
        name: "[测试框架]",
        description: "填写测试框架的真实信息，避免空泛。"
      },
      {
        name: "[边界条件]",
        description: "填写边界条件的真实信息，避免空泛。"
      },
      {
        name: "[目标覆盖率]",
        description: "填写目标覆盖率的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[函数代码]",
      "[测试框架]",
      "[边界条件]",
      "[目标覆盖率]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "单元测试",
      "新手"
    ],
    difficulty: "advanced",
    views: 5057,
    likes: 363,
    copies: 921,
    copyCount: 921,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "单元测试生成：可复制 Prompt 模板",
    seoDescription: "单元测试生成，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-api-doc-generation",
    title: "API 文档生成",
    slug: "api-doc-generation",
    summary: "API 文档生成模板，适合中文用户快速完成API 文档任务。",
    description: "API 文档生成模板，适合中文用户快速完成API 文档任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「API 文档」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「API 文档」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "replit-ai",
      "chatgpt"
    ],
    relatedTools: [
      "replit-ai",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "API 文档"
    ],
    task: "API 文档",
    variables: [
      {
        name: "[接口代码]",
        description: "填写接口代码的真实信息，避免空泛。"
      },
      {
        name: "[参数]",
        description: "填写参数的真实信息，避免空泛。"
      },
      {
        name: "[返回值]",
        description: "填写返回值的真实信息，避免空泛。"
      },
      {
        name: "[调用示例]",
        description: "填写调用示例的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[接口代码]",
      "[参数]",
      "[返回值]",
      "[调用示例]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "API 文档",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 5148,
    likes: 372,
    copies: 944,
    copyCount: 944,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "API 文档生成：可复制 Prompt 模板",
    seoDescription: "API 文档生成，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-code-refactor-advice",
    title: "代码重构建议",
    slug: "code-refactor-advice",
    summary: "代码重构建议模板，适合中文用户快速完成代码重构任务。",
    description: "代码重构建议模板，适合中文用户快速完成代码重构任务。",
    prompt: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码重构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的编程助手。请基于以下信息完成「代码重构」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "编程",
    relatedToolSlugs: [
      "cursor",
      "windsurf"
    ],
    relatedTools: [
      "cursor",
      "windsurf"
    ],
    applicableModels: [
      "Claude",
      "ChatGPT"
    ],
    models: [
      "Claude",
      "ChatGPT"
    ],
    tasks: [
      "代码重构"
    ],
    task: "代码重构",
    variables: [
      {
        name: "[代码结构]",
        description: "填写代码结构的真实信息，避免空泛。"
      },
      {
        name: "[问题]",
        description: "填写问题的真实信息，避免空泛。"
      },
      {
        name: "[约束]",
        description: "填写约束的真实信息，避免空泛。"
      },
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[代码结构]",
      "[问题]",
      "[约束]",
      "[目标]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "编程",
      "代码重构",
      "可复制"
    ],
    difficulty: "beginner",
    views: 5239,
    likes: 381,
    copies: 967,
    copyCount: 967,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "代码重构建议：可复制 Prompt 模板",
    seoDescription: "代码重构建议，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-midjourney-product-poster",
    title: "Midjourney 产品海报",
    slug: "midjourney-product-poster",
    summary: "Midjourney 产品海报模板，适合中文用户快速完成产品海报任务。",
    description: "Midjourney 产品海报模板，适合中文用户快速完成产品海报任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「产品海报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「产品海报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "midjourney"
    ],
    relatedTools: [
      "midjourney"
    ],
    applicableModels: [
      "Midjourney"
    ],
    models: [
      "Midjourney"
    ],
    tasks: [
      "产品海报"
    ],
    task: "产品海报",
    variables: [
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      },
      {
        name: "[场景]",
        description: "填写场景的真实信息，避免空泛。"
      },
      {
        name: "[画幅]",
        description: "填写画幅的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品]",
      "[风格]",
      "[场景]",
      "[画幅]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "产品海报",
      "新手"
    ],
    difficulty: "beginner",
    views: 5330,
    likes: 390,
    copies: 990,
    copyCount: 990,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "Midjourney 产品海报：可复制 Prompt 模板",
    seoDescription: "Midjourney 产品海报，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-jimeng-avatar",
    title: "即梦人物头像",
    slug: "jimeng-avatar",
    summary: "即梦人物头像模板，适合中文用户快速完成人物头像任务。",
    description: "即梦人物头像模板，适合中文用户快速完成人物头像任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「人物头像」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「人物头像」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-image"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "jimeng"
    ],
    relatedTools: [
      "jimeng"
    ],
    applicableModels: [
      "即梦 AI"
    ],
    models: [
      "即梦 AI"
    ],
    tasks: [
      "人物头像"
    ],
    task: "人物头像",
    variables: [
      {
        name: "[人物特征]",
        description: "填写人物特征的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      },
      {
        name: "[背景]",
        description: "填写背景的真实信息，避免空泛。"
      },
      {
        name: "[用途]",
        description: "填写用途的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[人物特征]",
      "[风格]",
      "[背景]",
      "[用途]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "人物头像",
      "可复制"
    ],
    difficulty: "beginner",
    views: 5421,
    likes: 399,
    copies: 1013,
    copyCount: 1013,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "即梦人物头像：可复制 Prompt 模板",
    seoDescription: "即梦人物头像，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-stable-diffusion-style",
    title: "Stable Diffusion 风格图",
    slug: "stable-diffusion-style",
    summary: "Stable Diffusion 风格图模板，适合中文用户快速完成风格图任务。",
    description: "Stable Diffusion 风格图模板，适合中文用户快速完成风格图任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「风格图」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「风格图」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-image"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "stable-diffusion"
    ],
    relatedTools: [
      "stable-diffusion"
    ],
    applicableModels: [
      "Stable Diffusion"
    ],
    models: [
      "Stable Diffusion"
    ],
    tasks: [
      "风格图"
    ],
    task: "风格图",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[模型]",
        description: "填写模型的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      },
      {
        name: "[负面词]",
        description: "填写负面词的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[模型]",
      "[风格]",
      "[负面词]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "风格图",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 5512,
    likes: 408,
    copies: 1036,
    copyCount: 1036,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "Stable Diffusion 风格图：可复制 Prompt 模板",
    seoDescription: "Stable Diffusion 风格图，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-ecommerce-main-image",
    title: "电商主图",
    slug: "ecommerce-main-image",
    summary: "电商主图模板，适合中文用户快速完成电商主图任务。",
    description: "电商主图模板，适合中文用户快速完成电商主图任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「电商主图」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「电商主图」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-image",
      "ai-ecommerce"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "photoroom",
      "canva-ai"
    ],
    relatedTools: [
      "photoroom",
      "canva-ai"
    ],
    applicableModels: [
      "即梦 AI",
      "Canva AI"
    ],
    models: [
      "即梦 AI",
      "Canva AI"
    ],
    tasks: [
      "电商主图"
    ],
    task: "电商主图",
    variables: [
      {
        name: "[商品]",
        description: "填写商品的真实信息，避免空泛。"
      },
      {
        name: "[卖点]",
        description: "填写卖点的真实信息，避免空泛。"
      },
      {
        name: "[背景]",
        description: "填写背景的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[商品]",
      "[卖点]",
      "[背景]",
      "[平台]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "电商主图",
      "新手"
    ],
    difficulty: "beginner",
    views: 5603,
    likes: 417,
    copies: 1059,
    copyCount: 1059,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "电商主图：可复制 Prompt 模板",
    seoDescription: "电商主图，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-brand-poster",
    title: "品牌海报",
    slug: "brand-poster",
    summary: "品牌海报模板，适合中文用户快速完成品牌海报任务。",
    description: "品牌海报模板，适合中文用户快速完成品牌海报任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「品牌海报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「品牌海报」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-design",
      "ai-image"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "canva-ai",
      "adobe-firefly"
    ],
    relatedTools: [
      "canva-ai",
      "adobe-firefly"
    ],
    applicableModels: [
      "Midjourney",
      "Canva AI"
    ],
    models: [
      "Midjourney",
      "Canva AI"
    ],
    tasks: [
      "品牌海报"
    ],
    task: "品牌海报",
    variables: [
      {
        name: "[品牌]",
        description: "填写品牌的真实信息，避免空泛。"
      },
      {
        name: "[活动]",
        description: "填写活动的真实信息，避免空泛。"
      },
      {
        name: "[视觉风格]",
        description: "填写视觉风格的真实信息，避免空泛。"
      },
      {
        name: "[文案]",
        description: "填写文案的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[品牌]",
      "[活动]",
      "[视觉风格]",
      "[文案]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "品牌海报",
      "可复制"
    ],
    difficulty: "beginner",
    views: 5694,
    likes: 426,
    copies: 1082,
    copyCount: 1082,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "品牌海报：可复制 Prompt 模板",
    seoDescription: "品牌海报，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-illustration-style",
    title: "插画风格探索",
    slug: "illustration-style",
    summary: "插画风格探索模板，适合中文用户快速完成插画探索任务。",
    description: "插画风格探索模板，适合中文用户快速完成插画探索任务。",
    prompt: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「插画探索」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的绘图助手。请基于以下信息完成「插画探索」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "绘图",
    relatedToolSlugs: [
      "leonardo-ai",
      "midjourney"
    ],
    relatedTools: [
      "leonardo-ai",
      "midjourney"
    ],
    applicableModels: [
      "Midjourney",
      "Leonardo AI"
    ],
    models: [
      "Midjourney",
      "Leonardo AI"
    ],
    tasks: [
      "插画探索"
    ],
    task: "插画探索",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      },
      {
        name: "[颜色]",
        description: "填写颜色的真实信息，避免空泛。"
      },
      {
        name: "[用途]",
        description: "填写用途的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[风格]",
      "[颜色]",
      "[用途]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "绘图",
      "插画探索",
      "可复制"
    ],
    difficulty: "beginner",
    views: 5785,
    likes: 435,
    copies: 1105,
    copyCount: 1105,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "插画风格探索：可复制 Prompt 模板",
    seoDescription: "插画风格探索，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-short-video-script",
    title: "短视频脚本",
    slug: "short-video-script",
    summary: "短视频脚本模板，适合中文用户快速完成短视频脚本任务。",
    description: "短视频脚本模板，适合中文用户快速完成短视频脚本任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「短视频脚本」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「短视频脚本」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    type: "视频",
    relatedToolSlugs: [
      "capcut-ai",
      "opusclip"
    ],
    relatedTools: [
      "capcut-ai",
      "opusclip"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "短视频脚本"
    ],
    task: "短视频脚本",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[时长]",
        description: "填写时长的真实信息，避免空泛。"
      },
      {
        name: "[受众]",
        description: "填写受众的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[时长]",
      "[受众]",
      "[平台]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "短视频脚本",
      "新手"
    ],
    difficulty: "advanced",
    views: 5876,
    likes: 444,
    copies: 1128,
    copyCount: 1128,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "短视频脚本：可复制 Prompt 模板",
    seoDescription: "短视频脚本，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-livestream-sales-script",
    title: "直播带货脚本",
    slug: "livestream-sales-script",
    summary: "直播带货脚本模板，适合中文用户快速完成直播脚本任务。",
    description: "直播带货脚本模板，适合中文用户快速完成直播脚本任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「直播脚本」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「直播脚本」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-social-media",
      "ai-ecommerce"
    ],
    type: "视频",
    relatedToolSlugs: [
      "doubao",
      "chatgpt"
    ],
    relatedTools: [
      "doubao",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "直播脚本"
    ],
    task: "直播脚本",
    variables: [
      {
        name: "[商品]",
        description: "填写商品的真实信息，避免空泛。"
      },
      {
        name: "[卖点]",
        description: "填写卖点的真实信息，避免空泛。"
      },
      {
        name: "[节奏]",
        description: "填写节奏的真实信息，避免空泛。"
      },
      {
        name: "[优惠]",
        description: "填写优惠的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[商品]",
      "[卖点]",
      "[节奏]",
      "[优惠]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "直播脚本",
      "可复制"
    ],
    difficulty: "beginner",
    views: 5967,
    likes: 453,
    copies: 1151,
    copyCount: 1151,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "直播带货脚本：可复制 Prompt 模板",
    seoDescription: "直播带货脚本，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-video-storyboard",
    title: "视频分镜",
    slug: "video-storyboard",
    summary: "视频分镜模板，适合中文用户快速完成视频分镜任务。",
    description: "视频分镜模板，适合中文用户快速完成视频分镜任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「视频分镜」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「视频分镜」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-video"
    ],
    type: "视频",
    relatedToolSlugs: [
      "runway",
      "pika"
    ],
    relatedTools: [
      "runway",
      "pika"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "视频分镜"
    ],
    task: "视频分镜",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[镜头数]",
        description: "填写镜头数的真实信息，避免空泛。"
      },
      {
        name: "[风格]",
        description: "填写风格的真实信息，避免空泛。"
      },
      {
        name: "[时长]",
        description: "填写时长的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[镜头数]",
      "[风格]",
      "[时长]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "视频分镜",
      "可复制"
    ],
    difficulty: "beginner",
    views: 6058,
    likes: 462,
    copies: 1174,
    copyCount: 1174,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "视频分镜：可复制 Prompt 模板",
    seoDescription: "视频分镜，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-talking-head-script",
    title: "口播稿",
    slug: "talking-head-script",
    summary: "口播稿模板，适合中文用户快速完成口播稿任务。",
    description: "口播稿模板，适合中文用户快速完成口播稿任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「口播稿」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「口播稿」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    type: "视频",
    relatedToolSlugs: [
      "heygen",
      "capcut-ai"
    ],
    relatedTools: [
      "heygen",
      "capcut-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "口播稿"
    ],
    task: "口播稿",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[人设]",
        description: "填写人设的真实信息，避免空泛。"
      },
      {
        name: "[时长]",
        description: "填写时长的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[人设]",
      "[时长]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "口播稿",
      "新手"
    ],
    difficulty: "beginner",
    views: 6149,
    likes: 471,
    copies: 1197,
    copyCount: 1197,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "口播稿：可复制 Prompt 模板",
    seoDescription: "口播稿，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-content-topic-plan",
    title: "选题策划",
    slug: "content-topic-plan",
    summary: "选题策划模板，适合中文用户快速完成选题策划任务。",
    description: "选题策划模板，适合中文用户快速完成选题策划任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「选题策划」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「选题策划」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-social-media",
      "ai-writing"
    ],
    type: "视频",
    relatedToolSlugs: [
      "buffer-ai",
      "chatgpt"
    ],
    relatedTools: [
      "buffer-ai",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "选题策划"
    ],
    task: "选题策划",
    variables: [
      {
        name: "[账号定位]",
        description: "填写账号定位的真实信息，避免空泛。"
      },
      {
        name: "[目标人群]",
        description: "填写目标人群的真实信息，避免空泛。"
      },
      {
        name: "[周期]",
        description: "填写周期的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[账号定位]",
      "[目标人群]",
      "[周期]",
      "[平台]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "选题策划",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 6240,
    likes: 480,
    copies: 1220,
    copyCount: 1220,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "选题策划：可复制 Prompt 模板",
    seoDescription: "选题策划，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-title-optimization",
    title: "标题优化",
    slug: "title-optimization",
    summary: "标题优化模板，适合中文用户快速完成标题优化任务。",
    description: "标题优化模板，适合中文用户快速完成标题优化任务。",
    prompt: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「标题优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的视频助手。请基于以下信息完成「标题优化」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "视频",
    categorySlugs: [
      "ai-social-media",
      "ai-writing"
    ],
    type: "视频",
    relatedToolSlugs: [
      "buffer-ai",
      "opusclip"
    ],
    relatedTools: [
      "buffer-ai",
      "opusclip"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "标题优化"
    ],
    task: "标题优化",
    variables: [
      {
        name: "[原标题]",
        description: "填写原标题的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      },
      {
        name: "[受众]",
        description: "填写受众的真实信息，避免空泛。"
      },
      {
        name: "[关键词]",
        description: "填写关键词的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[原标题]",
      "[平台]",
      "[受众]",
      "[关键词]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "视频",
      "标题优化",
      "可复制"
    ],
    difficulty: "beginner",
    views: 6331,
    likes: 489,
    copies: 1243,
    copyCount: 1243,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "标题优化：可复制 Prompt 模板",
    seoDescription: "标题优化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-product-detail-copy",
    title: "商品详情页文案",
    slug: "product-detail-copy",
    summary: "商品详情页文案模板，适合中文用户快速完成商品详情页任务。",
    description: "商品详情页文案模板，适合中文用户快速完成商品详情页任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「商品详情页」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「商品详情页」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-writing"
    ],
    type: "电商",
    relatedToolSlugs: [
      "shopify-magic",
      "copy-ai"
    ],
    relatedTools: [
      "shopify-magic",
      "copy-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "商品详情页"
    ],
    task: "商品详情页",
    variables: [
      {
        name: "[商品]",
        description: "填写商品的真实信息，避免空泛。"
      },
      {
        name: "[卖点]",
        description: "填写卖点的真实信息，避免空泛。"
      },
      {
        name: "[规格]",
        description: "填写规格的真实信息，避免空泛。"
      },
      {
        name: "[用户痛点]",
        description: "填写用户痛点的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[商品]",
      "[卖点]",
      "[规格]",
      "[用户痛点]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "商品详情页",
      "新手"
    ],
    difficulty: "beginner",
    views: 6422,
    likes: 498,
    copies: 1266,
    copyCount: 1266,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "商品详情页文案：可复制 Prompt 模板",
    seoDescription: "商品详情页文案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-review-reply",
    title: "用户评价回复",
    slug: "review-reply",
    summary: "用户评价回复模板，适合中文用户快速完成评价回复任务。",
    description: "用户评价回复模板，适合中文用户快速完成评价回复任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「评价回复」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「评价回复」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-writing"
    ],
    type: "电商",
    relatedToolSlugs: [
      "chatgpt",
      "doubao"
    ],
    relatedTools: [
      "chatgpt",
      "doubao"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "评价回复"
    ],
    task: "评价回复",
    variables: [
      {
        name: "[评价内容]",
        description: "填写评价内容的真实信息，避免空泛。"
      },
      {
        name: "[品牌语气]",
        description: "填写品牌语气的真实信息，避免空泛。"
      },
      {
        name: "[处理方案]",
        description: "填写处理方案的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[评价内容]",
      "[品牌语气]",
      "[处理方案]",
      "[平台]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "评价回复",
      "可复制"
    ],
    difficulty: "beginner",
    views: 6513,
    likes: 507,
    copies: 1289,
    copyCount: 1289,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "用户评价回复：可复制 Prompt 模板",
    seoDescription: "用户评价回复，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-campaign-plan",
    title: "活动方案",
    slug: "campaign-plan",
    summary: "活动方案模板，适合中文用户快速完成活动方案任务。",
    description: "活动方案模板，适合中文用户快速完成活动方案任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「活动方案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「活动方案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-office"
    ],
    type: "电商",
    relatedToolSlugs: [
      "shopify-magic",
      "chatgpt"
    ],
    relatedTools: [
      "shopify-magic",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "活动方案"
    ],
    task: "活动方案",
    variables: [
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      },
      {
        name: "[预算]",
        description: "填写预算的真实信息，避免空泛。"
      },
      {
        name: "[商品]",
        description: "填写商品的真实信息，避免空泛。"
      },
      {
        name: "[渠道]",
        description: "填写渠道的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[目标]",
      "[预算]",
      "[商品]",
      "[渠道]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "活动方案",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 6604,
    likes: 516,
    copies: 1312,
    copyCount: 1312,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "活动方案：可复制 Prompt 模板",
    seoDescription: "活动方案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-community-script",
    title: "私域社群话术",
    slug: "community-script",
    summary: "私域社群话术模板，适合中文用户快速完成社群话术任务。",
    description: "私域社群话术模板，适合中文用户快速完成社群话术任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「社群话术」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「社群话术」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-social-media"
    ],
    type: "电商",
    relatedToolSlugs: [
      "doubao",
      "chatgpt"
    ],
    relatedTools: [
      "doubao",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "社群话术"
    ],
    task: "社群话术",
    variables: [
      {
        name: "[社群类型]",
        description: "填写社群类型的真实信息，避免空泛。"
      },
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[活动]",
        description: "填写活动的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[社群类型]",
      "[产品]",
      "[活动]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "社群话术",
      "新手"
    ],
    difficulty: "advanced",
    views: 6695,
    likes: 525,
    copies: 1335,
    copyCount: 1335,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "私域社群话术：可复制 Prompt 模板",
    seoDescription: "私域社群话术，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-customer-service-reply",
    title: "客服回复",
    slug: "customer-service-reply",
    summary: "客服回复模板，适合中文用户快速完成客服回复任务。",
    description: "客服回复模板，适合中文用户快速完成客服回复任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「客服回复」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「客服回复」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-writing"
    ],
    type: "电商",
    relatedToolSlugs: [
      "chatgpt",
      "doubao"
    ],
    relatedTools: [
      "chatgpt",
      "doubao"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "客服回复"
    ],
    task: "客服回复",
    variables: [
      {
        name: "[用户问题]",
        description: "填写用户问题的真实信息，避免空泛。"
      },
      {
        name: "[订单状态]",
        description: "填写订单状态的真实信息，避免空泛。"
      },
      {
        name: "[规则]",
        description: "填写规则的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[用户问题]",
      "[订单状态]",
      "[规则]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "客服回复",
      "可复制"
    ],
    difficulty: "beginner",
    views: 6786,
    likes: 534,
    copies: 1358,
    copyCount: 1358,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "客服回复：可复制 Prompt 模板",
    seoDescription: "客服回复，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-ad-copy",
    title: "广告投放文案",
    slug: "ad-copy",
    summary: "广告投放文案模板，适合中文用户快速完成广告文案任务。",
    description: "广告投放文案模板，适合中文用户快速完成广告文案任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「广告文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「广告文案」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-writing"
    ],
    type: "电商",
    relatedToolSlugs: [
      "jasper",
      "copy-ai"
    ],
    relatedTools: [
      "jasper",
      "copy-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "Jasper"
    ],
    models: [
      "ChatGPT",
      "Jasper"
    ],
    tasks: [
      "广告文案"
    ],
    task: "广告文案",
    variables: [
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[人群]",
        description: "填写人群的真实信息，避免空泛。"
      },
      {
        name: "[平台]",
        description: "填写平台的真实信息，避免空泛。"
      },
      {
        name: "[卖点]",
        description: "填写卖点的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品]",
      "[人群]",
      "[平台]",
      "[卖点]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "广告文案",
      "可复制"
    ],
    difficulty: "beginner",
    views: 6877,
    likes: 543,
    copies: 1381,
    copyCount: 1381,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "广告投放文案：可复制 Prompt 模板",
    seoDescription: "广告投放文案，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-faq-generation",
    title: "FAQ 生成",
    slug: "faq-generation",
    summary: "FAQ 生成模板，适合中文用户快速完成FAQ 生成任务。",
    description: "FAQ 生成模板，适合中文用户快速完成FAQ 生成任务。",
    prompt: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「FAQ 生成」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的写作助手。请基于以下信息完成「FAQ 生成」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "写作",
    categorySlugs: [
      "ai-writing",
      "ai-office"
    ],
    type: "写作",
    relatedToolSlugs: [
      "chatgpt",
      "deepseek"
    ],
    relatedTools: [
      "chatgpt",
      "deepseek"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "FAQ 生成"
    ],
    task: "FAQ 生成",
    variables: [
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[用户问题]",
        description: "填写用户问题的真实信息，避免空泛。"
      },
      {
        name: "[使用场景]",
        description: "填写使用场景的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品]",
      "[用户问题]",
      "[使用场景]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "写作",
      "FAQ 生成",
      "新手"
    ],
    difficulty: "intermediate",
    views: 6968,
    likes: 552,
    copies: 1404,
    copyCount: 1404,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "FAQ 生成：可复制 Prompt 模板",
    seoDescription: "FAQ 生成，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-content-calendar",
    title: "内容日历",
    slug: "content-calendar",
    summary: "内容日历模板，适合中文用户快速完成内容日历任务。",
    description: "内容日历模板，适合中文用户快速完成内容日历任务。",
    prompt: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「内容日历」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「内容日历」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "自媒体",
    categorySlugs: [
      "ai-social-media",
      "ai-writing"
    ],
    type: "自媒体",
    relatedToolSlugs: [
      "buffer-ai",
      "chatgpt"
    ],
    relatedTools: [
      "buffer-ai",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "豆包"
    ],
    models: [
      "ChatGPT",
      "豆包"
    ],
    tasks: [
      "内容日历"
    ],
    task: "内容日历",
    variables: [
      {
        name: "[账号定位]",
        description: "填写账号定位的真实信息，避免空泛。"
      },
      {
        name: "[周期]",
        description: "填写周期的真实信息，避免空泛。"
      },
      {
        name: "[栏目]",
        description: "填写栏目的真实信息，避免空泛。"
      },
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[账号定位]",
      "[周期]",
      "[栏目]",
      "[目标]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "自媒体",
      "内容日历",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7059,
    likes: 561,
    copies: 1427,
    copyCount: 1427,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "内容日历：可复制 Prompt 模板",
    seoDescription: "内容日历，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-youtube-title",
    title: "YouTube 标题优化",
    slug: "youtube-title",
    summary: "YouTube 标题优化模板，适合中文用户快速完成视频标题任务。",
    description: "YouTube 标题优化模板，适合中文用户快速完成视频标题任务。",
    prompt: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「视频标题」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「视频标题」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "自媒体",
    categorySlugs: [
      "ai-social-media",
      "ai-writing"
    ],
    type: "自媒体",
    relatedToolSlugs: [
      "opusclip",
      "chatgpt"
    ],
    relatedTools: [
      "opusclip",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "视频标题"
    ],
    task: "视频标题",
    variables: [
      {
        name: "[视频主题]",
        description: "填写视频主题的真实信息，避免空泛。"
      },
      {
        name: "[受众]",
        description: "填写受众的真实信息，避免空泛。"
      },
      {
        name: "[关键词]",
        description: "填写关键词的真实信息，避免空泛。"
      },
      {
        name: "[语气]",
        description: "填写语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[视频主题]",
      "[受众]",
      "[关键词]",
      "[语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "自媒体",
      "视频标题",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7150,
    likes: 570,
    copies: 1450,
    copyCount: 1450,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "YouTube 标题优化：可复制 Prompt 模板",
    seoDescription: "YouTube 标题优化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-prd-draft",
    title: "产品需求文档",
    slug: "prd-draft",
    summary: "产品需求文档模板，适合中文用户快速完成PRD 草稿任务。",
    description: "产品需求文档模板，适合中文用户快速完成PRD 草稿任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「PRD 草稿」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「PRD 草稿」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office",
      "ai-writing"
    ],
    type: "办公",
    relatedToolSlugs: [
      "notion-ai",
      "claude"
    ],
    relatedTools: [
      "notion-ai",
      "claude"
    ],
    applicableModels: [
      "Claude",
      "ChatGPT"
    ],
    models: [
      "Claude",
      "ChatGPT"
    ],
    tasks: [
      "PRD 草稿"
    ],
    task: "PRD 草稿",
    variables: [
      {
        name: "[产品目标]",
        description: "填写产品目标的真实信息，避免空泛。"
      },
      {
        name: "[用户]",
        description: "填写用户的真实信息，避免空泛。"
      },
      {
        name: "[功能]",
        description: "填写功能的真实信息，避免空泛。"
      },
      {
        name: "[边界]",
        description: "填写边界的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品目标]",
      "[用户]",
      "[功能]",
      "[边界]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "PRD 草稿",
      "新手"
    ],
    difficulty: "beginner",
    views: 7241,
    likes: 579,
    copies: 1473,
    copyCount: 1473,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "产品需求文档：可复制 Prompt 模板",
    seoDescription: "产品需求文档，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-sql-explain",
    title: "SQL 查询解释",
    slug: "sql-explain",
    summary: "SQL 查询解释模板，适合中文用户快速完成SQL 解释任务。",
    description: "SQL 查询解释模板，适合中文用户快速完成SQL 解释任务。",
    prompt: "你是一名熟悉中文场景的数据分析助手。请基于以下信息完成「SQL 解释」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的数据分析助手。请基于以下信息完成「SQL 解释」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "数据分析",
    categorySlugs: [
      "ai-data",
      "ai-code"
    ],
    type: "数据分析",
    relatedToolSlugs: [
      "tableau-gpt",
      "chatgpt"
    ],
    relatedTools: [
      "tableau-gpt",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "SQL 解释"
    ],
    task: "SQL 解释",
    variables: [
      {
        name: "[SQL 语句]",
        description: "填写SQL 语句的真实信息，避免空泛。"
      },
      {
        name: "[表结构]",
        description: "填写表结构的真实信息，避免空泛。"
      },
      {
        name: "[问题]",
        description: "填写问题的真实信息，避免空泛。"
      },
      {
        name: "[目标]",
        description: "填写目标的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[SQL 语句]",
      "[表结构]",
      "[问题]",
      "[目标]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "数据分析",
      "SQL 解释",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 7332,
    likes: 588,
    copies: 1496,
    copyCount: 1496,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "SQL 查询解释：可复制 Prompt 模板",
    seoDescription: "SQL 查询解释，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-data-visualization",
    title: "数据可视化建议",
    slug: "data-visualization",
    summary: "数据可视化建议模板，适合中文用户快速完成可视化建议任务。",
    description: "数据可视化建议模板，适合中文用户快速完成可视化建议任务。",
    prompt: "你是一名熟悉中文场景的数据分析助手。请基于以下信息完成「可视化建议」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的数据分析助手。请基于以下信息完成「可视化建议」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "数据分析",
    categorySlugs: [
      "ai-data",
      "ai-office"
    ],
    type: "数据分析",
    relatedToolSlugs: [
      "tableau-gpt",
      "napkin-ai"
    ],
    relatedTools: [
      "tableau-gpt",
      "napkin-ai"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "可视化建议"
    ],
    task: "可视化建议",
    variables: [
      {
        name: "[数据字段]",
        description: "填写数据字段的真实信息，避免空泛。"
      },
      {
        name: "[指标]",
        description: "填写指标的真实信息，避免空泛。"
      },
      {
        name: "[受众]",
        description: "填写受众的真实信息，避免空泛。"
      },
      {
        name: "[结论]",
        description: "填写结论的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[数据字段]",
      "[指标]",
      "[受众]",
      "[结论]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "数据分析",
      "可视化建议",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7423,
    likes: 597,
    copies: 1519,
    copyCount: 1519,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "数据可视化建议：可复制 Prompt 模板",
    seoDescription: "数据可视化建议，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-competitor-analysis",
    title: "竞品分析框架",
    slug: "competitor-analysis",
    summary: "竞品分析框架模板，适合中文用户快速完成竞品分析任务。",
    description: "竞品分析框架模板，适合中文用户快速完成竞品分析任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「竞品分析」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「竞品分析」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office",
      "ai-search"
    ],
    type: "办公",
    relatedToolSlugs: [
      "perplexity",
      "deepseek"
    ],
    relatedTools: [
      "perplexity",
      "deepseek"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek",
      "Perplexity"
    ],
    models: [
      "ChatGPT",
      "DeepSeek",
      "Perplexity"
    ],
    tasks: [
      "竞品分析"
    ],
    task: "竞品分析",
    variables: [
      {
        name: "[竞品名称]",
        description: "填写竞品名称的真实信息，避免空泛。"
      },
      {
        name: "[分析维度]",
        description: "填写分析维度的真实信息，避免空泛。"
      },
      {
        name: "[目标市场]",
        description: "填写目标市场的真实信息，避免空泛。"
      },
      {
        name: "[输出格式]",
        description: "填写输出格式的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[竞品名称]",
      "[分析维度]",
      "[目标市场]",
      "[输出格式]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "竞品分析",
      "新手"
    ],
    difficulty: "advanced",
    views: 7514,
    likes: 606,
    copies: 1542,
    copyCount: 1542,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "竞品分析框架：可复制 Prompt 模板",
    seoDescription: "竞品分析框架，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-user-interview-outline",
    title: "用户访谈提纲",
    slug: "user-interview-outline",
    summary: "用户访谈提纲模板，适合中文用户快速完成访谈提纲任务。",
    description: "用户访谈提纲模板，适合中文用户快速完成访谈提纲任务。",
    prompt: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「访谈提纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的办公助手。请基于以下信息完成「访谈提纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "办公",
    categorySlugs: [
      "ai-office",
      "ai-writing"
    ],
    type: "办公",
    relatedToolSlugs: [
      "claude",
      "chatgpt"
    ],
    relatedTools: [
      "claude",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "访谈提纲"
    ],
    task: "访谈提纲",
    variables: [
      {
        name: "[产品]",
        description: "填写产品的真实信息，避免空泛。"
      },
      {
        name: "[用户类型]",
        description: "填写用户类型的真实信息，避免空泛。"
      },
      {
        name: "[研究目标]",
        description: "填写研究目标的真实信息，避免空泛。"
      },
      {
        name: "[问题数量]",
        description: "填写问题数量的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[产品]",
      "[用户类型]",
      "[研究目标]",
      "[问题数量]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "办公",
      "访谈提纲",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7605,
    likes: 615,
    copies: 1565,
    copyCount: 1565,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "用户访谈提纲：可复制 Prompt 模板",
    seoDescription: "用户访谈提纲，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-customer-knowledge-base",
    title: "客服知识库问答",
    slug: "customer-knowledge-base",
    summary: "客服知识库问答模板，适合中文用户快速完成知识库问答任务。",
    description: "客服知识库问答模板，适合中文用户快速完成知识库问答任务。",
    prompt: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「知识库问答」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的电商助手。请基于以下信息完成「知识库问答」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "电商",
    categorySlugs: [
      "ai-ecommerce",
      "ai-office"
    ],
    type: "电商",
    relatedToolSlugs: [
      "dify",
      "coze"
    ],
    relatedTools: [
      "dify",
      "coze"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepSeek"
    ],
    models: [
      "ChatGPT",
      "DeepSeek"
    ],
    tasks: [
      "知识库问答"
    ],
    task: "知识库问答",
    variables: [
      {
        name: "[知识库内容]",
        description: "填写知识库内容的真实信息，避免空泛。"
      },
      {
        name: "[用户问题]",
        description: "填写用户问题的真实信息，避免空泛。"
      },
      {
        name: "[回答风格]",
        description: "填写回答风格的真实信息，避免空泛。"
      },
      {
        name: "[限制]",
        description: "填写限制的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[知识库内容]",
      "[用户问题]",
      "[回答风格]",
      "[限制]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "电商",
      "知识库问答",
      "可复制"
    ],
    difficulty: "intermediate",
    views: 7696,
    likes: 624,
    copies: 1588,
    copyCount: 1588,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "客服知识库问答：可复制 Prompt 模板",
    seoDescription: "客服知识库问答，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-localization-adaptation",
    title: "多语言本地化",
    slug: "localization-adaptation",
    summary: "多语言本地化模板，适合中文用户快速完成本地化改写任务。",
    description: "多语言本地化模板，适合中文用户快速完成本地化改写任务。",
    prompt: "你是一名熟悉中文场景的翻译助手。请基于以下信息完成「本地化改写」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的翻译助手。请基于以下信息完成「本地化改写」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "翻译",
    categorySlugs: [
      "ai-translation",
      "ai-writing"
    ],
    type: "翻译",
    relatedToolSlugs: [
      "deepl",
      "chatgpt"
    ],
    relatedTools: [
      "deepl",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "DeepL"
    ],
    models: [
      "ChatGPT",
      "DeepL"
    ],
    tasks: [
      "本地化改写"
    ],
    task: "本地化改写",
    variables: [
      {
        name: "[原文]",
        description: "填写原文的真实信息，避免空泛。"
      },
      {
        name: "[目标语言]",
        description: "填写目标语言的真实信息，避免空泛。"
      },
      {
        name: "[地区]",
        description: "填写地区的真实信息，避免空泛。"
      },
      {
        name: "[品牌语气]",
        description: "填写品牌语气的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[原文]",
      "[目标语言]",
      "[地区]",
      "[品牌语气]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "翻译",
      "本地化改写",
      "新手"
    ],
    difficulty: "beginner",
    views: 7787,
    likes: 633,
    copies: 1611,
    copyCount: 1611,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "多语言本地化：可复制 Prompt 模板",
    seoDescription: "多语言本地化，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-podcast-outline",
    title: "播客节目大纲",
    slug: "podcast-outline",
    summary: "播客节目大纲模板，适合中文用户快速完成播客大纲任务。",
    description: "播客节目大纲模板，适合中文用户快速完成播客大纲任务。",
    prompt: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「播客大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的自媒体助手。请基于以下信息完成「播客大纲」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "自媒体",
    categorySlugs: [
      "ai-social-media",
      "ai-audio"
    ],
    type: "自媒体",
    relatedToolSlugs: [
      "descript",
      "chatgpt"
    ],
    relatedTools: [
      "descript",
      "chatgpt"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "播客大纲"
    ],
    task: "播客大纲",
    variables: [
      {
        name: "[主题]",
        description: "填写主题的真实信息，避免空泛。"
      },
      {
        name: "[嘉宾]",
        description: "填写嘉宾的真实信息，避免空泛。"
      },
      {
        name: "[时长]",
        description: "填写时长的真实信息，避免空泛。"
      },
      {
        name: "[听众]",
        description: "填写听众的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[主题]",
      "[嘉宾]",
      "[时长]",
      "[听众]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "自媒体",
      "播客大纲",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7878,
    likes: 642,
    copies: 1634,
    copyCount: 1634,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "播客节目大纲：可复制 Prompt 模板",
    seoDescription: "播客节目大纲，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  },
  {
    id: "prompt-agent-workflow-design",
    title: "Agent 工作流设计",
    slug: "agent-workflow-design",
    summary: "Agent 工作流设计模板，适合中文用户快速完成Agent 工作流任务。",
    description: "Agent 工作流设计模板，适合中文用户快速完成Agent 工作流任务。",
    prompt: "你是一名熟悉中文场景的自动化助手。请基于以下信息完成「Agent 工作流」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    body: "你是一名熟悉中文场景的自动化助手。请基于以下信息完成「Agent 工作流」任务：\n- 主题：[主题]\n- 目标人群：[目标人群]\n- 背景素材：[背景素材]\n- 风格要求：[风格]\n- 输出格式：[输出格式]\n\n请先给出结构，再生成可直接使用的内容，最后列出需要人工核对的事项。",
    category: "自动化",
    categorySlugs: [
      "ai-agent",
      "ai-automation"
    ],
    type: "自动化",
    relatedToolSlugs: [
      "dify",
      "coze"
    ],
    relatedTools: [
      "dify",
      "coze"
    ],
    applicableModels: [
      "ChatGPT",
      "Claude"
    ],
    models: [
      "ChatGPT",
      "Claude"
    ],
    tasks: [
      "Agent 工作流"
    ],
    task: "Agent 工作流",
    variables: [
      {
        name: "[任务目标]",
        description: "填写任务目标的真实信息，避免空泛。"
      },
      {
        name: "[可用工具]",
        description: "填写可用工具的真实信息，避免空泛。"
      },
      {
        name: "[触发条件]",
        description: "填写触发条件的真实信息，避免空泛。"
      },
      {
        name: "[输出结果]",
        description: "填写输出结果的真实信息，避免空泛。"
      }
    ],
    variableNames: [
      "[任务目标]",
      "[可用工具]",
      "[触发条件]",
      "[输出结果]"
    ],
    exampleInput: "主题：新品发布；目标人群：25-35 岁职场用户；风格：清晰、有行动建议。",
    exampleOutputSummary: "会输出结构化内容、可复制正文和人工核对清单。",
    usage: [
      "替换变量",
      "先生成初稿",
      "根据真实素材追问优化",
      "发布前人工核对"
    ],
    effect: "提升初稿速度，让输出更贴近真实业务场景。",
    badExample: "只写“帮我生成一段内容”，没有主题、受众和格式。",
    failureReasons: [
      "变量缺失",
      "素材不真实",
      "一次要求太多风格"
    ],
    optimizationTips: [
      "补充真实案例",
      "指定输出格式",
      "要求列出核对清单"
    ],
    relatedPrompts: [],
    tags: [
      "自动化",
      "Agent 工作流",
      "可复制"
    ],
    difficulty: "beginner",
    views: 7969,
    likes: 651,
    copies: 1657,
    copyCount: 1657,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    seoTitle: "Agent 工作流设计：可复制 Prompt 模板",
    seoDescription: "Agent 工作流设计，包含适用模型、变量说明、示例输入、使用方法和优化建议。",
    status: "published"
  }
]
export const prompts = mockPrompts
export default mockPrompts
