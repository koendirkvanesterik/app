import { render } from '@testing-library/react'
import React from 'react'
import { Spacer } from './Spacer'

it('should render as expected', () => {
  const { container } = render(<Spacer />)
  expect(container).toMatchSnapshot()
})
