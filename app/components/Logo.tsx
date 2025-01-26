import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
     <Link href="/">
        <h3 className='text-3xl font-bold text-darkText hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-110'>
            CWP
        </h3>
     </Link>
    )
}

export default Logo
