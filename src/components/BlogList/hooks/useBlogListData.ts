import { ListItem } from 'components/List/types'
import { graphql, useStaticQuery } from 'gatsby'
import slashSandwich from 'slash-sandwich'

export const useBlogListData = (): readonly ListItem[] => {
  /**
   * Use static query hook in order to get all blog item file data
   */
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { slug: { regex: "/blog/.*//" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "Do of MMMM YYYY")
              tags
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
      node: { frontmatter: { date, tags, title }, slug } = {
        frontmatter: { date: '', tags: [], title: '' },
        slug: '',
      },
    }: {
      node: {
        frontmatter: { date: string; tags: readonly string[]; title: string }
        slug: string
      }
    }) => ({
      details: [date, tags.join(', ')],
      href: slashSandwich([slug]),
      title,
    }),
  )
  /**
   * Return items or empty array
   */
  return items ?? []
}
