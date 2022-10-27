

const DisplayMusic = (props) => {

    

    return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {props.songs.map((song, index) => {
          return (
            <tr key={song.id}>
              <td><button onClick={() => props.likeSong(song.id)}>Likes {song.likes}</button></td>
              <td><button>Edit</button></td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
              <td><button onClick={() => props.deleteSong(song.id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
