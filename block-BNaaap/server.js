var http = require("http");

var server = http.createServer(handleRequestResponse);

function handleRequestResponse(req, res) {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/html');
//   res.write('<h1>Welcome Home</h1>')
//   res.writeHeader()
    res.end("<h1>Welcome Home</h1>");
}

server.listen(4444, () => {
  console.log("Server 4444 started Okay");
});
