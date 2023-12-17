import PopularArtist from './popularArtist';
import MusicTheme from './musicThemes';
import LanguageEngSection from './languageEngSection';
import Instrumental from './Instrumental';
import TSA from './tsa';
import LatestRelease from './latestRelease';

function AsideSec1() {

    return (
        <>
            <aside className="aside section-1">
                <TSA />
                <LatestRelease />
                <PopularArtist />
                <MusicTheme />
                <LanguageEngSection />
                <Instrumental />
            </aside>
        </>
    )

}

export default AsideSec1