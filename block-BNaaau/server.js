// let http = require('http');

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//     console.log(req.method);
//     resp.setHeader('Content-Type', 'text/html')
//     resp.end('<h1>Hello World</h1>')
// }

// server.listen(5000, () =>{
//    console.log(`Server Listening On Port 5000`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   resp.end("My first server in NodeJS");
// }

// server.listen(5100, () => {
//   console.log(`Server Listening On Port 5100`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//     console.log(req.headers);
//     resp.setHeader('Content-Type', "plain/html")
//     resp.end('Response From Users');
// }

// server.listen(5555, () => {
//   console.log(`Server Listening On Port 5100`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//     console.log(req.headers);

//     resp.end(req.headers['user-agent']);
// }

// server.listen(5555, () => {
//   console.log(`Server Listening On Port 5100`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   console.log(req.method, req.url);
//   resp.end((req.method + req.url );
// }

// server.listen(5566, () => {
//   console.log(`Server Listening On Port 5566`);
// });
// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//     resp.write(req);
//   resp.end();
// }

// server.listen(7000, () => {
//   console.log(`Server Listening On Port 7000`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
// res.statusCode = 202;
//     resp.end();
// }

// server.listen(3333, () => {
//   console.log(`Server Listening On Port 3333`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   resp.setHeader('Content-Type', 'plain/html');
//   resp.end('<h3>Welcome to altcampus</h3>');
// }

// server.listen(8000, () => {
//   console.log(`Server Listening On Port 8000`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   resp.write("<h3>Welcome to altcampus</h3>");
//   resp.end();
// }

// server.listen(8000, () => {
//   console.log(`Server Listening On Port 8000`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
// resp.writeHead(201, {'Cintent-Type' : 'application/json'})
//   resp.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
// }

// server.listen(8888, () => {
//   console.log(`Server Listening On Port 8888`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   if (req.method === "GET" && req.url === "/") {
//     resp.end("Sushil");
//   } else if (req.method === "GET" && req.url === "/about") {
//     resp.setHeader('Content-Type', 'text/html')
//     resp.end("<h2>Sushil</h2>");
//   } else {
//    resp.statusCode = 404;
//     resp.setHeader('Content-Type', 'text/html')
//     resp.end("<h2>Page Not Found</h2>");
//   }
// }

// server.listen(2345, () => {
//   console.log(`Server Listening On Port 2345`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   if (req.method === "GET" && req.url === "/") {
//     resp.end("Sushil");
//   } else if (req.method === "POST" && req.url === "/about") {
//     resp.setHeader("Content-Type", "text/html");
//     resp.end("<h2>Sushil</h2>");
//   }
// }

// server.listen(2345, () => {
//   console.log(`Server Listening On Port 2345`);
// });

// let http = require("http");

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   console.log(req.headers);

//   resp.end(req.headers["user-agent"]);
// }

// server.listen(5555, () => {
//   console.log(`Server Listening On Port 5100`);
// });


// let http = require("http");
// let fs = require('fs');

// let server = http.createServer(handleRequest);

// function handleRequest(req, resp) {
//   if (req.method === "GET" && req.url === "/users") {
//     resp.setHeader('Content-Type', 'text/html')
//     fs.createReadStream('./form.html').pipe(resp);
//     resp.end();
//   }  
//     if (req.method === "POST" && req.url === "/users") {
//       resp.end('Posted for First Time');
//     } 
  
// }

// server.listen(2345, () => {
//   console.log(`Server Listening On Port 2345`);
// });

let http = require("http");
let fs = require("fs");
let url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, resp) {
   var parcedUrl = url.parse(req.url, true)
   console.log(parcedUrl.pathname, req.url);
   resp.end(JSON.stringify(parcedUrl));
}

server.listen(2345, () => {
  console.log(`Server Listening On Port 2345`);
});