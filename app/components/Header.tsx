'use client'
import React from 'react'
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react'
import Container from './Container'
import Logo from './Logo'
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <SessionProvider>
      <HeaderContent />
    </SessionProvider>
  )
}

const HeaderContent = () => {
  const { data: session } = useSession()
  const handleLogin = () => {
    signIn('github', {
      callbackUrl: process.env.NEXTAUTH_URL
    })
  }

  const handleAuthClick = () => {
    session ? signOut() : handleLogin();
  }

  return (
    <div className='bg-bodyColor h-20 top-0 sticky z-50' onClick={handleAuthClick}>

      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        <Logo />
        {/* search field */}
        <div className='w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full py-2 px-4 focus-within:border-orange-600 transition-all duration-200 group '>
          <CiSearch className='text-gray-500 group-focus:text-darkText transition-all duration-200 group-hover:text-darkText cursor-pointer ' />
          <input type="text" placeholder="Search" className="placeholder text-sm flex-1 outline-none" />
        </div>
        {/* user image */}
        {session && <Image src={session.user?.image as string} alt="user" width={40} height={40} className="rounded-full " />}
        {/* Login/register */}
        <div className='bg-gray-100 hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full py-2 px-4 focus-within:border-orange-600 transition-all duration-200 group'>
          <AiOutlineUser className='text-gray-500 transition-all duration-200 group-hover:text-darkText group-focus:text-darkText cursor-pointer ' />
          <button className='text-gray-500 hover:text-darkText transition-all duration-200'>{session ? 'Logout' : 'Login/Register'}</button>
        </div>
        {/* cart button */}
        <Link href="/cart">
          <div className='bg-black hover:bg-slate-950 rounded-full hover:text-white flex items-center gap-x-1 px-4 py-2 border-[1px] relative'>
            <FaShoppingCart className='text-white border-black hover:text-white transition-all duration-200 cursor-pointer ' />
            <p className='text-sm font-semibold text-white transition-all duration-200 cursor-pointer '>$0.00</p>
            <span className='bg-white text-red-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-6 h-6 flex items-center justify-center '>10</span>
          </div>
        </Link>

      </Container>

    </div>
  )
}

export default Header
