import React, { useState } from 'react';
import axios from 'axios';
import EditModal from '../EditModal';

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
        <tr key={props.song.id}>
        <td><button className="btn btn-outline-light" onClick={(event) => likeSong(event, props.song.id)}><i class="fa-solid fa-thumbs-up" ></i> {props.song.likes}</button></td>
        {/* <td><button onClick={() => toggleForm()}>Edit</button></td> */}
        <td>{props.song.title} </td>
        <td>{props.song.artist} </td>
        <td>{props.song.album} </td>
        <td>{props.song.release_date} </td>
        <td>{props.song.genre} </td>
        <td><button className="btn btn-light" onClick={() => props.handEditClick(props.song)}>Edit</button></td>
        {/* <button variant="primary" onClick={() => props.setModalShow(true)}>
        Launch vertically centered modal
      </button> */}
      <EditModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
      />
        <td><button className="btn btn-light" onClick={() => props.deleteSong(props.song.id)}>Delete</button></td>
      </tr>
      );
}
 
export default ReadOnlyRow;