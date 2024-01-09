'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

interface Artist {
    id: number;
    imageUrl: string;
    name: string;
    follower: string;
    band: string;
    desc: string;
    track: string;
    key: string;
}

function AlbumDesc() {

    const searchParams = useSearchParams()
    const choosedSinger = searchParams.get('singer')

    const [selectedSinger, setSelectedSinger] = useState<Artist | null>();
    const [isFollowing, setIsFollowing] = useState(false);

    let singerInfo = [
        {
            id: 1,
            imageUrl: '/coldplay back.jpg',
            name: 'Coldplay',
            follower: '17.5M',
            band: 'British',
            desc: 'Coldplay are a British rock band that were formed in London in 1996. Vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, and drummer Will Champion met at University College London and began playing music together from 1996 to 1998, first calling themselves Pectoralz and then Starfish before finally changing their name to Coldplay.',
            track: '25 Tracks | 14 Albums',
            key: 'coldplay'
        },
        {
            id: 2,
            imageUrl: '/adele.jpg',
            name: 'Adele',
            follower: '21.5M',
            band: 'British',
            desc: 'Adele Laurie Blue Adkins MBE (/əˈdɛl/;[3] born 5 May 1988), known mononymously as Adele, is an English singer-songwriter. She is known for her mezzo-soprano vocals and sentimental songwriting. Adele has received numerous accolades including 16 Grammy Awards, 12 Brit Awards (including three for British Album of the Year), an Academy Award, a Primetime Emmy Award, and a Golden Globe Award.',
            track: '17 Tracks | 10 Albums',
            key: 'adele'
        },
        {
            id: 3,
            imageUrl: '/dr.jpg',
            name: 'Darshan Rawal',
            follower: '10M',
            band: 'Indian',
            desc: 'Darshan Raval (born 18 October 1994)[1] is an Indian singer, composer, and songwriter. He is known for his work in different languages including Hindi, Gujarati, Punjabi and Bengali. In 2014, he participated in the StarPlus music reality show, Indias Raw Star, finishing as the first runner-up',
            track: '31 Tracks | 19 Albums',
            key: 'dr'
        },
        {
            id: 4,
            imageUrl: '/ed.jpg',
            name: 'Ed Sheeran',
            follower: '27.5M',
            band: 'British',
            desc: 'Edward Christopher Sheeran MBE (/ˈʃɪərən/ SHEER-ən; born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.',
            track: '25 Tracks | 17 Albums',
            key: 'ed'
        },
        {
            id: 5,
            imageUrl: '/eminem.jpg',
            name: 'Eminem',
            follower: '37.5M',
            band: 'American',
            desc: 'Eminem is an American rapper. He is credited with popularizing hip hop in Middle America and is often regarded as one of the greatest rappers of all time.[3] Eminems global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. ',
            track: '31 Tracks | 17 Albums',
            key: 'eminem'
        },
        {
            id: 6,
            imageUrl: '/katy.jpg',
            name: 'Katy Perry',
            follower: '11.5M',
            band: 'American',
            desc: 'Katy Perry, is an American singer, songwriter and television personality. She is known for her influence on modern pop music and her camp style, being dubbed the "Queen of Camp" by Vogue and Rolling Stone.',
            track: '25 Tracks | 17 Albums',
            key: 'katy'
        },
        {
            id: 7,
            imageUrl: '/martin.jpg',
            name: 'Martin Garrix',
            follower: '15.5M',
            band: 'Dutch',
            desc: 'Martin Garrix and also as Ytram and GRX, is a Dutch DJ and record producer who was ranked number one on DJ Mags Top 100 DJs list for three consecutive years—2016, 2017, and 2018. He is best known for his singles "Animals", "In the Name of Love", and "Scared to Be Lonely"',
            track: '51 Tracks | 14 Albums',
            key: 'martin'
        },
        {
            id: 8,
            imageUrl: '/mj.jpg',
            name: 'Michael Jackson',
            follower: '117.5M',
            band: 'American',
            desc: 'Michael Jackson was an American singer, songwriter, dancer, and philanthropist. Known as the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. ',
            track: '25 Tracks | 7 Albums',
            key: 'mj'
        },
        {
            id: 9,
            imageUrl: '/Shakira.jpg',
            name: 'Shakira',
            follower: '17.5M',
            band: 'Colombian',
            desc: 'Shakira, is a Colombian singer and songwriter.[2] Born and raised in Barranquilla, she has been referred to as the "Queen of Latin Music"[3] and has been praised for her musical versatility.',
            track: '50 Tracks | 17 Albums',
            key: 'shakira'
        },
        {
            id: 10,
            imageUrl: '/zayn.jpg',
            name: 'Zayn Malik',
            follower: '7.5M',
            band: 'British',
            desc: 'Zayn, is a British singer. Malik auditioned as a solo contestant for the British music competition television series The X Factor in 2010. After being eliminated, he was brought back to the competition to form the five-piece boy band One Direction.',
            track: '25 Tracks | 7 Albums',
            key: 'zyan'
        },


    ]

    useEffect(() => {
        setSelectedSinger(singerInfo.find((singer) => singer.key === choosedSinger))
    }, [choosedSinger])

    useEffect(() => {
        const storedIsFollowing = localStorage.getItem('isFollowing');
        if (storedIsFollowing !== null) {
            setIsFollowing(JSON.parse(storedIsFollowing));
        }
    }, []);

    function handleFollow(event: any) {
        const newIsFollowing = !isFollowing;
        setIsFollowing(newIsFollowing);
        localStorage.setItem('isFollowing', JSON.stringify(newIsFollowing));
    };

    function handlePlayAll(e:any) {
        window.postMessage('Play All', '*')

    }

    return (
        <>
            <div className="jumbotron" >
                <div className="jumbotron-image">
                    <img src={selectedSinger?.imageUrl} />
                </div>
                <div className="jumbotron-detail">
                    <div className="descriptive-part">
                        <div className="song-name-main">
                            <h1>{selectedSinger?.name}</h1>
                        </div>
                        <div className="followers">
                            {selectedSinger?.follower}
                        </div>
                        <p className="author">{selectedSinger?.band}</p>
                        <p className="desc">
                            {selectedSinger?.desc}
                        </p>
                    </div>
                    <div className="action-part">
                        <div className="btns">
                            <button onClick={(e)=> handlePlayAll(e)}>Play All</button>
                            <span onClick={(e) => handleFollow(e)}>
                                <button>      
                                    {isFollowing ? 'Following' : 'Follow'}
                                </button>
                            </span>
                        </div>
                        <p>
                            {selectedSinger?.track}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AlbumDesc;