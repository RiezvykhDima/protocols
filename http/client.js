const http = require('http');

http.get('http://localhost:8081/', (res) => {
  console.log('request sent to server');
  console.log(`status code is: ${res.statusCode}`);
});