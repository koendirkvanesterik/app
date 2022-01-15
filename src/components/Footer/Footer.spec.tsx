import { render } from '@testing-library/react'
import React from 'react'
import { Footer } from './Footer'
import * as hooks from './hooks'

jest.spyOn(hooks, 'useContactMenuData').mockImplementationOnce(() => ({
  name: 'foo',
  links: [
    {
      href: '/foo/',
      label: 'Foo',
    },
  ],
}))

jest.spyOn(hooks, 'useSocialMenuData').mockImplementationOnce(() => ({
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
