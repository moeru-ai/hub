import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

/** {@link https://github.com/nolebase/integrations/blob/main/uno.config.ts} */
export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
      prefix: 'i-',
      scale: 1.2, // size: 1.2 rem
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'min-width': '1.2rem',
      },
      warn: true,
    }),
  ],
})