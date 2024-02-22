let http = require('http');
var url = require('url');

http.createServer(function (request, response){
    console.log("Request URL", request.url);
    let queryParams = url.parse(request.url, true).query;
    console.log('Query Param', queryParams);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World</h1>');
    response.end();
}).listen(8080);

//NPM
