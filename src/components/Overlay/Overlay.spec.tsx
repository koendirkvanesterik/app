import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Overlay } from './Overlay'

jest.mock('components/Menu', () => ({
  Menu: () => (
    <ul>
      <li>
        <a href="/">Foo</a>
      </li>
    </ul>
  ),
}))

it('should render as expected', () => {
  const { getByRole } = render(<Overlay />)
  expect(getByRole('button')).toBeInTheDocument()
})

it('should set state to active when clicked', () => {
  const regex = /foo/i
  const { getByRole, getByText, queryByText } = render(<Overlay />)
  const button = getByRole('button')

  expect(queryByText(regex)).not.toBeInTheDocument()

  userEvent.click(button)

  expect(getByText(regex)).toBeInTheDocument()
})

afterAll(() => {
  jest.clearAllMocks()
})
