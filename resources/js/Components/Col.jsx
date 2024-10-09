import React from 'react'

const Col = ({children, className, col}) => {
  return (
    <div className={`col-span-${col} ${className}`}>{children}</div>
  )
}

export default Col