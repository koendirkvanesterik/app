import { List } from 'components/List'
import React from 'react'
import { useBlogListData } from './hooks'

export const BlogList: React.FunctionComponent = () => {
  /**
   * Use custom hook to get all blog list entries
   */
  const items = useBlogListData()
  /**
   * Return list component with queried items applied
   */
  return <List items={items} />
}
