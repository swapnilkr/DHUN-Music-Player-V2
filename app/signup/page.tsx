'use client'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter()


    const showSuccessToast = () => {
        toast.success("Register successful", {
            data: {
                title: "Success toast",
                text: "This is a success message",
            },
        });
    };

    const showErrorToast = () => {
        toast.error("You are registered user. Move to login page.", {
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
          
            setTimeout(() => {
                router.push('/login')
            }, 2000)
        } else {
            showErrorToast();
            console.error('Signup failed');
        }
    };

    const handleGoogleLogin = async (e: any) => {
        await signIn('google', { callbackUrl: window.location.origin + '/login' });
    };

    const handleLogin = async (e: any) => {
        router.push('/login')
    }

    return (
        <>
            <html>
                <head>
                    <link rel="icon" type="image/x-icon" href="/musical-note.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Dhun Music Player</title>
                    <script src="https://kit.fontawesome.com/2d9b67a497.js" crossOrigin="anonymous" async></script>
                </head>
            </html>
            <ToastContainer autoClose={2000} />
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
                    <div className='flex space-x-8'>
                        <div className='submit-btn' onClick={(e) => handleSignup(e)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </div>
                        <button className="button-86" role="button" onClick={(e) => handleGoogleLogin(e)}>Login With Google</button>
                    </div>
                    <button className="btn-class-name" onClick={(e) => handleLogin(e)}>
                        <span className="back"></span>
                        <span className="front"><span color='white'>Login</span></span>
                    </button>
                </form>
            </div>
        </>
    );
};

export default Signup;
