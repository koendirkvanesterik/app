import { graphql, useStaticQuery } from 'gatsby'

import { MenuData } from 'components/types'

export const useContactMenuData = (): MenuData => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      menusJson(name: { eq: "contact" }) {
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
