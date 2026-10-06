const http = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {

        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Error al cargar la página.');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
    });

});

server.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en http://${hostname}:${port}/`);
});