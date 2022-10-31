import React from 'react';

const EditableRow = (props) => {
    return ( 
        <tr>
            <td>
                <input 
                type="text"  
                required="required"
                placeholder='Enter a title...'
                ></input>
            </td>
            <td>
                <input 
                type="text"  
                required="required"
                placeholder='Enter an artist.. '
                ></input>
            </td>
            <td>
                <input 
                type="text"  
                required="required"
                placeholder='Enter an album...'
                ></input>
            </td>
            <td>
                <input 
                type="date"  
                required="required"
                ></input>
            </td>
            <td>
                <input 
                type="text"  
                required="required"
                placeholder='Enter a genre...'
                ></input>
            </td>
        </tr>
     );
}
 
export default EditableRow;

