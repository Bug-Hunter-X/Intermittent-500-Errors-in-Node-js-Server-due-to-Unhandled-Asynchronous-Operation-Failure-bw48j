const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  if (data) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } else {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error fetching data');
  }
});

function fetchData() {
  // Simulate an asynchronous operation that might fail randomly
  return Math.random() > 0.5 ? 'Data fetched successfully' : null;
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});