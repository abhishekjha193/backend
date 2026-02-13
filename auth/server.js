const app = require("./src/app")
const connectDB = require("./src/config/database")

connectDB();

app.listen(3000,(req,res)=>{
    console.log("server is running at the port 3000");
})