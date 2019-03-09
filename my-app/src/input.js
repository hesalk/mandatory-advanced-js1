import React, { Component } from 'react';
import write from './write'


class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {message :""}
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({message:e.target.value});
    }
    onClick(){
        console.log(this);
        write("hesham",this.state.message)
    }
    render(){
        return(
            <div className="main--input">
                <input className="main--input--text" type="text" onChange={this.onChange}></input>
                <button onClick={this.onClick}>Send</button>
            </div>
        )
    }
}

export default Input