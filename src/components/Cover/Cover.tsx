import classNames from 'classnames'
import React from 'react'
import { Scene } from './components'

export const Cover: React.FunctionComponent = ({ children }) => (
  <div
    className={classNames([
      'border',
      'border-stone-800',
      'h-96',
      'relative',
      'rounded-lg',
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
        'relative',
        'z-10',
      ])}
    >
      {children}
    </div>
  </div>
)
