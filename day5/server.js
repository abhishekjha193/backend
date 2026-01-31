const { raw } = require("express")
const app = require("./src/app")

const mongoose = require("mongoose")

const connectToDB = require("./src/config/database")

connectToDB()

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
    
})
