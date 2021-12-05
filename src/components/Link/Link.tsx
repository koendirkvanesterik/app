import { Link as InternalLink } from 'gatsby'
import React from 'react'

export const Link: React.FunctionComponent<Pick<HTMLAnchorElement, 'href'>> = ({
  children,
  href,
}) =>
  /^https?:/.test(href) ? (
    <a href={href} rel="noopener noreferrer nofollow" target="_blank">
      {children}
    </a>
  ) : (
    <InternalLink to={href}>{children}</InternalLink>
  )
