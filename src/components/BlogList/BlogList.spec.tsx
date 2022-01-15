import { render } from '@testing-library/react'
import React from 'react'
import { BlogList } from './BlogList'
import * as hooks from './hooks'

jest.spyOn(hooks, 'useBlogListData').mockImplementationOnce(() => [
  {
    href: '/foo/',
    title: 'Foo',
  },
])

it('should render as expected', () => {
  const { getByRole } = render(<BlogList />)
  expect(getByRole('list')).toBeInTheDocument()
  expect(getByRole('listitem')).toBeInTheDocument()
  expect(getByRole('link')).toBeInTheDocument()
  expect(getByRole('heading')).toBeInTheDocument()
})
