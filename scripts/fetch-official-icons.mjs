import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const iconDir = path.join(root, 'public', 'brand-icons')
const siteFile = path.join(root, 'data', 'tool-official-sites.ts')
const toolsFile = path.join(root, 'data', 'mock-tools.ts')
const iconMapFile = path.join(root, 'data', 'brand-icon-paths.ts')
const brandDocFile = path.join(root, 'docs', 'brand-icons.md')
const timeoutMs = Number(process.env.ICON_FETCH_TIMEOUT_MS || 6000)

function parseSites(source) {
  const rows = []
  const block = source.match(/toolOfficialSites[^=]*=\s*(\[[\s\S]*?\])\s*(?:\n\nexport|\nexport default)/)?.[1]
  if (!block) return rows
  const itemRegex = /\{[\s\S]*?\}/g
  for (const raw of block.match(itemRegex) || []) {
    const get = (key) => raw.match(new RegExp(`${key}:\\s*"([^"]*)"`))?.[1] || raw.match(new RegExp(`${key}:\\s*'([^']*)'`))?.[1] || ''
    const fallbackBlock = raw.match(/fallbackUrls:\s*\[([\s\S]*?)\]/)?.[1] || ''
    const fallbackUrls = [...fallbackBlock.matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1])
    const name = get('name')
    const slug = get('slug')
    const officialUrl = get('officialUrl')
    const outputFile = get('outputFile') || `${slug}.svg`
    if (name && slug && officialUrl) rows.push({ name, slug, officialUrl, fallbackUrls, outputFile })
  }
  return rows
}
function absoluteUrl(url, base) {
  if (!url || /^data:/i.test(url)) return ''
  try { return new URL(url, base).href } catch { return '' }
}
async function fetchText(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { 'user-agent': 'AI-Tools-Box-Icon-Fetcher/1.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return { text: await res.text(), finalUrl: res.url }
  } finally { clearTimeout(timer) }
}
async function fetchBuffer(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { 'user-agent': 'AI-Tools-Box-Icon-Fetcher/1.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const contentType = res.headers.get('content-type') || ''
    const buffer = Buffer.from(await res.arrayBuffer())
    if (buffer.length < 300) throw new Error('文件过小，疑似无效图标')
    return { buffer, contentType, finalUrl: res.url }
  } finally { clearTimeout(timer) }
}
function extFrom(url, contentType) {
  if (contentType.includes('svg')) return 'svg'
  if (contentType.includes('png')) return 'png'
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return 'jpg'
  if (contentType.includes('webp')) return 'webp'
  if (contentType.includes('image/x-icon') || contentType.includes('icon')) return 'ico'
  const pathname = new URL(url).pathname.toLowerCase()
  const hit = pathname.match(/\.(svg|png|jpg|jpeg|webp|ico)(?:$|[?#])/)
  return hit ? (hit[1] === 'jpeg' ? 'jpg' : hit[1]) : 'png'
}
function isSuspiciousIcon(sourceUrl) {
  return /denied\.html|blog\/uploads|Apple_logo_grey|Amazon-logo|Facebook-logo|Google-logo|microsoft_logo_white/i.test(sourceUrl)
}
function collectCandidates(html, pageUrl) {
  const candidates = []
  const linkRegex = /<link\s+[^>]*>/gi
  for (const tag of html.match(linkRegex) || []) {
    const rel = tag.match(/rel=["']([^"']+)["']/i)?.[1]?.toLowerCase() || ''
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1]
    if (!href) continue
    const abs = absoluteUrl(href, pageUrl)
    if (!abs) continue
    const sizes = tag.match(/sizes=["']([^"']+)["']/i)?.[1] || ''
    const score = rel.includes('apple-touch-icon') ? 100 : rel.includes('manifest') ? 80 : rel.includes('shortcut icon') ? 70 : rel.includes('icon') ? 60 : 0
    if (score) candidates.push({ url: abs, score: score + sizeScore(sizes), kind: rel.includes('manifest') ? 'manifest' : 'link' })
  }
  const imgRegex = /<img\s+[^>]*>/gi
  for (const tag of html.match(imgRegex) || []) {
    const src = tag.match(/src=["']([^"']+)["']/i)?.[1]
    if (!src) continue
    const alt = tag.match(/alt=["']([^"']*)["']/i)?.[1] || ''
    if (!/logo|deepseek|gamma|kimi|豆包|文心|即梦/i.test(`${alt} ${src}`)) continue
    const abs = absoluteUrl(src, pageUrl)
    // Page bodies often include unrelated partner/customer logos. Keep these
    // below favicon fallbacks so we prefer declared site icons.
    if (abs) candidates.push({ url: abs, score: 20, kind: 'image-logo' })
  }
  const base = new URL(pageUrl).origin
  for (const fallback of ['/favicon.ico', '/favicon.png', '/apple-touch-icon.png', '/site.webmanifest', '/manifest.json']) {
    candidates.push({ url: absoluteUrl(fallback, base), score: fallback.includes('manifest') ? 35 : 30, kind: fallback.includes('manifest') ? 'manifest' : 'fallback' })
  }
  return candidates.sort((a, b) => b.score - a.score)
}
function sizeScore(sizes) {
  const nums = [...String(sizes).matchAll(/(\d+)x(\d+)/g)].map((m) => Number(m[1]) * Number(m[2]))
  return nums.length ? Math.min(30, Math.round(Math.max(...nums) / 2000)) : 0
}
async function manifestIcons(url) {
  try {
    const { text, finalUrl } = await fetchText(url)
    const manifest = JSON.parse(text)
    return (manifest.icons || []).map((icon) => ({ url: absoluteUrl(icon.src, finalUrl), score: 50 + sizeScore(icon.sizes), kind: 'manifest-icon' })).filter((x) => x.url)
  } catch { return [] }
}
function placeholderSvg(site) {
  const initials = site.name.replace(/AI|\.ai|\.AI/g, '').replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g, '').slice(0, 2) || site.name.slice(0, 1)
  const hue = Math.abs([...site.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0)) % 360
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" role="img" aria-label="${site.name}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue},78%,56%)"/><stop offset="1" stop-color="hsl(${(hue + 48) % 360},78%,46%)"/></linearGradient></defs><rect width="96" height="96" rx="22" fill="url(#g)"/><circle cx="72" cy="22" r="14" fill="rgba(255,255,255,.18)"/><text x="48" y="57" font-family="Arial, sans-serif" font-size="28" font-weight="700" text-anchor="middle" fill="white">${initials}</text></svg>`
}
async function writePlaceholder(site, reason) {
  const file = path.join(iconDir, `${site.slug}.svg`)
  await writeFile(file, placeholderSvg(site), 'utf8')
  return { status: 'placeholder', name: site.name, slug: site.slug, path: `/brand-icons/${site.slug}.svg`, reason }
}
async function fetchIcon(site) {
  if (!process.argv.includes('--force')) {
    const existingSvg = path.join(iconDir, `${site.slug}.svg`)
    if (existsSync(existingSvg)) {
      return { status: 'kept', name: site.name, slug: site.slug, path: `/brand-icons/${site.slug}.svg`, sourceUrl: 'local existing file' }
    }
  }
  const pages = [site.officialUrl, ...(site.fallbackUrls || [])]
  const errors = []
  for (const page of pages) {
    try {
      const { text, finalUrl } = await fetchText(page)
      let candidates = collectCandidates(text, finalUrl)
      const manifestCandidates = []
      for (const item of candidates.filter((c) => c.kind === 'manifest').slice(0, 2)) manifestCandidates.push(...await manifestIcons(item.url))
      candidates = [...manifestCandidates, ...candidates.filter((c) => c.kind !== 'manifest')].sort((a, b) => b.score - a.score)
      for (const candidate of candidates.slice(0, 12)) {
        try {
          const { buffer, contentType, finalUrl: sourceUrl } = await fetchBuffer(candidate.url)
          if (isSuspiciousIcon(sourceUrl)) throw new Error('疑似无关页面或第三方标识')
          const ext = extFrom(sourceUrl, contentType)
          const out = path.join(iconDir, `${site.slug}.${ext}`)
          await writeFile(out, buffer)
          return { status: 'success', name: site.name, slug: site.slug, path: `/brand-icons/${site.slug}.${ext}`, sourceUrl }
        } catch (error) { errors.push(`${candidate.url}: ${error.message}`) }
      }
    } catch (error) { errors.push(`${page}: ${error.message}`) }
  }
  return writePlaceholder(site, errors.slice(0, 3).join('；') || '未找到官网图标')
}
function patchToolIcons(source, paths) {
  let next = source
  for (const [slug, iconPath] of Object.entries(paths)) {
    const re = new RegExp(`(slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?icon:\\s*)"[^"]*"`)
    next = next.replace(re, `$1"${iconPath}"`)
  }
  return next
}
async function main() {
  await mkdir(iconDir, { recursive: true })
  const selected = process.argv.includes('--all') ? null : process.argv.slice(2).filter((arg) => !arg.startsWith('--'))
  const sites = parseSites(await readFile(siteFile, 'utf8')).filter((site) => !selected || selected.length === 0 || selected.includes(site.slug))
  const results = []
  for (let i = 0; i < sites.length; i += 6) {
    const batch = sites.slice(i, i + 6)
    results.push(...await Promise.all(batch.map(fetchIcon)))
  }
  const paths = Object.fromEntries(results.map((r) => [r.slug, r.path]))
  const patched = patchToolIcons(await readFile(toolsFile, 'utf8'), paths)
  await writeFile(toolsFile, patched, 'utf8')
  await writeFile(iconMapFile, `export const brandIconPaths: Record<string, string> = ${JSON.stringify(paths, null, 2)}\n\nexport function getBrandIconPath(slug: string) {\n  return brandIconPaths[slug] || ''\n}\n\nexport default brandIconPaths\n`, 'utf8')
  const success = results.filter((r) => r.status === 'success')
  const kept = results.filter((r) => r.status === 'kept')
  const placeholders = results.filter((r) => r.status === 'placeholder')
  const doc = `# 品牌图标管理\n\n页面只加载 \`public/brand-icons/\` 下的本地图标，不热链外部图片。\n\n## 保留已有本地图标\n\n${kept.length ? kept.map((r) => `- ${r.name}: ${r.path}`).join('\n') : '- 暂无'}\n\n## 成功下载\n\n${success.length ? success.map((r) => `- ${r.name}: ${r.path}（来源：${r.sourceUrl}）`).join('\n') : '- 暂无'}\n\n## 使用占位 SVG\n\n${placeholders.length ? placeholders.map((r) => `- ${r.name}: ${r.path}（原因：${r.reason}）`).join('\n') : '- 暂无'}\n\n## 后续人工替换\n\n1. 优先使用确认来源的本地图标文件。\n2. 脚本默认不覆盖已有本地图标；需要重新抓取时显式传入 \`--force\`。\n3. 不从 Google 图片、百度图片或来源不明的第三方站点抓图。\n4. 品牌方要求移除时，替换为可确认来源的本地图标并更新数据文件。\n`
  await writeFile(brandDocFile, doc, 'utf8')
  console.log(JSON.stringify({ total: results.length, kept: kept.length, success: success.length, placeholders: placeholders.length }, null, 2))
}
main().catch((error) => { console.error(error); process.exit(1) })
