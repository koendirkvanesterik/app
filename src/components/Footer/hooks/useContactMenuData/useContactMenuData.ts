import { graphql, useStaticQuery } from 'gatsby'

import { Menu } from 'components/types'

export const useContactMenuData = (): Menu => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      menusJson(name: { eq: "contact" }) {
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