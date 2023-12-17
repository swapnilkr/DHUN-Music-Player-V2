import React, { useState, useEffect } from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';

function LatestRelease() {

    const { setMusicList } = useMusicPlayer();

    let musicList = [
        {
            id: 1,
            name: 'Freedom',
            imageUrl: '/latest_release/Freedom.jfif',
            audioUrl: '/latest_release/Freedom.mp3',
            releaseDate: 'Aug 2022',
            duration: '02:20'
        },
        {
            id: 2,
            name: 'Summer Mood',
            imageUrl: '/latest_release/Summer Mood.jfif',
            audioUrl: '/latest_release/Summer Mood.mp3',
            releaseDate: 'May 2022',
            duration: '02:35'
        },
        {
            id: 3,
            name: 'Power Ambient and Inspiring',
            imageUrl: '/latest_release/Power Ambient and Inspiring.png',
            audioUrl: '/latest_release/Power Ambient and Inspiring.mp3',
            releaseDate: 'Apr 2023',
            duration: '02:55'
        },
        {
            id: 4,
            name: 'In the forest',
            imageUrl: '/latest_release/In The Forest.jfif',
            audioUrl: '/latest_release/In The Forest.mp3',
            releaseDate: 'May 2023',
            duration: '01:59'
        },
        {
            id: 5,
            name: 'Happy at Home',
            imageUrl: '/latest_release/Happy at Home.png',
            audioUrl: '/latest_release/Happy at Home.mp3',
            releaseDate: 'Sept 2023',
            duration: '02:23'
        },
        {
            id: 6,
            name: 'Emotional Piano',
            imageUrl: '/latest_release/Emotional Piano.jfif',
            audioUrl: '/latest_release/Emotional Piano.mp3',
            releaseDate: 'Jan 2023',
            duration: '01:52'
        },
    ]

    useEffect(() => {
        setMusicList(musicList)
    }, [])

    function handleClick(event :any, index:any) {
        let clickedSong = [];
        clickedSong.push(musicList[index])
        setMusicList(clickedSong)
    }


    return (
        <>
            <div className="latest-release">
                <h1 style={{ marginBottom: "12px" }}>
                    Latest Release
                </h1>

                <div className="latest-release-content">
                    {musicList.map((key, index) => (

                        <div className="card" onClick={(e) => handleClick(e, index)}>
                            <div className={`${index}`}>
                                <img src={key.imageUrl} />
                                <div className="play-button">
                                    <i className="fas fa-play" style={{ width: "100%", height: "100%", display: "inline-block" }} />
                                </div>
                            </div>
                            <div className="song-description">
                                <h3>
                                    &nbsp; {key.name}
                                </h3>
                                <p>
                                    &nbsp; {key.releaseDate}
                                </p>
                            </div>

                            <div className="options">
                                <label htmlFor="latest-release-checkbox">
                                    <i className="fas fa-ellipsis-h" />
                                </label>
                                <input type="checkbox" id="latest-release-checkbox" />
                                <div className="latest-release-dropdown">
                                    <div className="drop-item">
                                        <p>
                                            <i className="fas fa-play-circle" />
                                            <a href="Single Playlist Screen.html">
                                                Play Now
                                            </a>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="drop-item">
                                        <p>
                                            <i className="fas fa-list-ul" />
                                            Add to Queue
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="drop-item">
                                        <p>
                                            <i className="fas fa-music"></i>
                                            Add to playlist
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="drop-item">
                                        <p>
                                            <i className="fas fa-info-circle">
                                            </i>
                                            Get Info
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    {key.duration}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LatestRelease;