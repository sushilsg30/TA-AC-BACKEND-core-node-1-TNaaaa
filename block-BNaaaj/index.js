var os = require("os");
var { readFile, reacFileSync, unlink } = require("fs");

console.log("Welcome to Nodejs");

console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

let buff = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff.write("Hello world");

console.log(buff.toString());

var sync = reacFileSync('./app.js')

var async = readFile('./app.js', (err, content) =>{
    console.log(err, content.toString());
})