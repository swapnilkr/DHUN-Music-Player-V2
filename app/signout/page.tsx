'use-client'

function signout() {

    function handleSignout() {
        window.localStorage.setItem('loggedIn', 'false');
        window.localStorage.removeItem('email');
    }
    return (<>
        <div onClick={handleSignout}>Signout</div>
    </>)

}

export default signout;