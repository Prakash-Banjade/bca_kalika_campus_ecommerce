import React from 'react'
import ProductsList from '../home-page/product/products-list'

type Props = {}

export default function SimilarProducts({ }: Props) {
    return (
        <section className='mt-10'>
            <h3 className='font-medium text-2xl mb-5'>You may also like</h3>
            <ProductsList />
        </section>
    )
}