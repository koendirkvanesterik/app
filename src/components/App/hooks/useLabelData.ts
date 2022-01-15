import { graphql, useStaticQuery } from 'gatsby'

import { LabelNode, LabelData } from './types'

export const useLabelData = (): LabelData => {
  /**
   * Use static query hook to get all label data
   */
  const data = useStaticQuery(graphql`
    query {
      allLabelsJson {
        edges {
          node {
            name
            value
          }
        }
      }
    }
  `)
  /**
   * Destruct nested structure safely
   */
  const labelArray = data?.allLabelsJson?.edges ?? []
  /**
   * Transform labels array to object and return
   */
  return labelArray.reduce(
    (labelObject: LabelData, { node: { name, value } }: LabelNode) => ({
      ...labelObject,
      [name]: value,
    }),
    {},
  )
}
