export type ListItem = {
  /**
   * Optional array of type string representing details of list item
   */
  details?: readonly string[]
  /**
   * String value representing link of list item
   */
  href: string
  /**
   * String value representing title of list item
   */
  title: string
}

export type Props = {
  /**
   * Array of type `ListItem` holding all list item data
   */
  items: readonly ListItem[]
}
