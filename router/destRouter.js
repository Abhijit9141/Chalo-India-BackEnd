const express = require("express");
const router = express.Router();
const dsetController = require("../Controller/destController");

router
    .route("/dest/location")
    .post(dsetController.postData);

router.route("/dest/location").get(dsetController.getData)
module.exports = router;