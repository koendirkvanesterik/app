import { Props } from '../types'

export const getMarginBy = (size: Props['size'] = 'md'): string =>
  ({
    lg: 'mt-80',
    md: 'mt-60',
    sm: 'mt-40',
  }[size] ?? 'mt-40')
