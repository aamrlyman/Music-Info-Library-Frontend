const NavBar = (props) => {
    return (
        <nav>
            <h1>Music Library</h1>
            <form action="/action_page.php">
                <label for="songs">Search By</label>
                <select name="Song Properties">
                    <option value="titles">Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="release_date">Release Date</option>
                    <option value="genre">Genre</option>
                </select>
                <input type="text"></input>
                <button type="submit" value="Submit">Search</button>
            </form>
        </nav>
      );
}
 
export default NavBar;