const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static login function
userSchema.statics.login = async function (user, password) {
  console.log("login function");
  console.log(user, password);
  const user2 = await this.findOne({ username: user });
  console.log(user2);
  if (!user) {
    throw Error("User not found");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
