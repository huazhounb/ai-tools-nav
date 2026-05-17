import { categories } from '../../data/categories'
import { scenarioEntries } from '../../data/scenarios'
import { comparisons, prompts, rankings, tutorials } from '../../data/siteContent'
import { featuredTools } from '../../data/tools'

interface SitemapRoute {
  loc: string
  changefreq: 'daily' | 'weekly' | 'monthly'
  priority: string
  lastmod?: string
}

const today = new Date().toISOString().slice(0, 10)
const staticRoutes: SitemapRoute[] = [
  { loc: '/', changefreq: 'daily', priority: '1.0', lastmod: today },
  { loc: '/free-ai-tools', changefreq: 'weekly', priority: '0.8', lastmod: today },
  { loc: '/tools/free', changefreq: 'weekly', priority: '0.8', lastmod: today },
  { loc: '/prompts', changefreq: 'weekly', priority: '0.7', lastmod: today },
  { loc: '/compare', changefreq: 'weekly', priority: '0.7', lastmod: today },
  { loc: '/tutorial', changefreq: 'weekly', priority: '0.7', lastmod: today },
  { loc: '/rankings', changefreq: 'weekly', priority: '0.7', lastmod: today },
  { loc: '/cooperation', changefreq: 'monthly', priority: '0.3', lastmod: today },
  { loc: '/submit', changefreq: 'monthly', priority: '0.4', lastmod: today }
]

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')
  const routes: SitemapRoute[] = [
    ...staticRoutes,
    ...categories.map((item) => ({ loc: `/category/${item.slug}`, changefreq: 'weekly' as const, priority: '0.8', lastmod: today })),
    ...featuredTools.map((item) => ({ loc: `/tool/${item.slug}`, changefreq: 'weekly' as const, priority: '0.8', lastmod: item.updatedAt })),
    ...comparisons.map((item) => ({ loc: `/compare/${item.slug}`, changefreq: 'monthly' as const, priority: '0.8', lastmod: item.updatedAt })),
    ...tutorials.map((item) => ({ loc: `/tutorial/${item.slug}`, changefreq: 'monthly' as const, priority: '0.7', lastmod: item.updatedAt })),
    ...prompts.map((item) => ({ loc: `/prompts/${item.slug}`, changefreq: 'monthly' as const, priority: '0.7', lastmod: item.updatedAt })),
    ...rankings.map((item) => ({ loc: `/rankings/${item.slug}`, changefreq: 'weekly' as const, priority: '0.8', lastmod: item.updatedAt })),
    ...scenarioEntries.map((item) => ({ loc: item.route, changefreq: 'monthly' as const, priority: '0.7', lastmod: today }))
  ]

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const urls = routes
    .map((route) => {
      return [
        '  <url>',
        `    <loc>${siteUrl}${route.loc}</loc>`,
        route.lastmod ? `    <lastmod>${route.lastmod}</lastmod>` : '',
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        '  </url>'
      ].filter(Boolean).join('\n')
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>'
  ].join('\n')
})
