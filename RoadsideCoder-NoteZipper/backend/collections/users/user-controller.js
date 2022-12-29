const asynchandler = require("express-async-handler");
const User = require("./user-model");

const registerUser = asynchandler(async (req, res) => {
  const { name, email, password, picture } = req.body;
  // check if user exists in mongoDb
  const userAlredyExist = await User.findOne({ email });
  if (userAlredyExist) {
    res.status(400);
    throw new Error("User alredy exists!");
  }
  // if not exist, we add new user
  const user = await User.create({ name, email, password, picture });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
    });
  } else {
    res.status(404).send("Error while creating new User!");
    throw new Error("Error while creating new User!");
  }
});

module.exports = { registerUser };
