import type { Config } from 'tailwindcss'

import catppuccin from '@catppuccin/daisyui'
import daisyui, { type CustomTheme } from 'daisyui'

const renameTheme = (theme: CustomTheme, name: string) => Object.fromEntries(Object.entries(theme)
  .map(([, value]) => [name, value]))

export default {
  /** @see {@link https://docs.astro.build/en/guides/integrations-guide/tailwind/#manual-install} */
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: { preflight: false },
  daisyui: {
    logs: false,
    themes: [
      renameTheme(catppuccin('latte', 'teal'), 'light'), // light
      renameTheme(catppuccin('macchiato', 'green'), 'dark'), // dark
    ],
  },
  plugins: [daisyui],
} satisfies Config
