// connectivity
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice');

//validation schema
var emp_schema = mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    password : Number,
    mobile : Number,
    status : String
});

//create model & apply schema on model
var emp_model = mongoose.model('employees',emp_schema);
console.log('created');