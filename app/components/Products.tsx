import { getProducts } from '@/helpers';
import React from 'react'
import Container from './Container';
import ProductsData from './ProductsData';

const Products = async() => {
  const products = await getProducts()
  return (
    <Container className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-10'>
 {
   products?.map((item: Products) => (
    
    <ProductsData item={item} key={item.id} />
   
   ))
 }
    </Container>
  )
}

export default Products;

