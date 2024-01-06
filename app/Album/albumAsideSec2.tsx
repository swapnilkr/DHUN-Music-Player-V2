import SimilarBrand from "./similarBand";
import RecentyPlayed from "./recentlyPlayed";

function AlbumAsideSec2() {

    return (
        <>
            {/* the aside section will collapse and a "more button will be shown to you."
            clicking on this more button, you will be shown the aside section 2
            its position will be absolute at lower resolutions */}
            <label htmlFor="more">
                <i className="fas fa-angle-double-left" />
                More
            </label>
            {/* this is that more button
            and this is the check box. this will always be hidden
            check the stylesheet_main.css when the label is clicked, this checkbox will be checked
            which will invoke the aside section 2 on lower resolutions */}
            <input type="checkbox" id="more"></input>
            <aside className="aside section-2">
                <SimilarBrand />
                <RecentyPlayed />
            </aside>
        </>
    )
}

export default AlbumAsideSec2;