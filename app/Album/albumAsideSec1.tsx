import AlbumDesc from "./albumDesc";
import AlbumPlaylist from "./albumPlaylist";

function AlbumAsideSec1(){

    return(
        <>
            <aside className="aside section-1">
                <AlbumDesc />
                <AlbumPlaylist />
            </aside>
        </>
    )
}

export default AlbumAsideSec1;