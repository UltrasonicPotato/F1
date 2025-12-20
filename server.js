
const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/start') {
    exec('npm run dev', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error starting server: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Server started');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8080/');
});
