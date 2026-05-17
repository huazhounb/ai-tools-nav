export interface ScenarioEntry {
  title: string
  slug: string
  route: string
  audience: string
  need: string
  tools: string
  result: string
  description: string
  steps: string[]
  relatedTools: string[]
  relatedTutorials: Array<{ title: string, href: string }>
  relatedPrompts: Array<{ title: string, href: string }>
}

export const scenarioEntries: ScenarioEntry[] = [
  {
    title: '学生 AI 工具方案',
    slug: 'student',
    route: '/scenarios/student',
    audience: '学生',
    need: '读论文、写作业、做汇报和整理课堂资料',
    tools: 'Kimi / DeepSeek / 通义',
    result: '论文摘要、作业思路、汇报大纲和复习清单',
    description: '面向学生的 AI 工具组合应优先解决资料阅读、写作结构和汇报表达，不鼓励直接代写。',
    steps: ['先用 Kimi 处理长文或课件', '再用 DeepSeek 拆解观点和写作结构', '最后用通义或 WPS AI 输出汇报材料'],
    relatedTools: ['kimi', 'deepseek', 'tongyi'],
    relatedTutorials: [{ title: '用 Kimi 读完一篇 30 页论文并整理摘要', href: '/tutorial/kimi-paper-summary' }],
    relatedPrompts: [{ title: '论文润色提示词', href: '/prompts/paper-polishing' }]
  },
  {
    title: '自媒体 AI 工具方案',
    slug: 'creator',
    route: '/scenarios/creator',
    audience: '自媒体 / 内容创作者',
    need: '选题、标题、短视频脚本、图文内容和配图',
    tools: '豆包 / 即梦 AI / DeepSeek',
    result: '选题库、标题备选、脚本分镜和配图提示词',
    description: '自媒体场景需要把选题、文案和视觉资产连起来，而不是只让 AI 生成一段正文。',
    steps: ['用豆包扩展选题和目标人群', '用 DeepSeek 生成脚本结构', '用即梦 AI 或绘图工具生成配图方向'],
    relatedTools: ['doubao', 'jimeng', 'deepseek'],
    relatedTutorials: [{ title: '用豆包整理短视频脚本结构', href: '/tutorial/doubao-meeting-notes' }],
    relatedPrompts: [{ title: '小红书标题提示词', href: '/prompts/xiaohongshu-title' }]
  },
  {
    title: '设计师 AI 工具方案',
    slug: 'designer',
    route: '/scenarios/designer',
    audience: '设计师',
    need: '灵感探索、海报草图、电商图和视觉改稿',
    tools: '即梦 AI / Midjourney / 稿定 AI',
    result: '视觉方向、提示词、海报草图和可交付素材参考',
    description: '设计场景要保留人工审美判断，AI 更适合快速探索方向和生成素材初稿。',
    steps: ['先写清品牌、风格和构图约束', '用绘图工具生成多组方向', '人工筛选后再进入修图和排版'],
    relatedTools: ['jimeng'],
    relatedTutorials: [{ title: '免费 AI 绘图工具入门', href: '/rankings/ai-image-tools' }],
    relatedPrompts: [{ title: 'AI 绘图提示词', href: '/prompts/ppt-outline' }]
  },
  {
    title: '程序员 AI 工具方案',
    slug: 'developer',
    route: '/scenarios/developer',
    audience: '程序员',
    need: '读代码、写测试、做重构和生成代码审查意见',
    tools: 'Cursor / DeepSeek / 通义灵码',
    result: '代码解释、修改建议、测试用例和审查清单',
    description: '编程场景的核心不是让 AI 一次性写完项目，而是让它参与理解、修改和验证闭环。',
    steps: ['用 Cursor 定位相关文件', '用 DeepSeek 解释方案和边界', '人工运行测试并核对风险'],
    relatedTools: ['cursor', 'deepseek', 'tongyi'],
    relatedTutorials: [{ title: '用 Cursor 做一次代码审查', href: '/tutorial/cursor-code-review' }],
    relatedPrompts: [{ title: '代码审查提示词', href: '/prompts/code-review' }]
  },
  {
    title: '办公族 AI 工具方案',
    slug: 'office',
    route: '/scenarios/office',
    audience: '办公族',
    need: '周报、PPT、会议纪要、邮件和文档整理',
    tools: '豆包 / 通义 / WPS AI',
    result: '周报初稿、PPT 大纲、会议待办和邮件回复',
    description: '办公场景要重视事实核对和语气控制，AI 输出应作为可修改初稿。',
    steps: ['整理原始记录', '用 AI 生成结构化初稿', '人工核对事实、数字和责任人'],
    relatedTools: ['doubao', 'tongyi'],
    relatedTutorials: [{ title: '用 DeepSeek 写一份可直接修改的周报', href: '/tutorial/deepseek-weekly-report' }],
    relatedPrompts: [{ title: '周报总结提示词', href: '/prompts/weekly-report-summary' }]
  },
  {
    title: '论文党 AI 工具方案',
    slug: 'paper',
    route: '/scenarios/paper',
    audience: '论文写作者',
    need: '文献阅读、摘要、润色、引用整理和研究框架',
    tools: 'Kimi / 秘塔 / DeepSeek',
    result: '文献卡片、论文摘要、润色版本和研究问题清单',
    description: '论文场景必须避免虚构引用，AI 适合辅助结构化阅读和语言润色。',
    steps: ['用长文本工具阅读文献', '用 DeepSeek 提炼研究问题', '对引用、页码和术语做人工核对'],
    relatedTools: ['kimi', 'deepseek'],
    relatedTutorials: [{ title: '用 Kimi 读完一篇 30 页论文并整理摘要', href: '/tutorial/kimi-paper-summary' }],
    relatedPrompts: [{ title: '论文润色提示词', href: '/prompts/paper-polishing' }]
  },
  {
    title: 'AI 做 PPT 场景方案',
    slug: 'ai-ppt',
    route: '/scenarios/ai-ppt',
    audience: '学生、办公族、培训讲师',
    need: '从主题快速生成汇报大纲、讲稿和页面结构',
    tools: 'Kimi + WPS AI',
    result: '大纲、讲稿、页面结构',
    description: 'AI 做 PPT 的价值在于先确定逻辑结构，再进入排版工具生成页面，不应只追求一键成片。',
    steps: ['输入汇报对象、时长和目标', '让 Kimi 或 DeepSeek 生成大纲', '用 WPS AI 生成页面并人工调版'],
    relatedTools: ['kimi', 'deepseek'],
    relatedTutorials: [{ title: '用 AI 生成 PPT 大纲', href: '/tutorial/make-ppt-outline-with-ai' }],
    relatedPrompts: [{ title: 'PPT 大纲提示词', href: '/prompts/ppt-outline' }]
  },
  {
    title: 'AI 写论文场景方案',
    slug: 'paper-writing',
    route: '/scenarios/paper-writing',
    audience: '学生、研究员、论文写作者',
    need: '文献总结、研究框架、摘要和语言润色',
    tools: 'Kimi + DeepSeek',
    result: '文献总结、润色、摘要',
    description: 'AI 写论文应定位为研究助理，帮助阅读和改写，不替代原创研究和引用核对。',
    steps: ['上传文献并提取框架', '生成论文结构和章节要点', '逐段润色并核对事实'],
    relatedTools: ['kimi', 'deepseek'],
    relatedTutorials: [{ title: '用 Kimi 读完一篇 30 页论文并整理摘要', href: '/tutorial/kimi-paper-summary' }],
    relatedPrompts: [{ title: '论文润色提示词', href: '/prompts/paper-polishing' }]
  },
  {
    title: '短视频脚本 AI 场景方案',
    slug: 'video-script',
    route: '/scenarios/video-script',
    audience: '短视频创作者、运营、品牌内容团队',
    need: '选题、脚本、分镜和口播稿',
    tools: '豆包 + 即梦 AI',
    result: '选题、脚本、分镜',
    description: '短视频脚本需要从目标人群和平台节奏出发，AI 可用于批量生成脚本备选和分镜草案。',
    steps: ['明确平台和目标人群', '生成 3 到 5 个选题角度', '把选题扩展为口播脚本和分镜'],
    relatedTools: ['doubao', 'jimeng'],
    relatedTutorials: [{ title: '用豆包整理短视频脚本结构', href: '/tutorial/doubao-meeting-notes' }],
    relatedPrompts: [{ title: '小红书标题提示词', href: '/prompts/xiaohongshu-title' }]
  },
  {
    title: '自媒体文案 AI 场景方案',
    slug: 'content-copywriting',
    route: '/scenarios/content-copywriting',
    audience: '自媒体作者、运营、个人品牌',
    need: '标题、正文、改写、选题和账号栏目规划',
    tools: 'DeepSeek + 豆包',
    result: '标题、正文、改写',
    description: '自媒体文案应以真实观点和具体经验为核心，AI 负责提供结构和改写备选。',
    steps: ['输入账号定位和目标读者', '生成标题与正文结构', '用人工经验替换空泛段落'],
    relatedTools: ['deepseek', 'doubao'],
    relatedTutorials: [{ title: '用 DeepSeek 写一份可直接修改的周报', href: '/tutorial/deepseek-weekly-report' }],
    relatedPrompts: [{ title: '小红书标题提示词', href: '/prompts/xiaohongshu-title' }]
  },
  {
    title: 'AI 绘图场景方案',
    slug: 'ai-image',
    route: '/scenarios/ai-image',
    audience: '设计师、电商运营、自媒体创作者',
    need: '提示词、海报、电商图、头像和封面图',
    tools: '即梦 AI + Midjourney',
    result: '提示词、海报、电商图',
    description: 'AI 绘图适合快速生成视觉方向，但商用前需要确认版权、人物肖像和品牌素材授权。',
    steps: ['写清主体、风格、构图和用途', '生成多组图像进行筛选', '对最终图进行修图和合规检查'],
    relatedTools: ['jimeng'],
    relatedTutorials: [{ title: '免费 AI 绘图工具榜', href: '/rankings/ai-image-tools' }],
    relatedPrompts: [{ title: 'AI 绘图提示词', href: '/prompts/ppt-outline' }]
  },
  {
    title: 'AI 数据分析场景方案',
    slug: 'data-analysis',
    route: '/scenarios/data-analysis',
    audience: '运营、产品经理、数据分析新手',
    need: '表格清洗、图表解读、指标解释和分析报告',
    tools: '通义 + ChatGPT',
    result: '表格清洗、图表解读',
    description: '数据分析场景要把字段含义、业务口径和异常值讲清楚，AI 输出不能替代原始数据校验。',
    steps: ['说明字段含义和分析目标', '让 AI 生成清洗规则和图表建议', '人工核对口径并输出结论'],
    relatedTools: ['tongyi'],
    relatedTutorials: [{ title: '用 AI 解释表格数据', href: '/rankings/ai-ppt-tools' }],
    relatedPrompts: [{ title: '周报总结提示词', href: '/prompts/weekly-report-summary' }]
  }
]

export function getScenarioBySlug(slug: string) {
  return scenarioEntries.find((item) => item.slug === slug)
}
