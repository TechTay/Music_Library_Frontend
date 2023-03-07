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
     <tbody className='table'>
        <td>{props.song.title}</td>
        <td>{props.song.album}</td>
        <td>{props.song.artist}</td>
        <td>{props.song.release_date}</td>
        <td>{props.song.genre}</td>
     </tbody>
    </table>
    )
}



export default Song