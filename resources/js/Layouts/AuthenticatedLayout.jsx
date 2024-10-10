import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white sticky top-6 rounded-lg z-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex shrink-0 items-center">
                                <Link href={route('links.index')}>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('links.index')}
                                    active={route().current('links.index')}
                                >
                                    Links
                                </NavLink>
                                <NavLink
                                    href={route('profile.edit')}
                                    active={route().current('profile.edit')}
                                >
                                    Profile
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    href={route('links.preview')}
                                    active={route().current('links.preview')}
                                >
                                    Preview
                                </NavLink>

                                <NavLink
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                >
                                    Log Out
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <main className='mt-6'>{children}</main>
        </div>
    );
}
