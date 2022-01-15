import { List } from 'components/List'
import React from 'react'
import { useWorkListData } from './hooks'

export const WorkList: React.FunctionComponent = () => {
  /**
   * Use custom hook to get all work list entries
   */
  const items = useWorkListData()
  /**
   * Return list component with queried items applied
   */
  return <List items={items} />
}
