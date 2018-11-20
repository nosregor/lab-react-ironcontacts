import React, { Component } from 'react';

import contacts from './contacts.json'


class IronContacts extends Component {



  render() {
    const size = 5;
    const items = contacts.slice(0, size).map((c) => {
      return (
        <tr key={c.name}>
          <td><img src={c.pictureUrl} style={{ height: 100 }} /></td>
          <td>{c.name}</td>
          <td>{c.popularity}</td>
        </tr>
      )
    })
    console.log(contacts)
    return (
      <div className="Contacts" >
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Polpularity</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div >

    )
  }

}

export default IronContacts