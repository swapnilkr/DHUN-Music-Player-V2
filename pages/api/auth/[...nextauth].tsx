// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/react';
import connectDB from '../../../utils/dbConnect';
import User from '../../../models/Users';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


connectDB();

export default NextAuth({
    providers: [
        
        CredentialsProvider({
            // The name to display on the sign-in form (e.g., 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any, req) {
                try {
                    const user = await User.findOne({ username: credentials?.username });

                    if (user && (await user.comparePassword(credentials.password))) {
                        return Promise.resolve(user) as any;
                    } else {
                        return Promise.resolve(null) as any;
                    }
                } catch (error) {
                    return Promise.resolve(null); // Handle the error as needed
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/auth/error', // Redirect to /auth/error on auth error
        verifyRequest: '/auth/verify-request', // Redirect to /auth/verify-request to verify email
    },
    // callbacks: {
    //     async jwt(token: any, user: any) {
    //         if (user) {
    //             token.id = user._id;
    //         }
    //         return token;
    //     },
    //     async session(session, token, user) {
    //         // Customize the logic based on your requirements
    //         session.user.id = token.id;

    //         return session;
    //     },
    // },
});
