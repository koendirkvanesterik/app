import classNames from 'classnames'
import { Menu } from 'components/Menu'
import React from 'react'
import { Cross, Hamburger } from './components'

export const Drawer: React.FunctionComponent = () => {
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
      <div className={classNames(['absolute', 'right-0', 'top-1/2'])}>
        <div className={classNames(['p-5', 'text-right'])}>
          <Cross onClick={onClickHandler} />
          <div className={classNames(['my-10'])} />
          <Menu
            className={classNames(['text-2xl', 'text-stone-900'])}
            onClick={onClickHandler}
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      className={classNames([
        'fixed',
        'p-5',
        'right-0',
        'sm:hidden',
        'top-1/2',
        'z-20',
      ])}
    >
      <Hamburger onClick={onClickHandler} />
    </div>
  )
}
