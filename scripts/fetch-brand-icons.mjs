import * as cheerio from 'cheerio'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('../', import.meta.url)))
const manifestPath = join(root, 'data', 'tool-official-sites.ts')
const outputDir = join(root, 'public', 'brand-icons')
const REQUEST_TIMEOUT_MS = 12000

const success = []
const skipped = []
const failed = []

await mkdir(outputDir, { recursive: true })

const sites = await loadSites()

for (const site of sites) {
  const result = await fetchIconForSite(site)
  if (result.status === 'success') success.push(result.message)
  if (result.status === 'skipped') skipped.push(result.message)
  if (result.status === 'failed') failed.push(result.message)
}

await writeBrandIconPathMap()

printResult('success', success)
printResult('skipped', skipped)
printResult('failed', failed)

async function fetchIconForSite(site) {
  if (!process.argv.includes('--force')) {
    const existingSvg = join(outputDir, `${site.slug}.svg`)
    if (existsSync(existingSvg)) {
      return {
        status: 'skipped',
        message: `${site.name} (${site.slug}) - kept existing public/brand-icons/${site.slug}.svg`
      }
    }
  }

  const urls = [site.officialUrl, site.fallbackUrl].filter(Boolean)
  const errors = []

  for (const pageUrl of urls) {
    try {
      const htmlResponse = await fetchWithTimeout(pageUrl, {
        redirect: 'follow',
        headers: {
          'user-agent': 'Mozilla/5.0 AI-Tools-Directory-IconFetcher/1.0'
        }
      })

      if (!htmlResponse.ok) {
        errors.push(`${pageUrl}: HTTP ${htmlResponse.status}`)
        continue
      }

      const html = await htmlResponse.text()
      const candidates = await collectCandidates(html, htmlResponse.url || pageUrl)

      for (const candidate of candidates) {
        const downloaded = await downloadCandidate(site, candidate)
        if (downloaded.ok) return { status: 'success', message: downloaded.message }
        errors.push(downloaded.message)
      }
    } catch (error) {
      errors.push(`${pageUrl}: ${formatError(error)}`)
    }
  }

  return {
    status: 'failed',
    message: `${site.name} (${site.slug}) - ${errors.join(' | ') || 'no icon candidates'}`
  }
}

async function collectCandidates(html, pageUrl) {
  const $ = cheerio.load(html)
  const candidates = []

  $('link').each((_, element) => {
    const rel = String($(element).attr('rel') || '').toLowerCase()
    const href = $(element).attr('href')
    if (!href) return

    const sizes = parseSizes($(element).attr('sizes'))
    if (rel.includes('apple-touch-icon')) {
      candidates.push({ url: absolutize(href, pageUrl), priority: 1000 + sizes, source: 'apple-touch-icon' })
    } else if (rel.includes('shortcut icon')) {
      candidates.push({ url: absolutize(href, pageUrl), priority: 700 + sizes, source: 'shortcut icon' })
    } else if (rel.split(/\s+/).includes('icon')) {
      candidates.push({ url: absolutize(href, pageUrl), priority: 800 + sizes, source: 'icon' })
    } else if (rel.includes('manifest')) {
      candidates.push({ url: absolutize(href, pageUrl), priority: 500, source: 'manifest' })
    }
  })

  const manifestCandidates = []
  for (const candidate of candidates.filter((item) => item.source === 'manifest')) {
    try {
      const response = await fetchWithTimeout(candidate.url, { redirect: 'follow' })
      if (!response.ok) continue
      const manifest = await response.json()
      for (const icon of manifest.icons || []) {
        if (!icon.src) continue
        manifestCandidates.push({
          url: absolutize(icon.src, candidate.url),
          priority: 900 + parseSizes(icon.sizes),
          source: 'manifest icon'
        })
      }
    } catch {
      // Manifest icons are optional; ignore parse and network failures here.
    }
  }

  const origin = new URL(pageUrl).origin
  candidates.push({ url: `${origin}/favicon.ico`, priority: 100, source: 'favicon.ico' })

  return [...manifestCandidates, ...candidates.filter((item) => item.source !== 'manifest')]
    .filter((item, index, array) => array.findIndex((other) => other.url === item.url) === index)
    .sort((a, b) => b.priority - a.priority)
}

