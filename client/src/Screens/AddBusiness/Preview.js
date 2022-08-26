import React from 'react'

export const Preview = ({data}) => {
  return (
    <ul>

        <div>{data && <li>data.businessname</li>}</div>
    </ul>
  )
}
