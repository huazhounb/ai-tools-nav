import { getBrandIconPath } from '~~/data/brand-icon-paths'
import type { ToolIcon } from '~~/types/tool'

type ToolIconInput = {
  slug?: string
  name?: string
  icon?: string | ToolIcon
}

const preferredToolIconPaths: Record<string, string> = {
  chatgpt: 'https://chatgpt.com/favicon.ico',
  deepseek: '/brand-icons/deepseek.ico',
  claude: '/brand-icons/claude.png',
  doubao: '/brand-icons/doubao.png',
  tongyi: '/brand-icons/tongyi.svg',
  kimi: '/brand-icons/kimi.ico',
  wenxin: '/brand-icons/wenxin.png',
  'notion-ai': '/brand-icons/notion-ai.png',
  'canva-ai': '/brand-icons/canva.svg',
  midjourney: 'https://www.midjourney.com/favicon.ico',
  'stable-diffusion': '/brand-icons/stable-diffusion.ico',
  jimeng: '/brand-icons/jimeng.ico',
  gamma: 'https://gamma.app/favicon.ico',
  tome: 'https://tome.app/favicon.ico',
  cursor: '/brand-icons/cursor.svg',
  'github-copilot': 'https://github.githubassets.com/favicons/favicon.svg',
  codeium: '/brand-icons/codeium.png',
  perplexity: 'https://www.perplexity.ai/favicon.ico',
  felo: 'https://felo.ai/favicon.ico',
  'you-com': 'https://you.com/favicon.ico',
  phind: 'https://www.phind.com/favicon.ico',
  consensus: 'https://consensus.app/favicon.ico',
  metaso: '/brand-icons/metaso.png',
  runway: '/brand-icons/runway.png',
  pika: 'https://pika.art/favicon.ico',
  synthesia: 'https://www.synthesia.io/favicon.ico',
  veo: 'https://deepmind.google/favicon.ico',
  sora: 'https://sora.com/favicon.ico',
  kling: '/brand-icons/kling.png',
  gemini: 'https://gemini.google.com/favicon.ico',
  grok: 'https://grok.com/favicon.ico',
  poe: 'https://poe.com/favicon.ico',
  monica: 'https://monica.im/favicon.ico',
  pi: 'https://pi.ai/favicon.ico',
  'leonardo-ai': 'https://leonardo.ai/favicon.ico',
  ideogram: 'https://ideogram.ai/favicon.ico',
  'magnific-ai': 'https://magnific.ai/favicon.ico',
  elicit: 'https://elicit.com/favicon.ico',
  scite: 'https://scite.ai/favicon.ico',
  'research-rabbit': 'https://www.researchrabbit.ai/favicon.ico',
  chatpdf: 'https://www.chatpdf.com/favicon.ico',
  suno: 'https://suno.com/favicon.ico',
  elevenlabs: 'https://elevenlabs.io/favicon.ico',
  whisper: 'https://openai.com/favicon.ico',
  promptperfect: 'https://promptperfect.jina.ai/favicon.ico',
  flowgpt: 'https://flowgpt.com/favicon.ico',
  'make-ai': 'https://www.make.com/favicon.ico',
  langchain: 'https://www.langchain.com/favicon.ico',
  autogen: 'https://microsoft.github.io/autogen/stable/_static/favicon.ico',
  grammarly: 'https://www.grammarly.com/favicon.ico',
  jasper: 'https://www.jasper.ai/favicon.ico',
  photoroom: 'https://www.photoroom.com/favicon.ico',
  opusclip: 'https://www.opus.pro/favicon.ico',
  descript: 'https://www.descript.com/favicon.ico',
  'tableau-gpt': 'https://www.tableau.com/favicon.ico',
  'copy-ai': '/brand-icons/copy-ai.svg'
}

const toolNameAliases: Record<string, string> = {
  chatgpt: 'chatgpt',
  openai: 'chatgpt',
  deepseek: 'deepseek',
  claude: 'claude',
  doubao: 'doubao',
  '豆包': 'doubao',
  tongyi: 'tongyi',
  '通义': 'tongyi',
  '通义千问': 'tongyi',
  kimi: 'kimi',
  wenxin: 'wenxin',
  '文心': 'wenxin',
  '文心一言': 'wenxin',
  notion: 'notion-ai',
  'notion ai': 'notion-ai',
  canva: 'canva-ai',
  'canva ai': 'canva-ai',
  midjourney: 'midjourney',
  'stable diffusion': 'stable-diffusion',
  jimeng: 'jimeng',
  '即梦': 'jimeng',
  '即梦 ai': 'jimeng',
  gamma: 'gamma',
  tome: 'tome',
  cursor: 'cursor',
  'github copilot': 'github-copilot',
  copilot: 'github-copilot',
  codeium: 'codeium',
  perplexity: 'perplexity',
  felo: 'felo',
  'you.com': 'you-com',
  'you com': 'you-com',
  phind: 'phind',
  consensus: 'consensus',
  metaso: 'metaso',
  '秘塔': 'metaso',
  '秘塔 ai 搜索': 'metaso',
  runway: 'runway',
  pika: 'pika',
  synthesia: 'synthesia',
  veo: 'veo',
  sora: 'sora',
  kling: 'kling',
  '可灵': 'kling',
  '可灵 ai': 'kling',
  gemini: 'gemini',
  grok: 'grok',
  poe: 'poe',
  monica: 'monica',
  pi: 'pi',
  leonardo: 'leonardo-ai',
  'leonardo ai': 'leonardo-ai',
  ideogram: 'ideogram',
  magnific: 'magnific-ai',
  'magnific ai': 'magnific-ai',
  elicit: 'elicit',
  scite: 'scite',
  researchrabbit: 'research-rabbit',
  'research rabbit': 'research-rabbit',
  chatpdf: 'chatpdf',
  suno: 'suno',
  elevenlabs: 'elevenlabs',
  'eleven labs': 'elevenlabs',
  whisper: 'whisper',
  promptperfect: 'promptperfect',
  'prompt perfect': 'promptperfect',
  flowgpt: 'flowgpt',
  'flow gpt': 'flowgpt',
  make: 'make-ai',
  'make ai': 'make-ai',
  langchain: 'langchain',
  'lang chain': 'langchain',
  autogen: 'autogen',
  'auto gen': 'autogen',
  grammarly: 'grammarly',
  jasper: 'jasper',
  photoroom: 'photoroom',
  'photo room': 'photoroom',
  opusclip: 'opusclip',
  'opus clip': 'opusclip',
  descript: 'descript',
  tableaugpt: 'tableau-gpt',
  'tableau gpt': 'tableau-gpt',
  'copy.ai': 'copy-ai',
  'copy ai': 'copy-ai'
}

export function normalizeToolSlug(value?: string) {
  if (!value) return ''
  const normalized = value.trim().toLowerCase()
  return toolNameAliases[normalized] || normalized
}

export function getToolIconPath(input: ToolIconInput) {
  const slug = normalizeToolSlug(input.slug) || normalizeToolSlug(input.name)
  const mappedPath = preferredToolIconPaths[slug] || getBrandIconPath(slug)
  if (mappedPath) return mappedPath

  if (typeof input.icon === 'string') return input.icon
  if (input.icon?.type === 'local' && input.icon.src) return input.icon.src

  return ''
}

export function getToolIconSlug(input: Pick<ToolIconInput, 'slug' | 'name'>) {
  return normalizeToolSlug(input.slug) || normalizeToolSlug(input.name)
}
