var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice');

var express = require('express');
const app = express();
app.use(express.json());

var stu_schema = mongoose.Schema({
    rollno : {
        type :Number,
        required : [true , "rollno is required"]
    },
    name : {
        type :String,
        required : [true , "name is required"]
    },
    std : {
        type :Number,
        required : [true , "std is required"]
    },
    div : {
        type :String,
        required : [true , "div is required"]
    },
    result : {
        type :String,
        required : [true , "result is required"]
    }
});

var stu_model = mongoose.model('students',stu_schema);

app.get('/',async(req,resp)=>{
    resp.send("<h1>hello</h1>");
})

//get data
app.get('/getdata',async(req,resp)=>{
    let result = await stu_model.find();
    resp.send(result);
})

//get by column
app.get('/getcolumn',async(req,resp)=>{
    let result = await stu_model.find({div:'B'});
    resp.send(result);
})

//get params , http://localhost:5000/getparams/69fd8cf58931cfb22f1a1af9
app.get('/getparams/:_id',async(req,resp)=>{
    let result = await stu_model.find({_id:req.params});
    resp.send(result);
})

// search data by patern column  http://localhost:5000/getsearch/Pass
app.get('/getsearch/:pattern',async(req,resp)=>{
    let result = await stu_model.find({
        "$or":[
                {div:{$regex:req.params.pattern,$options:"i"}}, //$option  for case incensitive
                {result:{$regex:req.params.pattern,$options:"i"}}
        ]
    });
    resp.send(result);
})

app.post('/postdata',async(req,resp)=>{
    let data = new stu_model(req.body);
    let result = await data.save();
    console.log(result);
})
app.listen(5000);