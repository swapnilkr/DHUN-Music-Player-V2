'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const showSuccessToast = () => {
        toast.success("Login successful", {
            data: {
                title: "Success toast",
                text: "This is a success message",
            },
        });
    };

    const showErrorToast = () => {
        toast.error("Error in Login", {
            data: {
                title: "Error toast",
                text: "This is an error message",
            },
        });
    };

    const handleLogin = async (e: any) => {
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
            showSuccessToast();
        } else {
            // Handle login error, show a message or redirect to the login page
            showErrorToast();
            console.error('Login failed');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={true} />
                        <label>Password</label>
                    </div>
                    <div className='submit-btn' onClick={(e) => handleLogin(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
