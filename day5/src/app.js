const express = require("express")
const notesmodel = require("./models/note.model")

const app = express()

app.use(express.json());


app.post("/notes", async (req,res)=>{
    const {title , description} = req.body;
    const notes = await notesmodel.create({
        title , description
    })

    res.status(201).json({
     message:"notes created successfully",
     notes
    })
})



module.exports = app