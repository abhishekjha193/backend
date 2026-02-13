const express = require("express");
const userModel = require("../src/models/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists , try another Gmail",
    });
  }

  const user = await userModel.create({
    email,
    password,
    name,
  });

  const token = jwt.sign(
    {
    id: user._id,
    email:user.email
    },
   process.env.JWT_SECRET
  );

  res.cookie("jwt_token",token)

  res.status(201).json({
    message: "user registered",
    user,
    token
  });
});

authRouter.post("/protected",(req,res)=>{
  console.log(req.cookies);
  res.status(200).json({
    message:"this is protected route"
  })
  
})

authRouter.post("/login", async (req,res)=>{
  
  const {email , password} = req.body
   
  const user = await userModel.findOne({email})

  if(!user){
    return res.status(404).json({
      message:"user not found"
    })
  }

  const isPasswordMatched = user.password === password
  if(!isPasswordMatched){
    return res.status(401).json({
      message:"Invalid Password"
    })
  }
  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET )
  
  res.cookie("jwt_token", token)
  
  res.status(200).json({
    message:"user logged in",
    user
  })
})

module.exports = authRouter;
