import { graphql, useStaticQuery } from 'gatsby'

import { MenuData } from 'components/types'

export const useSocialMenuData = (): MenuData => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      menusJson(name: { eq: "social" }) {
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
