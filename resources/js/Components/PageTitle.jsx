import React from 'react'

const PageTitle = ({title, subTitle}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{title}</h1>
        <p className='text-gray-500'>{subTitle}</p>
    </div>
  )
}

export default PageTitle