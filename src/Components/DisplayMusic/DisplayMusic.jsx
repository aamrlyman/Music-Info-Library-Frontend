import React, { useState, Fragment } from "react";
import ReadOnlyRow from "../ReadOnlyRow/ReadOnlyRow";
import EditableRow from "../EditableRow/EditableRow";

const DisplayMusic = (props) => {
  const [editSongId, setEditSongId] = useState(null);

  const handEditClick = (song) => {
    setEditSongId(song.id)
    console.log(song)
  }

  return (
      <table>
        <thead>
          <tr>
            <th>Likes</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song, index) => {
            return (
        <Fragment key={song.id}>
                {editSongId === song.id ? (
                  <EditableRow song={song} />
                ) : (
                  <ReadOnlyRow
                    song={song}
                    likeSong={props.likeSong}
                    deleteSong={props.deleteSong}
                    handEditClick={handEditClick}
                  />
                )}
        </Fragment>
            );
          })}
        </tbody>
      </table>
  );
};

export default DisplayMusic;
