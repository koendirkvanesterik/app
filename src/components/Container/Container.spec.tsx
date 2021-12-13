import React from 'react'

import { render } from '@testing-library/react'

import { Container } from './Container'

it('should render render as expected', () => {
  const { container } = render(<Container />)
  expect(container).toMatchSnapshot()
})
