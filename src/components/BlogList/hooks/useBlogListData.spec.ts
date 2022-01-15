import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'
import { useBlogListData } from './useBlogListData'

jest.spyOn(gatsby, 'useStaticQuery').mockImplementationOnce(() => ({
  allMdx: {
    edges: [
      {
        node: {
          frontmatter: {
            date: '1st of January 2022',
            tags: ['foo', 'bar', 'baz'],
            title: 'Foo',
          },
          slug: '/foo/',
        },
      },
    ],
  },
}))

it('should return label object as expected', () => {
  const { result } = renderHook(() => useBlogListData())
  expect(result.current).toEqual([
    {
      details: ['1st of January 2022', 'foo, bar, baz'],
      href: '/foo/',
      title: 'Foo',
    },
  ])
})
