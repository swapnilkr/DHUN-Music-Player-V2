'use client'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const showSuccessToast = () => {
        toast.success("Register successful", {
            data: {
                title: "Success toast",
                text: "This is a success message",
            },
        });
    };

    const showErrorToast = () => {
        toast.error("Error in Signup", {
            data: {
                title: "Error toast",
                text: "This is an error message",
            },
        });
    };


    const handleSignup = async (e: any) => {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        if (response.ok) {
            showSuccessToast();
            console.log('Signup successful');
        } else {
            showErrorToast();
            console.error('Signup failed');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="login-box">
                <h2>Sign Up</h2>
                <form>
                    <div className="user-box">
                        <input type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true} />
                        <label>Username</label>
                    </div>
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
                    <div className='submit-btn' onClick={(e) => handleSignup(e)}>
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

export default Signup;
