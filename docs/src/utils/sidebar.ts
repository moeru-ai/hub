import type { StarlightSidebarTopicsDropdownUserConfig } from 'starlight-sidebar-topics-dropdown'

import * as derivative from '@moeru-ai/characters-derivative'
import * as existing from '@moeru-ai/characters-existing'
import * as original from '@moeru-ai/characters-original'

const toPascalCase = (str: string) => str.split('_').map(str => str.at(0)?.toUpperCase() + str.slice(1)).join(' ')

const generateSidebar = (): StarlightSidebarTopicsDropdownUserConfig => [
  {
    icon: 'open-book',
    // collapsed: false,
    items: [
      'characters',
      'characters/contributing',
      // { label: 'Introduction', slug: 'characters' },
      {
        // collapsed: true,
        items: Object.entries(original).map(([category, characters]) => ({
        //   collapsed: false,
          items: Object.entries(characters).map(([character, json]) => ({
            label: json.name,
            link: `characters/original/${category}/${character}`,
          })),
          label: toPascalCase(category),
        })),
        label: 'Original',
      },
      {
        // collapsed: true,
        items: Object.entries(existing).map(([category, characters]) => ({
        //   collapsed: false,
          items: Object.entries(characters).map(([character, json]) => ({
            label: json.name,
            link: `characters/existing/${category}/${character}`,
          })),
          label: toPascalCase(category),
        })),
        label: 'Existing',
      },
      {
        // collapsed: true,
        items: Object.entries(derivative).map(([category, characters]) => ({
        //   collapsed: false,
          items: Object.entries(characters).map(([character, json]) => ({
            label: json.name,
            link: `characters/derivative/${category}/${character}`,
          })),
          label: toPascalCase(category),
        })),
        label: 'Derivative',
      },
    ],
    label: 'Characters',
    link: 'characters',
  },
  {
    icon: 'document',
    // id: 'packages',
    items: [
      'packages',
      {
        items: [{
          label: 'Readme',
          slug: 'packages/ccc',
        }],
        label: 'CCC',
      },
    ],
    label: 'Packages',
    link: 'packages',
  },
]

export const sidebar = generateSidebar()
