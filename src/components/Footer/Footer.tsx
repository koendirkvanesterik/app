import classNames from 'classnames'
import { Container } from 'components/Container'
import React from 'react'
import { Copyright } from './components/Copyright'
import { MenuList } from './components/MenuList'
import { Status } from './components/Status'
import { useContactMenuData, useSocialMenuData } from './hooks'

export const Footer: React.FunctionComponent = () => {
  /**
   * Use custom hooks to get specific menu data
   */
  const contactMenuData = useContactMenuData()
  const socialMenuData = useSocialMenuData()
  /**
   * Return footer component with nested components
   */
  return (
    <footer className={classNames(['pb-5', 'pt-48'])}>
      <Container>
        <div className={classNames(['gap-4', 'grid', 'md:grid-cols-2'])}>
          <div className={classNames(['gap-4', 'grid', 'lg:grid-cols-2'])}>
            <Status />
          </div>
          <div className={classNames(['gap-4', 'grid', 'lg:grid-cols-2'])}>
            <MenuList {...contactMenuData} />
            <MenuList {...socialMenuData} />
          </div>
        </div>
        <Copyright />
      </Container>
    </footer>
  )
}
