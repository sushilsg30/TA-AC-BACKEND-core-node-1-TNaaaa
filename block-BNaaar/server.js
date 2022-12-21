var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    // res.write("this is all about NodeJS");
    res.setHeader("content-Type", "text/html");
    res.end("<h1>this is all about NodeJS</h1>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end("{message: this is a post request}");
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.end("<h2>Page not Found</h2>");
  }
}

server.listen(3000, () => {
  console.log("Welcome to Server.js");
});
