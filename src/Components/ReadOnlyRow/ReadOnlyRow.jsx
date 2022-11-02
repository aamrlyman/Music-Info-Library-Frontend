
const ReadOnlyRow = (props) => {
    return (
        <tr key={props.song.id}>
        <td><button onClick={() => props.likeSong(props.song.id)}>Likes {props.song.likes}</button></td>
        {/* <td><button onClick={() => toggleForm()}>Edit</button></td> */}
        <td>{props.song.title} </td>
        <td>{props.song.artist} </td>
        <td>{props.song.album} </td>
        <td>{props.song.release_date} </td>
        <td>{props.song.genre} </td>
        <td><button onClick={() => props.handEditClick( props.song)}>Edit</button></td>
        <td><button onClick={() => props.deleteSong(props.song.id)}>Delete</button></td>
      </tr>
      );
}
 
export default ReadOnlyRow;