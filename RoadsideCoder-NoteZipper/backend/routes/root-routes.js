const express = require("express");

const rootRouter = express.Router();

rootRouter.route("/").get((req, res) => {
  res.status(200).json({
    message: "All ok",
    status: "Alive",
    timestamp: new Date().toISOString(),
  });
});

module.exports = rootRouter;
