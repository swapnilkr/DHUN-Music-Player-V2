'use client' // error-> Typeerror: super expression must either be. n next js 13 app directory is a server component.so simply add 'use client' in top of your file.

import React from 'react';
import NavBar from './navbar';
import TSA from './tsa';
import LatestRelease from './latestRelease';
import MusicPlayer from './AudioPlayer';

export default function Home() {
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
    return (
        <>
            <NavBar />
            <main>
                <aside className="aside section-1">
                    <TSA />
                    <LatestRelease />
                </aside>
            </main>
            <MusicPlayer songs={musicList}/>
        </>
    )

}
