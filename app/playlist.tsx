'use-client'

import React, { useState, useEffect } from 'react';

function Playlist() {
    const [showDropdown, setShowDropdown] = useState(false)

    function showFavList(event:any) {
        window.postMessage('Fav Clicked', '*')
    }

    function showPlayList(event:any) {
        window.postMessage('PlayList Clicked', '*')
    }

    function showDropdownOnClick (event:any) {
        setShowDropdown(!showDropdown)
    }
    return (
        <>
            <div className="heading">
                <h1> Playlist </h1>
                <h4>
                    <div className='queue' onMouseOver={(event)=> showDropdownOnClick(event)} onBlur={(event)=> showDropdownOnClick(event)} onClick={(event) => showDropdownOnClick(event)}>CLICK <i className="fas fa-chevron-circle-down"></i></div>
                </h4>
            </div>
            {
                showDropdown ?
                
                <div onMouseOver={(e) =>setShowDropdown(true)} onMouseOut={(e) =>setShowDropdown(false)}  className="queue-options" id="queue-option-box">
                    <p><div style={{color:"#f8f9fa", fontWeight:"bold", cursor:"pointer"}} onClick={(event) => showPlayList(event)}>Playlists</div></p>
                    <hr />
                    <p><div style={{color:"#f8f9fa", fontWeight:"bold", cursor:"pointer"}} onClick={(event) => showFavList(event)}>Favourite songs</div></p>
                    <hr />
                    <p><div style={{color:"red", fontWeight:"bold", cursor:"pointer"}} onClick={(event) => showDropdownOnClick(event)}>Close</div></p>
                </div>
                
                :
                <></>
            }
            
        </>
    )
}

export default Playlist