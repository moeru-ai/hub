import { defineConfig } from 'vitepress'
import { vite } from './config/vite'
import { sidebar } from './config/sidebar'
import { transformPageData } from './config/transform-page-data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hub',
  title: 'Moeru-AI Hub',
  description: 'A VitePress Site',
  lastUpdated: true,
  head: [['link', { href: 'https://github.com/moeru-ai.png', rel: 'icon', type: 'image/png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/moeru-ai.png',
    nav: [
      { text: 'Characters', link: '/characters/' },
      // { text: 'Lorebooks', link: '/lorebooks/' },
      // { text: 'Models', link: '/models/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moeru-ai/hub' }
    ],
    editLink: {
      pattern: 'https://github.com/moeru-ai/hub/edit/main/:path'
    },
    sidebar,
  },
  transformPageData,
  vite,
})
