import { Link } from 'gatsby'
import React from 'react'
import { useMainMenuData } from './hooks'
import { Props } from './types'

export const Menu: React.FunctionComponent<Props> = ({
  className,
  onClick,
}) => {
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
    <ul>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link className={className} onClick={onClick} to={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  ) : null
}
