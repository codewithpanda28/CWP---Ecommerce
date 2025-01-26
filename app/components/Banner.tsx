'use client'
import React from 'react'
import bannerOne from "@/images/bannerone.jpg"
import bannerTwo from "@/images/bannertwo.jpg";
import bannerThree from "@/images/bannerthree.jpg"
import Slider from "react-slick"
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi'
import Image from 'next/image'
import BannerText from './BannerText';

const Banner = () => {
    const NextArrow = ({ onClick }: any) => {
        return (
            <div className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-5 top-1/2' onClick={onClick}>
                <PiCaretLeftLight className='text-3xl text-black' />
            </div>
        )
    }
    const PrevArrow = ({ onClick }: any) => {
        return (
            <div className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-5 top-1/2' onClick={onClick}>
                <PiCaretRightLight className='text-3xl text-black' />
            </div>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className='relative'>
            <Slider {...settings}>
                <div className='relative'>
                    <Image src={bannerOne} alt='bannerone' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <BannerText title='Outware Picks' />
                    </div>
                </div>
                <div className='relative'>
                    <Image src={bannerTwo} alt='bannerTwo' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <BannerText title='Seasonsale' />
                    </div>
                </div>
                <div className='relative'>
                    <Image src={bannerThree} alt='bannerThree' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <BannerText title='Best For Men' />
                    </div>
                </div>
            </Slider>
            <div className='absolute  w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10'/>
        </div>
    )
}

export default Banner

