import type { UserConfig } from 'vitepress'

import { fileURLToPath } from 'node:url'

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
      rewritePaths: {
        // "docs/characters/": "packages/characters/src/",
        'docs/': 'hub/',
        // ".html": ".ts",
        // ".md": ".ts",
      },
    }),
    GitChangelogMarkdownSection(),
    UnoCSS(unocssConfig)
  ],
  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities']
  },
} satisfies UserConfig['vite']
