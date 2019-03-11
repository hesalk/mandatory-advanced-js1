let io = require("socket.io-client");
let socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000/');

let listen = function(){
    var promise1 = new Promise(function(resolve, reject) {
        socket.on("new_message", function (message) {
            resolve(message)
        });
      });
      promise1.then(function(value){
          console.log(value)
      })
}

export default listen