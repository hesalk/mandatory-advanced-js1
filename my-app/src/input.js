import React, { Component } from 'react';
import write from './write';
import Emojify from 'react-emojione';


class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {message :"test"}
        this.onChange = this.onChange.bind(this);
        this.click = this.click.bind(this);
    }
    onChange(e){
        this.setState({message:e.target.value});
        console.log(this.props.user)
    }

    click(){
        console.log(this.props);
        write(this.props.user,this.state.message);
      }
    render(){
        return(
            <div className="main--input">
                <Emojify>
                <input user={this.props.user} className="main--input--text" type="text" onChange={this.onChange}></input>
                </Emojify>
                <button onClick={this.click}>Send</button>
            </div>
        )
    }
}

export default Input