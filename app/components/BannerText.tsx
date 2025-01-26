import React from 'react'
import {motion } from 'framer-motion';
import Container from './Container'
interface Props{
    title: string
}

const BannerText = ({title}: Props) => {
  return (
    <div className='hidden lg:inline-block absolute top-0 left-0 w-full h-full bg-black/50'>
     
    <Container className='flex flex-col justify-center h-full gap-y-6'>
        <motion.h1 initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}} className='text-5xl font-bold text-white'>{title}</motion.h1> 
        <motion.p initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}} className='text-xl font-semibold text-white'>Discover the latest trends and innovations in smart home technology.</motion.p>
        <motion.div className='flex gap-x-4' initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}}>
            <button className='bg-white text-darkText py-4 px-8 rounded-full text-lg font-medium hover:bg-darkText hover:text-white transition-all duration-300'>Find Out More</button>
            <button className='bg-white text-darkText py-4 px-8 rounded-full text-lg font-medium hover:bg-darkText hover:text-white transition-all duration-300'>Shop Now</button>
            
        </motion.div>
        </Container>
    </div>
  )
}

export default BannerText

