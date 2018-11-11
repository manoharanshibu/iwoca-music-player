import React, { Component } from 'react';
import Player from './components/Player';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />          
            <p>
              <i className="fas fa-music"></i> <span>&nbsp;&nbsp;</span>IWOCA PLAYER
            </p>
        </header>
        <div className="App-container" >
          <Player />
        </div>        
      </div>
    );
  }
}

export default App;
