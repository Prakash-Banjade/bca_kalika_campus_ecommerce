import React from 'react'
import ProductsList from './products-list'

type Props = {}

export default function ProductsWrapper({}: Props) {
  return (
    <section>
        <h2 className='text-2xl font-medium'>Out latest Products</h2>

        <ProductsList />
    </section>
  )
}