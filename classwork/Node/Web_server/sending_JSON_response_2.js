var http = require('http');
var data = require('./data.js');

const object = [
    {name : "Khushi" , email : "khushi@gmail.com"},
    {name : "Jiyaa" , email : "jiyaa@gmail.com"}
]

var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'});

    res.write(JSON.stringify(object));                                      //data arr object
    //res.write(JSON.stringify({name:'Raj',email:'raj@gmail.com'}));        //direct object
   // res.write(JSON.stringify(data));                                      //3 data arr from custom module
   res.end();
})

server.listen(5000);