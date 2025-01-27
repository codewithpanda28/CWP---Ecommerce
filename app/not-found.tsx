import Link from 'next/link'
import React from 'react'
import { AiOutlineFrown } from 'react-icons/ai'

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-[#6a11cb] to-[#2575fc]'>
      <div className='text-center'>
        <h2 className='text-7xl font-bold text-white'>404</h2>
        <p className='text-3xl font-semibold text-white mb-10'>
          Page Not Found
        </p>
        <AiOutlineFrown className='text-6xl text-white mx-auto' />
        <p className='text-xl text-white'>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link href='/'>
          <button className='bg-white text-darkText font-bold px-6 py-3 rounded-full mt-10 hover:bg-darkText hover:text-white transition-all duration-300'>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

