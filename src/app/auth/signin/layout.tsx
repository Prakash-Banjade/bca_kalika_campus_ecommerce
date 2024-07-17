import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Sign In | With My app',
    description: 'Here you can sign in with your details'
}

export default async function SignInLayout({ children }: Props) {
    return (
        <main className='container py-20'>
            <Card className='max-w-[600px] mx-auto'>
                <CardHeader>
                    <CardTitle>Sign In With MyApp</CardTitle>
                    <CardDescription>Fill your credentials to login.</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </main>
    )
}