'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        // Making a POST request to /api/auth/login route with the email and password
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Redirect to the dashboard or another page on successful login
            console.log('Login successful');
        } else {
            // Handle login error, show a message or redirect to the login page
            console.error('Login failed');
        }
    };

    return (
        <div className="login-box">
            <h2>Login</h2>
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

export default Login;
