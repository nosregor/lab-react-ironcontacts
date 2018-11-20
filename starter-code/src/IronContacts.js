import React, { Component } from 'react';

import contacts from './contacts.json'


class IronContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }




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
      // <button onClick={this.addLike} > {this.state.nbOfLikes} like{this.state.nbOfLikes !== 1 && 's'} </button>
      <div className="IronContacts" >
        <button>Add Random Contact</button>

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