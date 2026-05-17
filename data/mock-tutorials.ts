export interface MockTutorial { [key: string]: any }

export const tutorials: MockTutorial[] = [
  {
    id: "tutorial-chatgpt-guide",
    title: "ChatGPT 高效使用指南",
    slug: "chatgpt-guide",
    summary: "ChatGPT 高效使用指南：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "ChatGPT 高效使用指南：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "beginner",
      "ai-writing"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "AI 新手",
      "学生",
      "职场用户"
    ],
    audiences: [
      "AI 新手",
      "学生",
      "职场用户"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "chatgpt"
    ],
    relatedToolSlugs: [
      "chatgpt"
    ],
    toolNames: [
      "ChatGPT"
    ],
    keyword: "ChatGPT",
    gradient: "bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900",
    coverTheme: "chatgpt",
    coverGradient: "from-slate-700 via-slate-800 to-zinc-900",
    views: 4800,
    likes: 240,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 ChatGPT 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 ChatGPT 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 ChatGPT 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "ChatGPT 高效使用指南通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "ChatGPT 高效使用指南适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "ChatGPT",
      "新手"
    ],
    seoTitle: "ChatGPT 高效使用指南：步骤、提示词和常见错误",
    seoDescription: "ChatGPT 高效使用指南，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-deepseek-beginner",
    title: "DeepSeek 新手入门教程",
    slug: "deepseek-beginner",
    summary: "DeepSeek 新手入门教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "DeepSeek 新手入门教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "beginner",
      "ai-writing",
      "ai-code"
    ],
    type: "教程",
    difficulty: "新手",
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
    duration: "16 分钟",
    estimatedMinutes: 16,
    tools: [
      "deepseek"
    ],
    relatedToolSlugs: [
      "deepseek"
    ],
    toolNames: [
      "DeepSeek"
    ],
    keyword: "DeepSeek",
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500",
    coverTheme: "deepseek",
    coverGradient: "from-blue-500 via-cyan-500 to-sky-500",
    views: 5141,
    likes: 253,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 DeepSeek 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 DeepSeek 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 DeepSeek 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "DeepSeek 新手入门教程通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "DeepSeek 新手入门教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "DeepSeek",
      "新手"
    ],
    seoTitle: "DeepSeek 新手入门教程：步骤、提示词和常见错误",
    seoDescription: "DeepSeek 新手入门教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-kimi-long-doc-summary",
    title: "Kimi 长文档总结教程",
    slug: "kimi-long-doc-summary",
    summary: "Kimi 长文档总结教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Kimi 长文档总结教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "beginner",
      "ai-research",
      "ai-writing"
    ],
    type: "教程",
    difficulty: "新手",
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
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "kimi"
    ],
    relatedToolSlugs: [
      "kimi"
    ],
    toolNames: [
      "Kimi"
    ],
    keyword: "Kimi",
    gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
    coverTheme: "research",
    coverGradient: "from-emerald-500 via-teal-500 to-cyan-500",
    views: 5482,
    likes: 266,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Kimi 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Kimi 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Kimi 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Kimi 长文档总结教程通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Kimi 长文档总结教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "Kimi",
      "新手"
    ],
    seoTitle: "Kimi 长文档总结教程：步骤、提示词和常见错误",
    seoDescription: "Kimi 长文档总结教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-doubao-writing-guide",
    title: "豆包 AI 写作教程",
    slug: "doubao-writing-guide",
    summary: "豆包 AI 写作教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "豆包 AI 写作教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "beginner",
      "ai-writing",
      "ai-social-media"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "自媒体",
      "办公族",
      "新手"
    ],
    audiences: [
      "自媒体",
      "办公族",
      "新手"
    ],
    duration: "16 分钟",
    estimatedMinutes: 16,
    tools: [
      "doubao"
    ],
    relatedToolSlugs: [
      "doubao"
    ],
    toolNames: [
      "豆包"
    ],
    keyword: "豆包",
    gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400",
    coverTheme: "writing",
    coverGradient: "from-pink-500 via-rose-500 to-orange-400",
    views: 5823,
    likes: 279,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 豆包 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 豆包 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 豆包 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "豆包 AI 写作教程通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "豆包 AI 写作教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "豆包",
      "新手"
    ],
    seoTitle: "豆包 AI 写作教程：步骤、提示词和常见错误",
    seoDescription: "豆包 AI 写作教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-tongyi-office-guide",
    title: "通义千问办公教程",
    slug: "tongyi-office-guide",
    summary: "通义千问办公教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "通义千问办公教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "beginner",
      "ai-office",
      "ai-writing"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "办公族",
      "企业用户"
    ],
    audiences: [
      "办公族",
      "企业用户"
    ],
    duration: "20 分钟",
    estimatedMinutes: 20,
    tools: [
      "tongyi"
    ],
    relatedToolSlugs: [
      "tongyi"
    ],
    toolNames: [
      "通义千问"
    ],
    keyword: "通义千问",
    gradient: "bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500",
    coverTheme: "office",
    coverGradient: "from-blue-600 via-indigo-500 to-violet-500",
    views: 6164,
    likes: 292,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 通义千问 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 通义千问 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 通义千问 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "通义千问办公教程通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "通义千问办公教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "通义千问",
      "新手"
    ],
    seoTitle: "通义千问办公教程：步骤、提示词和常见错误",
    seoDescription: "通义千问办公教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-claude-long-writing",
    title: "Claude 长文写作教程",
    slug: "claude-long-writing",
    summary: "Claude 长文写作教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Claude 长文写作教程：围绕新手入门的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "新手入门",
    categorySlugs: [
      "ai-writing",
      "ai-research"
    ],
    type: "实战",
    difficulty: "进阶",
    audience: [
      "写作者",
      "研究员"
    ],
    audiences: [
      "写作者",
      "研究员"
    ],
    duration: "24 分钟",
    estimatedMinutes: 24,
    tools: [
      "claude"
    ],
    relatedToolSlugs: [
      "claude"
    ],
    toolNames: [
      "Claude"
    ],
    keyword: "Claude",
    gradient: "bg-gradient-to-br from-stone-700 via-orange-600 to-amber-500",
    coverTheme: "writing",
    coverGradient: "from-stone-700 via-orange-600 to-amber-500",
    views: 6505,
    likes: 305,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Claude 完成一个可复用的新手入门工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Claude 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 新手入门 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Claude 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成新手入门任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Claude 长文写作教程通用提示词",
        prompt: "请作为新手入门助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Claude 长文写作教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "新手入门",
      "Claude",
      "进阶"
    ],
    seoTitle: "Claude 长文写作教程：步骤、提示词和常见错误",
    seoDescription: "Claude 长文写作教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-cursor-beginner",
    title: "Cursor 编程入门教程",
    slug: "cursor-beginner",
    summary: "Cursor 编程入门教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Cursor 编程入门教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "程序员",
      "独立开发者"
    ],
    audiences: [
      "程序员",
      "独立开发者"
    ],
    duration: "28 分钟",
    estimatedMinutes: 28,
    tools: [
      "cursor"
    ],
    relatedToolSlugs: [
      "cursor"
    ],
    toolNames: [
      "Cursor"
    ],
    keyword: "Cursor",
    gradient: "bg-gradient-to-br from-zinc-800 via-slate-700 to-blue-700",
    coverTheme: "code",
    coverGradient: "from-zinc-800 via-slate-700 to-blue-700",
    views: 6846,
    likes: 318,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Cursor 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Cursor 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Cursor 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Cursor 编程入门教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Cursor 编程入门教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "Cursor",
      "进阶"
    ],
    seoTitle: "Cursor 编程入门教程：步骤、提示词和常见错误",
    seoDescription: "Cursor 编程入门教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-github-copilot-guide",
    title: "GitHub Copilot 使用教程",
    slug: "github-copilot-guide",
    summary: "GitHub Copilot 使用教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "GitHub Copilot 使用教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "程序员",
      "团队开发者"
    ],
    audiences: [
      "程序员",
      "团队开发者"
    ],
    duration: "24 分钟",
    estimatedMinutes: 24,
    tools: [
      "github-copilot"
    ],
    relatedToolSlugs: [
      "github-copilot"
    ],
    toolNames: [
      "GitHub Copilot"
    ],
    keyword: "GitHub Copilot",
    gradient: "bg-gradient-to-br from-gray-800 via-slate-700 to-emerald-600",
    coverTheme: "code",
    coverGradient: "from-gray-800 via-slate-700 to-emerald-600",
    views: 7187,
    likes: 331,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 GitHub Copilot 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 GitHub Copilot 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 GitHub Copilot 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "GitHub Copilot 使用教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "GitHub Copilot 使用教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "GitHub Copilot",
      "进阶"
    ],
    seoTitle: "GitHub Copilot 使用教程：步骤、提示词和常见错误",
    seoDescription: "GitHub Copilot 使用教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-windsurf-project-guide",
    title: "Windsurf 项目开发教程",
    slug: "windsurf-project-guide",
    summary: "Windsurf 项目开发教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Windsurf 项目开发教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code"
    ],
    type: "技巧",
    difficulty: "进阶",
    audience: [
      "程序员",
      "AI 编程新手"
    ],
    audiences: [
      "程序员",
      "AI 编程新手"
    ],
    duration: "30 分钟",
    estimatedMinutes: 30,
    tools: [
      "windsurf"
    ],
    relatedToolSlugs: [
      "windsurf"
    ],
    toolNames: [
      "Windsurf"
    ],
    keyword: "Windsurf",
    gradient: "bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700",
    coverTheme: "code",
    coverGradient: "from-cyan-600 via-blue-600 to-indigo-700",
    views: 7528,
    likes: 344,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Windsurf 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Windsurf 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Windsurf 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Windsurf 项目开发教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Windsurf 项目开发教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "Windsurf",
      "进阶"
    ],
    seoTitle: "Windsurf 项目开发教程：步骤、提示词和常见错误",
    seoDescription: "Windsurf 项目开发教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-v0-frontend-page",
    title: "v0 生成前端页面教程",
    slug: "v0-frontend-page",
    summary: "v0 生成前端页面教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "v0 生成前端页面教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code",
      "ai-design"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "前端开发者",
      "产品经理"
    ],
    audiences: [
      "前端开发者",
      "产品经理"
    ],
    duration: "22 分钟",
    estimatedMinutes: 22,
    tools: [
      "v0"
    ],
    relatedToolSlugs: [
      "v0"
    ],
    toolNames: [
      "v0"
    ],
    keyword: "v0",
    gradient: "bg-gradient-to-br from-black via-zinc-800 to-blue-700",
    coverTheme: "code",
    coverGradient: "from-black via-zinc-800 to-blue-700",
    views: 7869,
    likes: 357,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 v0 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 v0 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 v0 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "v0 生成前端页面教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "v0 生成前端页面教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "v0",
      "新手"
    ],
    seoTitle: "v0 生成前端页面教程：步骤、提示词和常见错误",
    seoDescription: "v0 生成前端页面教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-bolt-new-prototype",
    title: "Bolt.new 快速做原型教程",
    slug: "bolt-new-prototype",
    summary: "Bolt.new 快速做原型教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Bolt.new 快速做原型教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "独立开发者",
      "创业者"
    ],
    audiences: [
      "独立开发者",
      "创业者"
    ],
    duration: "26 分钟",
    estimatedMinutes: 26,
    tools: [
      "bolt-new"
    ],
    relatedToolSlugs: [
      "bolt-new"
    ],
    toolNames: [
      "Bolt.new"
    ],
    keyword: "Bolt.new",
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    coverTheme: "code",
    coverGradient: "from-yellow-500 via-orange-500 to-red-500",
    views: 8210,
    likes: 370,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Bolt.new 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Bolt.new 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Bolt.new 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Bolt.new 快速做原型教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Bolt.new 快速做原型教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "Bolt.new",
      "新手"
    ],
    seoTitle: "Bolt.new 快速做原型教程：步骤、提示词和常见错误",
    seoDescription: "Bolt.new 快速做原型教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-lovable-web-app",
    title: "Lovable 做 Web App 教程",
    slug: "lovable-web-app",
    summary: "Lovable 做 Web App 教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Lovable 做 Web App 教程：围绕AI 编程的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 编程",
    categorySlugs: [
      "ai-code",
      "ai-agent"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "产品经理",
      "创业者"
    ],
    audiences: [
      "产品经理",
      "创业者"
    ],
    duration: "28 分钟",
    estimatedMinutes: 28,
    tools: [
      "lovable"
    ],
    relatedToolSlugs: [
      "lovable"
    ],
    toolNames: [
      "Lovable"
    ],
    keyword: "Lovable",
    gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600",
    coverTheme: "code",
    coverGradient: "from-pink-500 via-purple-500 to-indigo-600",
    views: 8551,
    likes: 383,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Lovable 完成一个可复用的AI 编程工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Lovable 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 编程 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Lovable 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 编程任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Lovable 做 Web App 教程通用提示词",
        prompt: "请作为AI 编程助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Lovable 做 Web App 教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 编程",
      "Lovable",
      "新手"
    ],
    seoTitle: "Lovable 做 Web App 教程：步骤、提示词和常见错误",
    seoDescription: "Lovable 做 Web App 教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-midjourney-prompt-guide",
    title: "Midjourney 提示词技巧",
    slug: "midjourney-prompt-guide",
    summary: "Midjourney 提示词技巧：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Midjourney 提示词技巧：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "技巧",
    difficulty: "进阶",
    audience: [
      "设计师",
      "插画师"
    ],
    audiences: [
      "设计师",
      "插画师"
    ],
    duration: "25 分钟",
    estimatedMinutes: 25,
    tools: [
      "midjourney"
    ],
    relatedToolSlugs: [
      "midjourney"
    ],
    toolNames: [
      "Midjourney"
    ],
    keyword: "Midjourney",
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500",
    coverTheme: "image",
    coverGradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
    views: 8892,
    likes: 396,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Midjourney 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Midjourney 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Midjourney 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Midjourney 提示词技巧通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Midjourney 提示词技巧适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "Midjourney",
      "进阶"
    ],
    seoTitle: "Midjourney 提示词技巧：步骤、提示词和常见错误",
    seoDescription: "Midjourney 提示词技巧，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-jimeng-image-guide",
    title: "即梦 AI 生成图片教程",
    slug: "jimeng-image-guide",
    summary: "即梦 AI 生成图片教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "即梦 AI 生成图片教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "自媒体",
      "电商运营"
    ],
    audiences: [
      "自媒体",
      "电商运营"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "jimeng"
    ],
    relatedToolSlugs: [
      "jimeng"
    ],
    toolNames: [
      "即梦 AI"
    ],
    keyword: "即梦 AI",
    gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
    coverTheme: "image",
    coverGradient: "from-purple-500 via-pink-500 to-rose-500",
    views: 9233,
    likes: 409,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 即梦 AI 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 即梦 AI 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 即梦 AI 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "即梦 AI 生成图片教程通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "即梦 AI 生成图片教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "即梦 AI",
      "新手"
    ],
    seoTitle: "即梦 AI 生成图片教程：步骤、提示词和常见错误",
    seoDescription: "即梦 AI 生成图片教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-stable-diffusion-beginner",
    title: "Stable Diffusion 新手教程",
    slug: "stable-diffusion-beginner",
    summary: "Stable Diffusion 新手教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Stable Diffusion 新手教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "设计师",
      "AI 绘图玩家"
    ],
    audiences: [
      "设计师",
      "AI 绘图玩家"
    ],
    duration: "32 分钟",
    estimatedMinutes: 32,
    tools: [
      "stable-diffusion"
    ],
    relatedToolSlugs: [
      "stable-diffusion"
    ],
    toolNames: [
      "Stable Diffusion"
    ],
    keyword: "Stable Diffusion",
    gradient: "bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-600",
    coverTheme: "image",
    coverGradient: "from-blue-700 via-violet-700 to-fuchsia-600",
    views: 9574,
    likes: 422,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Stable Diffusion 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Stable Diffusion 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Stable Diffusion 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Stable Diffusion 新手教程通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Stable Diffusion 新手教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "Stable Diffusion",
      "进阶"
    ],
    seoTitle: "Stable Diffusion 新手教程：步骤、提示词和常见错误",
    seoDescription: "Stable Diffusion 新手教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-canva-ai-poster",
    title: "Canva AI 海报设计教程",
    slug: "canva-ai-poster",
    summary: "Canva AI 海报设计教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Canva AI 海报设计教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-design",
      "ai-image"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "运营",
      "教师",
      "设计新手"
    ],
    audiences: [
      "运营",
      "教师",
      "设计新手"
    ],
    duration: "20 分钟",
    estimatedMinutes: 20,
    tools: [
      "canva-ai"
    ],
    relatedToolSlugs: [
      "canva-ai"
    ],
    toolNames: [
      "Canva AI"
    ],
    keyword: "Canva AI",
    gradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500",
    coverTheme: "design",
    coverGradient: "from-cyan-500 via-blue-500 to-purple-500",
    views: 9915,
    likes: 435,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Canva AI 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Canva AI 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Canva AI 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Canva AI 海报设计教程通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Canva AI 海报设计教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "Canva AI",
      "新手"
    ],
    seoTitle: "Canva AI 海报设计教程：步骤、提示词和常见错误",
    seoDescription: "Canva AI 海报设计教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-ideogram-text-poster",
    title: "Ideogram 文字海报教程",
    slug: "ideogram-text-poster",
    summary: "Ideogram 文字海报教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Ideogram 文字海报教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "品牌运营",
      "设计师"
    ],
    audiences: [
      "品牌运营",
      "设计师"
    ],
    duration: "19 分钟",
    estimatedMinutes: 19,
    tools: [
      "ideogram"
    ],
    relatedToolSlugs: [
      "ideogram"
    ],
    toolNames: [
      "Ideogram"
    ],
    keyword: "Ideogram",
    gradient: "bg-gradient-to-br from-rose-500 via-orange-500 to-yellow-400",
    coverTheme: "design",
    coverGradient: "from-rose-500 via-orange-500 to-yellow-400",
    views: 10256,
    likes: 448,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Ideogram 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Ideogram 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Ideogram 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Ideogram 文字海报教程通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Ideogram 文字海报教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "Ideogram",
      "新手"
    ],
    seoTitle: "Ideogram 文字海报教程：步骤、提示词和常见错误",
    seoDescription: "Ideogram 文字海报教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-adobe-firefly-commercial-design",
    title: "Adobe Firefly 商业设计教程",
    slug: "adobe-firefly-commercial-design",
    summary: "Adobe Firefly 商业设计教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Adobe Firefly 商业设计教程：围绕AI 绘图的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 绘图",
    categorySlugs: [
      "ai-image",
      "ai-design"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "商业设计师",
      "品牌团队"
    ],
    audiences: [
      "商业设计师",
      "品牌团队"
    ],
    duration: "26 分钟",
    estimatedMinutes: 26,
    tools: [
      "adobe-firefly"
    ],
    relatedToolSlugs: [
      "adobe-firefly"
    ],
    toolNames: [
      "Adobe Firefly"
    ],
    keyword: "Adobe Firefly",
    gradient: "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
    coverTheme: "design",
    coverGradient: "from-red-500 via-orange-500 to-yellow-500",
    views: 10597,
    likes: 461,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Adobe Firefly 完成一个可复用的AI 绘图工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Adobe Firefly 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 绘图 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Adobe Firefly 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 绘图任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Adobe Firefly 商业设计教程通用提示词",
        prompt: "请作为AI 绘图助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Adobe Firefly 商业设计教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 绘图",
      "Adobe Firefly",
      "进阶"
    ],
    seoTitle: "Adobe Firefly 商业设计教程：步骤、提示词和常见错误",
    seoDescription: "Adobe Firefly 商业设计教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-runway-video-guide",
    title: "Runway 视频生成教程",
    slug: "runway-video-guide",
    summary: "Runway 视频生成教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Runway 视频生成教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "视频创作者",
      "品牌团队"
    ],
    audiences: [
      "视频创作者",
      "品牌团队"
    ],
    duration: "26 分钟",
    estimatedMinutes: 26,
    tools: [
      "runway"
    ],
    relatedToolSlugs: [
      "runway"
    ],
    toolNames: [
      "Runway"
    ],
    keyword: "Runway",
    gradient: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600",
    coverTheme: "video",
    coverGradient: "from-teal-500 via-cyan-500 to-blue-600",
    views: 10938,
    likes: 474,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Runway 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Runway 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Runway 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Runway 视频生成教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Runway 视频生成教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "Runway",
      "进阶"
    ],
    seoTitle: "Runway 视频生成教程：步骤、提示词和常见错误",
    seoDescription: "Runway 视频生成教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-pika-video-guide",
    title: "Pika 视频生成教程",
    slug: "pika-video-guide",
    summary: "Pika 视频生成教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Pika 视频生成教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "短视频创作者"
    ],
    audiences: [
      "短视频创作者"
    ],
    duration: "20 分钟",
    estimatedMinutes: 20,
    tools: [
      "pika"
    ],
    relatedToolSlugs: [
      "pika"
    ],
    toolNames: [
      "Pika"
    ],
    keyword: "Pika",
    gradient: "bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500",
    coverTheme: "video",
    coverGradient: "from-purple-500 via-indigo-500 to-sky-500",
    views: 11279,
    likes: 487,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Pika 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Pika 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Pika 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Pika 视频生成教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Pika 视频生成教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "Pika",
      "新手"
    ],
    seoTitle: "Pika 视频生成教程：步骤、提示词和常见错误",
    seoDescription: "Pika 视频生成教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-kling-video-guide",
    title: "可灵 AI 视频教程",
    slug: "kling-video-guide",
    summary: "可灵 AI 视频教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "可灵 AI 视频教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "短视频创作者",
      "品牌团队"
    ],
    audiences: [
      "短视频创作者",
      "品牌团队"
    ],
    duration: "22 分钟",
    estimatedMinutes: 22,
    tools: [
      "kling"
    ],
    relatedToolSlugs: [
      "kling"
    ],
    toolNames: [
      "可灵 AI"
    ],
    keyword: "可灵 AI",
    gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-500",
    coverTheme: "video",
    coverGradient: "from-green-500 via-emerald-500 to-cyan-500",
    views: 11620,
    likes: 500,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 可灵 AI 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 可灵 AI 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 可灵 AI 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "可灵 AI 视频教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "可灵 AI 视频教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "可灵 AI",
      "新手"
    ],
    seoTitle: "可灵 AI 视频教程：步骤、提示词和常见错误",
    seoDescription: "可灵 AI 视频教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-luma-dream-machine-guide",
    title: "Luma Dream Machine 教程",
    slug: "luma-dream-machine-guide",
    summary: "Luma Dream Machine 教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Luma Dream Machine 教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "视频创作者",
      "设计师"
    ],
    audiences: [
      "视频创作者",
      "设计师"
    ],
    duration: "24 分钟",
    estimatedMinutes: 24,
    tools: [
      "luma-dream-machine"
    ],
    relatedToolSlugs: [
      "luma-dream-machine"
    ],
    toolNames: [
      "Luma Dream Machine"
    ],
    keyword: "Luma Dream Machine",
    gradient: "bg-gradient-to-br from-slate-800 via-purple-700 to-indigo-500",
    coverTheme: "video",
    coverGradient: "from-slate-800 via-purple-700 to-indigo-500",
    views: 11961,
    likes: 513,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Luma Dream Machine 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Luma Dream Machine 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Luma Dream Machine 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Luma Dream Machine 教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Luma Dream Machine 教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "Luma Dream Machine",
      "进阶"
    ],
    seoTitle: "Luma Dream Machine 教程：步骤、提示词和常见错误",
    seoDescription: "Luma Dream Machine 教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-heygen-avatar-video",
    title: "HeyGen 数字人视频教程",
    slug: "heygen-avatar-video",
    summary: "HeyGen 数字人视频教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "HeyGen 数字人视频教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "企业培训",
      "销售团队"
    ],
    audiences: [
      "企业培训",
      "销售团队"
    ],
    duration: "21 分钟",
    estimatedMinutes: 21,
    tools: [
      "heygen"
    ],
    relatedToolSlugs: [
      "heygen"
    ],
    toolNames: [
      "HeyGen"
    ],
    keyword: "HeyGen",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
    coverTheme: "video",
    coverGradient: "from-blue-500 via-indigo-500 to-purple-600",
    views: 12302,
    likes: 526,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 HeyGen 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 HeyGen 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 HeyGen 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "HeyGen 数字人视频教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "HeyGen 数字人视频教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "HeyGen",
      "新手"
    ],
    seoTitle: "HeyGen 数字人视频教程：步骤、提示词和常见错误",
    seoDescription: "HeyGen 数字人视频教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-capcut-ai-editing",
    title: "CapCut AI 剪辑教程",
    slug: "capcut-ai-editing",
    summary: "CapCut AI 剪辑教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "CapCut AI 剪辑教程：围绕AI 视频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 视频",
    categorySlugs: [
      "ai-video",
      "ai-social-media"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "自媒体",
      "短视频运营"
    ],
    audiences: [
      "自媒体",
      "短视频运营"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "capcut-ai"
    ],
    relatedToolSlugs: [
      "capcut-ai"
    ],
    toolNames: [
      "CapCut AI"
    ],
    keyword: "CapCut AI",
    gradient: "bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600",
    coverTheme: "video",
    coverGradient: "from-cyan-500 via-sky-500 to-blue-600",
    views: 12643,
    likes: 539,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 CapCut AI 完成一个可复用的AI 视频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 CapCut AI 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 视频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 CapCut AI 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 视频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "CapCut AI 剪辑教程通用提示词",
        prompt: "请作为AI 视频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "CapCut AI 剪辑教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 视频",
      "CapCut AI",
      "新手"
    ],
    seoTitle: "CapCut AI 剪辑教程：步骤、提示词和常见错误",
    seoDescription: "CapCut AI 剪辑教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-ai-ppt-guide",
    title: "如何用 AI 一键生成 PPT",
    slug: "ai-ppt-guide",
    summary: "如何用 AI 一键生成 PPT：围绕AI PPT的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "如何用 AI 一键生成 PPT：围绕AI PPT的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "办公族",
      "教师",
      "销售"
    ],
    audiences: [
      "办公族",
      "教师",
      "销售"
    ],
    duration: "22 分钟",
    estimatedMinutes: 22,
    tools: [
      "gamma",
      "canva-ai"
    ],
    relatedToolSlugs: [
      "gamma",
      "canva-ai"
    ],
    toolNames: [
      "Gamma",
      "Canva AI"
    ],
    keyword: "Gamma",
    gradient: "bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500",
    coverTheme: "ppt",
    coverGradient: "from-violet-500 via-indigo-500 to-blue-500",
    views: 12984,
    likes: 552,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Gamma、Canva AI 完成一个可复用的AI PPT工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Gamma 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI PPT 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Gamma 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI PPT任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "如何用 AI 一键生成 PPT通用提示词",
        prompt: "请作为AI PPT助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "如何用 AI 一键生成 PPT适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI PPT",
      "Gamma",
      "新手"
    ],
    seoTitle: "如何用 AI 一键生成 PPT：步骤、提示词和常见错误",
    seoDescription: "如何用 AI 一键生成 PPT，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-gamma-presentation-guide",
    title: "Gamma 生成演示文稿教程",
    slug: "gamma-presentation-guide",
    summary: "Gamma 生成演示文稿教程：围绕AI PPT的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Gamma 生成演示文稿教程：围绕AI PPT的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI PPT",
    categorySlugs: [
      "ai-ppt",
      "ai-office"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "产品经理",
      "创业者"
    ],
    audiences: [
      "产品经理",
      "创业者"
    ],
    duration: "20 分钟",
    estimatedMinutes: 20,
    tools: [
      "gamma"
    ],
    relatedToolSlugs: [
      "gamma"
    ],
    toolNames: [
      "Gamma"
    ],
    keyword: "Gamma",
    gradient: "bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500",
    coverTheme: "ppt",
    coverGradient: "from-purple-600 via-indigo-500 to-blue-500",
    views: 13325,
    likes: 565,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Gamma 完成一个可复用的AI PPT工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Gamma 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI PPT 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Gamma 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI PPT任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Gamma 生成演示文稿教程通用提示词",
        prompt: "请作为AI PPT助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Gamma 生成演示文稿教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI PPT",
      "Gamma",
      "新手"
    ],
    seoTitle: "Gamma 生成演示文稿教程：步骤、提示词和常见错误",
    seoDescription: "Gamma 生成演示文稿教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-notion-ai-office",
    title: "Notion AI 办公效率教程",
    slug: "notion-ai-office",
    summary: "Notion AI 办公效率教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Notion AI 办公效率教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 办公",
    categorySlugs: [
      "ai-office",
      "ai-writing"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "产品经理",
      "团队协作用户"
    ],
    audiences: [
      "产品经理",
      "团队协作用户"
    ],
    duration: "17 分钟",
    estimatedMinutes: 17,
    tools: [
      "notion-ai"
    ],
    relatedToolSlugs: [
      "notion-ai"
    ],
    toolNames: [
      "Notion AI"
    ],
    keyword: "Notion AI",
    gradient: "bg-gradient-to-br from-zinc-800 via-slate-700 to-stone-500",
    coverTheme: "office",
    coverGradient: "from-zinc-800 via-slate-700 to-stone-500",
    views: 13666,
    likes: 578,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Notion AI 完成一个可复用的AI 办公工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Notion AI 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 办公 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Notion AI 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 办公任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Notion AI 办公效率教程通用提示词",
        prompt: "请作为AI 办公助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Notion AI 办公效率教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 办公",
      "Notion AI",
      "新手"
    ],
    seoTitle: "Notion AI 办公效率教程：步骤、提示词和常见错误",
    seoDescription: "Notion AI 办公效率教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-feishu-minutes-meeting",
    title: "飞书妙记会议总结教程",
    slug: "feishu-minutes-meeting",
    summary: "飞书妙记会议总结教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "飞书妙记会议总结教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 办公",
    categorySlugs: [
      "ai-meeting",
      "ai-office"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "办公族",
      "团队管理者"
    ],
    audiences: [
      "办公族",
      "团队管理者"
    ],
    duration: "15 分钟",
    estimatedMinutes: 15,
    tools: [
      "feishu-minutes"
    ],
    relatedToolSlugs: [
      "feishu-minutes"
    ],
    toolNames: [
      "飞书妙记"
    ],
    keyword: "飞书妙记",
    gradient: "bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400",
    coverTheme: "office",
    coverGradient: "from-blue-600 via-sky-500 to-cyan-400",
    views: 14007,
    likes: 591,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 飞书妙记 完成一个可复用的AI 办公工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 飞书妙记 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 办公 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 飞书妙记 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 办公任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "飞书妙记会议总结教程通用提示词",
        prompt: "请作为AI 办公助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "飞书妙记会议总结教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 办公",
      "飞书妙记",
      "新手"
    ],
    seoTitle: "飞书妙记会议总结教程：步骤、提示词和常见错误",
    seoDescription: "飞书妙记会议总结教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-otter-meeting-notes",
    title: "Otter.ai 会议记录教程",
    slug: "otter-meeting-notes",
    summary: "Otter.ai 会议记录教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Otter.ai 会议记录教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 办公",
    categorySlugs: [
      "ai-meeting",
      "ai-office"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "远程团队",
      "销售"
    ],
    audiences: [
      "远程团队",
      "销售"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "otter-ai"
    ],
    relatedToolSlugs: [
      "otter-ai"
    ],
    toolNames: [
      "Otter.ai"
    ],
    keyword: "Otter.ai",
    gradient: "bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600",
    coverTheme: "office",
    coverGradient: "from-sky-600 via-blue-600 to-indigo-600",
    views: 14348,
    likes: 604,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Otter.ai 完成一个可复用的AI 办公工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Otter.ai 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 办公 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Otter.ai 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 办公任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Otter.ai 会议记录教程通用提示词",
        prompt: "请作为AI 办公助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Otter.ai 会议记录教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 办公",
      "Otter.ai",
      "新手"
    ],
    seoTitle: "Otter.ai 会议记录教程：步骤、提示词和常见错误",
    seoDescription: "Otter.ai 会议记录教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-microsoft-copilot-office",
    title: "Microsoft Copilot 办公教程",
    slug: "microsoft-copilot-office",
    summary: "Microsoft Copilot 办公教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Microsoft Copilot 办公教程：围绕AI 办公的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 办公",
    categorySlugs: [
      "ai-office",
      "ai-ppt"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "企业用户",
      "办公族"
    ],
    audiences: [
      "企业用户",
      "办公族"
    ],
    duration: "24 分钟",
    estimatedMinutes: 24,
    tools: [
      "microsoft-copilot"
    ],
    relatedToolSlugs: [
      "microsoft-copilot"
    ],
    toolNames: [
      "Microsoft Copilot"
    ],
    keyword: "Microsoft Copilot",
    gradient: "bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-500",
    coverTheme: "office",
    coverGradient: "from-blue-600 via-cyan-600 to-emerald-500",
    views: 14689,
    likes: 617,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Microsoft Copilot 完成一个可复用的AI 办公工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Microsoft Copilot 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 办公 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Microsoft Copilot 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 办公任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Microsoft Copilot 办公教程通用提示词",
        prompt: "请作为AI 办公助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Microsoft Copilot 办公教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 办公",
      "Microsoft Copilot",
      "进阶"
    ],
    seoTitle: "Microsoft Copilot 办公教程：步骤、提示词和常见错误",
    seoDescription: "Microsoft Copilot 办公教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-paper-outline",
    title: "如何用 AI 写论文大纲",
    slug: "paper-outline",
    summary: "如何用 AI 写论文大纲：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "如何用 AI 写论文大纲：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research",
      "ai-writing"
    ],
    type: "实战",
    difficulty: "进阶",
    audience: [
      "学生",
      "论文党"
    ],
    audiences: [
      "学生",
      "论文党"
    ],
    duration: "24 分钟",
    estimatedMinutes: 24,
    tools: [
      "kimi",
      "claude"
    ],
    relatedToolSlugs: [
      "kimi",
      "claude"
    ],
    toolNames: [
      "Kimi",
      "Claude"
    ],
    keyword: "Kimi",
    gradient: "bg-gradient-to-br from-amber-400 via-blue-500 to-indigo-600",
    coverTheme: "research",
    coverGradient: "from-amber-400 via-blue-500 to-indigo-600",
    views: 15030,
    likes: 630,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Kimi、Claude 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Kimi 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Kimi 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "如何用 AI 写论文大纲通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "如何用 AI 写论文大纲适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "Kimi",
      "进阶"
    ],
    seoTitle: "如何用 AI 写论文大纲：步骤、提示词和常见错误",
    seoDescription: "如何用 AI 写论文大纲，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-elicit-literature-search",
    title: "Elicit 文献检索教程",
    slug: "elicit-literature-search",
    summary: "Elicit 文献检索教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Elicit 文献检索教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "研究员",
      "学生"
    ],
    audiences: [
      "研究员",
      "学生"
    ],
    duration: "28 分钟",
    estimatedMinutes: 28,
    tools: [
      "elicit"
    ],
    relatedToolSlugs: [
      "elicit"
    ],
    toolNames: [
      "Elicit"
    ],
    keyword: "Elicit",
    gradient: "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500",
    coverTheme: "research",
    coverGradient: "from-emerald-600 via-teal-500 to-cyan-500",
    views: 15371,
    likes: 643,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Elicit 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Elicit 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Elicit 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Elicit 文献检索教程通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Elicit 文献检索教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "Elicit",
      "进阶"
    ],
    seoTitle: "Elicit 文献检索教程：步骤、提示词和常见错误",
    seoDescription: "Elicit 文献检索教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-scite-citation-analysis",
    title: "Scite 论文引用分析教程",
    slug: "scite-citation-analysis",
    summary: "Scite 论文引用分析教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Scite 论文引用分析教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research"
    ],
    type: "技巧",
    difficulty: "进阶",
    audience: [
      "研究员",
      "论文作者"
    ],
    audiences: [
      "研究员",
      "论文作者"
    ],
    duration: "26 分钟",
    estimatedMinutes: 26,
    tools: [
      "scite"
    ],
    relatedToolSlugs: [
      "scite"
    ],
    toolNames: [
      "Scite"
    ],
    keyword: "Scite",
    gradient: "bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500",
    coverTheme: "research",
    coverGradient: "from-indigo-700 via-blue-600 to-cyan-500",
    views: 15712,
    likes: 656,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Scite 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Scite 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Scite 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Scite 论文引用分析教程通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Scite 论文引用分析教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "Scite",
      "进阶"
    ],
    seoTitle: "Scite 论文引用分析教程：步骤、提示词和常见错误",
    seoDescription: "Scite 论文引用分析教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-semantic-scholar-research",
    title: "Semantic Scholar 研究资料整理教程",
    slug: "semantic-scholar-research",
    summary: "Semantic Scholar 研究资料整理教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Semantic Scholar 研究资料整理教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "学生",
      "研究员"
    ],
    audiences: [
      "学生",
      "研究员"
    ],
    duration: "22 分钟",
    estimatedMinutes: 22,
    tools: [
      "semantic-scholar"
    ],
    relatedToolSlugs: [
      "semantic-scholar"
    ],
    toolNames: [
      "Semantic Scholar"
    ],
    keyword: "Semantic Scholar",
    gradient: "bg-gradient-to-br from-blue-700 via-sky-600 to-teal-500",
    coverTheme: "research",
    coverGradient: "from-blue-700 via-sky-600 to-teal-500",
    views: 16053,
    likes: 669,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Semantic Scholar 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Semantic Scholar 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Semantic Scholar 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Semantic Scholar 研究资料整理教程通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Semantic Scholar 研究资料整理教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "Semantic Scholar",
      "新手"
    ],
    seoTitle: "Semantic Scholar 研究资料整理教程：步骤、提示词和常见错误",
    seoDescription: "Semantic Scholar 研究资料整理教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-chatpdf-paper-reading",
    title: "ChatPDF 阅读论文教程",
    slug: "chatpdf-paper-reading",
    summary: "ChatPDF 阅读论文教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "ChatPDF 阅读论文教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "学生",
      "研究员"
    ],
    audiences: [
      "学生",
      "研究员"
    ],
    duration: "16 分钟",
    estimatedMinutes: 16,
    tools: [
      "chatpdf"
    ],
    relatedToolSlugs: [
      "chatpdf"
    ],
    toolNames: [
      "ChatPDF"
    ],
    keyword: "ChatPDF",
    gradient: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400",
    coverTheme: "research",
    coverGradient: "from-orange-500 via-amber-500 to-yellow-400",
    views: 16394,
    likes: 682,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 ChatPDF 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 ChatPDF 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 ChatPDF 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "ChatPDF 阅读论文教程通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "ChatPDF 阅读论文教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "ChatPDF",
      "新手"
    ],
    seoTitle: "ChatPDF 阅读论文教程：步骤、提示词和常见错误",
    seoDescription: "ChatPDF 阅读论文教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-research-rabbit-related-papers",
    title: "Research Rabbit 找相关论文教程",
    slug: "research-rabbit-related-papers",
    summary: "Research Rabbit 找相关论文教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Research Rabbit 找相关论文教程：围绕AI 论文的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 论文",
    categorySlugs: [
      "ai-research",
      "ai-search"
    ],
    type: "实战",
    difficulty: "进阶",
    audience: [
      "研究员",
      "论文党"
    ],
    audiences: [
      "研究员",
      "论文党"
    ],
    duration: "23 分钟",
    estimatedMinutes: 23,
    tools: [
      "research-rabbit"
    ],
    relatedToolSlugs: [
      "research-rabbit"
    ],
    toolNames: [
      "Research Rabbit"
    ],
    keyword: "Research Rabbit",
    gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500",
    coverTheme: "research",
    coverGradient: "from-pink-500 via-rose-500 to-orange-500",
    views: 16735,
    likes: 695,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Research Rabbit 完成一个可复用的AI 论文工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Research Rabbit 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 论文 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Research Rabbit 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 论文任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Research Rabbit 找相关论文教程通用提示词",
        prompt: "请作为AI 论文助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Research Rabbit 找相关论文教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 论文",
      "Research Rabbit",
      "进阶"
    ],
    seoTitle: "Research Rabbit 找相关论文教程：步骤、提示词和常见错误",
    seoDescription: "Research Rabbit 找相关论文教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-perplexity-source-check",
    title: "Perplexity 资料核对教程",
    slug: "perplexity-source-check",
    summary: "Perplexity 资料核对教程：围绕AI 搜索的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Perplexity 资料核对教程：围绕AI 搜索的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 搜索",
    categorySlugs: [
      "ai-search",
      "ai-research"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "研究员",
      "内容创作者"
    ],
    audiences: [
      "研究员",
      "内容创作者"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "perplexity"
    ],
    relatedToolSlugs: [
      "perplexity"
    ],
    toolNames: [
      "Perplexity"
    ],
    keyword: "Perplexity",
    gradient: "bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600",
    coverTheme: "search",
    coverGradient: "from-teal-600 via-cyan-500 to-blue-600",
    views: 17076,
    likes: 708,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Perplexity 完成一个可复用的AI 搜索工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Perplexity 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 搜索 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Perplexity 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 搜索任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Perplexity 资料核对教程通用提示词",
        prompt: "请作为AI 搜索助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Perplexity 资料核对教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 搜索",
      "Perplexity",
      "新手"
    ],
    seoTitle: "Perplexity 资料核对教程：步骤、提示词和常见错误",
    seoDescription: "Perplexity 资料核对教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-metaso-chinese-research",
    title: "秘塔 AI 搜索中文调研教程",
    slug: "metaso-chinese-research",
    summary: "秘塔 AI 搜索中文调研教程：围绕AI 搜索的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "秘塔 AI 搜索中文调研教程：围绕AI 搜索的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 搜索",
    categorySlugs: [
      "ai-search",
      "ai-research"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "学生",
      "中文内容创作者"
    ],
    audiences: [
      "学生",
      "中文内容创作者"
    ],
    duration: "17 分钟",
    estimatedMinutes: 17,
    tools: [
      "metaso"
    ],
    relatedToolSlugs: [
      "metaso"
    ],
    toolNames: [
      "秘塔 AI 搜索"
    ],
    keyword: "秘塔 AI 搜索",
    gradient: "bg-gradient-to-br from-emerald-500 via-cyan-500 to-sky-500",
    coverTheme: "search",
    coverGradient: "from-emerald-500 via-cyan-500 to-sky-500",
    views: 17417,
    likes: 721,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 秘塔 AI 搜索 完成一个可复用的AI 搜索工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 秘塔 AI 搜索 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 搜索 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 秘塔 AI 搜索 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 搜索任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "秘塔 AI 搜索中文调研教程通用提示词",
        prompt: "请作为AI 搜索助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "秘塔 AI 搜索中文调研教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 搜索",
      "秘塔 AI 搜索",
      "新手"
    ],
    seoTitle: "秘塔 AI 搜索中文调研教程：步骤、提示词和常见错误",
    seoDescription: "秘塔 AI 搜索中文调研教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-elevenlabs-voiceover-guide",
    title: "ElevenLabs 配音教程",
    slug: "elevenlabs-voiceover-guide",
    summary: "ElevenLabs 配音教程：围绕AI 音频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "ElevenLabs 配音教程：围绕AI 音频的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 音频",
    categorySlugs: [
      "ai-audio",
      "ai-video"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "视频创作者",
      "课程制作者"
    ],
    audiences: [
      "视频创作者",
      "课程制作者"
    ],
    duration: "21 分钟",
    estimatedMinutes: 21,
    tools: [
      "elevenlabs"
    ],
    relatedToolSlugs: [
      "elevenlabs"
    ],
    toolNames: [
      "ElevenLabs"
    ],
    keyword: "ElevenLabs",
    gradient: "bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500",
    coverTheme: "audio",
    coverGradient: "from-purple-600 via-pink-500 to-rose-500",
    views: 17758,
    likes: 734,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 ElevenLabs 完成一个可复用的AI 音频工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 ElevenLabs 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 音频 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 ElevenLabs 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 音频任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "ElevenLabs 配音教程通用提示词",
        prompt: "请作为AI 音频助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "ElevenLabs 配音教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 音频",
      "ElevenLabs",
      "新手"
    ],
    seoTitle: "ElevenLabs 配音教程：步骤、提示词和常见错误",
    seoDescription: "ElevenLabs 配音教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-deepl-translation-polish",
    title: "DeepL 翻译润色教程",
    slug: "deepl-translation-polish",
    summary: "DeepL 翻译润色教程：围绕AI 翻译的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "DeepL 翻译润色教程：围绕AI 翻译的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 翻译",
    categorySlugs: [
      "ai-translation",
      "ai-writing"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "外贸运营",
      "学生"
    ],
    audiences: [
      "外贸运营",
      "学生"
    ],
    duration: "14 分钟",
    estimatedMinutes: 14,
    tools: [
      "deepl"
    ],
    relatedToolSlugs: [
      "deepl"
    ],
    toolNames: [
      "DeepL"
    ],
    keyword: "DeepL",
    gradient: "bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-400",
    coverTheme: "translation",
    coverGradient: "from-blue-700 via-sky-600 to-cyan-400",
    views: 18099,
    likes: 747,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 DeepL 完成一个可复用的AI 翻译工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 DeepL 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 翻译 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 DeepL 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 翻译任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "DeepL 翻译润色教程通用提示词",
        prompt: "请作为AI 翻译助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "DeepL 翻译润色教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 翻译",
      "DeepL",
      "新手"
    ],
    seoTitle: "DeepL 翻译润色教程：步骤、提示词和常见错误",
    seoDescription: "DeepL 翻译润色教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-jobscan-resume-match",
    title: "Jobscan 简历匹配教程",
    slug: "jobscan-resume-match",
    summary: "Jobscan 简历匹配教程：围绕AI 简历求职的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Jobscan 简历匹配教程：围绕AI 简历求职的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 简历求职",
    categorySlugs: [
      "ai-resume"
    ],
    type: "实战",
    difficulty: "新手",
    audience: [
      "求职者",
      "学生"
    ],
    audiences: [
      "求职者",
      "学生"
    ],
    duration: "18 分钟",
    estimatedMinutes: 18,
    tools: [
      "jobscan"
    ],
    relatedToolSlugs: [
      "jobscan"
    ],
    toolNames: [
      "Jobscan"
    ],
    keyword: "Jobscan",
    gradient: "bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500",
    coverTheme: "resume",
    coverGradient: "from-green-600 via-emerald-500 to-teal-500",
    views: 18440,
    likes: 760,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Jobscan 完成一个可复用的AI 简历求职工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Jobscan 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 简历求职 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Jobscan 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 简历求职任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Jobscan 简历匹配教程通用提示词",
        prompt: "请作为AI 简历求职助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Jobscan 简历匹配教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 简历求职",
      "Jobscan",
      "新手"
    ],
    seoTitle: "Jobscan 简历匹配教程：步骤、提示词和常见错误",
    seoDescription: "Jobscan 简历匹配教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-photoroom-ecommerce-image",
    title: "PhotoRoom 电商主图教程",
    slug: "photoroom-ecommerce-image",
    summary: "PhotoRoom 电商主图教程：围绕AI 电商运营的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "PhotoRoom 电商主图教程：围绕AI 电商运营的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 电商运营",
    categorySlugs: [
      "ai-ecommerce",
      "ai-image"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "电商运营",
      "小商家"
    ],
    audiences: [
      "电商运营",
      "小商家"
    ],
    duration: "17 分钟",
    estimatedMinutes: 17,
    tools: [
      "photoroom"
    ],
    relatedToolSlugs: [
      "photoroom"
    ],
    toolNames: [
      "PhotoRoom"
    ],
    keyword: "PhotoRoom",
    gradient: "bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500",
    coverTheme: "design",
    coverGradient: "from-blue-500 via-violet-500 to-pink-500",
    views: 18781,
    likes: 773,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 PhotoRoom 完成一个可复用的AI 电商运营工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 PhotoRoom 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 电商运营 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 PhotoRoom 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 电商运营任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "PhotoRoom 电商主图教程通用提示词",
        prompt: "请作为AI 电商运营助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "PhotoRoom 电商主图教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 电商运营",
      "PhotoRoom",
      "新手"
    ],
    seoTitle: "PhotoRoom 电商主图教程：步骤、提示词和常见错误",
    seoDescription: "PhotoRoom 电商主图教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-opusclip-short-video",
    title: "OpusClip 长视频切片教程",
    slug: "opusclip-short-video",
    summary: "OpusClip 长视频切片教程：围绕AI 自媒体内容的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "OpusClip 长视频切片教程：围绕AI 自媒体内容的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI 自媒体内容",
    categorySlugs: [
      "ai-social-media",
      "ai-video"
    ],
    type: "教程",
    difficulty: "新手",
    audience: [
      "自媒体",
      "短视频运营"
    ],
    audiences: [
      "自媒体",
      "短视频运营"
    ],
    duration: "19 分钟",
    estimatedMinutes: 19,
    tools: [
      "opusclip"
    ],
    relatedToolSlugs: [
      "opusclip"
    ],
    toolNames: [
      "OpusClip"
    ],
    keyword: "OpusClip",
    gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    coverTheme: "video",
    coverGradient: "from-orange-500 via-red-500 to-pink-500",
    views: 19122,
    likes: 786,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 OpusClip 完成一个可复用的AI 自媒体内容工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 OpusClip 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI 自媒体内容 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 OpusClip 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI 自媒体内容任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "OpusClip 长视频切片教程通用提示词",
        prompt: "请作为AI 自媒体内容助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "OpusClip 长视频切片教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI 自媒体内容",
      "OpusClip",
      "新手"
    ],
    seoTitle: "OpusClip 长视频切片教程：步骤、提示词和常见错误",
    seoDescription: "OpusClip 长视频切片教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-dify-knowledge-agent",
    title: "Dify 搭建知识库助手教程",
    slug: "dify-knowledge-agent",
    summary: "Dify 搭建知识库助手教程：围绕AI Agent的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Dify 搭建知识库助手教程：围绕AI Agent的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI Agent",
    categorySlugs: [
      "ai-agent",
      "ai-automation"
    ],
    type: "教程",
    difficulty: "进阶",
    audience: [
      "产品经理",
      "开发者"
    ],
    audiences: [
      "产品经理",
      "开发者"
    ],
    duration: "32 分钟",
    estimatedMinutes: 32,
    tools: [
      "dify"
    ],
    relatedToolSlugs: [
      "dify"
    ],
    toolNames: [
      "Dify"
    ],
    keyword: "Dify",
    gradient: "bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600",
    coverTheme: "code",
    coverGradient: "from-emerald-600 via-teal-600 to-blue-600",
    views: 19463,
    likes: 799,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Dify 完成一个可复用的AI Agent工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Dify 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI Agent 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Dify 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI Agent任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Dify 搭建知识库助手教程通用提示词",
        prompt: "请作为AI Agent助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Dify 搭建知识库助手教程适合新手吗？",
        answer: "适合有基础的用户，建议先完成一个入门教程再做复杂任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI Agent",
      "Dify",
      "进阶"
    ],
    seoTitle: "Dify 搭建知识库助手教程：步骤、提示词和常见错误",
    seoDescription: "Dify 搭建知识库助手教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  },
  {
    id: "tutorial-coze-agent-guide",
    title: "Coze 创建智能体教程",
    slug: "coze-agent-guide",
    summary: "Coze 创建智能体教程：围绕AI Agent的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    description: "Coze 创建智能体教程：围绕AI Agent的真实任务，演示如何准备素材、输入提示词、迭代结果并完成可交付内容。",
    category: "AI Agent",
    categorySlugs: [
      "ai-agent",
      "ai-automation"
    ],
    type: "技巧",
    difficulty: "新手",
    audience: [
      "运营",
      "产品经理"
    ],
    audiences: [
      "运营",
      "产品经理"
    ],
    duration: "25 分钟",
    estimatedMinutes: 25,
    tools: [
      "coze"
    ],
    relatedToolSlugs: [
      "coze"
    ],
    toolNames: [
      "Coze"
    ],
    keyword: "Coze",
    gradient: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
    coverTheme: "code",
    coverGradient: "from-indigo-600 via-purple-600 to-pink-500",
    views: 19804,
    likes: 812,
    updatedAt: "2026-05-16",
    createdAt: "2026-05-16T00:00:00+08:00",
    goal: "学会用 Coze 完成一个可复用的AI Agent工作流。",
    preparation: [
      "准备一个真实任务",
      "整理已有素材和参考样例",
      "确认输出格式和使用场景"
    ],
    steps: [
      {
        title: "明确任务目标",
        body: "先把这次使用 Coze 要完成的结果写清楚，例如生成草稿、整理资料、制作页面或输出行动清单。",
        tip: "把目标、受众和交付格式写在同一段里。",
        pitfall: "只输入一个宽泛主题，容易得到空洞结果。"
      },
      {
        title: "准备真实素材",
        body: "整理和 AI Agent 相关的背景、参考样例、限制条件和已有资料，让 AI 有足够上下文。",
        tip: "把素材分成背景、要求、示例和禁区四类。",
        pitfall: "缺少约束会导致输出风格飘忽。"
      },
      {
        title: "输入结构化提示词",
        body: "使用角色、任务、材料、输出格式、检查标准五段式提示词，先拿到第一版可修改结果。",
        tip: "先要结构，再要细节，不要一次要求完美。",
        pitfall: "让 AI 同时完成太多目标会降低稳定性。"
      },
      {
        title: "追问并迭代结果",
        body: "根据第一版结果逐项追问，让 Coze 修改语气、结构、事实、格式和缺失信息。",
        tip: "每轮只改一类问题，效果更可控。",
        pitfall: "没有保存有效提示词，下一次难以复用。"
      },
      {
        title: "人工核对和发布",
        body: "最终内容需要人工核对事实、价格、引用、版权和敏感信息，再进入正式发布或交付流程。",
        tip: "建立自己的检查清单。",
        pitfall: "直接复制 AI 输出用于正式场景风险较高。"
      }
    ],
    prompt: "请围绕「[任务主题]」帮我完成AI Agent任务。背景是：[背景]；目标受众是：[目标人群]；输出格式是：[格式]。请先给出结构，再生成第一版内容，最后列出需要人工核对的清单。",
    promptBlocks: [
      {
        title: "Coze 创建智能体教程通用提示词",
        prompt: "请作为AI Agent助手，围绕「[主题]」完成任务。要求：1. 先确认目标和受众；2. 输出清晰步骤；3. 给出可复制内容；4. 标注需要人工核对的信息。"
      }
    ],
    commonErrors: [
      {
        title: "任务描述太宽泛",
        wrong: "只写“帮我做一个方案”。",
        reason: "AI 无法判断目标、受众和输出格式。",
        fix: "补充目标、受众、素材、限制和检查标准。"
      },
      {
        title: "不核对事实就发布",
        wrong: "直接复制 AI 输出。",
        reason: "价格、链接、引用和功能可能变化。",
        fix: "发布前人工核对来源和关键事实。"
      },
      {
        title: "没有保存可复用模板",
        wrong: "每次从零开始提问。",
        reason: "难以稳定复现好结果。",
        fix: "把有效提示词保存为模板。"
      }
    ],
    optimizationTips: [
      "把好结果沉淀成模板",
      "用真实案例替换空泛描述",
      "让 AI 输出自检清单",
      "重要内容用第二个工具交叉核对"
    ],
    recommendations: [],
    faq: [
      {
        question: "Coze 创建智能体教程适合新手吗？",
        answer: "适合，新手可以按步骤完成一个小任务。"
      },
      {
        question: "教程里的提示词能直接复制吗？",
        answer: "可以复制，但要把变量替换成你的真实任务信息。"
      },
      {
        question: "生成结果能直接交付吗？",
        answer: "不建议直接交付，至少要核对事实、格式、语气和敏感信息。"
      }
    ],
    tags: [
      "AI Agent",
      "Coze",
      "新手"
    ],
    seoTitle: "Coze 创建智能体教程：步骤、提示词和常见错误",
    seoDescription: "Coze 创建智能体教程，包含适合人群、使用工具、详细步骤、可复制提示词和优化建议。",
    status: "published"
  }
]
export const mockTutorials = tutorials
export default tutorials
