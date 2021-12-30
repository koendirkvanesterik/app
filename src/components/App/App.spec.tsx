import React from 'react'

import { render } from '@testing-library/react'

import { App } from './App'
import * as useLabelData from './hooks/useLabelData'

jest.spyOn(useLabelData, 'useLabelData').mockImplementation(() => ({}))
jest.mock('components/Header', () => ({
  Header: () => <header />,
}))
jest.mock('components/Footer', () => ({
  Footer: () => <footer />,
}))
jest.mock('components/Overlay', () => ({
  Overlay: () => <div />,
}))

it('should render as expected', () => {
  const { getByRole } = render(<App />)
  expect(getByRole('banner')).toBeInTheDocument()
  expect(getByRole('contentinfo')).toBeInTheDocument()
  expect(getByRole('main')).toBeInTheDocument()
})

afterAll(() => {
  jest.resetAllMocks()
})
