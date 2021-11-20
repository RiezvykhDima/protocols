const net = require('net');
const port = 3036;
const server = net.createServer((connection) => {
  console.log('client connected');ssh-keygen -o
  connection.on('end', () => {
    console.log('client disconnected');
  });
  connection.write('Hello World!\r\n');
  connection.write('Hello World 2');
  connection.pipe(connection);
});

server.listen(port, () => {
  console.log(`TCP server is listening to ${port} port`);
}); 