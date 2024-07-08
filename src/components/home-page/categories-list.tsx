import React from 'react'
import categoriesData from '@/data/categories.json'
import { Category } from '@/types/category'

type Props = {}

export default function CategoriesList({ }: Props) {
    return (
        <section>
            {
                (categoriesData as Category[]).map((category, ind) => {
                    return <div key={ind}>
                        <h3>{category.name}</h3>
                    </div>
                })
            }
        </section>
    )
}