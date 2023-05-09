import React, { useState } from "react";
import axios from "axios";
import "./ReadOnlyRow.css";
import "popper.js";
import { useEffect } from "react";

const ReadOnlyRow = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  // const [song, setSong] = useState(props.song)

  async function likeSong(event, songId) {
    event.preventDefault();
    const response = await axios.put(
      `http://127.0.0.1:8000/music/${songId}/like/`
    );
    console.log(response);
    props.getAllSongs();
    // setSong({likes:song.likes+1, ...song});
  }

  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  // })

  return (
    <tr
      className="dataRows"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={props.song.id}
    >
      {/* <button type="button" class="btn btn-secondary"  data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button> */}
      {!isHovered ? (
        <td className="likes">
          <button
            title={`${props.song.likes} likes`}
            className="btn btn-outline-light"
            onClick={(event) => likeSong(event, props.song.id)}
          >
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </td>
      ) : (
        <td>
          <button
            title={`${props.song.likes} likes`}
            className="btn btn-outline-light"
            onClick={(event) => likeSong(event, props.song.id)}
          >
            <i className="fa-solid fa-thumbs-up"></i>
            <span> {props.song.likes}</span>
          </button>
        </td>
      )}
      {/* <td><button onClick={() => toggleForm()}>Edit</button></td> */}
      <td>{props.song.title} </td>
      <td>{props.song.artist} </td>
      <td>{props.song.album} </td>
      <td>{props.song.release_date} </td>
      <td>{props.song.genre} </td>
      <td>
        <button
          className="btn btn-outline-light"
          onClick={() => props.handEditClick(props.song)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => props.confirmDelete(props.song.id)}
        >
          Delete
        </button>
      </td>
      {/* <td></td> */}
    </tr>
  );
};

export default ReadOnlyRow;
