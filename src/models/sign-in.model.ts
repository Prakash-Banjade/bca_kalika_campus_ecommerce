import { EInputType, TFormField } from "@/types/form-field";
import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.string().email({ message: 'Please enter valid email address' }),
    password: z.string({ required_error: 'Please enter something' }).min(1, { message: 'Please enter passworde' })
})

export type TSignInFormSchema = z.infer<typeof signInFormSchema> // form field ma generic use bhaeko

export const SignInFormDefaultValues: Partial<TSignInFormSchema> = {
    email: '',
    password: '',
}

export const signInFormField: TFormField<TSignInFormSchema>[] = [
    {
        label: 'Email',
        name: 'email',
        placeholder: 'Eg. johndoe@gmail.com',
        type: EInputType.EMAIL,
        required: true,
        description: 'Please enter the emial you used for registration.'
    },
    {
        label: 'Password',
        name: 'password',
        placeholder: '********',
        type: EInputType.PASSWORD,
        required: true,
        description: 'Your cool password here!'
    }
]
