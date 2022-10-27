import React, { useState, useEffect } from 'react';
import DisplayMusic from "../DisplayMusic/DisplayMusic";

const SearchBar = (props) => {
    
    const [dropDownFilter, setDropDownFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');


    return (
    <div>
      <form action="/action_page.php">
        <label>Search By</label>
        <select name="Song Properties" value={dropDownFilter} onChange= {(event) => setDropDownFilter(event.target.value)}>
          <option value="titles">Title</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="release_date">Release Date</option>
          <option value="genre">Genre</option>
        </select>
        <input type="text" value ={searchInput} onChange= {(event) => setSearchInput(event.target.value)}></input>
        <button type="submit" value="Submit">
          Search
        </button>
      </form>
      <DisplayMusic 
      songs={props.songs} likeSong={props.likeSong} deleteSong={props.deleteSong} 
      dropDownFilter={dropDownFilter} searchInput={searchInput} 
      />
    </div>
  );
};

export default SearchBar;
