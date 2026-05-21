const dbConnect = require('./conn');
const express = require('express');
const app = express();

app.use(express.json());

// get all data  http://localhost:2006/getdata
app.get('/getdata',async(req,resp)=>{
    let conn = await dbConnect();
    data = await conn.find({}).toArray();
    resp.send(data);
    console.log(data);
})

//http://localhost:2006/getsingle
app.get('/getsingle',async(req,resp)=>{
    let conn = await dbConnect();
    data = await conn.find({name:"Khushi"}).toArray();
    resp.send(data);
    console.log(data);
})

//http://localhost:2006/getsingle2?name=Mihir
// get single or particular column data
app.get('/getsingle2',async(req,resp)=>{
    let conn = await dbConnect();
    data = await conn.find(req.query).toArray();
    resp.send(data);
    console.log(req.query);
})

//http://localhost:2006/getsingle3
// body -> raw -> json
app.post('/getsingle3',async(req,resp)=>{
    let conn = await dbConnect();
    data = await conn.find(req.body).toArray();
    console.log(req.body);
    resp.send(data);
})

//================================================================================

// data insert static   http://localhost:2006/insertdata1
app.post('/insertdata1',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.insertOne({id: 12,name: "Aarav",email: "aarav12@gmail.com",password: 4567,mobile: 9988774411,status: "unblock"})
    resp.send({data:"Static Data Inserted Success"});
})

// data insert dynamic http://localhost:2006/insertdata2  add data in body
app.post('/insertdata2',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.insertOne(req.body);
    console.log(req.body);
    resp.send({result:"Postman Data Inserted Success"});
})

//================================================================================

// update by postman body   http://localhost:2006/putdata  add data in body
app.put('/putdata',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.updateOne({id:req.body.id},{$set:req.body});
    resp.send({status: "updated"});
})

// update by postman body & parameter from url  
// http://localhost:2006/putdata?id=10
app.patch('/patchdata',async(req,resp)=>{
    let conn = await dbConnect();
    console.log(req.query);
    let data = await conn.updateMany(
        {id : req.body.id},// or id: req.params.id UPDATE FROM column name UPDATE FROM column name
        {$set : req.body}
    )
    resp.send({ status: "multiple updated by parameter" });
})

//================================================================================

//delete data static
// http://localhost:2006/deletedata1
app.delete('/deletedata1',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.deleteOne({id:3});
    resp.send({ status: "data deleted" });
})

//delete data by body
// http://localhost:5000/deletedata2
app.delete('/deletedata2',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.deleteMany(req.body);
    resp.send({ status: "data deleted" });
})

//delete data by parameter
// http://localhost:2006/deletedata3?id=5
app.delete('/deletedata3',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.delete({name:req.query}); //sir e delete lakhayu che pn thatu nhi 
    console.log(req.query);
    resp.send({status: "data deleted"});
})

app.listen(2006);