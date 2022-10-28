import React, { useState, useEffect } from 'react';
import DisplayMusic from "../DisplayMusic/DisplayMusic";

const SearchBar = (props) => {
    
    const [dropDownFilter, setDropDownFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');
    // const [filteredSongs, setFilteredSongs] = useState([]);

    function handleSumbit(event){
        event.preventDefault();
        if(searchInput === ""){
          sortBySongCriteria();
        }
        else{filterSongs()}
        setDropDownFilter('')
        setSearchInput('')
      }

      function filterSongs(){
        let filteredSongs = props.songs.filter((song) => song[dropDownFilter].toLocaleLowerCase() === searchInput.trim().toLocaleLowerCase())
        return props.setSongs(filteredSongs)
      }

      function sortBySongCriteria(){
      let sortedSongs = props.songs.slice(0).sort((a,b) => {
        let item1 = a[dropDownFilter] || '';
        let item2 = b[dropDownFilter] || '';
        return (( item1.toLowerCase() > item2.toLowerCase()) ? 1 : -1);})
      console.log(sortedSongs)
      return props.setSongs(sortedSongs);
      }

    return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>Search By</label>
        <select name="Song Properties" value={dropDownFilter} onChange= {(event) => setDropDownFilter(event.target.value)}>
          <option value="chooseCriteria">Choose Criteria</option>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="release_date">Release Date</option>
          <option value="genre">Genre</option>
        </select>
        <input type="text" value ={searchInput} placeholder="additional Search Criteria" onChange= {(event) => setSearchInput(event.target.value)}></input>
        <button type="submit" value="Submit">Search</button>
        <button onClick={() => props.getAllSongs()}>New Search</button>
      </form>
      <DisplayMusic songs={props.songs} likeSong={props.likeSong} deleteSong={props.deleteSong}/>
    </div>
  );
};

export default SearchBar;
