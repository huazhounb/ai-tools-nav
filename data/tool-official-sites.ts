export interface ToolOfficialSite {
  name: string
  slug: string
  officialUrl: string
  fallbackUrls: string[]
  outputFile: string
}

export const toolOfficialSites: ToolOfficialSite[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    officialUrl: "https://chatgpt.com",
    fallbackUrls: ["https://openai.com"],
    outputFile: "chatgpt.svg"
  },
  {
    name: "Claude",
    slug: "claude",
    officialUrl: "https://claude.ai",
    fallbackUrls: [],
    outputFile: "claude.svg"
  },
  {
    name: "Gemini",
    slug: "gemini",
    officialUrl: "https://gemini.google.com",
    fallbackUrls: [],
    outputFile: "gemini.svg"
  },
  {
    name: "DeepSeek",
    slug: "deepseek",
    officialUrl: "https://www.deepseek.com",
    fallbackUrls: [],
    outputFile: "deepseek.svg"
  },
  {
    name: "Kimi",
    slug: "kimi",
    officialUrl: "https://kimi.moonshot.cn",
    fallbackUrls: [],
    outputFile: "kimi.svg"
  },
  {
    name: "豆包",
    slug: "doubao",
    officialUrl: "https://www.doubao.com",
    fallbackUrls: [],
    outputFile: "doubao.svg"
  },
  {
    name: "通义千问",
    slug: "tongyi",
    officialUrl: "https://tongyi.aliyun.com",
    fallbackUrls: [],
    outputFile: "tongyi.svg"
  },
  {
    name: "文心一言",
    slug: "wenxin",
    officialUrl: "https://yiyan.baidu.com",
    fallbackUrls: [],
    outputFile: "wenxin.svg"
  },
  {
    name: "腾讯元宝",
    slug: "yuanbao",
    officialUrl: "https://yuanbao.tencent.com",
    fallbackUrls: [],
    outputFile: "yuanbao.svg"
  },
  {
    name: "讯飞星火",
    slug: "sparkdesk",
    officialUrl: "https://xinghuo.xfyun.cn",
    fallbackUrls: [],
    outputFile: "sparkdesk.svg"
  },
  {
    name: "Grok",
    slug: "grok",
    officialUrl: "https://grok.com",
    fallbackUrls: [],
    outputFile: "grok.svg"
  },
  {
    name: "Poe",
    slug: "poe",
    officialUrl: "https://poe.com",
    fallbackUrls: [],
    outputFile: "poe.svg"
  },
  {
    name: "Monica",
    slug: "monica",
    officialUrl: "https://monica.im",
    fallbackUrls: [],
    outputFile: "monica.svg"
  },
  {
    name: "Pi",
    slug: "pi",
    officialUrl: "https://pi.ai",
    fallbackUrls: [],
    outputFile: "pi.svg"
  },
  {
    name: "Cursor",
    slug: "cursor",
    officialUrl: "https://cursor.com",
    fallbackUrls: [],
    outputFile: "cursor.svg"
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    officialUrl: "https://github.com/features/copilot",
    fallbackUrls: [],
    outputFile: "github-copilot.svg"
  },
  {
    name: "Codeium",
    slug: "codeium",
    officialUrl: "https://codeium.com",
    fallbackUrls: [],
    outputFile: "codeium.svg"
  },
  {
    name: "Replit AI",
    slug: "replit-ai",
    officialUrl: "https://replit.com/ai",
    fallbackUrls: [],
    outputFile: "replit-ai.svg"
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    officialUrl: "https://windsurf.com",
    fallbackUrls: [],
    outputFile: "windsurf.svg"
  },
  {
    name: "v0",
    slug: "v0",
    officialUrl: "https://v0.dev",
    fallbackUrls: [],
    outputFile: "v0.svg"
  },
  {
    name: "Bolt.new",
    slug: "bolt-new",
    officialUrl: "https://bolt.new",
    fallbackUrls: [],
    outputFile: "bolt-new.svg"
  },
  {
    name: "Lovable",
    slug: "lovable",
    officialUrl: "https://lovable.dev",
    fallbackUrls: [],
    outputFile: "lovable.svg"
  },
  {
    name: "Trae",
    slug: "trae",
    officialUrl: "https://www.trae.ai",
    fallbackUrls: [],
    outputFile: "trae.svg"
  },
  {
    name: "Devin",
    slug: "devin",
    officialUrl: "https://devin.ai",
    fallbackUrls: [],
    outputFile: "devin.svg"
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    officialUrl: "https://www.perplexity.ai",
    fallbackUrls: [],
    outputFile: "perplexity.svg"
  },
  {
    name: "秘塔 AI 搜索",
    slug: "metaso",
    officialUrl: "https://metaso.cn",
    fallbackUrls: [],
    outputFile: "metaso.svg"
  },
  {
    name: "Felo",
    slug: "felo",
    officialUrl: "https://felo.ai",
    fallbackUrls: [],
    outputFile: "felo.svg"
  },
  {
    name: "You.com",
    slug: "you-com",
    officialUrl: "https://you.com",
    fallbackUrls: [],
    outputFile: "you-com.svg"
  },
  {
    name: "Phind",
    slug: "phind",
    officialUrl: "https://www.phind.com",
    fallbackUrls: [],
    outputFile: "phind.svg"
  },
  {
    name: "Exa",
    slug: "exa",
    officialUrl: "https://exa.ai",
    fallbackUrls: [],
    outputFile: "exa.svg"
  },
  {
    name: "Consensus",
    slug: "consensus",
    officialUrl: "https://consensus.app",
    fallbackUrls: [],
    outputFile: "consensus.svg"
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    officialUrl: "https://www.midjourney.com",
    fallbackUrls: [],
    outputFile: "midjourney.svg"
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    officialUrl: "https://stability.ai",
    fallbackUrls: [],
    outputFile: "stable-diffusion.svg"
  },
  {
    name: "即梦 AI",
    slug: "jimeng",
    officialUrl: "https://jimeng.jianying.com",
    fallbackUrls: [],
    outputFile: "jimeng.svg"
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    officialUrl: "https://www.canva.com/magic",
    fallbackUrls: [],
    outputFile: "canva-ai.svg"
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    officialUrl: "https://firefly.adobe.com",
    fallbackUrls: [],
    outputFile: "adobe-firefly.svg"
  },
  {
    name: "Leonardo AI",
    slug: "leonardo-ai",
    officialUrl: "https://leonardo.ai",
    fallbackUrls: [],
    outputFile: "leonardo-ai.svg"
  },
  {
    name: "Ideogram",
    slug: "ideogram",
    officialUrl: "https://ideogram.ai",
    fallbackUrls: [],
    outputFile: "ideogram.svg"
  },
  {
    name: "DALL·E",
    slug: "dall-e",
    officialUrl: "https://openai.com/dall-e",
    fallbackUrls: ["https://openai.com"],
    outputFile: "dall-e.svg"
  },
  {
    name: "Microsoft Designer",
    slug: "microsoft-designer",
    officialUrl: "https://designer.microsoft.com",
    fallbackUrls: [],
    outputFile: "microsoft-designer.svg"
  },
  {
    name: "Figma AI",
    slug: "figma-ai",
    officialUrl: "https://www.figma.com/ai",
    fallbackUrls: [],
    outputFile: "figma-ai.svg"
  },
  {
    name: "Remove.bg",
    slug: "remove-bg",
    officialUrl: "https://www.remove.bg",
    fallbackUrls: [],
    outputFile: "remove-bg.svg"
  },
  {
    name: "Magnific AI",
    slug: "magnific-ai",
    officialUrl: "https://magnific.ai",
    fallbackUrls: [],
    outputFile: "magnific-ai.svg"
  },
  {
    name: "Runway",
    slug: "runway",
    officialUrl: "https://runwayml.com",
    fallbackUrls: [],
    outputFile: "runway.svg"
  },
  {
    name: "Pika",
    slug: "pika",
    officialUrl: "https://pika.art",
    fallbackUrls: [],
    outputFile: "pika.svg"
  },
  {
    name: "可灵 AI",
    slug: "kling",
    officialUrl: "https://klingai.kuaishou.com",
    fallbackUrls: [],
    outputFile: "kling.svg"
  },
  {
    name: "Luma Dream Machine",
    slug: "luma-dream-machine",
    officialUrl: "https://lumalabs.ai/dream-machine",
    fallbackUrls: [],
    outputFile: "luma-dream-machine.svg"
  },
  {
    name: "HeyGen",
    slug: "heygen",
    officialUrl: "https://www.heygen.com",
    fallbackUrls: [],
    outputFile: "heygen.svg"
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    officialUrl: "https://www.synthesia.io",
    fallbackUrls: [],
    outputFile: "synthesia.svg"
  },
  {
    name: "CapCut AI",
    slug: "capcut-ai",
    officialUrl: "https://www.capcut.com",
    fallbackUrls: [],
    outputFile: "capcut-ai.svg"
  },
  {
    name: "Veo",
    slug: "veo",
    officialUrl: "https://deepmind.google/technologies/veo",
    fallbackUrls: [],
    outputFile: "veo.svg"
  },
  {
    name: "Sora",
    slug: "sora",
    officialUrl: "https://openai.com/sora",
    fallbackUrls: ["https://openai.com"],
    outputFile: "sora.svg"
  },
  {
    name: "Gamma",
    slug: "gamma",
    officialUrl: "https://gamma.app",
    fallbackUrls: [],
    outputFile: "gamma.svg"
  },
  {
    name: "Tome",
    slug: "tome",
    officialUrl: "https://tome.app",
    fallbackUrls: [],
    outputFile: "tome.svg"
  },
  {
    name: "Beautiful.ai",
    slug: "beautiful-ai",
    officialUrl: "https://www.beautiful.ai",
    fallbackUrls: [],
    outputFile: "beautiful-ai.svg"
  },
  {
    name: "Napkin AI",
    slug: "napkin-ai",
    officialUrl: "https://www.napkin.ai",
    fallbackUrls: [],
    outputFile: "napkin-ai.svg"
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    officialUrl: "https://www.notion.com/ai",
    fallbackUrls: [],
    outputFile: "notion-ai.svg"
  },
  {
    name: "飞书妙记",
    slug: "feishu-minutes",
    officialUrl: "https://www.feishu.cn/product/minutes",
    fallbackUrls: [],
    outputFile: "feishu-minutes.svg"
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    officialUrl: "https://otter.ai",
    fallbackUrls: [],
    outputFile: "otter-ai.svg"
  },
  {
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    officialUrl: "https://fireflies.ai",
    fallbackUrls: [],
    outputFile: "fireflies-ai.svg"
  },
  {
    name: "Granola",
    slug: "granola",
    officialUrl: "https://www.granola.ai",
    fallbackUrls: [],
    outputFile: "granola.svg"
  },
  {
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    officialUrl: "https://copilot.microsoft.com",
    fallbackUrls: [],
    outputFile: "microsoft-copilot.svg"
  },
  {
    name: "WPS AI",
    slug: "wps-ai",
    officialUrl: "https://ai.wps.cn",
    fallbackUrls: [],
    outputFile: "wps-ai.svg"
  },
  {
    name: "Elicit",
    slug: "elicit",
    officialUrl: "https://elicit.com",
    fallbackUrls: [],
    outputFile: "elicit.svg"
  },
  {
    name: "Scite",
    slug: "scite",
    officialUrl: "https://scite.ai",
    fallbackUrls: [],
    outputFile: "scite.svg"
  },
  {
    name: "Semantic Scholar",
    slug: "semantic-scholar",
    officialUrl: "https://www.semanticscholar.org",
    fallbackUrls: [],
    outputFile: "semantic-scholar.svg"
  },
  {
    name: "Research Rabbit",
    slug: "research-rabbit",
    officialUrl: "https://www.researchrabbit.ai",
    fallbackUrls: [],
    outputFile: "research-rabbit.svg"
  },
  {
    name: "Zotero AI",
    slug: "zotero-ai",
    officialUrl: "https://www.zotero.org",
    fallbackUrls: [],
    outputFile: "zotero-ai.svg"
  },
  {
    name: "ChatPDF",
    slug: "chatpdf",
    officialUrl: "https://www.chatpdf.com",
    fallbackUrls: [],
    outputFile: "chatpdf.svg"
  },
  {
    name: "Humata",
    slug: "humata",
    officialUrl: "https://www.humata.ai",
    fallbackUrls: [],
    outputFile: "humata.svg"
  },
  {
    name: "Jenni AI",
    slug: "jenni-ai",
    officialUrl: "https://jenni.ai",
    fallbackUrls: [],
    outputFile: "jenni-ai.svg"
  },
  {
    name: "Paperpal",
    slug: "paperpal",
    officialUrl: "https://paperpal.com",
    fallbackUrls: [],
    outputFile: "paperpal.svg"
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    officialUrl: "https://elevenlabs.io",
    fallbackUrls: [],
    outputFile: "elevenlabs.svg"
  },
  {
    name: "Suno",
    slug: "suno",
    officialUrl: "https://suno.com",
    fallbackUrls: [],
    outputFile: "suno.svg"
  },
  {
    name: "Udio",
    slug: "udio",
    officialUrl: "https://www.udio.com",
    fallbackUrls: [],
    outputFile: "udio.svg"
  },
  {
    name: "Whisper",
    slug: "whisper",
    officialUrl: "https://openai.com/research/whisper",
    fallbackUrls: ["https://openai.com"],
    outputFile: "whisper.svg"
  },
  {
    name: "PromptPerfect",
    slug: "promptperfect",
    officialUrl: "https://promptperfect.jina.ai",
    fallbackUrls: [],
    outputFile: "promptperfect.svg"
  },
  {
    name: "FlowGPT",
    slug: "flowgpt",
    officialUrl: "https://flowgpt.com",
    fallbackUrls: [],
    outputFile: "flowgpt.svg"
  },
  {
    name: "Zapier AI",
    slug: "zapier-ai",
    officialUrl: "https://zapier.com/ai",
    fallbackUrls: [],
    outputFile: "zapier-ai.svg"
  },
  {
    name: "Make AI",
    slug: "make-ai",
    officialUrl: "https://www.make.com/en/ai-automation",
    fallbackUrls: [],
    outputFile: "make-ai.svg"
  },
  {
    name: "Dify",
    slug: "dify",
    officialUrl: "https://dify.ai",
    fallbackUrls: [],
    outputFile: "dify.svg"
  },
  {
    name: "Coze",
    slug: "coze",
    officialUrl: "https://www.coze.com",
    fallbackUrls: [],
    outputFile: "coze.svg"
  },
  {
    name: "LangChain",
    slug: "langchain",
    officialUrl: "https://www.langchain.com",
    fallbackUrls: [],
    outputFile: "langchain.svg"
  },
  {
    name: "AutoGen",
    slug: "autogen",
    officialUrl: "https://microsoft.github.io/autogen",
    fallbackUrls: [],
    outputFile: "autogen.svg"
  },
  {
    name: "n8n AI",
    slug: "n8n-ai",
    officialUrl: "https://n8n.io",
    fallbackUrls: [],
    outputFile: "n8n-ai.svg"
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    officialUrl: "https://www.grammarly.com",
    fallbackUrls: [],
    outputFile: "grammarly.svg"
  },
  {
    name: "Jasper",
    slug: "jasper",
    officialUrl: "https://www.jasper.ai",
    fallbackUrls: [],
    outputFile: "jasper.svg"
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    officialUrl: "https://www.copy.ai",
    fallbackUrls: [],
    outputFile: "copy-ai.svg"
  },
  {
    name: "Jobscan",
    slug: "jobscan",
    officialUrl: "https://www.jobscan.co",
    fallbackUrls: [],
    outputFile: "jobscan.svg"
  },
  {
    name: "Kickresume",
    slug: "kickresume",
    officialUrl: "https://www.kickresume.com",
    fallbackUrls: [],
    outputFile: "kickresume.svg"
  },
  {
    name: "Shopify Magic",
    slug: "shopify-magic",
    officialUrl: "https://www.shopify.com/magic",
    fallbackUrls: [],
    outputFile: "shopify-magic.svg"
  },
  {
    name: "PhotoRoom",
    slug: "photoroom",
    officialUrl: "https://www.photoroom.com",
    fallbackUrls: [],
    outputFile: "photoroom.svg"
  },
  {
    name: "Surfer AI",
    slug: "surfer-ai",
    officialUrl: "https://surferseo.com/ai",
    fallbackUrls: [],
    outputFile: "surfer-ai.svg"
  },
  {
    name: "Buffer AI Assistant",
    slug: "buffer-ai",
    officialUrl: "https://buffer.com/ai-assistant",
    fallbackUrls: [],
    outputFile: "buffer-ai.svg"
  },
  {
    name: "OpusClip",
    slug: "opusclip",
    officialUrl: "https://www.opus.pro",
    fallbackUrls: [],
    outputFile: "opusclip.svg"
  },
  {
    name: "Descript",
    slug: "descript",
    officialUrl: "https://www.descript.com",
    fallbackUrls: [],
    outputFile: "descript.svg"
  },
  {
    name: "DeepL",
    slug: "deepl",
    officialUrl: "https://www.deepl.com",
    fallbackUrls: [],
    outputFile: "deepl.svg"
  },
  {
    name: "QuillBot",
    slug: "quillbot",
    officialUrl: "https://quillbot.com",
    fallbackUrls: [],
    outputFile: "quillbot.svg"
  },
  {
    name: "Tableau GPT",
    slug: "tableau-gpt",
    officialUrl: "https://www.tableau.com/products/tableau-gpt",
    fallbackUrls: [],
    outputFile: "tableau-gpt.svg"
  }
]

export default toolOfficialSites
