'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()


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
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            console.log('Login successful');
            showSuccessToast();
            router.push('/')
        } else {
            showErrorToast();
            console.error('Login failed');
        }
    };

    const handleGoogleLogin = async (e:any) => {
        await signIn('google');
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
                    <div className='flex space-x-8'>
                        <div className='submit-btn' onClick={(e) => handleLogin(e)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </div>
                        <button className="button-86" role="button" onClick={(e)=> handleGoogleLogin(e)}>Login With Google</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
