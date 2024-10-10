import Card from '@/Components/Card'
import Col from '@/Components/Col'
import Grid from '@/Components/Grid'
import MobileDisplay from '@/Components/MobileDisplay'
import PageTitle from '@/Components/PageTitle'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import LinksForm from './Partials/LinksForm'

const Links = () => {
  const {name, email} = usePage().props.auth.user;
  return (
    <AuthenticatedLayout>
        <Head title="Links" />
        <Grid>
            <Col col={2} className='hidden lg:block'>
                <Card className="p-5 h-full">
                    <MobileDisplay name={name} email={email} />
                </Card>
            </Col>
            <Col col={3}>
                <Card className="p-5 h-full relative">
                    <PageTitle title="Customize your links" subTitle="Add/edit/remove links below and share all your profiles with the world" />
                    <div>
                        <LinksForm />
                    </div>
                </Card>
            </Col>
        </Grid>
    </AuthenticatedLayout>
  )
}

export default Links