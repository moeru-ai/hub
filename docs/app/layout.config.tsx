import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

import { GithubIcon } from 'lucide-react'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  links: [
    // {
    //   active: 'nested-url',
    //   text: 'Documentation',
    //   url: '/docs',
    // },
    {
      external: true,
      icon: (<GithubIcon />),
      text: 'GitHub',
      type: 'icon',
      url: 'https://github.com/moeru-ai/hub',
    },
  ],
  nav: {
    title: (
      <>
        <img
          alt="moeru-ai"
          aria-label="moeru-ai"
          className="w-6 md:w-8"
          sizes="100"
          src="https://github.com/moeru-ai.png"
        />
        <span>@moeru-ai/hub</span>
      </>
    ),
    // url: 'https://github.com/moeru-ai/hub',
  },
}
