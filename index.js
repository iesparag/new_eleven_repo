const express = require('express');
const {connection}  = require("./config/db");
const {RegisterRouter} = require("./routes/register.route")

const cors = require('cors');
const { LoginRouter } = require('./routes/login.route');
require('dotenv').config()




const app = express();
app.use(express.json());
app.use(cors());
app.use("/register",RegisterRouter)
app.use("/login",LoginRouter)

app.get("/",(req,res)=> {
    res.send("welcome to the backend")
})

app.listen(process.env.PORT,async ()=> {
    try{
        await connection
        console.log(`app listening on http://localhost:${process.env.PORT}`)
    }catch(error){
        console.log(error)
    }
})