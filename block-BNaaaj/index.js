console.log("Welcome to Nodejs");

var os = require('os');

console.log(os.cpus(), os.freemem(), os.uptime(),os.version());


let buff = buffer.alloc(10);

console.log(buff.toString());

