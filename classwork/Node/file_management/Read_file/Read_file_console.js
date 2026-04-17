// Reading file 
// fs.readFile(fileName [,options],callback)
// use fs.readFile() method to read the physical file asynchronously.

var fs = require ('fs');
fs.readFile('TextFile.txt','utf8',function(err , data){
    fs.readFile('read.txt','utf-8',function (err,data){
        console.log(data);
    })
})