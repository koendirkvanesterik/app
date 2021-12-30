import classNames from 'classnames'
import React from 'react'

import { Menu } from 'components/Menu'

import { Cross } from './components/Cross'
import { Hamburger } from './components/Hamburger'

export const Overlay: React.FunctionComponent = () => {
  /**
   * Use local state to keep track of overlay activity
   */
  const [isActive, setIsActive] = React.useState(false)
  /**
   * Function handling on click behavior of various elements - ie. background, cross, hamburger, etc.
   */
  const onClickHandler = () => {
    /**
     * Toggle component active state
     */
    setIsActive(!isActive)
    /**
     * Toggle overflow hidden class to body in order to disable scrolling when
     * overlay is active
     */
    document.body.classList.toggle('overflow-hidden', !isActive)
  }

  return isActive ? (
    <div
      aria-hidden="true"
      className={classNames([
        'bg-emerald-400',
        'bottom-0',
        'fixed',
        'left-0',
        'right-0',
        'top-0',
        'z-20',
      ])}
      onClick={onClickHandler}
    >
      <div className={classNames(['flex', 'flex-col', 'min-h-screen'])}>
        <div className={classNames(['flex-auto'])} />
        <div className={classNames(['p-5', 'text-right'])}>
          <Menu
            className={classNames(['text-2xl', 'text-warmGray-900'])}
            onClick={onClickHandler}
          />
          <div className={classNames(['my-10'])} />
          <Cross onClick={onClickHandler} />
        </div>
      </div>
    </div>
  ) : (
    <div
      className={classNames([
        'bottom-0',
        'fixed',
        'p-5',
        'right-0',
        'sm:hidden',
      ])}
    >
      <Hamburger onClick={onClickHandler} />
    </div>
  )
}
