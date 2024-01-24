'use-client'
import { signOut } from "next-auth/react"


function Signout() {

    function handleSignout() {
        window.localStorage.setItem('loggedIn', 'false');
        window.localStorage.removeItem('email');
        signOut();
    }
    return (<>
        <div className="signout-btn" onClick={handleSignout}>Signout</div>
    </>)

}

export default Signout;