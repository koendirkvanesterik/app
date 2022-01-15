import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'
import { useContactMenuData } from './useContactMenuData'

jest.spyOn(gatsby, 'useStaticQuery').mockImplementationOnce(() => ({
  menusJson: {
    links: [
      {
        href: '/foo/',
        label: 'foo',
      },
    ],
  },
}))

it('should return label object as expected', () => {
  const { result } = renderHook(() => useContactMenuData())
  expect(result.current).toEqual({
    links: [
      {
        href: '/foo/',
        label: 'foo',
      },
    ],
  })
})
