import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronContacts from './IronContacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <IronContacts />
      </div>
    );
  }
}

export default App;
