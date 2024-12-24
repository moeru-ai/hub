import type { Card } from '@moeru-ai/ccc'

import * as derivative from '@moeru-ai/characters-derivative'
import * as existing from '@moeru-ai/characters-existing'
import * as original from '@moeru-ai/characters-original'
import { OGImageRoute } from 'astro-og-canvas'

const generateOGImagePages = (json: typeof derivative | typeof existing | typeof original, pkg: string) =>
  Object.fromEntries(
    Object.entries(json)
      .flatMap(([category, characters]) => Object.entries(characters)
        .map(([character, json]) => [
          // characters-og/[...slug].png
          `${pkg}/${category}/${character}`,
          json as Card,
        ]),
      ),
  )

export const { GET, getStaticPaths } = OGImageRoute({
  getImageOptions: (_path, page: Card) => ({
    description: page.notes,
    title: page.name,
  }),

  pages: {
    ...generateOGImagePages(derivative, 'derivative'),
    ...generateOGImagePages(existing, 'existing'),
    ...generateOGImagePages(original, 'original'),
  },

  param: 'slug',
})
