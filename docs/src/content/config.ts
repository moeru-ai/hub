import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection, z } from 'astro:content'

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // character avatar
        avatar: z.string().optional(),
        chara_version: z.string().optional(),
        type: z.string().optional(),
      }),
    }),
  }),
}
