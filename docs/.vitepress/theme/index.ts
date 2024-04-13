// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'
import {
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'
// import '@nolebase/vitepress-plugin-git-changelog/client/styles.css'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  /** {@link https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/#add-plugin-into-the-theme-options-of-vitepress} */
  Layout: () => h(Layout, null, {
  // Layout: () => h(DefaultTheme.Layout, null, {
    'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
    'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
  }),
  enhanceApp({ app, router, siteData }) {
    app.use(NolebaseGitChangelogPlugin)
    // ...
  }
} satisfies Theme
