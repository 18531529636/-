const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", () => {
  console.log("连接错误");
});

db.on("open", () => {
  console.log("连接成功");
});
