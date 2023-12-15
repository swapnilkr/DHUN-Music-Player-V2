import React, { useEffect } from 'react';
import { useMusicPlayer } from './MusicPlayerProvider';


function LanguageSection() {

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

    useEffect(() => {
        setMusicList(engMusicList)
    }, [])

    function handleClick(event :any, index:any) {
        let clickedSong = [];
        clickedSong.push(engMusicList[index])
        setMusicList(clickedSong)
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
                            <p>{key.name}</p>
                            <p>{key.duration}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="language hindi">
                <h1 className="language-heading">
                    Latest Hindi
                </h1>
                <div className="language-content">

                    <div>
                        <img src="/latest hindi/pehli mohabbat.jpg" />
                        <p>Pehli Mohabbat</p>
                        <p>Apr 17, 2017</p>
                    </div>
                    <div>
                        <img src="/latest hindi/choo lo.jpg" />
                        <p>Choo lo</p>
                        <p>Nov 05, 2017</p>
                    </div>
                    <div>
                        <img src="/latest hindi/gandi money.jpg" />
                        <p>Gandhi Money</p>
                        <p>Jun 27, 2017</p>
                    </div>
                    <div>
                        <img src="/latest hindi/ishq ka haafiz.jpg" />
                        <p>Ishq Ka Hafizz</p>
                        <p>Jan 22, 2017</p>
                    </div>
                    <div>
                        <img src="/latest hindi/jaan nisaar.jpg" />
                        <p>Jaan-e-Nisar</p>
                        <p>Dec 05, 2017</p>
                    </div>
                    <div>
                        <img src="/latest hindi/tum na ho.jpg" />
                        <p>Tum Na Ho</p>
                        <p>Jan 01, 2017</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default LanguageSection