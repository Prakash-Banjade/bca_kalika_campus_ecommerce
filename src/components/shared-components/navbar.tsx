import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { CiShoppingCart } from "react-icons/ci";
import { Input } from "@/components/ui/input"


type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className='container flex items-center justify-between gap-10 py-4 border-b'>
            <section className='text-2xl fond-bold'>
                Logo
            </section>

            <ul className='flex items-center gap-10 text-lg'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/'}>Products</Link>
                </li>
                <li>
                    <Link href={'/'}>Contact</Link>
                </li>
            </ul>

            <section className='flex gap-20'>
                <section>
                    <Input placeholder='Search products...' />
                </section>

                <section className='flex items-center gap-3'>
                    <Button variant="outline">Login</Button>
                    <Button variant={'outline'} size={'icon'}>
                        <CiShoppingCart size={24} />
                    </Button>
                </section>
            </section>
        </nav>
    )
}