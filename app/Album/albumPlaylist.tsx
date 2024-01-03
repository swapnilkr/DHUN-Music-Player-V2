function AlbumPlaylist() {


    // const

    return (
        <>
            <div className="playlist-items">
                <div className="playlist-item">
                    <div className="left">
                        <div>
                            01
                        </div>
                        <div>
                            <img src="/coldplay/hymn for the.jpg" />
                            <div className="play-btn">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <div>
                            <h5>
                                Hymn For The Weekend
                            </h5>
                            <p>
                                Coldplay
                            </p>
                        </div>
                    </div>
                    <div className="center">
                        3:10
                    </div>
                    <div className="right">
                        <div>
                            <i className="far fa-heart"></i>
                        </div>
                        <div>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AlbumPlaylist;