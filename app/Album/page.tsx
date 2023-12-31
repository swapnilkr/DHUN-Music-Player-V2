import AsideSec1 from '../asideSec1';
import NavBar from '../navbar';
import AlbumAsideSec1 from './albumAsideSec1';
import AlbumAsideSec2 from './albumAsideSec2';

function page() {
    return(
        <>
            <NavBar />
            <main>
                <AlbumAsideSec1 />
                <AlbumAsideSec2 />
            </main>
        </>
    )
}


export default page;