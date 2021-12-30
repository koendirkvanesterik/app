import React from 'react'

import { render } from '@testing-library/react'

import * as useMainMenuData from './hooks/useMainMenuData'
import { Menu } from './Menu'

jest.spyOn(useMainMenuData, 'useMainMenuData').mockImplementation(() => ({
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
