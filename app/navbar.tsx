'use client'

import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';
import Signout from './signout/page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NavBar() {
    const { data: session, status } = useSession()
    const [name, setName] = useState('');


   const showInfoToast = () => {
        toast.info("All the songs provided in this music player are sourced from NoCopyrightSounds (NCS)", {
            data: {
                title: "Error toast",
                text: "This is an error message",
            },
        });
    };

    useEffect(() =>{
        if(window.localStorage.getItem('showToast') !== 'true') {
            setTimeout(() => {
                showInfoToast();

            },2000)
            window.localStorage.setItem('showToast','true');
        }
    },[])

    useEffect(() => {
        if (status === "authenticated") {
            // console.log("qswap", session?.user, status)
        } else if (window.localStorage.getItem('loggedIn') === 'true') {
            handleFetchUserName(window.localStorage.getItem('email'))
        }
    }, [session])


    const handleFetchUserName = async (email: any) => {
        try {
            const response = await fetch(`/api/getUserName?email=${email}`);
            const data = await response.json();

            if (response.ok) {
                setName(data.name);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <>
            <html>
                <head>
                    <link rel="icon" type="image/x-icon" href="/musical-note.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Dhun Music Player</title>
                    <script src="https://kit.fontawesome.com/2d9b67a497.js" crossOrigin="anonymous" async></script>
                </head>
                <body>
                    <ToastContainer autoClose={10000} />
                    <nav className="navigation-bar">
                        <Link href="/">
                            <div className="title-combo">
                                <div className="website-logo">

                                    <Image src="/website_logo.svg" alt='website-logo' height={50} width={50} />
                                </div>
                                <div className="website-name">
                                    <h1>
                                        DHUN
                                    </h1>
                                    <h4>
                                        Online Music Player
                                    </h4>
                                </div>
                            </div>
                        </Link>


                        <div className="favs">
                            <h4>
                                Favourites
                            </h4>
                        </div>

                        <div className="search-bar">
                            <div>

                                <i className="fas fa-search search-ico"></i>
                            </div>
                            <input type="text" name="search" placeholder="Search" />
                            <div>

                                <i className="fas fa-microphone mic-ico"></i>
                            </div>
                        </div>
                        <div className="notification-bell">
                            <Image src='/bell_icon.svg' alt='bell-icon' height={50} width={50} />

                        </div>
                        <div className="profile-picture flex">
                            <div className='flex items-center'>
                                <Image src="/profile_picture.svg" alt='profile-picture' height={50} width={50} />
                                <div style={{ marginTop: "5px" }}>
                                    {(status === 'authenticated') ?
                                        <div className='flex'>
                                            <span className={``} style={{ transition: " opacity 0.5s ease" }}>Profile: &nbsp;</span>
                                            <div className='profile-name'>{session?.user?.name?.split(" ")[0]}</div>
                                            <Signout />
                                        </div>
                                        :
                                        <>
                                            {typeof window !== 'undefined' ?
                                                <>
                                                    {
                                                        window?.localStorage?.getItem('loggedIn') === 'true' ?
                                                            <div className='flex'>
                                                                <span className={``} style={{ transition: " opacity 0.5s ease" }}>Profile: &nbsp;</span>
                                                                <div className='profile-name'>{name}</div>
                                                                <Signout />
                                                            </div>
                                                            :

                                                            <>
                                                                <span className='signout-btn' style={{ margin: "0px 12px" }}>
                                                                    <Link href="/signup">
                                                                        Signup
                                                                    </Link>
                                                                </span>
                                                                <span className='signout-btn'>
                                                                    <Link href="/login">
                                                                        Login
                                                                    </Link>
                                                                </span>
                                                            </>
                                                    }
                                                </>
                                                :
                                                <></>
                                            }

                                        </>

                                    }
                                </div>

                            </div>
                        </div>
                    </nav>
                </body>

            </html>
        </>
    )

}
