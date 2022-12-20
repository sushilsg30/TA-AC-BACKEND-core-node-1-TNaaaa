var http = require('http');

http.createServer((request, response) => {
    console.log(request, response);
}).listen(4000, 'localhost');