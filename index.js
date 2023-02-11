import Express from "express";
import bodyParser from "body-parser"

import userRoutes from "./routes/users.js"

const app = Express();

const PORT = 5000;

app.use(bodyParser.json())

app.use('/users',userRoutes)

app.get("/",(req,res)=>{

   console.log("[TEST]")
   res.send("Hello from Server")
   
})

app.listen(PORT,()=>{
    console.log("Server is Running on Port 5000");
})