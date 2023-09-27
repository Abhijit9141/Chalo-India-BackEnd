const bcrypt = require("bcrypt");
const validator = require("validater");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    confirmPassword:{
        type:String,
        required:true,
        validate:{
            validator:function(el){
                return this.password===el
            },
        message:"password are not matching"
        }
    }
});


userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password , 10);
    this.confirmPassword = undefined;
    next();
});

userSchema.methods.correctPassword = async function( password , userPassword){
    return await bcrypt.compare(password , userPassword); 
}

const User = mongoose.model("User",userSchema);

module.exports = User;