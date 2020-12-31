const http = require('http');

const server = http.createServer(() => {
    console.log('listening!');
});

server.listen(3000)