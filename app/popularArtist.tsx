import Link from 'next/link'

function PopularArtist() {
    return (
        <>
            <div className="popular-artists">
                <h1 style={{ marginBottom: "12px" }}>
                    Popular Artists
                </h1>
                <div className="popular-artist-content">

                    <Link href="/Album?list=1">

                        <div>
                            <img src="/popular artists/coldplay.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Coldplay
                            </p>
                        </div>

                    </Link>

                    <Link href="/Album?list=2">
                        <div>
                            <img src="/popular artists/adele.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Adele
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3">
                        <div>
                            <img src="/popular artists/darshan rawal.jpg" width="15vw" height="10vw" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Darshan Raval
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=1">
                        <div>
                            <img src="/popular artists/ed sheeran.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Ed Sheeran
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2">
                        <div>
                            <img src="/popular artists/eminem.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Eminem
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3">
                        <div>
                            <img src="/popular artists/katy.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Katy Perry
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=1">
                        <div>
                            <img src="/popular artists/martin.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Martin Garrix
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2">
                        <div>
                            <img src="/popular artists/mj.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Michael Jackson
                            </p>
                        </div>
                    </Link>

                    <Link href="/Album?list=3">
                        <div>
                            <img src="/popular artists/shakira.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Shakira
                            </p>
                        </div>
                    </Link>

                    <Link href="/Album?list=1">
                        <div>
                            <img src="/popular artists/zyan.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Zyan Malik
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PopularArtist;