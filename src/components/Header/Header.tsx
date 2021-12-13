import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

import { Container } from 'components/Container'

import { MainMenu } from './components/MainMenu'

export const Header: React.FunctionComponent = () => (
  <header className={classNames(['fixed', 'pt-5', 'w-full', 'z-10'])}>
    <Container>
      <nav role="navigation">
        <div
          className={classNames(['grid', 'grid', 'gap-4', 'sm:grid-cols-2'])}
        >
          <div className={classNames(['inline-block'])}>
            <Link to="/">
              <Label id="title" />
            </Link>
          </div>
          <div className={classNames(['hidden', 'sm:block'])}>
            <MainMenu />
          </div>
        </div>
      </nav>
    </Container>
  </header>
)
