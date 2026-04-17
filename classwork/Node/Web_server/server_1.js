var http = require('http');

var server = http.createServer(function (req,res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<html><body><p>hello this is server </p></body></html>');
    res.end();
});

server.listen(5000);