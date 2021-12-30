import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import { Label } from '@koendirkvanesterik/label'

export const Title: React.FunctionComponent = () => (
  <div>
    <Link className={classNames(['inline'])} to="/">
      <Label id="header.title" />
    </Link>
    <br />
    <Label id="header.tagline" />
  </div>
)
