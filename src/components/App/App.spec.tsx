import { render } from '@testing-library/react'
import React from 'react'
import { App } from './App'
import * as hooks from './hooks'

jest.spyOn(hooks, 'useLabelData').mockImplementationOnce(() => ({}))
jest.mock('components/Header', () => ({
  Header: () => <header />,
}))
jest.mock('components/Footer', () => ({
  Footer: () => <footer />,
}))
jest.mock('components/Drawer', () => ({
  Drawer: () => <div />,
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
