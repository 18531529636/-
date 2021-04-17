const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  us: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
  psw: {
    type: String,
    require: true,
  },
  age: Number,
  sex: {
    type: Number,
    default: 0,
  },
});

var User = mongoose.model("user", userSchema);

module.exports = User;
