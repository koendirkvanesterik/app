import React from 'react'

import { App } from 'components/App'

/**
 * Wrap each gatsby page with App component
 */
export function wrapRootElement({
  element,
}: {
  element: React.ReactElement
}): React.ReactElement {
  return <App>{element}</App>
}
