import MobileDisplay from '@/Components/MobileDisplay';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

const Details = () => {
  const {first_name, last_name, email, picture} = usePage().props.auth.user;
  const { links: allLinks } = usePage().props;
  const [imagePreview] = useState(picture ? `assets/images/${picture}`: null)

  return (
    <AuthenticatedLayout>
      <Head title="Links" />
      <div className='relative z-10'>
        <MobileDisplay isBg={true} avatar={imagePreview} name={`${first_name} ${last_name}`} email={email} socialLinks={allLinks} />
      </div>
      <div className=' h-1/2 w-full bg-indigo-600 fixed left-0 top-0 -z-1 rounded-b-3xl'>
      </div>
    </AuthenticatedLayout>
  )
}

export default Details