import React, { useState, Fragment } from "react";
import ReadOnlyRow from "../ReadOnlyRow/ReadOnlyRow";
import EditableRow from "../EditableRow/EditableRow";
import "./DisplayMusic.css"

const DisplayMusic = (props) => {
  
  const [editSongId, setEditSongId] = useState(null);
  const [editSong, setEditSong] = useState({
    title: "",
    artist: "",
    album: "",
    release_date: "",
    genre: "",
  });

  const handleEditSong = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newSongData = { ...editSong };
    newSongData[fieldName] = fieldValue;
    setEditSong(newSongData);
  };

  const handEditClick = (song) => {
    setEditSongId(song.id);
    console.log(song);
    const songValues = {
      title: song.title,
      artist: song.artist,
      album: song.album,
      release_date: song.release_date,
      genre: song.genre,
    };
    setEditSong(songValues);
  };

  const handleEditSongSubmit = (event) => {
    event.preventDefault();
    const index = props.songs.findIndex((song) => song.id === editSongId);
    const editedSong = {
      id: editSongId,
      title: editSong.title,
      artist: editSong.artist,
      album: editSong.album,
      release_date: editSong.release_date,
      genre: editSong.genre,
      likes: props.songs[index].likes,
    };
    props.updateSong(editSongId, editedSong);
    setEditSongId(null);
  };

  const handleCancelClick = () => {
    setEditSongId(null);
  };

  return (
    <form className="displayMusic" onSubmit={handleEditSongSubmit}>
      <table>
        <thead>
          <tr>
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
                  <EditableRow
                    song={song}
                    editSong={editSong}
                    handleEditSong={handleEditSong}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    song={song}
                    likeSong={props.likeSong}
                    deleteSong={props.deleteSong}
                    handEditClick={handEditClick}
                    getAllSongs={props.getAllSongs}
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
