import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import { ListItem } from '../types'

export const renderListItem = ({
  details = [],
  href,
  title,
}: ListItem): React.ReactElement | null =>
  /**
   * This function is called based upon dynamic data supplied by graphql,
   * therefore proper data typing is not possible and the possibility of
   * an error is possible. In order to mitigate this the following conditions
   * apply - `details` prop is optional, all other props are required. If only
   * one of these is not defined, then the entire item should not be rendered.
   */
  href && title ? (
    <li key={href}>
      <Link to={href}>
        <div
          className={classNames([
            'border-b',
            'border-warmGray-800',
            'grid',
            'hover:border-white',
            'md:gap-4',
            'md:grid-cols-2',
            'py-10',
          ])}
        >
          <h3 className={classNames([])}>{title}</h3>
          <div className={classNames(['grid', 'lg:gap-4', 'lg:grid-cols-2'])}>
            {details?.length > 0
              ? details.map((detail) => (
                  <p className={classNames(['opacity-60'])} key={detail}>
                    {detail}
                  </p>
                ))
              : null}
          </div>
        </div>
      </Link>
    </li>
  ) : null
