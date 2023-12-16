'use client' // error-> Typeerror: super expression must either be. n next js 13 app directory is a server component.so simply add 'use client' in top of your file.

import React, { useState } from 'react';
import NavBar from './navbar';
import TSA from './tsa';
import LatestRelease from './latestRelease';
import MusicPlayer from './AudioPlayer';
import { MusicPlayerProvider } from './MusicPlayerProvider';
import PopularArtist from './popularArtist';
import MusicTheme from './musicThemes';
import LanguageEngSection from './languageEngSection';
import Instrumental from './Instrumental';

export default function Home() {

    return (
        <>
            <MusicPlayerProvider>
                <NavBar />
                <main>
                    <aside className="aside section-1">
                        <TSA />
                        <LatestRelease />
                        <PopularArtist />
                        <MusicTheme />
                        <LanguageEngSection />
                        <Instrumental />
                    </aside>
                </main>
                <MusicPlayer songs ={''} />
            </MusicPlayerProvider>
        </>
    )

}
