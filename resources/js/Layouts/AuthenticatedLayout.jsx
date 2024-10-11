import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white sticky top-6 rounded-lg z-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        {
                            route().current('links.preview') ? 
                            <div className="flex items-center justify-between w-full">
                                <NavLink href={route('links.index')}>
                                    <SecondaryButton border>Back to Editor</SecondaryButton>
                                </NavLink>
                                <SecondaryButton solid>Share Link</SecondaryButton>
                            </div> 
                            
                             : 
                        
                            <div className="flex items-center justify-between w-full">
                                <div className="flex shrink-0 items-center">
                                    <Link href={route('links.index')}>
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="space-x-6 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route('links.index')}
                                    >
                                        <SecondaryButton active={route().current('links.index')}>
                                            <i class="bi bi-link-45deg"></i>
                                            <span className=' hidden md:block'>
                                                Links
                                            </span>
                                        </SecondaryButton>
                                    </NavLink>
                                    <NavLink
                                        href={route('profile.edit')}
                                    >
                                        <SecondaryButton active={route().current('profile.edit')}>
                                            <i class="bi bi-person"></i>
                                            <span className='hidden md:block'>Profile Details</span>
                                        </SecondaryButton>
                                    </NavLink>
                                </div>
                                <div className="space-x-6 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route('links.preview')}
                                        
                                    >
                                        <SecondaryButton border active={route().current('links.preview')}>
                                            <i class="bi bi-eye block md:hidden"></i>
                                            <span className='hidden md:block'>Preview</span>
                                        </SecondaryButton>
                                    </NavLink>

                                    <NavLink
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                    >
                                    <SecondaryButton border className=' border-red-300 text-red-400'>
                                        <i class="bi bi-box-arrow-in-right block md:hidden"></i>
                                        <span className='hidden md:block'>Log Out</span>
                                    </SecondaryButton>
                                    </NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
            
            <main className='mt-6'>{children}</main>
        </div>
    );
}
