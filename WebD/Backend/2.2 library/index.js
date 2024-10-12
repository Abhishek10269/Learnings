const fs = require ("fs");
//writing a file
fs.writeFile("message.txt","YOU HAVE DONE GREAT JOB",(err)=>{
    if(err) throw err;
    console.log("The file has been saved.")
})
//reading a file
fs.readFile('message.txt','utf8',(err,data)=>{
    if(err)  throw err;
    console.log(data);
})