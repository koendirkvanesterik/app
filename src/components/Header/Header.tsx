import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

import { MainMenu } from './components/MainMenu'

export const Header: React.FunctionComponent = () => (
  <header
    className={classNames([
      'bg-warmGray-900',
      'fixed',
      'p-10',
      'w-full',
      'z-10',
    ])}
  >
    <nav role="navigation">
      <div className={classNames(['grid', 'grid', 'grid-cols-2', 'gap-4'])}>
        <div>
          <Link className={classNames('text-emerald-400')} to="/">
            <Label id="title" />
          </Link>
        </div>
        <MainMenu />
      </div>
    </nav>
  </header>
)
