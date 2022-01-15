import classNames from 'classnames'
import React from 'react'
import { Props } from './types'
import { getMarginBy } from './utils'

export const Spacer: React.FunctionComponent<Props> = ({ size = 'sm' }) => (
  <div className={classNames([getMarginBy(size)])} />
)
