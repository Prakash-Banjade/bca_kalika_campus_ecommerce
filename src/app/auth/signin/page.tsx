"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInFormDefaultValues, signInFormField, signInFormSchema, TSignInFormSchema } from "@/models/sign-in.model"
import { useToast } from "@/components/ui/use-toast"

type Props = {}

export default function SignInPage({ }: Props) {
    const { toast } = useToast()

    // 1. Define your form.
    const form = useForm<TSignInFormSchema>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: SignInFormDefaultValues,
    })

    // 2. Define a submit handler.
    async function onSubmit(values: TSignInFormSchema) {
        try {
            await signIn("credentials", {
                ...values,
                callbackUrl: '/'
            })
        } catch (e) {
            if (e instanceof Error) {
                toast({
                    title: "Failed to login",
                    description: e.message,
                    variant: 'destructive'
                })
            } else {
                toast({
                    title: "Failed to login",
                    description: "Something went wrong",
                    variant: 'destructive'
                })
            }
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {
                    signInFormField.map(formField => (
                        <FormField
                            key={formField.name}
                            control={form.control}
                            name={formField.name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{formField.label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={formField.placeholder} required={formField.required} type={formField.type} {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {formField.description && formField.description}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))
                }
                <Button type="submit" className="w-full">Login</Button>
            </form>
        </Form>
    )
}