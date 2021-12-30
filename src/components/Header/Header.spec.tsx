import React from 'react'

import { render } from '@testing-library/react'

import { Header } from './Header'

jest.mock('components/Menu', () => ({
  Menu: () => (
    <ul>
      <li>
        <a href="/bar/">Foo</a>
      </li>
    </ul>
  ),
}))

it('should render as expected', () => {
  const { getAllByRole, getByRole } = render(<Header />)
  expect(getByRole('banner')).toBeInTheDocument()
  expect(getAllByRole('link')).toHaveLength(2)
  expect(getByRole('list')).toBeInTheDocument()
  expect(getByRole('listitem')).toBeInTheDocument()
  expect(getByRole('navigation')).toBeInTheDocument()
})
