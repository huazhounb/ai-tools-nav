export type JsonLdNode = Record<string, unknown>

export function buildHomeJsonLd(siteUrl: string, siteName: string): JsonLdNode[] {
  return [
    buildOrganizationJsonLd(siteUrl, siteName),
    buildWebsiteJsonLd(siteUrl, siteName)
  ]
}

export function buildOrganizationJsonLd(siteUrl: string, name: string): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: siteUrl
  }
}

export function buildWebsiteJsonLd(siteUrl: string, name: string): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string, url: string }>): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function buildItemListJsonLd(items: Array<{ name: string, url: string }>): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      name: item.name
    }))
  }
}

export function buildSoftwareApplicationJsonLd(input: {
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers?: string
}): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: input.applicationCategory,
    operatingSystem: input.operatingSystem,
    offers: {
      '@type': 'Offer',
      price: input.offers ?? '0',
      priceCurrency: 'CNY'
    }
  }
}

export function buildArticleJsonLd(input: {
  headline: string
  description: string
  url: string
  dateModified: string
  authorName?: string
}): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: input.url,
    dateModified: input.dateModified,
    author: {
      '@type': 'Organization',
      name: input.authorName ?? 'AI Nav'
    }
  }
}

export function buildFaqJsonLd(items: Array<{ question: string, answer: string }>): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}
