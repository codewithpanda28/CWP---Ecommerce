'use client'
import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineWork } from 'react-icons/md'
import payment from "@/images/payment.png"
import Container from './Container'
import Logo from '@/app/components/Logo'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {

    return (
        <div className='w-full text-white bg-darkText'>
            <Container className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-y-4'>
                    <h3 className='text-3xl font-bold text-white cursor-pointer hover:text-orange-500 transition-all duration-300'>
                        CWP
                    </h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam incidunt at, doloremque facilis similique distinctio vitae asperiores delectus sit, id itaque dignissimos temporibus? Voluptatem dolor pariatur, doloribus qui ex eius nostrum eaque velit natus sint fugiat, consequuntur facilis illum?</p>
                    <div className='flex items-center gap-x-4'>
                        <a href="https://www.instagram.com/panda_creation_29?igsh=MXoydTd4cjF5MnFq" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-full hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-orange-600'>
                            <BsInstagram size={24} className='text-[#E4405F] animate-bounce' />
                        </a>
                        <a href="https://www.linkedin.com/in/codewithpanda28/" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-full hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-[#0A66C2]'>
                            <BsLinkedin size={24} className='text-[#0A66C2] animate-spin' />
                        </a>
                        <a href="https://github.com/codewithpanda28?tab=repositories" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-full hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-[#181717]'>
                            <BsGithub size={24} className='text-[#181717] animate-spin' />
                        </a>
                        <a href="https://developer-life-work.vercel.app/" target="_blank" rel="noreferrer" className='bg-white p-2 rounded-full hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-[#5199fd]'>
                            <MdOutlineWork size={24} className='text-[#5199fd] animate-bounce' />
                        </a>
                    </div>
                   
                </div>
                <div>
                        <p className='text-2xl font-bold'>Latest Post</p>
                        <ul className='flex flex-col gap-y-2 mt-4 text-sm '>
                         <li className='flex flex-col'><span className='text-lg font-semibold  cursor-pointer'>Where Music IS Headed Next </span>
                          <span className='text-orange-600'>September 28, 2025</span>
                        </li>
                         <li className='flex flex-col'><span className='text-lg font-semibold  cursor-pointer'>Where Music IS Headed Next </span>
                          <span className='text-orange-600'>September 28, 2025</span>
                        </li>
                         <li className='flex flex-col'><span className='text-lg font-semibold  cursor-pointer'>Where Music IS Headed Next </span>
                          <span className='text-orange-600'>September 28, 2025</span>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-2xl font-bold'>Links</p>
                        <ul className='flex flex-col gap-y-2 mt-4 text-sm '>
                            <li className='flex flex-col hover:text-orange-600 transition-all duration-300'>
                                <Link href="/" className='text-lg font-semibold  cursor-pointer'>Home</Link>
                            </li>
                            <li className='flex flex-col hover:text-orange-600 transition-all duration-300'>
                                <Link href="/about" className='text-lg font-semibold  cursor-pointer'>About</Link>
                            </li>
                         <li className='flex flex-col hover:text-orange-600 transition-all duration-300'>
                                <Link href="/contact" className='text-lg font-semibold  cursor-pointer'>Contact</Link>
                            </li>
                         <li className='flex flex-col hover:text-orange-600 transition-all duration-300'>
                                <Link href="/cart" className='text-lg font-semibold  cursor-pointer'>Cart</Link>
                            </li>
                         <li className='flex flex-col hover:text-orange-600 transition-all duration-300'>
                                <Link href="/newsletter" className='text-lg font-semibold  cursor-pointer'>Newsletter</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-2xl font-bold '>Pay us with your trusted services</p>
                        <Link href="https://www.paypal.com/us/home">
                            <Image src={payment} alt="payment" width={300} height={100} className='w-full mt-4' />
                        </Link>
                    </div>
            </Container>
        </div>
                    
    )
}

export default Footer

