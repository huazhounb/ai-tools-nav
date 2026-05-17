import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('../', import.meta.url)))
const manifestPath = join(root, 'data', 'brand-icons-manifest.ts')
const outputDir = join(root, 'public', 'brand-icons')

const success = []
const skipped = []
const failed = []

await mkdir(outputDir, { recursive: true })

const manifest = await loadManifest()

for (const item of manifest) {
  if (!item.url) {
    skipped.push(`${item.name} (${item.slug}) - empty url`)
    continue
  }

  try {
    const response = await fetch(item.url)
    if (!response.ok) {
      failed.push(`${item.name} (${item.slug}) - HTTP ${response.status}`)
      continue
    }

    const contentType = response.headers.get('content-type') || ''
    const ext = getExtension(item.url, contentType)
    if (!['.svg', '.png'].includes(ext)) {
      failed.push(`${item.name} (${item.slug}) - unsupported file type ${ext || 'unknown'}`)
      continue
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const target = join(outputDir, `${item.slug}${ext}`)
    await writeFile(target, buffer)
    success.push(`${item.name} -> public/brand-icons/${item.slug}${ext}`)
  } catch (error) {
    failed.push(`${item.name} (${item.slug}) - ${error instanceof Error ? error.message : String(error)}`)
  }
}

printResult('success', success)
printResult('skipped', skipped)
printResult('failed', failed)

async function loadManifest() {
  const source = await readFile(manifestPath, 'utf8')
  const match = source.match(/export const brandIconsManifest = (\[[\s\S]*\])\s*$/)
  if (!match) throw new Error('Cannot parse data/brand-icons-manifest.ts')
  return Function(`"use strict"; return (${match[1]})`)()
}

function getExtension(url, contentType) {
  const cleanExt = extname(new URL(url).pathname).toLowerCase()
  if (cleanExt === '.svg' || cleanExt === '.png') return cleanExt
  if (contentType.includes('svg')) return '.svg'
  if (contentType.includes('png')) return '.png'
  return cleanExt
}

function printResult(label, items) {
  console.log(`\n${label}: ${items.length}`)
  for (const item of items) console.log(`- ${item}`)
}
