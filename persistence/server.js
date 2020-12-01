const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = require('./route.js'); // imports the routing file
server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});