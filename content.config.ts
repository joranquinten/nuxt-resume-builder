import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    sections: defineCollection({
      type: 'page',
      source: 'sections/*.md',
      schema: z.object({
        title: z.string(),
        order: z.number(),
        highlight: z.boolean().optional(),
      }),
    }),
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        title: z.array(z.string()),
        dateTo: z.date().optional(),
        dateFrom: z.date(),
        company: z.string(),
        companyUrl: z.string().url().optional(),
        location: z.string().optional(),
      })
    }),
    education: defineCollection({
      type: 'page',
      source: 'education/*.md',
      schema: z.object({
        title: z.array(z.string()),
        dateTo: z.date().optional(),
        dateFrom: z.date(),
        institution: z.string(),
        location: z.string().optional(),
      })
    }),
  },
})