import './global.css'

import type { PropsWithChildren } from 'react'

import { RootProvider } from 'fumadocs-ui/provider'

export default ({ children }: PropsWithChildren) => (
  <html className="font-sans" lang="en" suppressHydrationWarning>
    <body className="flex flex-col min-h-screen">
      <RootProvider>{children}</RootProvider>
    </body>
  </html>
)
