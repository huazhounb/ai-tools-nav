import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const baseSeo = {
  title: z.string(),
  description: z.string(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.string().optional(),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional()
}

export default defineContentConfig({
  collections: {
    tutorials: defineCollection({
      type: 'page',
      source: 'tutorials/**/*.md',
      schema: z.object(baseSeo)
    }),
    prompts: defineCollection({
      type: 'page',
      source: 'prompts/**/*.md',
      schema: z.object({
        ...baseSeo,
        scenario: z.string().optional()
      })
    }),
    comparisons: defineCollection({
      type: 'page',
      source: 'comparisons/**/*.md',
      schema: z.object({
        ...baseSeo,
        tools: z.array(z.string()).optional()
      })
    }),
    rankings: defineCollection({
      type: 'page',
      source: 'rankings/**/*.md',
      schema: z.object(baseSeo)
    }),
    scenarios: defineCollection({
      type: 'page',
      source: 'scenarios/**/*.md',
      schema: z.object({
        ...baseSeo,
        tools: z.array(z.string()).optional()
      })
    })
  }
})
