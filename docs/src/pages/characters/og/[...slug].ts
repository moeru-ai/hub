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
  getImageOptions: (_path, page: Card) => {
    const { avatar } = (page.metadata ?? {}) as { avatar?: string }

    return {
      // 134 Glass Water from https://webgradients.com/
      bgGradient: [[255, 255, 255], [223, 233, 243]],
      bgImage: {
        fit: 'fill',
        path: './public/moeru-ai-og.png',
        position: 'center',
      },
      description: page.notes,
      font: {
        description: {
          // 076 Premium Dark from https://webgradients.com/
          color: [67, 67, 67],
          families,
          size: 24,
        },
        title: {
          color: [0, 0, 0],
          families,
          lineHeight: avatar ? 1 : 3,
          weight: 'Bold',
        },
      },
      fonts: [
        // astro docs assets
        'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf',
        'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/chinese-simplified-500-normal.ttf',
        // 'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/chinese-traditional-500-normal.ttf',
        'https://cdn.jsdelivr.net/gh/withastro/docs/src/pages/open-graph/_fonts/noto-sans/japanese-500-normal.ttf',
        // fontsource api
        // 'https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf',
        // 'https://api.fontsource.org/v1/fonts/noto-sans-sc/chinese-simplified-400-normal.ttf',
        // 'https://api.fontsource.org/v1/fonts/noto-sans-tc/chinese-traditional-400-normal.ttf',
        // 'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
      ],
      format: 'WEBP',
      logo: avatar
        ? {
            path: `./public${avatar}`,
            size: [144],
          }
        : undefined,
      padding: 72,
      quality: 90,
      title: page.name,
    }
  },

  getSlug: (path, _page: Card) => `${path}.webp`,

  pages: {
    ...generateOGImagePages(derivative, 'derivative'),
    ...generateOGImagePages(existing, 'existing'),
    ...generateOGImagePages(original, 'original'),
  },

  param: 'slug',
})
