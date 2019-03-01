import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation titulo="Mi primera navegacion"/>
          <Navigation titulo="Mi Segunda navegacion"/>
          <Navigation titulo="Mi Tercera navegacion"/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>TITULO CON BOOTSTRAP 4</h3>
      </div>
    );
  }
}

export default App;
