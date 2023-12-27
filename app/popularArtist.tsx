import Link from 'next/link'

function PopularArtist() {
    return (
        <>
            <div className="popular-artists">
                <h1 style={{ marginBottom: "12px" }}>
                    Popular Artists
                </h1>
                <div className="popular-artist-content">

                    <Link href="/Album">
                        
                            <div>
                                <img src="/popular artists/coldplay.jpg" />
                                <div><i className="fas fa-play"></i></div>
                                <p>
                                    Coldplay
                                </p>
                            </div>
                        
                    </Link>

                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/adele.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Adele
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/darshan rawal.jpg" width="15vw" height="10vw" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Darshan Raval
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/ed sheeran.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Ed Sheeran
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/eminem.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Eminem
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/katy.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Katy Perry
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/martin.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Martin Garrix
                            </p>
                        </div>
                    </a>
                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/mj.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Michael Jackson
                            </p>
                        </div>
                    </a>

                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/shakira.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Shakira
                            </p>
                        </div>
                    </a>

                    <a href="Single Playlist Screen.html">
                        <div>
                            <img src="/popular artists/zyan.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Zyan Malik
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default PopularArtist;