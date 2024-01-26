'use client'

import React, { useState, useEffect } from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';

function PlaylistContent() {

    const { setMusicList } = useMusicPlayer();
    const [showFavList, setShowFavList] = useState(false)
    const [favMusicPlaylist, setFavMusicPlaylist] = useState([]);
    const [favorites, setFavorites] = useState<any[]>([]);

    let playlistMusic = [
        {
            id: 1,
            name: 'AKTIV',
            imageUrl: '/top_english/aktiv.jpg',
            audioUrl: '/top_english/Aktiv.mp3',
            releaseDate: 'Aug 2022',
            duration: '02:20'
        },
        {
            id: 2,
            name: 'BABY',
            imageUrl: '/top_english/baby.jpg',
            audioUrl: '/top_english/baby.mp3',
            releaseDate: 'May 2022',
            duration: '02:35'
        },
        {
            id: 3,
            name: 'Devil',
            imageUrl: '/top_english/devil.jpg',
            audioUrl: '/top_english/Diamond Eyes.mp3',
            releaseDate: 'Apr 2023',
            duration: '02:55'
        },
        {
            id: 4,
            name: 'Everything I Got',
            imageUrl: '/top_english/everything i got.jpg',
            audioUrl: '/top_english/Everything I Got.mp3',
            releaseDate: 'May 2023',
            duration: '01:59'
        },
        {
            id: 5,
            name: 'Never Have I Felt This',
            imageUrl: '/top_english/never.jpg',
            audioUrl: '/top_english/Never Have I Felt This.mp3',
            releaseDate: 'Sept 2023',
            duration: '03:12'
        },
        {
            id: 6,
            name: 'Sold Dreams',
            imageUrl: '/top_english/sold dreams.jpg',
            audioUrl: '/top_english/Slowboy.mp3',
            releaseDate: 'Jan 2023',
            duration: '01:31'
        },
        {
            id: 7,
            name: 'Waves',
            imageUrl: '/Instrumental/waves.jpg',
            audioUrl: '/Instrumental/waves.mp3',
            releaseDate: 'Aug 2022',
            duration: '04:27'
        },
        {
            id: 8,
            name: 'With you',
            imageUrl: '/Instrumental/with you.png',
            audioUrl: '/Instrumental/with you.mp3',
            releaseDate: 'Sept 2022',
            duration: '02:44'
        },
        {
            id: 9,
            name: 'Hold You',
            imageUrl: '/Instrumental/Hold You.jpg',
            audioUrl: '/Instrumental/Hold You.mp3',
            releaseDate: 'Apr 2019',
            duration: '02:21'
        },
        {
            id: 10,
            name: 'Bye bye',
            imageUrl: '/Instrumental/bye bye.jpg',
            audioUrl: '/Instrumental/bye bye.mp3',
            releaseDate: 'Nov 2023',
            duration: '02:48'
        },
        {
            id: 11,
            name: 'Calling',
            imageUrl: '/Instrumental/calling.jpg',
            audioUrl: '/Instrumental/calling.mp3',
            releaseDate: 'Sept 2023',
            duration: '03:23'
        },
        {
            id: 12,
            name: 'Marcheur',
            imageUrl: '/Instrumental/Marcheur.jpg',
            audioUrl: '/Instrumental/Marcheur.mp3',
            releaseDate: 'Jan 2016',
            duration: '04:06'
        },
        {
            id: 13,
            name: 'Freedom',
            imageUrl: '/latest_release/Freedom.jfif',
            audioUrl: '/latest_release/Freedom.mp3',
            releaseDate: 'Aug 2022',
            duration: '02:20'
        },
        {
            id: 14,
            name: 'Summer Mood',
            imageUrl: '/latest_release/Summer Mood.jfif',
            audioUrl: '/latest_release/Summer Mood.mp3',
            releaseDate: 'May 2022',
            duration: '02:35'
        },
        {
            id: 15,
            name: 'Power Ambient and Inspiring',
            imageUrl: '/latest_release/Power Ambient and Inspiring.png',
            audioUrl: '/latest_release/Power Ambient and Inspiring.mp3',
            releaseDate: 'Apr 2023',
            duration: '02:55'
        },
        {
            id: 16,
            name: 'In the forest',
            imageUrl: '/Instrumental/Marcheur.jpg',
            audioUrl: '/latest_release/In The Forest.mp3',
            releaseDate: 'May 2023',
            duration: '01:59'
        },
        {
            id: 17,
            name: 'Happy at Home',
            imageUrl: '/latest_release/Happy at Home.png',
            audioUrl: '/latest_release/Happy at Home.mp3',
            releaseDate: 'Sept 2023',
            duration: '02:23'
        },
        {
            id: 18,
            name: 'Emotional Piano',
            imageUrl: '/latest_release/Emotional Piano.jfif',
            audioUrl: '/latest_release/Emotional Piano.mp3',
            releaseDate: 'Jan 2023',
            duration: '01:52'
        },
    ]

    useEffect(() => {
        setMusicList(playlistMusic)
    }, [])

    function handleMessage(event: any) {
        if (event.data === "Fav Clicked") {
            setShowFavList(true);
        } else if (event.data === 'PlayList Clicked') {
            setShowFavList(false)
        } else if (event.data.message === "Add To Recent") {
            addToRecent(event.data.info)
        }
    }

    useEffect(() => {
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        }
    }, [])

    function AddToRecentHandle(event: any, song: any) {
        window.postMessage({
            message: 'Add To Recent',
            info: song,
        }, '*');
    }

    useEffect(() => {
        setFavMusicPlaylist(JSON.parse(window.localStorage.getItem('favList') || '[]'))
        setFavorites(JSON.parse(window.localStorage.getItem('favList') || '[]'))
    }, [showFavList])

    function handleClick(event: any, index: any) {
        let clickedSong = [];
        clickedSong.push(playlistMusic[index])
        setMusicList(clickedSong)
        AddToRecentHandle(event, playlistMusic[index])
    }

    function addToFav(event: any, index: any) {
        let getFavFromLocalStorage = window.localStorage.getItem('favList') || '[]'
        if (getFavFromLocalStorage !== null) {
            let newList = JSON.parse(getFavFromLocalStorage);
            let findSong = playlistMusic.filter((song) => song.id === index + 1)
            const songIndex = newList.findIndex((s: any) => s.name === findSong[0].name);
            if(songIndex === -1) 
                newList.push(findSong[0])
            else if(songIndex !== -1)
                newList.splice(songIndex,1)
            window.localStorage.setItem('favList', JSON.stringify(newList))
            setFavorites(newList);
        } else {
            let findSong = playlistMusic.filter((song) => song.id === index + 1);
            window.localStorage.setItem('favList', JSON.stringify(findSong[0]))
            if (findSong.length > 0) {
                setFavorites([findSong[0]])
            }
        }
    }

    function addToRecent(song: any) {
        const recentSongs = JSON.parse(localStorage.getItem('recentSongs') || '[]')
        const songIndex = recentSongs.findIndex((s: any) => s.name === song.name);
        const updatedRecentSongs = [...recentSongs];

        if (songIndex !== -1) {
            // If the song is already in recent songs, remove it
            updatedRecentSongs.splice(songIndex, 1);
        }

        // Add the song to the beginning of the array
        updatedRecentSongs?.unshift(song);
        localStorage.setItem('recentSongs', JSON.stringify(updatedRecentSongs));
    }

    return (
        <>

            <div className="playlist-content">
                {
                    showFavList ?
                        <>
                            {favMusicPlaylist.map((key: any, index: any) => (
                                <div key={index} className="playlist-item" onClick={(e) => handleClick(e, index)}>
                                    <div className="left-content">
                                        <div style={{ marginRight: "4px" }}>
                                            {index + 1}
                                        </div>
                                        <div className="coverer">
                                            <img src={key.imageUrl} />
                                            <div className="play-button">
                                                <i className="fas fa-play" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="playlist-musicname">
                                                {key.name}
                                            </div>
                                            <p>
                                                NCS
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right-content" onClick={(event) => addToFav(event, index)}>
                                        {
                                            favorites.some((song: any) => song.name === key.name) ?
                                                <img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-solid.png" />
                                                :
                                                <img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-regular.png" />
                                        }
                                    </div>
                                </div>
                            ))}
                        </>
                        :

                        <>
                            {playlistMusic.map((key, index) => (
                                <div key={index} className="playlist-item" onClick={(e) => handleClick(e, index)}>
                                    <div className="left-content">
                                        <div style={{ marginRight: "4px" }}>
                                            {index + 1}
                                        </div>
                                        <div className="coverer">
                                            <img src={key.imageUrl} />
                                            <div className="play-button">
                                                <i className="fas fa-play" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="playlist-musicname">
                                                {key.name}
                                            </div>
                                            <p>
                                                NCS
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right-content" onClick={(event) => addToFav(event, index)}>
                                        {
                                            favorites.some((song: any) => song.name === key.name) ?

                                                <img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-solid.png" />
                                                :
                                                <img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-regular.png" />
                                        }

                                    </div>
                                </div>
                            ))}
                        </>

                }


            </div>
        </>
    )
}

export default PlaylistContent