import React, { useState } from 'react';


const CreateSong = (props) => {

    const [title, setTitle] = useState([""]);
    const [album, setAlbum] = useState([""]);
    const [artist, setArtist] = useState([""])
    const [release_date, setReleaseDate] = useState([""])
    const [genre, setGenre] = useState([""])
    
    
    const handleSubmit = (e) => {
      e.preventDefault()
  
      let newSong = {
        "title": title,
        "album": album,
        "artist": artist,
        "release_date": release_date,
        "genre": genre

  
      }
  
      props.addNewSong(newSong)
  
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
              <label>Title</label>
            </div>
            <div>
              <label>Album</label>
            </div>
            <div>
              <label>Artist</label>
            </div>
            <div>
              <label>Release Date</label>
            </div>
            <div>
              <label>Genre</label>
            </div>
            
        </form>
    )
}


export default CreateSong