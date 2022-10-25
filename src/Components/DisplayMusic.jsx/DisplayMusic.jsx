import React, { useState, useEffect } from 'react';

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
                <tr key={index}>
                    <td>Likes</td>
                    <td>{songs.Title}</td>
                    <td>{index + 1}</td>
                    <td>{index + 1}</td>
                    <td>{index + 1}</td>
                </tr>
            </tbody>
        </table>
      );
}
 
export default DisplayMusic;