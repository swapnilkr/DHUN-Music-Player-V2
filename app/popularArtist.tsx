import Link from 'next/link'

function PopularArtist() {
    return (
        <>
            <div className="popular-artists">
                <h1 style={{ marginBottom: "12px" }}>
                    Popular Artists
                </h1>
                <div className="popular-artist-content">

                    <Link href="/Album?list=1&singer=coldplay">

                        <div>
                            <img src="/popular artists/coldplay.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Coldplay
                            </p>
                        </div>

                    </Link>

                    <Link href="/Album?list=2&singer=adele">
                        <div>
                            <img src="/popular artists/adele.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Adele
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3&singer=dr">
                        <div>
                            <img src="/popular artists/darshan rawal.jpg" width="15vw" height="10vw" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Darshan Raval
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=1&singer=ed">
                        <div>
                            <img src="/popular artists/ed sheeran.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Ed Sheeran
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2&singer=eminem">
                        <div>
                            <img src="/popular artists/eminem.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Eminem
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3&singer=katy">
                        <div>
                            <img src="/popular artists/katy.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Katy Perry
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=1&singer=martin">
                        <div>
                            <img src="/popular artists/martin.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Martin Garrix
                            </p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2&singer=mj">
                        <div>
                            <img src="/popular artists/mj.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Michael Jackson
                            </p>
                        </div>
                    </Link>

                    <Link href="/Album?list=3&singer=shakira">
                        <div>
                            <img src="/popular artists/shakira.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Shakira
                            </p>
                        </div>
                    </Link>

                    <Link href="/Album?list=1&singer=zyan">
                        <div>
                            <img src="/popular artists/zyan.jpg" />
                            <div><i className="fas fa-play"></i></div>
                            <p>
                                Zayn Malik
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PopularArtist;