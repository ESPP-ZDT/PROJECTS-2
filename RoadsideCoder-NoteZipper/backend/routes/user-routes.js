const { response } = require("express");
const express = require("express");
const userController = require("./../controllers/user-controller");

const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.status(200).send("User ok");
});
userRouter.route("/").post(userController.registerUser);

module.exports = userRouter;
