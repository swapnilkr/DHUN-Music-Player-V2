'use client' // error-> Typeerror: super expression must either be. n next js 13 app directory is a server component.so simply add 'use client' in top of your file.

import AsideSec1 from '../asideSec1';
import NavBar from '../navbar';
import AlbumAsideSec1 from './albumAsideSec1';
import AlbumAsideSec2 from './albumAsideSec2';
import MusicPlayer from '../AudioPlayer';
import { MusicPlayerProvider } from '../MusicPlayerProvider';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'


function page({ session }:any) {
    return (
        <>
            <SessionProvider session={session}>

                <span className='page2'>
                    <MusicPlayerProvider>
                        <NavBar />
                        <main>
                            <AlbumAsideSec1 />
                            <AlbumAsideSec2 />
                        </main>
                        <MusicPlayer songs={''} />
                    </MusicPlayerProvider>
                </span>
            </SessionProvider>

        </>
    )
}


export default page;