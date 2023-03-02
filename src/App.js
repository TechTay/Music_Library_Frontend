import React, { useState, useEffect } from 'react';
import MusicTable from "./Components/MusicTable/MusicTable"
import NavBar from "./Components/NavBar/NavBar"
import SearchBar from "./Components/SearchBar/SearchBar"

function App() {
  const [addSong,addSongSet] = useState([
    { title: "I Believe I Can Fly", artist: "R. Kelly", album: "R.", release_date: "1998-11-10", genre: "R&B" },
  ])

  function addNewSong(newSong) {
    let newSongs = [newSong, ...addSong]
    addSongSet(newSongs)
  }

}

  return (
    <div>
      <NavBar/>
      <MusicTable addNewSong={addNewSong}/>
      <SearchBar/>
      
    </div>
  );

  
export default App;
