// const express = require("express");
import express from "express";
// const { auth } = require("../middlewares/auth.middleware");
import auth from "../middlewares/auth.middleware.js"
// const userController = require("../controllers/user/user.controller");
import userController from "../controllers/user/user.controller.js"
const router = express.Router();

router.post("/getuser", auth, userController.getUser);

// module.exports = router;
export default router;
