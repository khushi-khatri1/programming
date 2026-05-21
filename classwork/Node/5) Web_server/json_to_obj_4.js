//convert json to object 

const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    
    fs.readFile("details.json",function(err,jsondata){
        res.writeHead(200,{'content-type':'application/json'});
        res.write(jsondata);
        res.end();
    });
}).listen(8080);

