var http = require('http');

http.createServer((req,resp)=>{
		
	resp.writeHead(200, { 'Content-Type': 'text/html' });
	resp.write('<h1>Hi i am http module  sd server  hello changes!</h1>');	
	resp.end();
	
}).listen(3000);

console.log('server created !');