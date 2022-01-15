import classNames from 'classnames'
import React from 'react'
import { Props } from './types'
import { renderListItem } from './utils'

export const List: React.FunctionComponent<Props> = ({ items }) =>
  items?.length > 0 ? (
    <div className={classNames(['mt-48'])}>
      <ul>{items.map(renderListItem)}</ul>
    </div>
  ) : null
