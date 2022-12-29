const asynchandler = require("express-async-handler");
const { generateToken } = require("../../utils/generateToken");
const User = require("./user-model");

// private local function to set user response data-set
function setUserData(user) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    picture: user.picture,
    token: generateToken(user._id),
  };
}

// Controllers functions
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
    res.status(201).json(setUserData(user));
  } else {
    res.status(404).send("Error while creating new User!");
    throw new Error("Error while creating new User!");
  }
});

const authoriseUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists in mongoDb
  const user = await User.findOne({ email });
  console.log("user: ", user);
  if (!user) {
    res.status(400);
    throw new Error("User not exists!");
  }
  // compare passwords
  if (user && (await user.matchPassword(password))) {
    res.status(200).json(setUserData(user));
  } else {
    res.status(404);
    throw new Error("Password doesn't match!");
  }
});

module.exports = { registerUser, authoriseUser };
