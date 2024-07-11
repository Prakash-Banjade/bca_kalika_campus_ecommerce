'use client'

import React, { useCallback } from 'react'
import { Button } from '../ui/button'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {}

export const SELECTED_QUANTITY = 'quantity'

export default function QuantityInput({ }: Props) {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handleQuantiyUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(pathname + '?' + createQueryString(SELECTED_QUANTITY, e.target.value))
    }

    return (
        <section className='mt-5'>
            <p className='mb-2'>Quantity</p>
            <div className='flex gap-1'>

                <Button variant={'outline'} size={'icon'}>
                    <FaMinus />
                </Button>

                <input
                    type='number'
                    min={1}
                    max={5}
                    step={1}
                    className='focus:outline-none px-3 py-2 w-[4ch] text-center'
                    value={searchParams.get(SELECTED_QUANTITY) ?? 1}
                    onChange={handleQuantiyUpdate}
                />
                <Button variant={'outline'} size={'icon'}>
                    <FaPlus />
                </Button>
            </div>
        </section>
    )
}