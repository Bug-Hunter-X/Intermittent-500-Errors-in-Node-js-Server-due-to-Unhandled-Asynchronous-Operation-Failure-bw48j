const http = require('http');

const server = http.createServer((req, res) => {
  // Use try...catch to handle potential errors
  try {
    const data = fetchData();
    if (data) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error fetching data');
    }
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

function fetchData() {
  // Simulate an asynchronous operation that might fail randomly
  if (Math.random() > 0.5) {
    return 'Data fetched successfully';
  } else {
    throw new Error('Failed to fetch data');
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});