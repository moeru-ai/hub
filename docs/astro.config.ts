import starlight from '@astrojs/starlight'
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
    starlight({
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
  ],
})
