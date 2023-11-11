import Image from 'next/image';


export default function NavBar() {
    return (
        <>
            <html>
                <head>
                    <link rel="icon" type="image/x-icon" href="/musical-note.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Dhun Music Player</title>
                    <script src="https://kit.fontawesome.com/2d9b67a497.js" crossOrigin="anonymous"></script>
                </head>
                <body>
                    <nav className="navigation-bar">

                        <div className="title-combo">
                            <div className="website-logo">
                                <Image src="/website_logo.svg" alt='website-logo' height={50} width={50} />
                            </div>
                            <div className="website-name">
                                <h1>
                                    DHUN
                                </h1>
                                <h4>
                                    Online Music Player
                                </h4>
                            </div>
                        </div>

                        <div className="favs">
                            <h4>
                                Favourites
                            </h4>
                        </div>

                        <div className="search-bar">
                            <div>

                                <i className="fas fa-search search-ico"></i>
                            </div>
                            <input type="text" name="search" placeholder="Search" />
                            <div>

                                <i className="fas fa-microphone mic-ico"></i>
                            </div>
                        </div>
                        <div className="notification-bell">
                            <Image src='/bell_icon.svg' alt='bell-icon' height={50} width={50} />

                        </div>

                        <div className="profile-picture">
                            <Image src="/profile_picture.svg" alt='profile-picture' height={50} width={50} />
                        </div>
                    </nav>
                </body>

            </html>
        </>
    )

}
