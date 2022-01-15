import { Label } from '@koendirkvanesterik/label'
import { MDXProvider } from '@mdx-js/react'
import { Arrow } from 'components/Arrow'
import { BlogList } from 'components/BlogList'
import { Cover } from 'components/Cover'
import { Link } from 'components/Link'
import { Spacer } from 'components/Spacer'
import { WorkList } from 'components/WorkList'
import React from 'react'

const Page: React.FunctionComponent = ({ children }) => (
  <MDXProvider
    components={{
      a: Link,
      Arrow,
      BlogList,
      Cover,
      Label,
      Spacer,
      WorkList,
    }}
  >
    {children}
  </MDXProvider>
)

export default Page
