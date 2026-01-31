const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("chal gaya bhai ")
})

app.get('/about',(req,res)=>{
    res.send("about page hai ye ")
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
    
})