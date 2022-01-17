import classNames from 'classnames'
import React from 'react'

export const Hamburger = ({
  onClick,
}: {
  onClick: React.MouseEventHandler
}): React.ReactElement => (
  <button onClick={onClick} type="button">
    <svg
      className={classNames([
        'fill-emerald-400',
        'text-emerald-400',
        'hover:fill-white',
      ])}
      height="24px"
      viewBox="0 0 24 17"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.5,13 C22.3284271,13 23,13.6715729 23,14.5 C23,15.3284271 22.3284271,16 21.5,16 L11.5,16 C10.6715729,16 10,15.3284271 10,14.5 C10,13.6715729 10.6715729,13 11.5,13 L21.5,13 Z M21.5,7 C22.3284271,7 23,7.67157288 23,8.5 C23,9.32842712 22.3284271,10 21.5,10 L2.5,10 C1.67157288,10 1,9.32842712 1,8.5 C1,7.67157288 1.67157288,7 2.5,7 L21.5,7 Z M21.5,1 C22.3284271,1 23,1.67157288 23,2.5 C23,3.32842712 22.3284271,4 21.5,4 L21.5,4 L8.5,4 C7.67157288,4 7,3.32842712 7,2.5 C7,1.67157288 7.67157288,1 8.5,1 L8.5,1 Z" />
    </svg>
  </button>
)
