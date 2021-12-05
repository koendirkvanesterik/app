import React from 'react'

import { Label } from '@koendirkvanesterik/label'
import { MDXProvider } from '@mdx-js/react'

import { Arrow } from 'components/Arrow'
import { Cover } from 'components/Cover'
import { Link } from 'components/Link'

const Page: React.FunctionComponent = ({ children }) => (
  <MDXProvider
    components={{
      a: Link,
      Arrow,
      Cover,
      Label,
    }}
  >
    {children}
  </MDXProvider>
)

export default Page
