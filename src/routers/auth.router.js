const express = require("express");
const userController = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/signup", userController.userSignUp);
router.post("/login", userController.userLogin);

module.exports = router;
