const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = require("./app")
const mongoose = require("mongoose");




dotenv.config({path: "./config.env"});

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
}).then(()=> console.log("database connected successfully")
)

app.listen(5000, ()=>console.log("listning on port 5000"));