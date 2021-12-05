import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { useMainMenuData } from './hooks/useMainMenuData'

export const MainMenu: React.FunctionComponent = () => {
  /**
   * Use custom hook to get main menu data
   */
  const mainMenuData = useMainMenuData()
  /**
   * Destruct menu links safely
   */
  const links = mainMenuData?.links ?? []
  /**
   * Return main menu list based on populated links array condition
   */
  return links.length > 0 ? (
    <ul className={classNames(['-mx-2'])}>
      {links.map(({ href, label }) => (
        <li className={classNames(['inline-block', 'px-2'])} key={href}>
          <Link to={href}>{label}</Link>
        </li>
      ))}
    </ul>
  ) : null
}
