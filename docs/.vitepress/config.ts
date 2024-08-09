import { defineConfig } from 'vitepress'

import { editLink } from './config/edit-link'
import { sidebar } from './config/sidebar'
import { transformPageData } from './config/transform-page-data'
import { vite } from './config/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'dark',
  base: '/hub',
  // description: 'A VitePress Site',
  head: [['link', { href: 'https://github.com/moeru-ai.png', rel: 'icon', type: 'image/png' }]],
  themeConfig: {
    editLink,
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/moeru-ai.png',
    nav: [
      { link: '/characters/', text: 'Characters' },
      // { text: 'Lorebooks', link: '/lorebooks/' },
      // { text: 'Models', link: '/models/' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moeru-ai/hub' },
    ],
  },
  title: '@moeru-ai/hub',
  transformPageData,
  vite,
})
