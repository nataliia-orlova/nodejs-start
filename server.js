// import module
const http = require('http');

const HOSTNAME = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Nataliia Orlova\n');
});

server.listen(port, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${port}/`);
});
