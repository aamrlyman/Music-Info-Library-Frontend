import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import "./App.css"

function App() {
  
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
      getAllSongs()
    }, [])

    async function getAllSongs(){
      //await requires await requires the async keyword in function call  
      const response = await axios.get("http://127.0.0.1:8000/music/"); 
      // every http request needs to be awaited
      console.log(response.data)
      setSongs(response.data)      
    }

    // optionall array in useEffect defines how often it runs


    
    async function updateSong(songId, song){
      const response = await axios.put(`http://127.0.0.1:8000/music/${songId}/`, song);
      console.log(response);
      getAllSongs();
    }



    // async function getSongById(songId){
    //   const response = await axios.get(`http://127.0.0.1:8000/music/${songId}/`);
    //   console.log(response);
    //   setSongs(response.data)
    // }


  return(
    <div className='BackgroundImage'>
        {/* <button onClick={() => getAllSongs()}>Get all Songs</button> */}
        <NavBar songs={songs} getAllSongs={getAllSongs} setSongs={setSongs}/>
        <CreateSongForm getAllSongs={getAllSongs} />
        <DisplayMusic songs={songs} getAllSongs={getAllSongs} setSongs={setSongs} updateSong={updateSong}/>
    </div>
  );
}

export default App;
