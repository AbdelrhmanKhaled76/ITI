import express from "express";
import {connectDBs} from "./config/dbconfig.js"
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv";
import {handleError} from "./middleware/ErrorHandling.js";

const port =process.env.PORT||3000;
const app=express();
connectDBs()

dotenv.config()
app.use(express.json());

app.use("/user",authRoutes)



app.use(handleError);

app.listen(port,()=>{
    console.log("server is running on port 3000");
    
})