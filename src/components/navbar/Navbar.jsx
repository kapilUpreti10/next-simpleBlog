"use client";
import React, { useState, useEffect } from 'react';
import NavbarLink from './links/NavbarLink';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuBar = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMenu && !event.target.closest('.navbar-menu')) {
                setShowMenu(false);
                // below navbar-menu class is added
            }
        };

        document.body.addEventListener('click', handleClickOutside);
         
        // cleanup function to remove event listener when it is not used 
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <div className='fixed top-0 left-0 w-full bg-[#F9F9F9] z-50 h-[70px]'>
            <div className='flex flex-row max-w-[90vw] mx-auto justify-between my-5 items-center h-8'>
                <div>
                    <span className='text-xl align-middle font-semibold'>
                        <Link href="/" className='hover:text-green-500'>MyBlog-Kapil</Link>
                    </span>
                </div>
                <div className='hidden sm:inline-flex sm:flex-row sm:gap-4 md:gap-10'>
                    <NavbarLink />
                </div>
                <div className='sm:hidden'>
                    <IoMdMenu className='w-[35px] h-[25px] cursor-pointer' onClick={handleMenuBar} />
                </div>
            </div>
            {
                showMenu && (
                    <div className='bg-[#F9F9F9] h-full w-[60%] fixed top-[4rem] left-0 z-50 navbar-menu'>
                        <ul className='flex flex-col gap-8 pl-10 pt-10'>
                            <li className='cursor-pointer'><Link href="/">Home</Link></li>
                            <li className='cursor-pointer'><Link href="/about">About</Link></li>
                            <li className='cursor-pointer'><Link href="/contact">Contact</Link></li>
                            <li className='cursor-pointer'><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;
