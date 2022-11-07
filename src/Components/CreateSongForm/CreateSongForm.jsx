import React, { useState } from 'react';
import "./CreateSongForm.css"
import axios from "axios";
import { createRenderer } from 'react-dom/test-utils';

const CreateSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    async function addNewSong (song){
        const response = await axios.post("http://127.0.0.1:8000/music/", song)
        // ... is like object.assign. Take all the current values of entries and add whatever entry has in it
        //the only way to update a state variable in React is to use the setEntries function. Use a temporariy array and the ... to assign more values to the array
        console.log(response)
        // let tempSongs = [song,...songs]
        // setSongs(tempSongs);
        props.getAllSongs();
        alert(`Song: ${song.title} created.` )
      }
  

    function handleSubmit (event){
        event.preventDefault();
        // The default behavior is to refresh page on submit because the type is submit
        let newSong = {
            // creating an object with the useState weight and date variables
            "title": title,
            "artist": artist,
            "album": album,
            "release_date": releaseDate,
            "genre": genre,
            "likes": 0
        }
       console.log(newSong);
        addNewSong(newSong);
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <h2>Create Song</h2>
        {/* https://getbootstrap.com/docs/4.0/components/forms/ */}
        <div className='form-group'>
            <label>Title:</label>              
            <input type = "text" className="form-control" value={title} required="required"  placeholder="Song Title..." onChange= {(event) => setTitle(event.target.value)}></input>      
        </div>
        <div className='form-group'>
            <label>Artist:</label>
            <input type = "text" className="form-control" value={artist} required="required"  placeholder="Artist..." onChange= {(event) => setArtist(event.target.value)}></input>
        </div>
        <div className='form-group'>
            <label>Album:</label>
            <input type = "text" className="form-control" value={album} required="required" placeholder="Album..." onChange= {(event) => setAlbum(event.target.value)}></input>
        </div>
        <div className='form-group'>
            <label>Release Date:</label>
            <input type = "date" className="form-control" value={releaseDate} required="required" onChange= {(event) => setReleaseDate(event.target.value)}>
        </input>
        </div>
        <div className='form-group'>
            <label>Genre:</label>
            <input type = "text" className="form-control" value={genre} required="required" placeholder="Genre..." onChange= {(event) => setGenre(event.target.value)}></input>
        </div>
        <button type="submit" className="createButton">Create</button>
    </form>
      );
}

export default CreateSongForm;

/* onChange is an attribute of useState variables, onChange calls the set weight function based on the event (any change to the weight input) event.target.value takes in the user input on webpage 
The value attribute binds the input box to the weight state
type= "numer" makes the weight input allow only numbers
*/