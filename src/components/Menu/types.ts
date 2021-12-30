import { MouseEventHandler } from 'react'

export type Props = {
  /**
   * String value representing style class of menu item
   */
  className?: string
  /**
   * Function handling on click behavior
   */
  onClick?: MouseEventHandler
}
