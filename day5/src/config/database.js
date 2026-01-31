const mongoose = require("mongoose")

function connectToDB (){
    mongoose.connect("mongodb+srv://Abhishek_King:2vq16GYatGurpPkS@cluster0.6rksu73.mongodb.net/day-5")
    .then(()=>{
        console.log("connected to database");     
    })
}

module.exports = connectToDB