type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}
import { getSingleProduct, getTrendingProducts } from '@/helpers'
import React from 'react'
import Container from '../components/Container'
import ProductsData from '../components/ProductsData'
import SingleProducts from '../components/SingleProducts'

const page = async ({ searchParams }: Props) => {
    const _idString = searchParams.id
    const _id = Number(_idString)
    const product = getSingleProduct(_id)
    const data = await getTrendingProducts()

    return (
        <div>
            <Container>
                <SingleProducts product={product} />
            <div>
                <p className='text-3xl font-bold mb-4 mt-6'>Trending Products</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {data.map(product => (<ProductsData item={product} key={product.id} />))}
                </div>
            </div>
            </Container>
        </div>
    )
}

export default page

