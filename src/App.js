import React, { useState, useEffect } from 'react';
import MusicTable from "./Components/MusicTable/MusicTable"
import NavBar from "./Components/NavBar/NavBar"
import CreateSong from "./Components/CreateSong/CreateSong"
import axios from 'axios';
import './App.css'
import SearchBar from "./Components/SearchBar/SearchBar"

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() =>{
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/songs/')
    setSongs(response.data)
  }

    async function addNewSong(newSong){
      let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
      if(response.status === 201) {
        await getAllSongs();
      }
  } 

  function filterMusic(newSong) {
    let userInput = songs.filter(function(el){
      if(el.title.includes(newSong) || 
      el.album.includes(newSong) || 
      el.artist.includes(newSong) || 
      el.release_date.includes(newSong) || 
      el.genre.includes(newSong) ){
        return true
      } else {
        return false
      }
      
    })
    setSongs(userInput)
  }

  return (
    <div className='body'>
      <div className='row'>
        <div className='col-md-6'>
        <NavBar/>
        </div>
        <div className='col-md-6'>
        <div className='border-box'>
        <SearchBar filterMusic={filterMusic}/> 
        <MusicTable songs={songs}/>
        </div>
        </div>
        <div className=''>
        <CreateSong addNewSong={addNewSong}/>
        </div>
      </div>
    
      
    </div>
  );

  }
export default App;
