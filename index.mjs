import http from 'http'

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Firend\n');
});

server.listen(port, hostname, () => {
    console.log('Servidor corriendo');
});