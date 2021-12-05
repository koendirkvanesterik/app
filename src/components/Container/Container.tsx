import classNames from 'classnames'
import React from 'react'

export const Container: React.FunctionComponent = ({ children }) => (
  <div className={classNames(['max-w-screen-2xl', 'mx-auto', 'px-10'])}>{children}</div>
)
