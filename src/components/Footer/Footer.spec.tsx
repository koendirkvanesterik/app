import React from 'react'

import { render } from '@testing-library/react'

import { Footer } from './Footer'
import * as useContactMenuData from './hooks/useContactMenuData'
import * as useSocialMenuData from './hooks/useSocialMenuData'

jest.spyOn(useContactMenuData, 'useContactMenuData').mockImplementation(() => ({
  name: 'foo',
  links: [
    {
      href: '/foo/',
      label: 'Foo',
    },
  ],
}))

jest.spyOn(useSocialMenuData, 'useSocialMenuData').mockImplementation(() => ({
  name: 'bar',
  links: [
    {
      href: '/bar/',
      label: 'Bar',
    },
  ],
}))

it('should render as expected', () => {
  const { getAllByRole, getByRole, getByText } = render(<Footer />)
  expect(getByRole('contentinfo')).toBeInTheDocument()
  expect(getByText('footer.status.unavailable')).toBeInTheDocument()
  expect(getByText('footer.copyright')).toBeInTheDocument()
  expect(getAllByRole('link')).toHaveLength(2)
  expect(getAllByRole('list')).toHaveLength(2)
  expect(getAllByRole('listitem')).toHaveLength(2)
})

afterAll(() => {
  jest.resetAllMocks()
})
