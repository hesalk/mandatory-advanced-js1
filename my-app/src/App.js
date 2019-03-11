import React, { Component } from 'react';
import './App.css';
import ChatBody from './chatbody'
import Input from './input'

var io = require("socket.io-client");
var socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');
socket.on('connect', function(){
  console.log("ANSLUTEN");
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ""
}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Input></Input>
          <ChatBody>

          </ChatBody>
        </header>
      </div>
    );
  }
}

export default App;
