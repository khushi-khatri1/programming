

var fs = require('fs');

fs.writeFile('test.txt','Hey Khushi , How are you !!',function (err){
    if(err)
        console.log(err)
    else
        console.log('file create if exist then write operation complete')
})