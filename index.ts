import express from "express";
import connects from "./api/dbConnection/dbConnection";
import userRouter from "./api/routes/user.route";
import dotenv from "dotenv";
import authRouter from "./api/routes/authentication.route";

//env file path
dotenv.config({path:"./.env"});

const app= express();

app.use('/',userRouter)
app.use('/',authRouter)

//mongodb connection
connects();

//server connection
app.listen(process.env.PORT,():void=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
