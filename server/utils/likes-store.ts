const likes = new Map<string, number>()

export function getExtraLikes(slug: string) {
  return likes.get(slug) || 0
}

export function addToolLike(slug: string) {
  const next = getExtraLikes(slug) + 1
  likes.set(slug, next)
  return next
}

export function getAllExtraLikes() {
  return Object.fromEntries(likes.entries())
}

// Production note:
// This in-memory store is only for the first local version.
// Replace it with a database table such as tool_likes before production.

