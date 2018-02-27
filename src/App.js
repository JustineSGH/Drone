import React, { Component } from 'react';
import './App.css';

import Navbar from './components/header/Navbar.js';
import Body from './components/body/Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Body></Body>
      </div>
    );
  }
}

export default App;
