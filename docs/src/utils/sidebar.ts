import type starlight from '@astrojs/starlight'

import * as derivative from '@moeru-ai/characters-derivative'
import * as existing from '@moeru-ai/characters-existing'

const toPascalCase = (str: string) => str.split('_').map(str => str.at(0)?.toUpperCase() + str.slice(1)).join(' ')

export const generateSidebar = (): Parameters<typeof starlight>[0]['sidebar'] => [
  {
    collapsed: false,
    items: [
      { label: 'Introduction', slug: 'characters' },
      {
        collapsed: false,
        items: Object.entries(existing).map(([parody, characters]) => ({
          collapsed: true,
          items: Object.entries(characters).map(([character, json]) => ({
            label: json.name,
            link: `characters/existing/${parody}/${character}`,
          })),
          label: toPascalCase(parody),
        })),
        label: 'Existing',
      },
      {
        collapsed: false,
        items: Object.entries(derivative).map(([parody, characters]) => ({
          collapsed: true,
          items: Object.entries(characters).map(([character, json]) => ({
            label: json.name,
            link: `characters/derivative/${parody}/${character}`,
          })),
          label: toPascalCase(parody),
        })),
        label: 'Derivative',
      },
    ],
    label: 'Characters',
  },
]
