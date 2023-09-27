const destUser = require("../models/destinationModel")

exports.postData = async(req, res) =>{
    const{destName1 , destName2 , passengerCount} = req.body;
    const data = await destUser.create({
        dest1:destName1,
        dest2:destName2,
        passengerCount
    })
    res.json(data);
}
exports.getData = async(req, res) =>{
    const data = await destUser.find();
    res.json(data);
}