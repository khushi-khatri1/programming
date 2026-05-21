const fs = require('fs');

/*
read data from json file 
fs.readFile("details.json",function(err,data){
    console.log(JSON.parse(data));
})
*/

const details = [
    {name:'Raj', email:'raj@gmail.com'},
	{name:'nagar', email:'nagar@gmail.com'},
	{name:'nirav', email:'nirav@gmail.com'},
	{name:'mahesh', email:'mahesh@gmail.com'},
	{name:'pavan', pavan:'nirav@gmail.com'}
];

fs.writeFile("details.json",JSON.stringify(details),()=> {console.log('Data added succesfully')});