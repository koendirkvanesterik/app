import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'
import { useWorkListData } from './useWorkListData'

jest.spyOn(gatsby, 'useStaticQuery').mockImplementationOnce(() => ({
  allMdx: {
    edges: [
      {
        node: {
          frontmatter: {
            description: 'Foo bar baz quz quux...',
            roles: ['foo', 'bar', 'baz'],
            title: 'Foo',
          },
          slug: '/foo/',
        },
      },
    ],
  },
}))

it('should return label object as expected', () => {
  const { result } = renderHook(() => useWorkListData())
  expect(result.current).toEqual([
    {
      details: ['Foo bar baz quz quux...', 'foo, bar, baz'],
      href: '/foo/',
      title: 'Foo',
    },
  ])
})
