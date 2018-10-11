import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  	super();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game name="Mental Math"/>
      </div>
    );
  }
}

export default App;
