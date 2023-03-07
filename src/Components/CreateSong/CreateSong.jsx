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
        <form onSubmit={handleSubmit} className='form-Song'>
          <div className='create-Song'>
            <h6 style={{'margin-left': '0.5em', 'margin-bottom': '0.4em'}} >Add Music</h6>
            <input type= 'text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <input type= 'text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <input type= 'text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <input type= 'date' className='form-control' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            <input type= 'text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
          </div>
          <button type='submit'className='btn btn-primary' style={{'margin-top': '1em'}}>Add Song</button>
        </form>
    )
}


export default CreateSong