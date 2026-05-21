//callback
/*
setTimeout(function (){
    console.log("this print after 1000 ms");
},1000);
console.log("hello world");
*/

/*
setTimeout(()=>{
    console.log("this print after 2000 ms");
},2000);
console.log("hello world");
*/

// the following code reads the file synchronously with the help of readFileSync()
// function in fs module

var fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("program ended");