import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHomeJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebsiteJsonLd
} from './jsonld'

export const schema = {
  article: buildArticleJsonLd,
  breadcrumb: buildBreadcrumbJsonLd,
  faq: buildFaqJsonLd,
  home: buildHomeJsonLd,
  itemList: buildItemListJsonLd,
  organization: buildOrganizationJsonLd,
  softwareApplication: buildSoftwareApplicationJsonLd,
  website: buildWebsiteJsonLd
}
