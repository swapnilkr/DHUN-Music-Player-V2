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
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
        }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: 'Username', type: 'text' },
        //         password: { label: 'Password', type: 'password' },
        //     },
        //     async authorize(credentials: any, req) {
        //         try {
        //             const user = await User.findOne({ username: credentials?.username });

        //             if (user && (await user.comparePassword(credentials.password))) {
        //                 return Promise.resolve(user) as any;
        //             } else {
        //                 return Promise.resolve(null) as any;
        //             }
        //         } catch (error) {
        //             return Promise.resolve(null); // Handle the error as needed
        //         }
        //    0. },
        // }),
    ],
    secret: process.env.NEXT_PUBLIC_MY_STRONG_SECRET ,
    pages: {
        signIn: '/api/auth/login',
        signOut: '/',
        error: '/error', // Redirect to /auth/error on auth error
        verifyRequest: '/auth/verify-request', // Redirect to /auth/verify-request to verify email
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({url, baseUrl}) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    },
});
