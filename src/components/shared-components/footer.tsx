import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer
            className='bg-gray-200 mt-20 flex items-center justify-center gap-20 py-3'
        >
            <p>My Ecommerce &copy; 2024</p>
            <section className='space-x-4'>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Terms & Agreeent</Link>
            </section>
        </footer>
    )
}