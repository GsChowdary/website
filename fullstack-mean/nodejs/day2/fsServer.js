let http = require('http');
var url = require('url');
let fs = require('fs');

http.createServer(function (request, response){
    // console.log("Request URL", request.url);
    // let queryParams = url.parse(request.url, true).query;
    // console.log('Query Param', queryParams);
    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('<h1>Hello World</h1>');
    // response.end();

    fs.readFile('../../js/website/contact.html',function(err, data){
        if(err){
            console.log("Error", err);
            response.write('<h1>File not found</h1>');
        }else{
            response.write(data);
        }
        response.end();
    });

    // let data = fs.readFileSync('../../js/website/contact.html');
    // console.log('File data', data);

    fs.appendFile('log.txt', `\nNew request (${request.url}) served at ${new Date().toISOString()}`,(err)=>{
        if(err){
            console.log('Error while logging data', err);
        }else{
            console.log('Log saved');
        }
    });

    //open('', 'w',(e,data)=>{})

}).listen(8080);
