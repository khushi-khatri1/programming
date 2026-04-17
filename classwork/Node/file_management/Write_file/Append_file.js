
var fs = require('fs');

fs.appendFile('test.txt',' : i hope you are fine !!',function (err){
    if(err)
        console.log(err)
    else
        console.log('create and write/append operation complete')
})