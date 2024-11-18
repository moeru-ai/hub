import starlight from '@astrojs/starlight'
// @ts-check
import { defineConfig } from 'astro/config'
import catppuccin from 'starlight-theme-catppuccin'

// https://astro.build/config
export default defineConfig({
  // TODO: remove this
  base: '/hub/',
  integrations: [
    starlight({
      favicon: '/moeru-ai.png',
      logo: {
        alt: '@moeru-ai/hub',
        replacesTitle: true,
        src: './public/moeru-ai.png',
      },
      plugins: [
        catppuccin({
          dark: 'macchiato-green',
          light: 'latte-teal',
        }),
      ],

      sidebar: [
        {
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Introduction', slug: 'characters' },
            // { label: 'Murasame', slug: 'characters/existing/visual_novel/murasame' },
          ],
          label: 'Characters',
        },
        // {
        //   autogenerate: { directory: 'reference' },
        //   label: 'Reference',
        // },
      ],
      social: {
        github: 'https://github.com/moeru-ai/hub',
      },
      title: '@moeru-ai/hub',
    }),
  ],
})
