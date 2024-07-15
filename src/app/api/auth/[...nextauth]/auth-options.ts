import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    placeholder: "Enter your email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    placeholder: "********",
                    type: "password"
                }
            },
            async authorize(credentials) {
                const user = [{
                    id: '1',
                    email: "prakash@gmail.com",
                    password: "123456789"
                }]

                const foundUser = user.find(user => user.email === credentials?.email)

                if (!foundUser) return null;

                const isPwdMatch = foundUser.password === credentials?.password

                if (!isPwdMatch) return null;

                return foundUser;
            }
        },

        )
    ]
}