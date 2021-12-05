import { graphql, useStaticQuery } from 'gatsby'

import { Menu } from 'components/types'

export const useMainMenuData = (): Menu => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      menusJson(name: { eq: "main" }) {
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
