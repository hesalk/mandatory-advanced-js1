let io = require("socket.io-client");
let socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');


let write = function(username,content){
    socket.emit("message", {
        username: username,
        content: content
    })
}

export default write
