import React, { useState, useEffect } from 'react';

import DisplayMusic from "../DisplayMusic/DisplayMusic";

const SearchBar = (props) => {
    
    const [dropDownFilter, setDropDownFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('text');
    // const [filteredSongs, setFilteredSongs] = useState([]);

    function handleSumbit(event){
        event.preventDefault();
        if(searchInput === "" && dropDownFilter === "" ){ alert("Use the dropdown and/or input box to create some search peramaters.")}
        else if(searchInput === "" && dropDownFilter !== ""){sortByCriteria();}
        else if(searchInput !== '' && dropDownFilter !== ""){filterSongs()}
        else{filterByIncludes()}
        
        setDropDownFilter('')
        setSearchInput('')

      }

      function sortByCriteria(){
      let sortedSongs = props.songs.slice(0).sort((a,b) => {
        let item1 = a[dropDownFilter] || '';
        let item2 = b[dropDownFilter] || '';
        return (( item1.toLowerCase() > item2.toLowerCase()) ? 1 : -1);})
      console.log(sortedSongs)
      return props.setSongs(sortedSongs);
      }

      function filterSongs(){
        let filteredSongs = props.songs.filter((song) => song[dropDownFilter].toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase()))
        return props.setSongs(filteredSongs)
      }

      function filterByIncludes(){
        let filteredByIncludes = props.songs.filter((song) =>{
          let valuesArray = Object.values(song)
          let noNumsArr = valuesArray.filter((el) => typeof el === "string");
            return noNumsArr.some((value) => value.toString().toLowerCase().includes(searchInput.toString().toLocaleLowerCase().trim()))
            })
        console.log(filteredByIncludes)
        return props.setSongs(filteredByIncludes)
      }

      function changeSearchType(){
        if(dropDownFilter === "release_date"){
          setSearchType("date")
        }
        else(setSearchType("text"))
      }

      useEffect(() => {
        changeSearchType()
      }, [dropDownFilter])
      // var select = document.getElementsByTagName("select")
      // select.addEventListener("change", changeSearchType())


    return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>Search By</label>
        <select name="Song Properties" value={dropDownFilter} onChange= {(event) => setDropDownFilter(event.target.value)}>
          <option value="">Choose Criteria</option>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="release_date">Release Date</option>
          <option value="genre">Genre</option>
        </select>
        <input type={searchType} value ={searchInput} placeholder="additional Search Criteria" onChange={(event) => setSearchInput(event.target.value)}></input>
        <button type="submit" value="Submit">Search</button>
        <button onClick={() => props.getAllSongs()}>New Search</button>
      </form>
      <DisplayMusic songs={props.songs} likeSong={props.likeSong} deleteSong={props.deleteSong}/>
    </div>
  );
};

export default SearchBar;
