import classNames from 'classnames'
import React from 'react'

import { Container } from 'components/Container'
import { Menu } from 'components/Menu'

import { Title } from './components/Title'

export const Header: React.FunctionComponent = () => (
  <header className={classNames(['fixed', 'pt-5', 'w-full', 'z-10'])}>
    <Container>
      <nav role="navigation">
        <div
          className={classNames(['grid', 'grid', 'gap-4', 'sm:grid-cols-2'])}
        >
          <Title />
          <div className={classNames(['hidden', 'sm:block'])}>
            <Menu />
          </div>
        </div>
      </nav>
    </Container>
  </header>
)
