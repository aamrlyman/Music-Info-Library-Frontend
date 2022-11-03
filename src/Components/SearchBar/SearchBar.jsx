import React, { useState, useEffect } from 'react';
import "./SearchBar.css"

const SearchBar = (props) => {
    
    const [dropDownFilter, setDropDownFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('text');
    const [likesDropDown, setLikesDropDown] = useState('Most Likes');
    const [likesBool, setLikesBool] = useState(true);
    // const [filteredSongs, setFilteredSongs] = useState([]);

    function handleSumbit(event){
        event.preventDefault();
        if(searchInput === "" && dropDownFilter === "" ){ alert("Use the dropdown and/or input box to create some search peramaters.")}
        else if(searchInput === "" && dropDownFilter !== ""){sortByCriteria();}
        else if(searchInput !== '' && dropDownFilter !== ""){filterSongs()}
        else{filterByIncludes()}
        
        setDropDownFilter('');
        setSearchInput('');
        setLikesBool(true);
        setLikesDropDown("Most Likes");
      }

      function newSearch(){
        props.getAllSongs();
        setLikesBool(true);
        setLikesDropDown("Most Likes");
      }

      function sortByCriteria(){
      if(dropDownFilter === "likes"){
          let sortedSongs = sortByLikes();
          return props.setSongs(sortedSongs)
      }
      let sortedSongs = props.songs.slice(0).sort((a,b) => {
        let item1 = a[dropDownFilter] || '';
        let item2 = b[dropDownFilter] || '';
        return (( item1.toLowerCase() > item2.toLowerCase()) ? 1 : -1);
      });
        return props.setSongs(sortedSongs);
    }

      function filterSongs(){
        if(dropDownFilter === "likes"){
          let filteredSongs = sortByLikes();
          return props.setSongs(filteredSongs)
        }
        else{
        let filteredSongs = props.songs.filter((song) => song[dropDownFilter].toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase()));
        return props.setSongs(filteredSongs)
        }
      }

      
      function filterByIncludes(){
        let filteredByIncludes = props.songs.filter((song) =>{
          let valuesArray = Object.values(song);
          let noNumsArr = valuesArray.filter((el) => typeof el === "string");
          return noNumsArr.some((value) => value.toString().toLowerCase().includes(searchInput.toString().toLocaleLowerCase().trim()));
        })
        console.log(filteredByIncludes)
        return props.setSongs(filteredByIncludes)
      }

      function sortByLikes(){
        switch(likesDropDown){
          case "Most Likes":
            let mostLiked = props.songs.slice(0).sort((a,b) =>(b[dropDownFilter] - a[dropDownFilter]));
                return mostLiked;
          case "=":
            let likeSearch = props.songs.filter((song) => song.likes === parseInt(searchInput.trim()));
            return likeSearch;
          case ">":
            let greaterSearch = props.songs.filter((song) => song.likes >= parseInt(searchInput.trim()));
            return greaterSearch;
          case "<":
            let lessThanSearch = props.songs.filter((song) => song.likes <= parseInt(searchInput.trim()));
            return lessThanSearch;

        }
      }
      
      function changeSearchType(){
        if(dropDownFilter === "release_date"){
          setSearchType("date")
        }
        else if(dropDownFilter === "likes"){
          setSearchType("number")
          setLikesBool(false)
        }
        else(setSearchType("text"))
      }

      useEffect(() => {
        changeSearchType()
      }, [dropDownFilter])
      // var select = document.getElementsByTagName("select")
      // select.addEventListener("change", changeSearchType())


    return (
    <div className='searchBar'>
      <form onSubmit={handleSumbit}>
        <label className='searchFilter'>Search By</label>
        <select name="Song Properties" value={dropDownFilter} onChange= {(event) => setDropDownFilter(event.target.value)}>
          <option value="">Sort Criteria</option>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="release_date">Release Date</option>
          <option value="genre">Genre</option>
          <option value="likes">Likes</option>
        </select>
        <select name="likes comparisons" value={likesDropDown} hidden={likesBool} onChange={(event) => setLikesDropDown(event.target.value)}>
          <option value="Most Likes">Most Likes</option>
          <option value="=">equals</option>
          <option value=">">greater than</option>
          <option value="<">less than</option>
        </select>
        <input type={searchType} value ={searchInput} placeholder="additional Search Criteria" onChange={(event) => setSearchInput(event.target.value)}></input>
        <button className="searchButtons" type="submit">Search</button>
        <button className="searchButtons" onClick={() => newSearch()}>New Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
