// const notes = '/users/joe/notes.txt'

// Path.dirname(notes);
// path.basename(notes);
// path.extname(notes);

const fs = require('fs');

const path = require('path'); // folder module
const dirpath = path.join(__dirname,'fruits');  // current crud folder path 

//create file &Write data in myDir folder.
// fs.writeFileSync(`${dirpath}/code.txt`,'this is a simple file with directory path !!',(err)=>{
//     if(!err)
//     {
//         console.log("file is created");
//     }
// })

//read 
// fs.readFile(`${dirpath}/code.txt`,'utf8',(err,data)=>{
//     console.log(data);
// })

//update
// fs.appendFile(`${dirpath}/code.txt`,'hardly run',(err)=>{
//     if(!err)
//     {
//         console.log("file is updated");
//     }
// })

//rename
// fs.rename(`${dirpath}/code.txt`,`${dirpath}/coding.txt`,(err)=>{
//     if(!err)
//     {
//         console.log("file name is updated");
//     }
// });

//delete
fs.unlinkSync(`${dirpath}/coding.txt`,(err)=>{
    if(!err)
    {
        console.log("file is deleted");
    }
});