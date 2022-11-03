import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div className ="nav">
      <nav>
        <h1>Music Library</h1>
        <SearchBar songs={props.songs} getAllSongs={props.getAllSongs} setSongs={props.setSongs} likeSong={props.likeSong} deleteSong={props.deleteSong} />
      </nav>
    </div>
  );
};

export default NavBar;
