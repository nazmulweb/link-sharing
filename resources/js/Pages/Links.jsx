import Card from '@/Components/Card'
import Col from '@/Components/Col'
import Grid from '@/Components/Grid'
import MobileDisplay from '@/Components/MobileDisplay'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

const Links = () => {
  const {name, email} = usePage().props.auth.user;
  return (
    <AuthenticatedLayout>
        <Head title="Links" />
        <Grid>
            <Col col={2} className='hidden lg:block'>
                <Card className="p-5">
                    <MobileDisplay name={name} email={email} />
                </Card>
            </Col>
            <Col col={3}>
                <Card className="p-5">link page right side</Card>
            </Col>
        </Grid>
    </AuthenticatedLayout>
  )
}

export default Links