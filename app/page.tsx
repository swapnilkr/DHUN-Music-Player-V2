'use client' // error-> Typeerror: super expression must either be. n next js 13 app directory is a server component.so simply add 'use client' in top of your file.

import React, { useState } from 'react';
import NavBar from './navbar';
import MusicPlayer from './AudioPlayer';
import { MusicPlayerProvider } from './MusicPlayerProvider';
import AsideSec1 from './asideSec1';
import AsideSec2 from './asideSec2';


export default function Home() {

    return (
        <>
            <MusicPlayerProvider>
                <NavBar />
                <main>
                    <AsideSec1 />
                    <AsideSec2 />
                </main>
                <MusicPlayer songs ={''} />
            </MusicPlayerProvider>
        </>
    )

}
