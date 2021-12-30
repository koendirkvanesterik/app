import React from 'react'

import { render } from '@testing-library/react'

import { Status } from './Status'

it('should render as expected', () => {
  const { getByText } = render(<Status />)
  expect(getByText('footer.status.unavailable')).toBeInTheDocument()
})
