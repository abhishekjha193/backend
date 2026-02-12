const express = require("express")
const authRouter = require("../routes/auth.routes")
const app = express()
const cookieParse = require("cookie-parser")

app.use(express.json())
app.use(cookieParse())

app.use("/api/auth",authRouter)


module.exports = app