import type { UserConfig } from 'vitepress'

import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import UnoCSS from 'unocss/vite'

import unocssConfig from './unocss'

/** {@link https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/#add-plugin-specific-options-into-configurations-of-vite} */
export const vite = {
  optimizeDeps: {
    include: ['@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas'],
  },
  plugins: [
    GitChangelog({
      repoURL: () => 'https://github.com/moeru-ai/hub',
      /** {@link https://github.com/nolebase/integrations/issues/158} */
      rewritePaths: {
        // 'packages/characters/src/json/': 'hub/characters/',
        // '.ts': '.md',
        'docs/': 'hub/'
      },
    }),
    GitChangelogMarkdownSection(),
    UnoCSS(unocssConfig)
  ],
  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities']
  },
} satisfies UserConfig['vite']
