import React, { useState, useEffect } from 'react';

interface Song {
    id: number;
    name: string;
    imageUrl: string;
    audioUrl: string;
    releaseDate: string;
    duration: string;
}
function RecentyPlayed() {

    const [recentSongs, setRecentSongs] = useState<Song[]>([]);

    useEffect(() => {
        const storedRecentSongs = JSON.parse(localStorage.getItem('recentSongs') || '[]');
        setRecentSongs(storedRecentSongs);
    }, []);

    return (
        <>
            <div className="similar">
                <div className="section-heading">
                    <h1>Recently Played</h1>
                    <div className="view-all-button">
                        View All
                    </div>
                </div>
                <div className="list">
                    <>
                        {recentSongs?.map((song, index) => (
                            <div key={index} className="playlist-item">
                                <div className="left">
                                    <div>
                                        {index+1}
                                    </div>
                                    <div>
                                        <img src={song.imageUrl} />
                                        <div className="play-btn">
                                            <i className="fas fa-play"></i>
                                        </div>
                                    </div>
                                    <div className='song-name-recent'>
                                        <h5 className="author-name">
                                            {song.name}
                                        </h5>
                                        <p className="author-name">
                                            NCS
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div>
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </>

                </div>
            </div>

        </>
    )

}

export default RecentyPlayed