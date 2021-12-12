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
        <div
          className={classNames([
            'gap-4',
            'grid',
            'md:grid-cols-2',
            'lg:grid-cols-2',
          ])}
        >
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
