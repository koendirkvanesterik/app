import { render } from '@testing-library/react'
import React from 'react'
import { Cover } from './Cover'

jest.mock('./components', () => ({
  Scene: () => <div />,
}))

it('should render as expected', () => {
  const { container } = render(<Cover />)
  expect(container).toMatchSnapshot()
})

afterAll(() => {
  jest.resetAllMocks()
})
