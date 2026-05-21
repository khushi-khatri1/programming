const dbConnect = require('./mongoconn');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const{ObjectId} =  require('mongodb');

app.get('/getdata',async(req,resp)=> {
    let conn = await dbConnect();
    let data = await conn.find({}).toArray();
    resp.send(data); 
    console.log(data);
});

app.get('/getsingle/:_id',async(req,resp)=>{
    let conn = await dbConnect();
    let data = await conn.findOne({_id:new ObjectId(req.params._id)});
    console.log(data);
    resp.send(data);
})

app.post('/postdata',async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    console.log(req.body);
    resp.send({result:"Data Inserted Success"});
});

app.put("/update/:_id", async (req, resp) => {
    const data = await dbConnect();
    let body = req.body;
    delete body._id;
    let result = data.updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
    resp.send({ status: "User Data updated" });
});

app.delete('/delete/:_id',async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new ObjectId(req.params._id) });
    resp.send({status:"user deleted success"})
})
app.listen(4000);