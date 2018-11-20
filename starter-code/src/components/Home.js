import React, { Component } from 'react';
import contacts from '../contacts.json'
import Item from './Item';
import Button from './Button';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: contacts.slice(0, 5)
    }
  }

  getRandom = () => {
    // // Method 1
    // let { arr } = this.state // we need to create a copy
    // let randomIndex = Math.floor((Math.random() * contacts.length) + 5);

    // arr.push(contacts[randomIndex]);
    // this.setState({ arr });

    // Method 2
    let randomIndex = Math.floor((Math.random() * contacts.length) + 5);
    let randomContact = contacts[randomIndex]
    this.setState({
      arr: [...this.state.arr, randomContact]
    });

  }

  sortByName = () => {
    let { arr } = this.state
    let sortName = arr.sort((a, b) => (a.name < b.name) ? -1 : 1);

    this.setState({ arr: sortName });
  }

  sortByPopularity = () => {
    let { arr } = this.state;
    let sortPopularity = arr.sort((a, b) => b.popularity - a.popularity);

    this.setState({ arr: sortPopularity });
  }

  deleteContact = (indexToRemove) => {
    let { arr } = this.state;

    arr = arr.filter((item, i) => indexToRemove !== i);
    this.setState({ arr });
  }

  render() {
    return (
      < div className="container" >
        <h1>IronContacts</h1>
        <section>
          <Button onClick={this.getRandom}>+ Add Random</Button>
          <Button onClick={this.sortByName}>∨ Sort by name</Button>
          <Button onClick={this.sortByPopularity}>∧ Sort by popularity</Button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
            {this.state.arr.map((item, index) => <Item key={index} index={index} item={item} onClick={this.deleteContact} />)}
          </tbody>
        </table>
      </div >
    );
  }
}

export default Home;