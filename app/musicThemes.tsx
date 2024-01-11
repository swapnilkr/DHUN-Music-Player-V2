import Link from 'next/link'


function MusicTheme() {

    return (
        <>
            <div className="music-themes">
                <div className="stations">
                    <div id="div1">
                        <div id="div2">
                            <div id="div3">
                                <img src="/website_logo.svg" />
                                <p>Stations</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theme-main">
                    <Link href="/Album?list=1&singer=coldplay&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/chill.jpg" />
                            <p>Chill</p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2&singer=adele&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/rock.jpg" />
                            <p>Rock</p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3&singer=dr&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/love.jpg" />
                            <p>Love</p>
                        </div>
                    </Link>
                    <Link href="/Album?list=1&singer=coldplay&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/pop.jpg" />
                            <p>Pop</p>
                        </div>
                    </Link>
                    <Link href="/Album?list=3&singer=dr&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/retro.jpg" />
                            <p>Retro</p>
                        </div>
                    </Link>
                    <Link href="/Album?list=2&singer=adele&desc=no">

                        <div className="theme-content">
                            <img src="/music themes/workout.jpg" />
                            <p>Workout</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="music-themes-2">
                <Link href="/Album?list=2&singer=adele&desc=no">

                    <div className="outer-div1">
                        <div className="inner-div">
                            <span>Party</span>
                        </div>
                    </div>
                </Link>
                <Link href="/Album?list=1&singer=coldplay&desc=no">

                    <div className="outer-div2">
                        <div className="inner-div">
                            <span>Electronic</span>
                        </div>
                    </div>
                </Link>
                <Link href="/Album?list=3&singer=dr&desc=no">

                    <div className="outer-div3">

                        <div className="inner-div">

                            <span>Road</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )

}

export default MusicTheme