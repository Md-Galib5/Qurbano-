"use client";

import React from 'react';
import LOGO from "../../assets/logo.png"
import Image from "next/image";
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';



const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user

  const handleSignOut = async() =>{
    await authClient.signOut();
  }
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink href={'/'}><span className='font-semibold'>Home</span></NavLink>
          </li>
        <li>
          <NavLink href={'/all-animals'}><span className='font-semibold'>All Animals</span></NavLink>
          </li>
           <li>
          <NavLink href={'/profile'}><span className='font-semibold'>Profile</span></NavLink>
          </li>
      </ul>
    </div>

    <Image 
  src={LOGO} 
  alt="logo"
  className="w-24 sm:w-28 md:w-32 lg:w-36"
/>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink href={'/'}><span className='font-semibold'>Home</span></NavLink></li>
      <li><NavLink href={'/all-animals'}><span className='font-semibold'>All Animals</span></NavLink></li>
      <li><NavLink href={'/profile'}><span className='font-semibold'>Profile</span></NavLink></li>
    </ul>
  </div>
   <div className="navbar-end gap-3">
    {!user && <ul className='flex gap-3'>

    <Link href={'/login'}>
    <button className='btn btn-primary'>Login</button>
    </Link>
    <Link href={'/register'}>
    <button className='btn border-none bg-white'>Register
   </button>
     </Link>
   </ul>
   }

   {
    user && <div className='flex gap-2'>
                <Link href="/profile">
  <Avatar size="sm" className="cursor-pointer">
    <Avatar.Image
      alt="User avatar"
      src={user?.image}
      referrerPolicy="no-referrer"
    />
    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
  </Avatar>
</Link>

     <Button onClick={handleSignOut}
  size="sm"
  className="bg-red-600 hover:bg-red-700 text-white font-semibold"
>
  Sign Out
</Button>

    </div>
   }

  </div>
</div>
        </div>
    );
};

export default Navbar;