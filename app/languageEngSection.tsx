import React, { useEffect } from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';


function LanguageEngSection() {

    const { setMusicList } = useMusicPlayer();


    let engMusicList = [
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

    function AddToRecentHandle(event: any, song: any) {
        window.postMessage({
            message: 'Add To Recent',
            info: song,
        }, '*');
    }

    useEffect(() => {
        setMusicList(engMusicList)
    }, [])

    function handleClick(event :any, index:any) {
        let clickedSong = [];
        clickedSong.push(engMusicList[index])
        setMusicList(clickedSong)
        AddToRecentHandle(event, engMusicList[index])
    }

    return(
        <>
            <div className="language english">
                <h1 className="language-heading">
                    Latest English
                </h1>
                <div className="language-content">
                    {engMusicList.map((key,index) => (
                        <div onClick={(e) => handleClick(e, index)}>
                            <img src={key.imageUrl} />
                            <p className='language-music-name'>{key.name}</p>
                            <p>{key.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default LanguageEngSection