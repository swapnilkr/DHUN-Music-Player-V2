'use client' // error-> Typeerror: super expression must either be. n next js 13 app directory is a server component.so simply add 'use client' in top of your file.

import React from 'react';
import NavBar from './navbar';
import TSA from './tsa';
import LatestRelease from './latestRelease';

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <aside className="aside section-1">
                    <TSA />
                    <LatestRelease />
                </aside>
            </main>

        </>
    )

}
