
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app=express();

var sahih=false;

app.use(bodyParser.urlencoded({extended:true}))

function auth (req,res,next)
{
    const password = req.body["password"];
    if(password==="abhishek")
    {
        sahih=true;
    }
    next();
}
app.use(auth);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
}
)

app.post("/check", (req,res)=>
{
    if(sahih)
    {
        res.sendFile(__dirname+"/public/secret.html");
    }
    else
    {
        res.send("<h1>Wrong Password</h1>");
    }
});

app.listen(port,()=>{
    console.log('App is running on server with port number'+port);
})