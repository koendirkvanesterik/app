import React from 'react'

import { render } from '@testing-library/react'

import { MenuList } from './MenuList'

it('should render as expected', () => {
  const { getByRole } = render(
    <MenuList links={[{ href: '/foo/', label: 'Foo' }]} />,
  )
  expect(getByRole('link')).toBeInTheDocument()
  expect(getByRole('list')).toBeInTheDocument()
  expect(getByRole('listitem')).toBeInTheDocument()
})

it('should render null when links array is empty', () => {
  const { container } = render(<MenuList links={[]} />)
  expect(container).toBeEmptyDOMElement()
})
