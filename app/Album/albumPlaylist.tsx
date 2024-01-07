'use client'

import React, { useState, useEffect } from 'react';
import { useMusicPlayer } from '../MusicPlayerProvider';
import { useSearchParams } from 'next/navigation'


function AlbumPlaylist() {

    const searchParams = useSearchParams()
    const choosedPlaylist = searchParams.get('list')

    const { setMusicList } = useMusicPlayer();
    const [selectedList, setSelectedList] = useState<any[]>([]);

    let playlist1 = [
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


    let playlist2 = [
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
    ]

    let playlist3 = [
        {
            id: 1,
            name: 'Waves',
            imageUrl: '/Instrumental/waves.jpg',
            audioUrl: '/Instrumental/waves.mp3',
            releaseDate: 'Aug 2022',
            duration: '04:27'
        },
        {
            id: 2,
            name: 'With you',
            imageUrl: '/Instrumental/with you.png',
            audioUrl: '/Instrumental/with you.mp3',
            releaseDate: 'Sept 2022',
            duration: '02:44'
        },
        {
            id: 3,
            name: 'Hold You',
            imageUrl: '/Instrumental/Hold You.jpg',
            audioUrl: '/Instrumental/Hold You.mp3',
            releaseDate: 'Apr 2019',
            duration: '02:21'
        },
        {
            id: 4,
            name: 'Bye bye',
            imageUrl: '/Instrumental/bye bye.jpg',
            audioUrl: '/Instrumental/bye bye.mp3',
            releaseDate: 'Nov 2023',
            duration: '02:48'
        },
        {
            id: 5,
            name: 'Calling',
            imageUrl: '/Instrumental/calling.jpg',
            audioUrl: '/Instrumental/calling.mp3',
            releaseDate: 'Sept 2023',
            duration: '03:23'
        },
        {
            id: 6,
            name: 'Marcheur',
            imageUrl: '/Instrumental/Marcheur.jpg',
            audioUrl: '/Instrumental/Marcheur.mp3',
            releaseDate: 'Jan 2016',
            duration: '04:06'
        },
    ]

    useEffect(() => {
        console.log(choosedPlaylist)
        setSelectedList(
            choosedPlaylist === '1' ? playlist1 : choosedPlaylist === '2' ? playlist2 : playlist3
        )
    }, [choosedPlaylist])

    function AddToRecentHandle(event: any, song: any) {
        window.postMessage({
            message: 'Add To Recent',
            info: song,
        }, '*');
    }

    useEffect(() => {
        setMusicList(selectedList)
    }, [])

    function handleClick(event: any, index: any) {
        let clickedSong = [];
        clickedSong.push(selectedList[index])
        setMusicList(clickedSong)
        AddToRecentHandle(event, selectedList[index])
    }

    return (
        <>
            <div className="playlist-items">
                <>
                    {selectedList.map((list: any, index: any) => (
                        <div className="playlist-item" onClick={(event) => handleClick(event, index)}>
                            <div className="left">
                                <div>
                                    {list.id}
                                </div>
                                <div>
                                    <img src={list.imageUrl} />
                                    <div className="play-btn">
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className='song-name-album'>
                                    <h5>
                                        {list.name}
                                    </h5>
                                    <p>
                                        NCS
                                    </p>
                                </div>
                            </div>
                            <div className="center">
                                {list.duration}
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
                    ))}
                </>
            </div>
        </>
    )
}

export default AlbumPlaylist;