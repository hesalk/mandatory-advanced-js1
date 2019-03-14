import React, { Component } from 'react';
import Input from './input';
import ChatBody from './chatbody'

class LogIn extends Component{
    constructor(props) {
        super(props);
        this.onclick = this.onclick.bind(this);
        this.onchange = this.onchange.bind(this);
        this.user = ''
        this.state = {main:
        <div className="main--loging">
            <input type="text" onChange={this.onchange}>
            </input>
            <button className="main--input--btn" onClick={this.onclick}>Login</button>
        </div>,user:""
        }
    }
    onclick(){
        console.log("btn is clicked");
        console.log(this.props);
        this.setState({main:<><Input user={this.state.user}></Input><ChatBody></ChatBody></>})
      }
    onchange(e){
        console.log(e.target.value)
        let reg = /^(?=.{1,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        let myInput = e.target.value;
        console.log(reg.test(myInput))
        if(reg.test(myInput)){
          console.log("ok");
          this.setState({reg:"ok"});
          console.log(this.state)
          }else{console.log("fel")
        }
        this.setState({user:e.target.value} )
      }
    render(){
        return(
            <>
            {this.state.main}
            </>
        )
    }
}

export default LogIn