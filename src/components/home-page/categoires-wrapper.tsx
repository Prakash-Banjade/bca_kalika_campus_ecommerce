import React from 'react'
import CategoriesList from './categories-list'

type Props = {}

export default function CategoriesWrapper({}: Props) {
  return (
    <div className='container py-20'>
        <h2 className='text-2xl font-medium'>Categories</h2>

        <CategoriesList />
    </div>
  )
}