var http = require("http");
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  }
//   if (req.method === "GET" && req.url === "/about") {
//     res.setHeader("content-Type", "text/html");
//     fs.readFile('./index.html', (err, content) =>{
//         if(err) console.log(err);
//         res.end(content);
//     })
//   }
  if (req.method === "GET" && req.url === "/about") {
    res.setHeader("content-Type", "text/html");
    fs.createReadStream('./index.html').pipe(res)
  }
}
server.listen(5555, () => {
  console.log("Welcome to Server.js");
});
