import React, { useEffect } from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';


function Instrumental() {

    const { setMusicList } = useMusicPlayer();


    let instrumentalMusic = [
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
        setMusicList(instrumentalMusic)
    }, [])

    function handleClick(event :any, index:any) {
        let clickedSong = [];
        clickedSong.push(instrumentalMusic[index])
        setMusicList(clickedSong)
    }

    return(
        <>
            <div className="language instrumental">
                <h1 className="language-heading">
                    Instrumental
                </h1>
                <div className="language-content">
                    {instrumentalMusic.map((key,index) => (
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

export default Instrumental