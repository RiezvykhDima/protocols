const http = require('http');
const port = 8081;

const server = http.createServer((req, res) => {
  console.log('client connected to server');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain ');
  res.end(() => {
    console.log('sent some information to client');
    console.log('disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is ready');
});
