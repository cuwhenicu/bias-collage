export { PageShell }

import React from 'react'
import { PageContextProvider } from './usePageContext.js'
import type { PageContext } from 'vike/types'

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
