import { ListItem } from 'components/List/types'
import { graphql, useStaticQuery } from 'gatsby'
import slashSandwich from 'slash-sandwich'

export const useWorkListData = (): readonly ListItem[] => {
  /**
   * Use static query hook in order to get all work item file data
   */
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { slug: { regex: "/work/.*//" } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              description
              roles
              title
            }
            slug
          }
        }
      }
    }
  `)
  /**
   * Adapt raw data to `ListItem` type
   */
  const items: readonly ListItem[] = data?.allMdx?.edges?.map(
    ({
      node: { frontmatter: { description, roles, title }, slug } = {
        frontmatter: { description: '', roles: [], title: '' },
        slug: '',
      },
    }: {
      node: {
        frontmatter: {
          description: string
          roles: readonly string[]
          title: string
        }
        slug: string
      }
    }) => ({
      details: [description, roles.join(', ')],
      href: slashSandwich([slug]),
      title,
    }),
  )
  /**
   * Return items or empty array
   */
  return items ?? []
}
