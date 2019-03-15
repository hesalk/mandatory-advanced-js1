import React, { Component } from 'react';

class Logstate extends Component{
    render(){
        return(
            <div className="main--loging">
            <input type="text" onChange={this.props.onchange} onKeyPress={this.props.onclick} >
            </input>
            <button className="main--input--btn" onClick={this.props.onclick}>Login</button>
        </div>
        )
    }
}
export default Logstate

{/* <div className="main--loging">
            <input type="text" onChange={this.onchange} onKeyPress={this.onclick}  ref={(input) => { this.nameInput = input; }}>
            </input>
            <button className="main--input--btn" onClick={this.onclick}>Login</button>
        </div> */}

        //ref={(input) => { this.props.nameInput = input; }}