import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'

import { useLabelData } from './useLabelData'

beforeAll(() => {
  jest.spyOn(gatsby, 'useStaticQuery').mockImplementation(() => ({
    allLabelsJson: {
      edges: [
        {
          node: {
            name: 'foo.bar',
            value: 'Foo Bar Baz',
          },
        },
      ],
    },
  }))
})

it('should return label object as expected', () => {
  const { result } = renderHook(() => useLabelData())
  expect(result.current).toEqual({
    'foo.bar': 'Foo Bar Baz',
  })
})

afterAll(() => {
  jest.resetAllMocks()
})
