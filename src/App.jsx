import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
function App() {
  
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
      getAllSongs()
    }, [])
    // optionall array in useEffect defines how often it runs
    

    async function getAllSongs(){
      //await requires await requires the async keyword in function call  
      const response = await axios.get("http://127.0.0.1:8000/music/"); 
      // every http request needs to be awaited
      console.log(response.data)
      setSongs(response.data)      
    }

  return(
    <div>
        {/* <button onClick={() => getAllSongs()}>Get all Songs</button> */}
        <DisplayMusic songs={songs}/>
    </div>
  );
}

export default App;
