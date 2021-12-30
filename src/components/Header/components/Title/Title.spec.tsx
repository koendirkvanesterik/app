import React from 'react'

import { render } from '@testing-library/react'

import { Title } from './Title'

it('should render as expected', () => {
  const { getByRole } = render(<Title />)
  expect(getByRole('link')).toBeInTheDocument()
})
