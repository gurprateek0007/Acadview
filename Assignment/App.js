import React, { Component } from 'react';
import './App.css';
import Display from './Display'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>My react app!</h1>
        <h3>This is my first react app</h3>
        <Display name ="Gurprateek" age = "21" month = 

"November" />
        <Display name ="Divyanshu" age = "21" month = 

"February" />

      </div>
    );
  }
}

export default App;
