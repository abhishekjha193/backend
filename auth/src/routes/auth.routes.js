const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { log } = require("console");

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExits = await userModel.findOne({ email });

  if (isUserExits) {
    return res.status(409).json({
      message: "user already exist",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });

  const token = jwt.sign({
      id: user._id,
    },
    process.env.JWT_SECRET, { expiresIn: "1h" })

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered succesfully",
        user:{
            user: user.name,
            email: user.email
        }
        
    })
});

authRouter.get("/get-me", async (req,res)=>{
  const token = req.cookies.token
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  const user = await userModel.findById(decoded.id)
  res.json({
   name:user.name,
   email:user.email,
  })
  
});

authRouter.post('/login', async (req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message : "user not found"
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const isPasswordValid = hash === user.password
    if(!isPasswordValid){
        return res.status(401).json({
            message : "invalid password"
        })
    }

    const token =jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET,{expiresIn:"1h"})

    res.cookie("token", token)
})


module.exports = authRouter;
