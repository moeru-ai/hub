import type { DefaultTheme as Theme } from 'vitepress'

import { categories, json } from '@moeru-ai/characters'

const defineSidebar = (active: 'characters') => [{
  collapsed: active !== 'characters',
  items: Object.entries(json)
    .map(([category, characters]) => ({
      items: Object.entries(characters)
        .map(([character, variants]) => ({
          link: `/characters/${category}/${character}`,
          text: variants[character].data.name,
        })),
      text: categories[category],
    })),
  link: '/characters/index.md',
  text: 'Characters',
}] satisfies Theme.SidebarItem[]

export const sidebar = {
  '/characters/': defineSidebar('characters'),
  // '/lorebooks/': defineSidebar('lorebooks'),
  // '/models/': defineSidebar('models'),
} satisfies Theme.SidebarMulti
