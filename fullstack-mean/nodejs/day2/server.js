let http = require('http');
let currentDt = require('./testModule');

http.createServer(function (request, response){
    response.end('Hello World! \nDate : '+ currentDt.currentDateTime());
}).listen(8080);
