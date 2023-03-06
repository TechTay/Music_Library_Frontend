import React, { useState, useEffect } from 'react';


const Song = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
    <table className='table'>
        <h3>{props.song.title}</h3>
        <p>
            {props.song.album}
        </p>
        <p>
            {props.song.artist}
        </p>
        <p>
            {props.song.release_date}
        </p>
        <p>
            {props.song.genre}
        </p>
    </table>
    </table>
    )
}



export default Song