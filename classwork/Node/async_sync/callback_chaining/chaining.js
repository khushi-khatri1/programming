const async = require('async');

//asynchrous
async.parallel([
    (callback)=>{
        setTimeout(() => {
            console.log("this is the first function");
            callback(null,1);
        },5000);
        
    },
    (callback)=>{
        console.log("this is the second function");
        callback(null,2);
    }
],(err,results)=>{
    if(err) console.error(err);
    console.log(results);
});

//synchronous
async.series([
    (callback)=>{
        setTimeout(() => {
            console.log("this is the first function");
            callback(null,1);
        },5000);
    },
    (callback)=>{
        console.log("this is the second function");
        callback(null,2);
    }
],(err,results)=>{
    if(err) console.error(err);
    console.log(results);
});