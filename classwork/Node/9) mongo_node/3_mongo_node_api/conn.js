const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017/');

async function  dbConnect() {
    let result = await client.connect();
    db = result.db('practice');
    return db.collection('employee');
}

module.exports= dbConnect;