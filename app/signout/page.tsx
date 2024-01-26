'use client'
import { signOut } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signout() {

    const showSuccessToast = () => {
        toast.success("Signout successful", {
            data: {
                title: "Success toast",
                text: "This is a success message",
            },
        });
    };

    function handleSignout(e:any) {
        window.localStorage.setItem('loggedIn', 'false');
        window.localStorage.removeItem('email');
        signOut();
        showSuccessToast();
    }
    return (<>
        <ToastContainer autoClose={2000}/>
        <div className="signout-btn" onClick={(e)=>handleSignout(e)}>Signout</div>
    </>)

}

export default Signout;