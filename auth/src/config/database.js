const mongoose = require("mongoose")
require("dotenv").config()

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to the database");  
    })

}

module.exports = connectDB