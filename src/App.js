import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticker from './Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        Tickers:
        <Ticker ticker='AAPL' />
      </div>
    );
  }
}

export default App;
