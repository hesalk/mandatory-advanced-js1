import React, { Component } from 'react';
import write from './write';
import {emojify} from 'react-emojione';
import Linkify from 'linkifyjs/react';




class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {message :"",emo:""}
        this.onChange = this.onChange.bind(this);
        this.click = this.click.bind(this);
    }
    onChange(e){
        this.setState({message:e.target.value});
        let str = this.state.message
        let reg = /:(.+):+/g;
        let arr = str.split(" ");
    }
    componentDidMount(){
        this.nameInput.focus();
      }
    click(e){
        let code = e.keyCode || e.which;
        if (code === 13 || e.button === 0){console.log('ok')
        console.log(this.props);
        write(this.props.user,this.state.message);
        this.setState({message:""});
         }
      }
    
    render(){
        return(
            <div className="main--input">
                <div>{emojify(this.state.message)}</div>
                <input  user={this.props.user} value={this.state.message} className="main--input--text" type="text" onChange={this.onChange} onKeyPress={this.click} ref={(input) => { this.nameInput = input; }} />
                <button onClick={this.click}>Send</button>
            </div>
        )
    }
}

export default Input