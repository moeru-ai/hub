import type { UserConfig } from 'vitepress'

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import UnoCSS from 'unocss/vite'

import unocssConfig from './unocss'

/** {@link https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/#add-plugin-specific-options-into-configurations-of-vite} */
export const vite = {
  optimizeDeps: {
    include: ['@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas'],
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
  },
  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities']
  },
  plugins: [
    GitChangelog({
      includeDirs: ['docs', 'packages/characters/src'],
      includeExtensions: ['.md', '.ts'],
      repoURL: () => 'https://github.com/moeru-ai/hub',
      rewritePathsBy: {
        handler: (_commit, path) => {
          if (path) {
            // @moeru-ai/characters
            if (path.startsWith('packages/characters/src/'))
              return `hub/characters/${path.slice(24, -3)}.md`

            // @moeru-ai/docs
            if (path.startsWith('docs/'))
              return path.replace('docs/', 'hub/')
          }

          return path
        }
      }
    }),
    GitChangelogMarkdownSection(),
    UnoCSS(unocssConfig)
  ],
} satisfies UserConfig['vite']
