import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function UpdateProfileInformation({
    className = '',
    imagePreview
}) {

    const user = usePage().props.auth.user;
    const [previewUrl, setPreviewUrl] = useState(user.picture ? `assets/images/${user?.picture}` : null);

    const { data, setData, post, errors, processing } =
        useForm({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            picture: null,
             _method: 'PATCH'
        });


    // Handle form input changes
    const handleChange = (e) => {
        const { files } = e.target;
        
        // If avatar is being changed, handle the preview
        const file = files[0];
        setData('picture', file);
        // Generate a preview URL for the uploaded image
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);
            imagePreview(objectUrl)
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.update'), {
            forceFormData: true,
        });
    };

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-6 space-y-6" >
                <div className='h-96 pb-14'>
                    <PerfectScrollbar
                        options={{
                            wheelPropagation: false,
                        }}
                    >
                        <div className='bg-gray-100 mb-5 px-5 rounded-lg py-5'>
                            <div className='m-auto w-full'>

                                <div className='h-28 w-28 rounded-full m-auto bg-gray-200 overflow-hidden'>
                                    {previewUrl && (
                                        <img src={previewUrl} alt="profile" className="object-cover"/>
                                    )}
                                </div>

                                <div className='w-1/2 m-auto'>
                                    <InputLabel htmlFor="picture" value="Picture" />

                                    <input
                                        id="picture"
                                        name="picture"
                                        type="file"
                                        className="mt-1 block"
                                        autoComplete="picture"
                                        // value={data.picture} 
                                        onChange={handleChange}
                                    />
                                </div>

                                <InputError message={errors.picture} className="mt-2" />
                            </div>
                        </div>
                        <div className='bg-gray-100 mb-5 px-5 rounded-lg py-5'>
                            <div>
                                <InputLabel htmlFor="first_name" value="First Name*" />

                                <TextInput
                                    id="first_name"
                                    name="first_name"
                                    value={data.first_name}
                                    className="mt-1 block w-full"
                                    autoComplete="first_name"
                                    onChange={(e) => setData('first_name', e.target.value)}
                                />

                                <InputError message={errors.first_name} className="mt-2" />
                            </div>

                            <div className='mt-4'>
                                <InputLabel htmlFor="last_name" value="Last Name*" />

                                <TextInput
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    className="mt-1 block w-full"
                                    autoComplete="last_name"
                                    onChange={(e) => setData('last_name', e.target.value)}
                                />

                                <InputError message={errors.last_name} className="mt-2" />
                            </div>

                            <div className='mt-4'>
                                <InputLabel htmlFor="email" value="Email*" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    autoComplete="username"
                                />

                                <InputError className="mt-2" message={errors.email} />
                            </div>
                        </div>
                    </PerfectScrollbar>
                </div>
                <div className=' absolute bottom-0 w-full rounded-b-full bg-white py-5 border-t left-0 flex justify-end pr-8'>
                    <SecondaryButton type='submit' solid disabled={processing}>{processing ? 'Saving...' : 'Save'}</SecondaryButton>
                </div>
            </form>
        </section>
    );
}
