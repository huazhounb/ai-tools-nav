import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceRoot = 'C:/Users/huazh/Downloads/ai_tool_icons_official_only/ai_tool_icons_official_only'
const urlsDir = path.join(sourceRoot, 'urls')

const targets = [
  ['chatgpt', 'chatgpt', 'ChatGPT'],
  ['gemini', 'gemini', 'Gemini'],
  ['grok', 'grok', 'Grok'],
  ['poe', 'poe', 'Poe'],
  ['monica', 'monica', 'Monica'],
  ['pi', 'pi', 'Pi'],
  ['github_copilot', 'github-copilot', 'GitHub Copilot'],
  ['perplexity', 'perplexity', 'Perplexity'],
  ['felo', 'felo', 'Felo'],
  ['you_com', 'you-com', 'You.com'],
  ['phind', 'phind', 'Phind'],
  ['consensus', 'consensus', 'Consensus'],
  ['midjourney', 'midjourney', 'Midjourney'],
  ['leonardo_ai', 'leonardo-ai', 'Leonardo AI'],
  ['ideogram', 'ideogram', 'Ideogram'],
  ['magnific_ai', 'magnific-ai', 'Magnific AI'],
  ['pika', 'pika', 'Pika'],
  ['synthesia', 'synthesia', 'Synthesia'],
  ['veo', 'veo', 'Veo'],
  ['sora', 'sora', 'Sora'],
  ['gamma', 'gamma', 'Gamma'],
  ['tome', 'tome', 'Tome'],
  ['elicit', 'elicit', 'Elicit'],
  ['scite', 'scite', 'Scite'],
  ['researchrabbit', 'research-rabbit', 'ResearchRabbit'],
  ['chatpdf', 'chatpdf', 'ChatPDF'],
  ['suno', 'suno', 'Suno'],
  ['elevenlabs', 'elevenlabs', 'ElevenLabs'],
  ['whisper', 'whisper', 'Whisper'],
  ['promptperfect', 'promptperfect', 'PromptPerfect'],
  ['flowgpt', 'flowgpt', 'FlowGPT'],
  ['make', 'make-ai', 'Make'],
  ['langchain', 'langchain', 'LangChain'],
  ['autogen', 'autogen', 'AutoGen'],
  ['grammarly', 'grammarly', 'Grammarly'],
  ['jasper', 'jasper', 'Jasper'],
  ['photoroom', 'photoroom', 'PhotoRoom'],
  ['opusclip', 'opusclip', 'OpusClip'],
  ['descript', 'descript', 'Descript'],
  ['tableau_gpt', 'tableau-gpt', 'TableauGPT']
]

const filesToPatch = [
  'data/mock-tools.ts',
  'data/brand-icon-paths.ts',
  'data/comprehensive.ts',
  'app/utils/tool-icons.ts',
  'supabase/seed.sql'
]

async function readOfficialRows() {
  const rows = []
  for (const [urlKey, slug, name] of targets) {
    const urlFile = path.join(urlsDir, `${urlKey}.url.txt`)
    if (!existsSync(urlFile)) {
      rows.push({ urlKey, slug, name, url: '' })
      continue
    }
    const url = (await readFile(urlFile, 'utf8')).trim()
    rows.push({ urlKey, slug, name, url })
  }
  return rows
}

async function patchRuntimeFiles(rows) {
  for (const rel of filesToPatch) {
    const file = path.join(root, rel)
    if (!existsSync(file)) continue
    let text = await readFile(file, 'utf8')
    for (const { slug, url } of rows) {
      if (!url) continue
      const localPath = ['', 'icons', 'ai-tools', `${slug}.png`].join('/')
      text = text.split(localPath).join(url)
    }
    await writeFile(file, text, 'utf8')
  }
}

async function writeManifest(rows) {
  const body = rows
    .filter((row) => row.url)
    .map(({ name, slug, url }) => `  { name: ${JSON.stringify(name)}, slug: ${JSON.stringify(slug)}, url: ${JSON.stringify(url)}, source: 'official-url', licenseNote: 'Official icon URL supplied by project owner. Do not use remote wrappers or generated placeholders.' }`)
    .join(',\n')
  await writeFile(path.join(root, 'data/brand-icons-manifest.ts'), `export const brandIconsManifest = [\n${body}\n] as const\n`, 'utf8')
}

async function main() {
  const rows = await readOfficialRows()
  await patchRuntimeFiles(rows)
  await writeManifest(rows)
  console.log(`Synced ${rows.filter((row) => row.url).length} official icon URLs.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
