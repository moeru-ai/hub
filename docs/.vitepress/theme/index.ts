// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import Layout from './Layout.vue'

import 'uno.css'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import './style.css'

export default {
  extends: DefaultTheme,
  /** {@link https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/#add-plugin-into-the-theme-options-of-vitepress} */
  Layout: () => h(Layout, null, {
    'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
    'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
  }),
  enhanceApp: ({ app }) => {
    app.use(NolebaseGitChangelogPlugin, {
      mapContributors: [{
        name: '藍+85CD',
        avatar: 'https://github.com/kwaa.png',
        emailAliases: ['50108258+kwaa@users.noreply.github.com'],
      }]
    })
  }
} satisfies Theme
