import React from 'react'

import { render } from '@testing-library/react'

import { Link } from './Link'

it('should render internal link as expected', () => {
  const { getByRole } = render(<Link href="/about/" />)
  const link = getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).not.toHaveAttribute('target')
  expect(link).not.toHaveAttribute('rel')
})

it('should render external link as expected', () => {
  const { getByRole } = render(
    <Link href="https://www.koendirkvanesterik.com" />,
  )
  const link = getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('target', '_blank')
  expect(link).toHaveAttribute('rel', 'noopener noreferrer nofollow')
})