async function downloadCandidate(site, candidate) {
  try {
    const response = await fetchWithTimeout(candidate.url, {
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 AI-Tools-Directory-IconFetcher/1.0'
      }
    })

    if (!response.ok) {
      return { ok: false, message: `${site.name}: ${candidate.url} HTTP ${response.status}` }
    }

    const contentType = response.headers.get('content-type') || ''
    const ext = getExtension(candidate.url, contentType)
    if (!['.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico'].includes(ext)) {
      return { ok: false, message: `${site.name}: unsupported icon type ${ext || contentType || 'unknown'} from ${candidate.url}` }
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    if (!buffer.length) {
      return { ok: false, message: `${site.name}: empty icon from ${candidate.url}` }
    }

    const normalizedExt = ext === '.jpeg' ? '.jpg' : ext
    const target = join(outputDir, `${site.slug}${normalizedExt}`)
    await writeFile(target, buffer)

    return {
      ok: true,
      message: `${site.name} -> public/brand-icons/${site.slug}${normalizedExt} (${candidate.source})`
    }
  } catch (error) {
    return { ok: false, message: `${site.name}: ${candidate.url} ${formatError(error)}` }
  }
}

async function loadSites() {
  const source = await readFile(manifestPath, 'utf8')
  const match = source.match(/export const toolOfficialSites = (\[[\s\S]*\])\s*$/)
  if (!match) throw new Error('Cannot parse data/tool-official-sites.ts')
  return Function(`"use strict"; return (${match[1]})`)()
}

async function writeBrandIconPathMap() {
  const files = await readdir(outputDir)
  const iconFiles = files
    .filter((file) => /\.(svg|png|jpe?g|webp|ico)$/i.test(file))
    .sort((a, b) => {
      const aSlug = a.replace(/\.(svg|png|jpe?g|webp|ico)$/i, '')
      const bSlug = b.replace(/\.(svg|png|jpe?g|webp|ico)$/i, '')
      if (aSlug === bSlug) return iconPriority(a) - iconPriority(b)
      return aSlug.localeCompare(bSlug)
    })

  const bestBySlug = new Map()
  for (const file of iconFiles) {
    const slug = file.replace(/\.(svg|png|jpe?g|webp|ico)$/i, '')
    if (!bestBySlug.has(slug)) bestBySlug.set(slug, file)
  }

  const entries = [...bestBySlug.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug, file]) => `  ${JSON.stringify(slug)}: ${JSON.stringify(`/brand-icons/${file}`)}`)
    .join(',\n')

  const source = `export const brandIconPaths: Record<string, string> = {\n${entries}\n}\n\nexport function getBrandIconPath(slug?: string) {\n  if (!slug) return ''\n  return brandIconPaths[slug] || ''\n}\n`
  await writeFile(join(root, 'data', 'brand-icon-paths.ts'), source)
}

function iconPriority(file) {
  const ext = extname(file).toLowerCase()
  if (ext === '.svg') return 0
  if (ext === '.png') return 1
  if (ext === '.ico') return 2
  if (ext === '.webp') return 3
  if (ext === '.jpg' || ext === '.jpeg') return 4
  return 9
}

function absolutize(url, base) {
  return new URL(url, base).toString()
}

function parseSizes(value = '') {
  const matches = String(value).matchAll(/(\d+)x(\d+)/g)
  let max = 0
  for (const match of matches) max = Math.max(max, Number(match[1]) * Number(match[2]))
  return max
}

function getExtension(url, contentType) {
  const cleanExt = extname(new URL(url).pathname).toLowerCase()
  if (['.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico'].includes(cleanExt)) return cleanExt
  if (contentType.includes('svg')) return '.svg'
  if (contentType.includes('png')) return '.png'
  if (contentType.includes('jpeg')) return '.jpg'
  if (contentType.includes('jpg')) return '.jpg'
  if (contentType.includes('webp')) return '.webp'
  if (contentType.includes('icon') || contentType.includes('x-icon')) return '.ico'
  return cleanExt
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    })
  } finally {
    clearTimeout(timeout)
  }
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error)
}

function printResult(label, items) {
  console.log(`\n${label}: ${items.length}`)
  for (const item of items) console.log(`- ${item}`)
}
