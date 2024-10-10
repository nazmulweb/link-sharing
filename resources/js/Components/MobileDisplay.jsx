import React from 'react'

const MobileDisplay = ({avatar, isBg, name, email, socialLinks}) => {
  return (
    <div className={`border ${isBg ? 'bg-white shadow-2xl p-5' : 'border-gray-600' } rounded-[45px] w-72 m-auto min-h-[500px] p-2`}>
        <div className={`${isBg? '' : 'border border-gray-600 rounded-[40px] w-full h-full px-5 py-3'}`}>
            {!isBg && <div className='h-3 w-20 border border-gray-400 rounded-full m-auto'></div>}
            <div className='h-28 w-28 rounded-full m-auto mt-8 bg-gray-200 overflow-hidden'>
                {
                    avatar && <img src={avatar} alt="profile" className="object-cover"/>
                } 
            </div>
            <div className='personal-info text-center mt-5'>
                {
                    name ?
                        <h2 className='text-lg font-bold text-gray-600 mt-4'>{name}</h2>
                     : <div className='bg-gray-200 w-40 h-4 m-auto rounded-full'></div>
                }

                {
                    email ?
                        <p className='text-sm text-gray-500'>{email}</p>
                    : <div className='bg-gray-200 w-28 h-2 m-auto mt-2 rounded-full'></div>
                }

            </div>
            <div className='social-links mt-8'>
                {
                    socialLinks ? socialLinks.map((link, index) => (
                            <a key={link?.id} href={link.url} className={`bg-${link.color ? link.color : 'blue'}-500 text-white py-2 px-5 block rounded mt-2`} target='_blank'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2'>
                                        <i className={`bi ${link?.iconName}`}></i>
                                        {/* <i className="bi bi-check-circle"></i> */}
                                        {link?.name}
                                    </div>
                                    <div>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                    )) : 
                    <div>
                        <div className='bg-gray-200 w-full h-10 m-auto mt-2 rounded' /> 
                        <div className='bg-gray-200 w-full h-10 m-auto mt-2 rounded' /> 
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default MobileDisplay