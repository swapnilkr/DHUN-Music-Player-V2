'use client'
import { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        // Make a POST request to your /api/auth/signup route with the email and password
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Redirect to the login page or another page on successful signup
            console.log('Signup successful');
        } else {
            // Handle signup error, show a message or redirect to the signup page
            console.error('Signup failed');
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
