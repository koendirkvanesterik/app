import React from 'react'

import { Props } from './types'

export const MenuList: React.FunctionComponent<Props> = ({ links }) =>
  links?.length > 0 ? (
    <ul>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  ) : null
