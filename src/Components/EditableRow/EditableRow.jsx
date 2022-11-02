import React, { useState } from 'react';

const EditableRow = (props) => {
//   const []
  
 return (
    <form>
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a title..."
            // value={props.song.title}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an artist.. "
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an album..."
          ></input>
        </td>
        <td>
          <input type="date" required="required"></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a genre..."
          ></input>
        </td>
      </tr>
    </form>
  );
};

export default EditableRow;
