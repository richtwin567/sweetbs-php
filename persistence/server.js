const http = require('http');
const hostname = 'sweetbs-backend.herokuapp.com';
const port = process.env.PORT || 8080;
const server = require('./route.js'); // imports the routing file
server.listen(port);
