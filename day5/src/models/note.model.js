const mongoose = require("mongoose")

const noteschema = new mongoose.Schema({
    title:String,
    description:String,
})


const notesmodel = mongoose.model("notes", noteschema)

module.exports = notesmodel