import React, { Children } from 'react'

const Grid = ({children}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>{children}</div>
  )
}

export default Grid