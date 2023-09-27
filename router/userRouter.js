const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router
    .route("/signUp")
    .post(userController.signUp);

router
    .route("/LogIn")
    .post(userController.LogIn);

// router
//     .route("/location/api")
//     .get(userController.locationApi);

module.exports = router;