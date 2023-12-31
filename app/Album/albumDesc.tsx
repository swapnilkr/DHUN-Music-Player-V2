function AlbumDesc() {

    return(
        <>
            <div className="jumbotron" >
            	 <img src="/Jumbtron back.png" />
                <div className="jumbotron-image">
                    <img src="/coldplay back.jpg" />
                </div>
                <div className="jumbotron-detail">
                    <div className="descriptive-part">
                        <div className="song-name-main">
                            <h1>ColdPlay</h1>
                        </div>
                        <div className="followers">
                            17.5M Followers
                        </div>
                        <p className="author">British Band</p>
                        <p className="desc">
                            Coldplay are a British rock band that were formed in London in 1996. Vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, and drummer Will Champion met at University College London and began playing music together from 1996 to 1998, first calling themselves Pectoralz and then Starfish before finally changing their name to Coldplay.
                        </p>
                    </div>
                    <div className="action-part">
                        <div className="btns">
                            <button>Play All</button>
                            <button>Follow</button>
                        </div>
                        <p>
                            250 Tracks | 147 Albums
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AlbumDesc;