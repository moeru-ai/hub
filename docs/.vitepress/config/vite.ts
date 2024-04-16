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
      repoURL: () => 'https://github.com/moeru-ai/hub',
      rewritePaths: { 'docs/': 'hub/' },
      // rewritePathsBy: {
      //   handler: (_commit, path) => {
      //     if (path)
      //       console.log(path)

      //     /** {@link https://github.com/nolebase/integrations/issues/158#issuecomment-2057024484} */
      //     return path as any
      //   }
      // }
    }),
    GitChangelogMarkdownSection(),
    UnoCSS(unocssConfig)
  ],
} satisfies UserConfig['vite']
