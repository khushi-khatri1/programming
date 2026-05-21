var express = require('express');

var app = express();

app.get('/',(Req,res)=>{
    res.send('<h1>Hello</h1>');
})

app.get('/about',(req,res)=>{
    //object auto convert in json
    res.send({name:'Khushi' , email:'khushi@gmail.com'});
})

app.listen(5000);