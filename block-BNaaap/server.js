var http = require("http");

var server = http.createServer(handleRequestResponse);

function handleRequestResponse(req, res) {
  res.statusCode('200');
  res.setHeader('content-Type', 'text/plain')
  res.writeHeader()
    res.end("Welcome");
}

server.listen(4444, () => {
  console.log("Server 4444 started Okay");
});
