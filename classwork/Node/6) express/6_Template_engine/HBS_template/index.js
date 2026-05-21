const express = require('express');

const app=express();
const hbs = require('hbs');

app.set('view engine', 'hbs');  // app.set('view engine','ejs')

// 1 static code 
/*
app.get('/',(_,resp)=>{
    resp.send(`<h1>Hello i am static code </h1>`)
});


// 2  static page call & want path stattic page

const path = require('path');
const publicPath=path.join(__dirname,'public'); 

app.get('/sendFile',(_,resp)=>{
    resp.sendFile(`${publicPath}/demo.html`);
});
*/

//get hbs template page from views 
app.use(express.static('public'));      //global set kar diya
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(_,resp)=>{
    resp.render('home');
});


app.get('/about',(_,resp)=>{
	var data=[
		{
			name:'Nirav',
			email:'Nirav@test.com',
			country:'USA',
		    Skills:['php','java','python	']
		},
		{
			name:'rajesh',
			email:'rajesh@test.com',
			country:'USA',
		   Skills:['php','java','python	']
		}
	];
    resp.render('about',{data});
});

app.get('',(_,resp)=>{
    resp.render('pnf');
});

app.get('/service',(_,resp)=>{
    resp.render('service');
});

app.get('/contact',(_,resp)=>{
    resp.render('contact');
});

app.listen(2020);