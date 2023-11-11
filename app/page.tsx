import Image from 'next/image';
import NavBar from './navbar';
import TSA from './tsa';

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <aside className    ="aside section-1">
                    <TSA />
                </aside>
            </main>

        </>
    )

}
