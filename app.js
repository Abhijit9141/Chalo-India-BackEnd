const express = require("express");
const  cors = require("cors");
const globalErrorHandler = require("./Controller/errorController");
const AppError = require("./utils/AppError");
const destRouter = require("./router/destRouter");
const fs = require("fs");
const app = express();
const userRouter = require("./router/userRouter");
app.use(express.json());
app.use(cors({ 
    origin:"*"
}
));

app.use("/v1",userRouter);
app.use("/v1" , destRouter );

app.get("/location/api",(req,res)=>{
    fs.readFile(`./locationApi.js/locationApi.json`,"utf-8" ,
    (err , data) =>{
    // const abhi = JSON.parse(data);
    console.log(data);
    res.json(data);
    }

    )
});

app.all("*",(req , res , next)=>{
   return next(new AppError(`can't find ${req.originalUrl} on the server` , 400));
})

app.use(globalErrorHandler);

module.exports = app;