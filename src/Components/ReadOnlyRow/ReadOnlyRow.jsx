import React, { useState } from 'react';
import axios from "axios";
import "./ReadOnlyRow.css"

const ReadOnlyRow = (props) => {
  
  // const [song, setSong] = useState(props.song)

  async function likeSong(event, songId){
    event.preventDefault();
    const response = await axios.put(`http://127.0.0.1:8000/music/${songId}/like/`);
    console.log(response);
    props.getAllSongs();
    // setSong({likes:song.likes+1, ...song});
  }



    return (
        <tr className='dataRows' key={props.song.id}>
        <td className="likes">
          <button 
            className="btn btn-outline-light"
            data-toggle="tooltip" 
            data-placement="left" 
            title={props.song.likes}  
            onClick={(event) => likeSong(event, props.song.id)}>
              <i className="fa-solid fa-thumbs-up" >
                </i>
                 </button>
          </td>
        {/* <td><button onClick={() => toggleForm()}>Edit</button></td> */}
        <td>{props.song.title} </td>
        <td>{props.song.artist} </td>
        <td>{props.song.album} </td>
        <td>{props.song.release_date} </td>
        <td>{props.song.genre} </td>
        <td><button className="btn btn-outline-light" onClick={() => props.handEditClick(props.song)}>Edit</button>
        <button className="btn btn-outline-light" onClick={() =>props.confirmDelete(props.song.id)}>Delete</button></td>
        {/* <td></td> */}
      </tr>
      );
}
 
export default ReadOnlyRow;