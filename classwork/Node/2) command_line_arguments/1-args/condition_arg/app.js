//importing the process module
const process = require('process');
console.log(process.argv[2]);

if(process.argv[2] == "zomato")
{
    console.log("zomato project is running");
}

else if(process.argv[2] == "blinkit")
{
    console.log("blinkit project is running");
}

else if(process.argv[2] == "amazon")
{
    console.log("amazon project is running");
}

else
{
    console.log("wrong command");
}