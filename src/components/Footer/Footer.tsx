import classNames from 'classnames'
import React from 'react'

import { Container } from 'components/Container'

import { Copyright } from './components/Copyright'
import { MenuList } from './components/MenuList'
import { Status } from './components/Status'
import { useContactMenuData } from './hooks/useContactMenuData'
import { useSocialMenuData } from './hooks/useSocialMenuData'

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
    <footer className={classNames(['mb-5', 'mt-28'])}>
      <Container>
        <div className={classNames(['grid', 'grid-cols-4', 'gap-4'])}>
          <Status />
          <div />
          <MenuList {...contactMenuData} />
          <MenuList {...socialMenuData} />
        </div>
        <Copyright />
      </Container>
    </footer>
  )
}
