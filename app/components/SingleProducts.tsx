'use client'
import React from 'react'
import Image from 'next/image'
import { IoIosStar } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';

const SingleProducts = ({ product }: { product: Product }) => {
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const ratingValue = index + 1
        const starClass = product.rating >= ratingValue ? 'text-yellow-400' : 'text-gray-300'

        return (
            <IoIosStar key={index} className={`${starClass} transition-transform transform hover:scale-125`} />
        )
    })

    const notify = (action: string, productName: string) => toast.success(`${productName} ${action} successfully`);

    return (
        <div key={product._id} className='grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg'>
            <div>
                <Image src={product?.image}
                alt="Product Image"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full max-h-[450px]"
                />
            </div>
            <div className="flex flex-col gap-y-4 h-full max-h-[450px] ">
                <div className="text-4xl font-bold text-darkText mb-6">{product.title}</div>
                <div className="text-xl font-semibold text-darkText">
                    Price: <span className="font-bold ">${product.price}</span>
                </div>
                <div className="text-sm text-gray-600 mb-6">{product.description}</div>
                <div className="text-sm text-gray-600 mb-6">Category: <span className="font-bold font-2xl ">  {product.category} </span></div>

                <div className="flex flex-col items-start gap-y-4 sm:w-full">
                    <button onClick={() => notify('added to cart', product.title)} className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-orange-500 flex items-center justify-center gap-x-2 w-full">
                        <FaShoppingCart />
                        Add to Cart
                    </button>

                    <button onClick={() => notify('added to wishlist', product.title)} className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-slate-700 flex items-center justify-center gap-x-2 w-full">
                        <AiOutlineHeart />
                        Add to Wishlist
                    </button>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
export default SingleProducts

