import { render } from '@testing-library/react'
import React from 'react'
import * as hooks from './hooks'
import { WorkList } from './WorkList'

jest.spyOn(hooks, 'useWorkListData').mockImplementationOnce(() => [
  {
    href: '/foo/',
    title: 'Foo',
  },
])

it('should render as expected', () => {
  const { getByRole } = render(<WorkList />)
  expect(getByRole('list')).toBeInTheDocument()
  expect(getByRole('listitem')).toBeInTheDocument()
  expect(getByRole('link')).toBeInTheDocument()
  expect(getByRole('heading')).toBeInTheDocument()
})
