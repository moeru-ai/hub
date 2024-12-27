import { docsSchema } from '@astrojs/starlight/schema'
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const collections = {
  docs: defineCollection({
    loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
    schema: docsSchema({
      extend: z.object({
        // character avatar
        avatar: z.string().optional(),
        // character version
        chara_version: z.string().optional(),
        // page type
        type: z.string().optional(),
      }),
    }),
  }),
}
