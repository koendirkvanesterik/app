import React from 'react'

import { Menu } from 'components/types'

export const MenuList: React.FunctionComponent<Menu> = ({ label, links }) => (
  <>
    {label && <h3>{label}</h3>}
    {links?.length > 0 ? (
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ) : null}
  </>
)
