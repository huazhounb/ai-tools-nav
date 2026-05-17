import type { NuxtSeoMeta } from 'nuxt/schema'

export interface PageSeoInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function createCanonicalUrl(path: string, siteUrl: string) {
  return new URL(path, normalizeSiteUrl(siteUrl)).toString()
}

export function buildPageSeo(input: PageSeoInput, siteUrl: string): NuxtSeoMeta {
  const canonical = createCanonicalUrl(input.path, siteUrl)

  return {
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type ?? 'website',
    ogUrl: canonical,
    ogImage: input.image,
    twitterCard: input.image ? 'summary_large_image' : 'summary'
  }
}

export function useCanonicalLink(path: string, siteUrl: string) {
  useHead({
    link: [
      {
        rel: 'canonical',
        href: createCanonicalUrl(path, siteUrl)
      }
    ]
  })
}

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
}
