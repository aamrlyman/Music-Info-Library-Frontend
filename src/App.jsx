import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import NavBar from './Components/NavBar/NavBar';
import CreateSongForm from './Components/CreateSongForm/CreateSongForm';

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
    async function addNewSong (song){
      const response = await axios.post("http://127.0.0.1:8000/music/", song)
      // ... is like object.assign. Take all the current values of entries and add whatever entry has in it
      //the only way to update a state variable in React is to use the setEntries function. Use a temporariy array and the ... to assign more values to the array
      console.log(response)
      let tempSongs = [...songs, song]
      setSongs(tempSongs);
    }


  return(
    <div>
        {/* <button onClick={() => getAllSongs()}>Get all Songs</button> */}
        <NavBar/>
        <CreateSongForm addNewSong = {addNewSong}/>
        <DisplayMusic songs={songs}/>
    </div>
  );
}

export default App;
