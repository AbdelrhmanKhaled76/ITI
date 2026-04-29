import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/product.router.js";

const app = express();

app.use(express.json());

app.use("/products" , productRouter);

mongoose.connect("mongodb://localhost:27017/ITI")
    .then(()=> {
        console.log("connected to mongodb");
    }).catch(err => {
        console.error(err);
    });

app.use((err,req,res,next) => {
    return res.status(500).json({
        message : err.stack
    })
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000");
})