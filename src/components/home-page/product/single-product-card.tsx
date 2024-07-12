import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TProduct } from '@/types/product'
import { getDiscountedPrice } from '@/utils/getDiscountedPrice'
import Image from 'next/image'
import React from 'react'

type Props = {
    product: TProduct,
    // variant?: 'variant1' | 'variant2' | 'xyz'
}

export default function SingleProductCard({ product }: Props) {

    const discountPrice = getDiscountedPrice(product.price, product.discount)

    return (
        <Card className='rounded-lg overflow-hidden hover:shadow-lg transition-all' title={product.name}>
            <CardHeader className='p-0'>
                <figure className='border'>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        height={200}
                        width={100}
                        className='w-full object-cover max-h-40'
                    />
                    <figcaption className='sr-only'>{product.name}</figcaption>
                </figure>
                <CardTitle className='p-2 text-lg font-medium line-clamp-2 leading-8'>
                    {product.name}
                </CardTitle>
            </CardHeader>

            <CardContent className='p-2'>
                <p className='text-xl font-semibold text-orange-500'>Rs. {discountPrice}</p>
                <div className='flex gap-2 items-center'>
                    <p className='line-through text-muted-foreground text-sm'>Rs. {product.price}</p>
                    <span className='text-xs'>{product.discount}%</span>
                </div>
            </CardContent>
        </Card>
    )
}