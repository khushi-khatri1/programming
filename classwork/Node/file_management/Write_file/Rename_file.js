var fs = require('fs');

fs.rename('test.txt' , 'file.txt' , function (err){
    if(err) throw err
    console.log('File renamed..')
})