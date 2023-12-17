function Playlist() {

    function showFavList(event:any) {
        window.postMessage('Fav Clicked', '*')
    }

    function showPlayList(event:any) {
        window.postMessage('PlayList Clicked', '*')
    }
    return (
        <>
            <div className="heading">
                <h1> Playlist </h1>
                <h4>
                    <a href="#queue-option-box">Queue <i className="fas fa-chevron-circle-down"></i></a>
                </h4>
            </div>

            <div className="queue-options" id="queue-option-box">
                <p><div style={{color:"#f8f9fa", fontWeight:"bold"}} onClick={(event) => showPlayList(event)}>Playlists</div></p>
                <hr />
                <p><div style={{color:"#f8f9fa", fontWeight:"bold"}} onClick={(event) => showFavList(event)}>Favourite songs</div></p>
                <hr />
                <p><div style={{color:"red", fontWeight:"bold"}}>Close</div></p>
            </div>
        </>
    )
}

export default Playlist