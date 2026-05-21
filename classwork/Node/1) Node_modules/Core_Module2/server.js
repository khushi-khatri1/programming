var http = require('http');

http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-Type' : "text/html"});
    resp.write("<h1>Hi i am node module server ...</h1>");
    //resp.write(JSON.stringify({name:"Khushi",age:20,mobile:7850023654})); //obj to json 
    resp.end();

}).listen(5000);