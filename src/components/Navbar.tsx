import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'
import { getServerSideUser } from '@/lib/payload-utils'
import { cookies } from 'next/headers'
import UserAccountNav from './UserAccountNav'

async function Navbar() {
    const nextCookies = cookies()
    const {user} = await getServerSideUser(nextCookies)
    
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <MaxWidthWrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* TODO : Navbar sur mobile */}

                        <div className="ml-4 flex lg:ml-0">

                            <Link href='/'>
                                <Icons.logo className='h-16 w-30'/>
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                            <NavItems/>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                                {user ? null : (
                                    <Link 
                                        href="/sign-in"
                                        className={buttonVariants({
                                            variant : "ghost"
                                        })}
                                        >
                                        Connecte
                                    </Link>
                                )}

                                {user ? null : (
                                    <span className="h-6 w-px bg-gray-200"
                                    area-hidden="true"
                                    />
                                )}

                                {user ? (
                                    <UserAccountNav user={user} />
                                ) : (
                                    <Link 
                                        href="/sign-up"
                                        className={buttonVariants({
                                            variant : "ghost"
                                        })}
                                        >
                                        S&apos;inscrire
                                    </Link>
                                )}

                                {user ? 
                                    <span className="h-6 w-px bg-gray-200"
                                    area-hidden="true"
                                    /> : 
                                    null
                                }

                                {user ? null : 
                                    <div className="flex lg:ml-6">
                                        <span className="h-6 w-px bg-gray-200"
                                        area-hidden="true"
                                        /> 
                                    </div>
                                }
                                <div className="m-4 h-flow-root lg:ml-6">
                                    <Cart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar