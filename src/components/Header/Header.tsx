import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

import { Container } from 'components/Container'

import { MainMenu } from './components/MainMenu'

export const Header: React.FunctionComponent = () => (
  <header
    className={classNames([
      'bg-warmGray-900',
      'fixed',
      'py-10',
      'w-full',
      'z-20',
    ])}
  >
    <Container>
      <nav role="navigation">
        <div className={classNames(['grid', 'grid', 'grid-cols-2', 'gap-4'])}>
          <Link className={classNames('text-emerald-400')} to="/">
            <Label id="title" />
          </Link>
          <MainMenu />
        </div>
      </nav>
    </Container>
  </header>
)
