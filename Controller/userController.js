const catchAsync = require("../utils/catchAsync");
const userSchema = require("../models/userModel");
const AppError = require("../utils/AppError");
const fs = require("fs");
const lolcation = require("../locationApi.js/locationApi.json")

exports.signUp = catchAsync(async(req, res) =>{
    console.log(req.body)
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    
    const userData = await userSchema.create({
        name,
        phone,
        email,
        password,
        confirmPassword
    })

    res.json(userData);
});

exports.LogIn= catchAsync(async(req,res , next) => {
    const{phone , password} = req.body;
    console.log(phone+" "+password)
    const user = await userSchema.findOne({phone}).select("+password");
    console.log(user.password);
    const confirmPassword = await user.correctPassword(password , user.password);

    if(!user || !confirmPassword ){
        console.log(user,confirmPassword);
        return next(new AppError ("Invalid Details",404));
    }
    console.log(user)
    res.status(200).json(user)
    //    return next(new AppError ("Server ERROR",500));

});

