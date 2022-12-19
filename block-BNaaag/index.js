var {readFile} = require('fs');

readFile('content.md', 'utf8', (err, content) =>{
    console.log(content);
});