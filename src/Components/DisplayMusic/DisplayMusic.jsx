import React, { useState, Fragment } from "react";
import ReadOnlyRow from "../ReadOnlyRow/ReadOnlyRow";
import EditableRow from "../EditableRow/EditableRow";

const DisplayMusic = (props) => {
  const [editSongId, setEditSongId] = useState(null);
  const [editSong, setEditSong] = useState({
    "title": "title",
    "artist": "artist",
    "album": "album",
    "release_date": "releaseDate",
    "genre": "genre",
  })

  const handleEditSongChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newSongData = {...editSong};
    newSongData[fieldName] = fieldValue;
    setEditSong(newSongData)
  }

  const handEditClick = (song) => {
    setEditSongId(song.id)
    console.log(song)
    const songValues = {
      "title": song.title,
      "artist": song.artist,
      "album": song.album,
      "release_date": song.releaseDate,
      "genre": song.genre,
    }
    setEditSong(songValues);
  }

  const handleEditSongSubmit = (event) =>{
    event.preventDefault();
    const editedSong = {
      "id": editSongId,
      "title": editSong.title,
      "artist": editSong.artist,
      "album": editSong.album,
      "release_date": editSong.releaseDate,
      "genre": editSong.genre,
    }
    props.updateSong(editSongId, editSong);
  }

  return (
    <form>
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
                  <EditableRow song={song} editSong={editSong} handleEditSongChange={handleEditSongChange} />
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
    </form>
  );
};

export default DisplayMusic;
