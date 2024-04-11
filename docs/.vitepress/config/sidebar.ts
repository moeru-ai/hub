import type { DefaultTheme as Theme } from 'vitepress'

const characters = [
  {
    text: 'Characters',
    collapsed: false,
    items: [
      // { text: 'Original', items: [] },
      {
        text: 'Visual Novel', items: [
          // { text: 'Apeiria', link: '/characters/visual_novel/apeiria/' },
          { text: 'Tsukuyomi', link: '/characters/visual_novel/tsukuyomi/' },
          // { text: 'Murasame', link: '/characters/visual_novel/murasame/' },
        ]
      }
    ]
  }
] satisfies Theme.SidebarItem[]

// const lorebooks = [] satisfies Theme.SidebarItem[]

// const models = [] satisfies Theme.SidebarItem[]

export const sidebar = {
  '/characters/': characters,
  // '/lorebooks/': lorebooks,
  // '/models/': models,
} satisfies Theme.SidebarMulti
