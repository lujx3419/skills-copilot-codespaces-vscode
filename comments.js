// Create web server
// Create a web server that listens to requests on port 3000. When a request is received, the server should respond with the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream('./comments.json').pipe(res);
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run the server by running the following command: node comments.js. Then, visit http://localhost:3000 to see the comments.json file.