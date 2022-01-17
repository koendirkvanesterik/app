import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Drawer } from './Drawer'

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
  const { getByRole } = render(<Drawer />)
  expect(getByRole('button')).toBeInTheDocument()
})

it('should set state to active when clicked', () => {
  const regex = /foo/i
  const { getByRole, getByText, queryByText } = render(<Drawer />)
  const button = getByRole('button')

  expect(queryByText(regex)).not.toBeInTheDocument()

  userEvent.click(button)

  expect(getByText(regex)).toBeInTheDocument()
})

afterAll(() => {
  jest.clearAllMocks()
})
