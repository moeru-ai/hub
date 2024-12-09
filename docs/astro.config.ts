import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import markdown from '@astropub/md'
// @ts-check
import { defineConfig } from 'astro/config'
import sidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
import catppuccin from 'starlight-theme-catppuccin'

import { generateSidebar } from './src/utils/sidebar'

// https://astro.build/config
export default defineConfig({
  // TODO: remove this
  base: '/hub/',
  integrations: [
    markdown(),
    starlight({
      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
      },
      favicon: '/moeru-ai.png',
      logo: {
        alt: '@moeru-ai/hub',
        replacesTitle: true,
        src: './public/moeru-ai.png',
      },
      plugins: [
        sidebarTopicsDropdown(generateSidebar()),
        catppuccin({
          dark: 'macchiato-green',
          light: 'latte-teal',
        }),
      ],
      // sidebar: generateSidebar(),
      social: {
        github: 'https://github.com/moeru-ai/hub',
      },
      title: '@moeru-ai/hub',
    }),
    tailwind(),
  ],
  markdown: { smartypants: false },
})
