import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

import { Container } from 'components/Container'

import { MainMenu } from './components/MainMenu'

export const Header: React.FunctionComponent = () => (
  <header className={classNames(['fixed', 'py-10', 'w-full', 'z-10'])}>
    <Container>
      <nav role="navigation">
        <div className={classNames(['grid', 'grid', 'grid-cols-2', 'gap-4'])}>
          <div className={classNames(['inline-block'])}>
            <Link to="/">
              <Label id="title" />
            </Link>
          </div>
          <MainMenu />
        </div>
      </nav>
    </Container>
  </header>
)
