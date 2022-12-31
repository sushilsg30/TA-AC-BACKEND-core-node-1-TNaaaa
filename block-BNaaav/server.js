let http = require('http');
let fs = require("fs");
let url = require("url");

let server = http.createServer(handleRequest);

function handleRequest(req, resp) {
if (req.url.split(".").pop() === "css") {
  // set header for css file
  res.setHeader("Content-Type", "text/css");
  // read css file and send it in response
  fs.readFile("./assets/stylesheets/" + req.url, (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
}
}

server.listen(2345, () => {
  console.log(`Server Listening On Port 2345`);
});