var {readFile, readFileSync} = require('fs');

// Async Version
readFile('content.md', 'utf8', (err, content) =>{
    console.log(content);
});
// sync Version
var result = readFileSync('content.md', 'utf8');

console.log(result);

var buff1 = Buffer.alloc(10);

buff1.write('Welcome to Buffer!');

console.log(buff1);


