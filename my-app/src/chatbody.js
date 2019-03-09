import React, { Component } from 'react';
var io = require("socket.io-client");
var socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');


class ChatBody extends Component {
    constructor(props) {
        super(props);
        this.state = {message :[]}
        this.listen = this.listen.bind(this);
    }
    listen(){
        let test = "test";
        let _this = this;
        var promise1 = new Promise(function(resolve, reject) {
            socket.on("new_message", function (message) {
                resolve(message)
                console.log(message);
                console.log(test);
                test = message
            });
          });
          promise1.then(function(value){
            console.log(_this.state.message);
            console.log(value.content);
            
            _this.setState({message: value.content})
            
            console.log(_this.state)
            })
    }
    render(){
        this.listen();
        return(
            <div className="main">
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ChatBody