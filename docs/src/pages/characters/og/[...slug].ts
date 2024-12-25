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

const families = [
  'Noto Sans',
  'Noto Sans SC',
  // 'Noto Sans TC',
  'Noto Sans JP',
]

export const { GET, getStaticPaths } = OGImageRoute({
  getImageOptions: (_path, page: Card) => ({
    bgGradient: [[0, 0, 0], [67, 67, 67]],
    // 076 Premium Dark from https://webgradients.com/
    // TODO: bgImage
    description: page.notes,
    font: {
      description: {
        // 089 Premium White from https://webgradients.com/
        color: [213, 212, 208],
        families,
        size: 24,
        weight: 'Normal',
      },
      title: {
        families,
        weight: 'Bold',
      },
    },
    fonts: [
      'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf',
      'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/chinese-simplified-500-normal.ttf',
      // 'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/chinese-traditional-500-normal.ttf',
      'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/japanese-500-normal.ttf',
    ],
    format: 'WEBP',
    logo: {
      path: './public/moeru-ai.png',
      size: [64, 64] as const,
    },
    quality: 90,
    title: page.name,
  }),

  getSlug: (path, _page: Card) => `${path}.webp`,

  pages: {
    ...generateOGImagePages(derivative, 'derivative'),
    ...generateOGImagePages(existing, 'existing'),
    ...generateOGImagePages(original, 'original'),
  },

  param: 'slug',
})
