const fs = require('fs')

// fs.writeFileSync('khushi.txt','this is a simple file',(err)=>{
//     if(!err)
//     {
//         console.log("file is created");
//     }
// })

//read
// fs.readFile('khushi.txt','utf8',(err,data)=>{
//         console.log(data);
// })

//update
// fs.appendFile('khushi.txt',' for fruits',(err)=>{
//     if(!err)
//         console.log("file is updated")
// })

//delete
fs.unlinkSync('khushi.txt',(err)=>{
    if(!err)
        console.log("file is deleted")
})
