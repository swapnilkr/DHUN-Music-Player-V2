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
            console.log('Signup successful');
        } else {
            console.error('Signup failed');
        }
    };

    return (
        <div className="login-box">
            <h2>Sign Up</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required={true} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required={true} />
                    <label>Password</label>
                </div>
                <div className='submit-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </div>
            </form>
        </div>
    );
};

export default Signup;
