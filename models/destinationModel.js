const mongoose = require("mongoose");

const destSchema = new mongoose.Schema({
    dest1:{
        type:String,
        required:true
    },
    dest2:{
        type:String,
        required:true
    },
    passengerCount:{
        type:Number,
        required:true
    }
})

const destUser = mongoose.model("destUser" , destSchema);
module.exports = destUser;