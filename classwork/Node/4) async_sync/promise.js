let a = 20;
let b = 0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)
});

waitingData.then((result)=>{
    b = result;
    console.log(a + b)
})