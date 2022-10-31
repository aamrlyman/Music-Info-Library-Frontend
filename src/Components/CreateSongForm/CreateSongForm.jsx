import React, { useState } from 'react';


const CreateSongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');


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
        props.addNewSong(newSong);
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
        {/* https://getbootstrap.com/docs/4.0/components/forms/ */}
        <div className='form-group'>
            <label>Title</label>              
            <input type = "text" className="form-control" value={title} required="required"  placeholder="Song Title" onChange= {(event) => setTitle(event.target.value)}></input>      
        </div>
        <div className='form-group'>
            <label>Artist</label>
            <input type = "text" className="form-control" value={artist} required="required"  placeholder="Artist" onChange= {(event) => setArtist(event.target.value)}></input>
        </div>
        <div className='form-group'>
            <label>Album</label>
            <input type = "text" className="form-control" value={album} required="required" placeholder="Album" onChange= {(event) => setAlbum(event.target.value)}></input>
        </div>
        <div className='form-group'>
            <label>Release Date</label>
            <input type = "date" className="form-control" value={releaseDate} required="required" onChange= {(event) => setReleaseDate(event.target.value)}>
        </input>
        </div>
        <div className='form-group'>
            <label>Genre</label>
            <input type = "text" className="form-control" value={genre} required="required" placeholder="Genre" onChange= {(event) => setGenre(event.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
    </form>
      );
}

export default CreateSongForm;

/* onChange is an attribute of useState variables, onChange calls the set weight function based on the event (any change to the weight input) event.target.value takes in the user input on webpage 
The value attribute binds the input box to the weight state
type= "numer" makes the weight input allow only numbers
*/