import React from 'react'
import categoriesData from '@/data/categories.json'
import { Category } from '@/types/category'
import SingleCategoryItem from './single-card-item'

type Props = {}

export default function CategoriesList({ }: Props) {
    return (
        <section className='grid grid-cols-6 gap-5 mt-5'>
            {
                (categoriesData as Category[]).map((category, ind) => {
                    return <div key={ind}>
                        <SingleCategoryItem category={category} />
                    </div>
                })
            }
        </section>
    )
}