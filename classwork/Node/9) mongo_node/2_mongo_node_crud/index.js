const dbConnect = require('./conn');

//select all data
/*
const getData = async()=>{
    let data = await dbConnect();
    let result = await data.find({}).toArray();
    console.log(result);
}
getData();
*/

//select single data
/*
const singleData = async()=>{
    let data = await dbConnect();
    let result = await data.find({'rollno':31}).toArray();
    console.log(result);
}
singleData();
*/

//insert data
/* 
const insertData = async()=>{
    let data = await dbConnect();
    let result = await data.insertMany([
        {rollno:34,name:"raj",std:8,div:"B",result:"Pass"},
        {rollno:35,name:"het",std:8,div:"B",result:"Fail"},
        {rollno:36,name:"jay",std:8,div:"B",result:"Fail"},
    ]);

    if(result)
	{
		console.log('data inserted success');
	}
}
insertData();
*/

//update data
/*
const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        {rollno:31},
        {
            $set:{name:"vikas"}
        }
    )
    if(result)
	{
		console.log('data updated success');
	}
}
updateData();
*/

//delete data
const deleteData = async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({rollno:31});
    if(result)
	{
		console.log('data deleted success');
	}
}
deleteData();