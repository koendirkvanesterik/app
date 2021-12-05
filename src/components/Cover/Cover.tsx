import classNames from 'classnames'
import React from 'react'

import { Scene } from './components/Scene'

export const Cover: React.FunctionComponent = ({ children }) => (
  <div
    className={classNames([
      'border',
      'border-warmGray-800',
      'h-96',
      'relative',
      'rounded-lg'
    ])}
  >
    <div className={classNames(['absolute', 'h-full', 'w-full'])}>
      <Scene />
    </div>
    <div
      className={classNames([
        'flex',
        'h-full',
        'items-end',
        'p-10',
        'relative',
        'z-10',
      ])}
    >
      <div className={classNames(['w-4/12'])}>{children}</div>
    </div>
  </div>
)
