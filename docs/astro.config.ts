import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import markdown from '@astropub/md'
// @ts-check
import { defineConfig } from 'astro/config'
import sidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
import catppuccin from 'starlight-theme-catppuccin'

import { sidebar } from './src/utils/sidebar'

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdown(),
    starlight({
      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/moeru-ai/deck/edit/main/docs',
      },
      favicon: '/moeru-ai.png',
      logo: {
        alt: '@moeru-ai/deck',
        replacesTitle: true,
        src: './public/moeru-ai.png',
      },
      plugins: [
        sidebarTopicsDropdown(sidebar),
        catppuccin({
          dark: 'macchiato-green',
          light: 'latte-teal',
        }),
      ],
      // sidebar: generateSidebar(),
      social: {
        github: 'https://github.com/moeru-ai/deck',
      },
      title: '@moeru-ai/deck',
    }),
    tailwind(),
  ],
  markdown: { smartypants: false },
})
