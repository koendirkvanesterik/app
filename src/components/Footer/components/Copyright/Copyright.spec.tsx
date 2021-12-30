import React from 'react'

import { render } from '@testing-library/react'

import { Copyright } from './Copyright'

it('should render as expected', () => {
  const { getByText } = render(<Copyright />)
  expect(getByText('footer.copyright')).toBeInTheDocument()
})
