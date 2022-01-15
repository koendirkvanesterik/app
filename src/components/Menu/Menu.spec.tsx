import { render } from '@testing-library/react'
import React from 'react'
import * as hooks from './hooks'
import { Menu } from './Menu'

jest.spyOn(hooks, 'useMainMenuData').mockImplementationOnce(() => ({
  name: 'main',
  links: [
    {
      href: '/foo/',
      label: 'Foo',
    },
  ],
}))

it('should render as expected', () => {
  const { getByRole } = render(<Menu />)
  expect(getByRole('link')).toBeInTheDocument()
  expect(getByRole('list')).toBeInTheDocument()
  expect(getByRole('listitem')).toBeInTheDocument()
})
