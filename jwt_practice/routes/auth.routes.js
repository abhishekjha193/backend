const express = require("express")
const userModel = require("../src/models/user.model")

const authRouter = express.Router()

authRouter.post("/register", async (req,res)=>{
  const {email,name,password} = req.body

  const user = await userModel.create({
    email,password,name
  })

  res,send(201).json({
    message:"user registered",
    user
  })
})

module.exports = authRouter