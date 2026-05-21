var http = require('http');
var server = http.createServer(function (req,res){

    if(req.url=="/")
    {
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1> Welcome Home page </h1>");
        res.end();
    }
    else if(req.url=="/about")
    {
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1> Welcome About Page </h1>")
		res.end();
	}
	else if(req.url=="/blog")
    {
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1> Welcome blog Page </h1>")
		res.end();
	}
	else if(req.url=="/contact")
    {
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1> Welcome contact Page </h1>")
		res.end();
	}
	else
    {
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1> 404 not found </h1>")
		res.end();
	}
});
server.listen(5050);