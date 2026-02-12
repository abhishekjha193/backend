const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const userModel = Mongoose.model("users",userSchema)

module.exports = userModel