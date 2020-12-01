const http = require('http');
const hostname = 'sweetbs.herokuapp.com';
const port = process.env.PORT || 80;
const server = require('./route.js'); // imports the routing file
server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});