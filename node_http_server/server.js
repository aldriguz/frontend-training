const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('listening!');
    //console.log('headers', request.headers);
    //console.log('method', request.method);
    //console.log('url', request.url);

    /**
     * html content type
     */
    //response.setHeader('content-Type', 'text/html');
    //response.end('<h1>Helloooo</h1>');
    
    /**
     * json content type
     */
    const user = {
        name: 'John',
        hobby: 'Stacking'
    };
    response.setHeader('content-Type', 'application/json');
    response.end(JSON.stringify(user));

});

server.listen(3000)