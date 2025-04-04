const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const userController = require("../controllers/user/user.controller");
const router = express.Router();

router.post("/getuser", auth, userController.getUser);

module.exports = router;
