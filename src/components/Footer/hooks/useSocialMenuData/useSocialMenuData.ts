import { graphql, useStaticQuery } from 'gatsby'

import { Menu } from 'components/types'

export const useSocialMenuData = (): Menu => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      menusJson(name: { eq: "social" }) {
        label
        links {
          href
          label
        }
      }
    }
  `)
  /**
   * Destruct nested structure safely and return
   */
  return data?.menusJson ?? {}
}