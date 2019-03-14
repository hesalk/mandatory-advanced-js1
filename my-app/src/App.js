import React, { Component } from 'react';
import './App.css';

import LogIn from './loging';


var io = require("socket.io-client");
var socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');
socket.on('connect', function(){
  console.log("ANSLUTEN");
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {main:<LogIn></LogIn>}
}
  render() {
    console.log(this.state.main)
    return (
      <div className="App">
        <header className="App-header">
        {this.state.main}
        </header>
      </div>
    );
  }
}

export default App;
