import type { DefaultTheme as Theme } from 'vitepress'

import { categories, json } from '@moeru-ai/characters'

const defineSidebar = (active: 'characters') => [{
  text: 'Characters',
  collapsed: active !== 'characters',
  link: '/characters/index.md',
  items: Object.entries(json)
    .map(([category, characters]) => ({
      text: categories[category],
      items: Object.entries(characters)
        .map(([character, variants]) => ({
          text: variants[character].data.name,
          link: `/characters/${category}/${character}`
        }))
    }))
}] satisfies Theme.SidebarItem[]

export const sidebar = {
  '/characters/': defineSidebar('characters'),
  // '/lorebooks/': defineSidebar('lorebooks'),
  // '/models/': defineSidebar('models'),
} satisfies Theme.SidebarMulti
