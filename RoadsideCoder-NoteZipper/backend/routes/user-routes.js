// const { response } = require("express");
const express = require("express");
const userController = require("../collections/users/user-controller");

const userRouter = express.Router();

userRouter.route("/").post(userController.registerUser);

userRouter.route("/").get((req, res) => {
  res.status(200).send("User ok");
});

module.exports = userRouter;
