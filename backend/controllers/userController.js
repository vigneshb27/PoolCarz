const User = require("../models/userModel");

// login a user

const loginUser = async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    console.log("User logged in", user);
    res.status(200).json({ username });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  console.log("getAllUsers");

  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { loginUser, getAllUsers };
