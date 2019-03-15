import React, { Component } from 'react';
import Input from './input';
import ChatBody from './chatbody'
//var Linkify = require('react-linkify');

class LogIn extends Component{
    constructor(props) {
        super(props);
        this.onclick = this.onclick.bind(this);
        this.onchange = this.onchange.bind(this);
        this.returnstate = this.returnstate.bind(this)
        this.user = ''
        this.logstate = {main:
        <div className="main--loging">
        <input type="text" onChange={this.onchange} onKeyPress={this.onclick}  ref={(input) => { this.nameInput = input; }}>
        </input>
        <button className="main--input--btn" onClick={this.onclick}>Login</button>
        </div>}
        this.state = {main:this.logstate.main,user:""
        }
    }
    componentDidMount(){
        this.nameInput.focus();
      }
    onclick(e){
        let code = e.keyCode || e.which;
        if(code === 13 || e.button === 0){
        console.log("btn is clicked");
        console.log(this.props);
        this.setState({main:<><ChatBody></ChatBody><Input user={this.state.user}></Input></>})
        setTimeout(function () { 
            window.scrollBy({
                top: 10000,
                left: 0,
                behavior: 'smooth'
            });
         },500)

        }
        
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
      returnstate(){
        this.setState({main:this.logstate.main})
      }
    render(){
        return(
            <>
            <div>Extra features:
                press enter to send//
                auto focus on input
            </div>
            <button onClick={this.returnstate}>return</button>
            {this.state.main}
            </>
        )
    }
}

export default LogIn