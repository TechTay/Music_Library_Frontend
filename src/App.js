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
    console.log(response.data)
    setSongs(response.data)
  }

    function addNewSong(newSong){
      let tempSongs = [newSong, ...songs]
      setSongs(tempSongs)
  } 



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
        <NavBar/>
        </div>
        <div className='col-md-6'>
        <div className='border-box'>
        <SearchBar/>
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
