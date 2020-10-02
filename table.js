import React from 'react';

const Table = ({ helps }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Helpline number</th>
        </tr>
      </thead>
      <tbody>
      { (helps.length > 0) ? helps.map( (help, index) => {
           return (
            <tr key={ index }>
              <td>{ help.loc }</td>
              <td>{ help.number }</td>
              
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table