const express = require('express');

//mongodb connection
const{MongoClient} = require('mongodb')     //import mongodb
const conn = new MongoClient('mongodb://localhost:27017/');
const app = express();

async function getData() 
{
    let result = await conn.connect();
    db = result.db('practice');     //db name
    collection = db.collection('products');     //collection/table name
    let data = await collection.find({}).toArray();     //fetch all data 
    return data;
}

app.get('/',async(req,res)=>{
    let data = await getData();
    res.send(data);
})

app.listen(4000);
