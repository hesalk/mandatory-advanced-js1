import io from 'socket.io-client';
import Emojify from 'react-emojione';
import React, { Component } from 'react';
import Linkify from 'linkifyjs/react';


class ChatBody extends Component {
    constructor(props) {
        super(props);
        this.state = {message :[]}
        this.listen = this.listen.bind(this);
    }

    componentDidMount() {
        this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');

        this.socket.on("messages", (messages) => {
            this.setState({ message: messages});
        });

        this.socket.on("new_message", (message) => {
            this.setState({ message: [...this.state.message, message]});
        });
        
    }

    listen(){
        console.log(this)
    }
    render(){
        console.log(this.state.message);
        return(
            <div className="main">
                <Linkify>
                <Emojify>
                <div>:wink:</div>
                <ul>
                    {this.state.message.map(x => <ol className="chatt--li"><strong>{x.username}</strong> {x.content}</ol>)}
                </ul>
                </Emojify>
                </Linkify>
            </div>
        )
    }
}

export default ChatBody