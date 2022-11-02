import React, { useState } from "react";

const EditableRow = (props) => {
  //   const []

  return (
    <tr>
      <td>placeholder</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={props.song.title}
          onChange={props.handleEditSongChange}
          // value={props.song.title}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an artist.. "
          name="artist"
          value={props.song.artist}
          onChange={props.handleEditSongChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an album..."
          name="album"
          value={props.song.album}
          onChange={props.handleEditSongChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          name="release_date"
          value={props.song.release_date}
          Change={props.handleEditSongChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a genre..."
          name="genre"
          value={props.song.genre}
          onChange={props.handleEditSongChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
