import { getMarginBy } from './getMarginBy'

it.each`
  input   | output
  ${'lg'} | ${'mt-80'}
  ${'md'} | ${'mt-60'}
  ${'sm'} | ${'mt-40'}
  ${''}   | ${'mt-40'}
`('should return "$output" when given size "$input"', ({ input, output }) => {
  expect(getMarginBy(input)).toBe(output)
})
