import React, { useState } from "react";
import "./EditableRow.css";

const EditableRow = (props) => {
  //   const []

  return (
    <tr>
      <td></td>
      <td>
        <input
          className="editRow"
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={props.editSong.title}
          onChange={props.handleEditSong}
          // value={props.song.title}
        ></input>
      </td>
      <td>
        <input
          className="editRow"
          type="text"
          required="required"
          placeholder="Enter an artist.. "
          name="artist"
          value={props.editSong.artist}
          onChange={props.handleEditSong}
        ></input>
      </td>
      <td>
        <input
          className="editRow"
          type="text"
          required="required"
          placeholder="Enter an album..."
          name="album"
          value={props.editSong.album}
          onChange={props.handleEditSong}
        ></input>
      </td>
      <td>
        <input
          className="Row"
          type="date"
          required="required"
          name="release_date"
          value={props.editSong.release_date}
          onChange={props.handleEditSong}
        ></input>
      </td>
      <td>
        <input
          className="editRow"
          type="text"
          required="required"
          placeholder="Enter a genre..."
          name="genre"
          value={props.editSong.genre}
          onChange={props.handleEditSong}
        ></input>
      </td>
      <td className="buttonRow">
      <button className="btn btn-outline-light" type="submit">Save</button>
      <button className="btn btn-outline-light" type="button" onClick={props.handleCancelClick}>
          Cancel
        </button>
      </td>

    </tr>
  );
};

export default EditableRow;
