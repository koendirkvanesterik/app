import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'
import { useMainMenuData } from './useMainMenuData'

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
  const { result } = renderHook(() => useMainMenuData())
  expect(result.current).toEqual({
    links: [
      {
        href: '/foo/',
        label: 'foo',
      },
    ],
  })
})
