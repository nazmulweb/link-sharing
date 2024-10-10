import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Grid from '@/Components/Grid';
import Col from '@/Components/Col';
import Card from '@/Components/Card';
import MobileDisplay from '@/Components/MobileDisplay';
import PageTitle from '@/Components/PageTitle';
import { useState } from 'react';

export default function Edit({ mustVerifyEmail, status }) {

    const {first_name, last_name, email, picture} = usePage().props.auth.user;
    const { links: allLinks } = usePage().props;
    const [imagePreview, setImagePreview] = useState(picture ? `assets/images/${picture}` : null)

    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <Grid>
                <Col col={2} className='hidden lg:block'>
                    <Card className="p-5 h-full">
                        <MobileDisplay avatar={imagePreview} name={`${first_name} ${last_name}`} email={email} socialLinks={allLinks} />
                    </Card>
                </Col>
                <Col col={3}>
                    <Card className="p-5 h-full relative">
                        <PageTitle title="Profile Details" subTitle="Add your details to create a personal touch to your profile" />
                        <div>
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                imagePreview={setImagePreview}
                            />
                        </div>
                    </Card>
                </Col>
            </Grid>
        </AuthenticatedLayout>
    );
}
