import { render } from '@testing-library/react'
import React from 'react'
import { List } from './List'

it('should render as expected', () => {
  const { getAllByRole, getByRole } = render(
    <List
      items={[
        { href: '/foo/', title: 'Foo' },
        { href: '/bar/', title: 'Bar' },
      ]}
    />,
  )
  expect(getByRole('list')).toBeInTheDocument()
  expect(getAllByRole('listitem')).toHaveLength(2)
  expect(getAllByRole('link')).toHaveLength(2)
  expect(getAllByRole('heading')).toHaveLength(2)
})

it('should not render in case of no items', () => {
  const { container } = render(<List items={[]} />)
  expect(container).toBeEmptyDOMElement()
})
