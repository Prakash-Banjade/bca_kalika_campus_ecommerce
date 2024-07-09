import React from 'react'
import productData from '@/data/products.json'
import { TProduct } from '@/types/product'
import SingleProductCard from './single-product-card'

type Props = {}

export default function ProductsList({}: Props) {
  return (
    <section>
        {
            (productData as TProduct[]).map((product, ind) => {
                return <SingleProductCard key={ind} product={product} />
            })
        }
    </section>
  )
}