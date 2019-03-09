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
        console.log(this)
        let _this = this;
        var promise1 = new Promise(function(resolve, reject) {
            socket.on("new_message", function (message) {
                resolve(message)
            });
          });
          promise1.then(function(value){
            const currentmessage = _this.state.message;
            console.log(currentmessage);
            currentmessage.push((<div>{value.message}</div>))
            console.log(currentmessage)
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