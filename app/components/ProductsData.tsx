'use client'
import { calculatePercentage } from '@/helpers'
import Image from 'next/image'
import React from 'react'
import { IoIosStar } from 'react-icons/io'
// import { Products } from '@/constant/data'

const ProductsData = ({ item }: { item: Products }) => {
  const starArray = Array.from({ length: item?.rating }, (_, index) => 
  <span key={index} className='text-yellow-400 '><IoIosStar/></span>
  );

  return (
    <div key={item._id} className='w-full rounded-lg overflow-hidden'>
      <div>
        <div className='w-full h-[300px] group overflow-hidden relative'>
          <Image src={item?.image} alt={item.title} width={300} height={300} className='w-full h-full object-cover hover:group-hover:scale-110 transition-all duration-300 rounded-t-lg cursor-pointer' />
          {
            item?.isNew && <span className='absolute top-4 left-4 bg-orange-600 text-white text-sm font-semibold px-2 py-1 rounded-full group-hover:scale-110 transition-all duration-300 cursor-pointer'>{item.isNew ? 'New Season' : ''}</span>
          }
        </div>
        <div className='border-[1px]  border-slate-300 border-t-0 p-4 flex flex-col gap-y-2 bg-white '>
          <p className='text-lg font-bold'>{item.title}</p>
          <div className=' flex items-center justify-between'>
            <div className='flex items-center gap-x-2 border-[1px] border-slate-300 w-fit px-2 py-1 rounded-full'>
              <p className='text-sm font-semibold'>{item.oldPrice && item.price ? Math.floor(calculatePercentage(item.oldPrice, item.price)) + '% off' : ''}</p>
            </div>


            <div className='flex items-center gap-x-2 py-2'>
              <p className='text-lg line-through decoration-orange-600'>{item.oldPrice ? '$' + item.oldPrice : ''}</p>
              <p className='text-lg font-bold'>{item.price ? '$' + item.price + '.00' : ''}</p>
            </div>

            
          </div>

          <div className='flex items-center justify-between'>
            <button className='btn '>Add to Cart</button>
            <div className='flex items-center'>{starArray}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsData;

