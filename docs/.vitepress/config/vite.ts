import type { UserConfig } from 'vitepress'

import { fileURLToPath } from 'node:url'

/** {@link https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/#add-plugin-specific-options-into-configurations-of-vite} */
export const vite = {
  optimizeDeps: {
    include: ['@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas'],
  },
  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities']
  },
  resolve: {
    alias: {
      '@moeru-ai/characters': fileURLToPath(new URL('../packages/characters', import.meta.url))
    }
    // alias: [{
    //   find: '@moeru-ai/characters',
    //   replacement: '../packages/characters'
    // }]
  }
} satisfies UserConfig['vite']
