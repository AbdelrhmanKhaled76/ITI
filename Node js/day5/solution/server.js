import express from "express";
import productRouter from "./routers/product.route.js";
import categoryRouter from "./routers/category.route.js";
import dbConnection from "./config/DB.js";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/errorMiddleware.js"
import authRouter from "./routers/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products" , productRouter);
app.use("/auth", authRouter);

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})