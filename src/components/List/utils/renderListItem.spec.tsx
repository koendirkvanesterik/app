import { render } from '@testing-library/react'
import React from 'react'
import { renderListItem } from './renderListItem'

it('should render as expected', () => {
  const { getByRole } = render(
    <>{renderListItem({ href: '/foo/', title: 'Foo' })}</>,
  )
  expect(getByRole('listitem')).toBeInTheDocument()
  expect(getByRole('link', { name: /foo/i })).toBeInTheDocument()
  expect(getByRole('heading', { name: /foo/i })).toBeInTheDocument()
})

it('should not render in case of no title', () => {
  const { container } = render(
    <>{renderListItem({ href: '/foo/', title: '' })}</>,
  )
  expect(container).toBeEmptyDOMElement()
})

it('should not render in case of no href', () => {
  const { container } = render(
    <>{renderListItem({ href: '', title: 'Foo' })}</>,
  )
  expect(container).toBeEmptyDOMElement()
})
