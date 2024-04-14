import { defineConfig } from 'vitepress'
import { editLink } from './config/edit-link'
import { sidebar } from './config/sidebar'
import { transformPageData } from './config/transform-page-data'
import { vite } from './config/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'dark',
  base: '/hub',
  title: '@moeru-ai/hub',
  // description: 'A VitePress Site',
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
    editLink,
    sidebar,
  },
  transformPageData,
  vite,
})
