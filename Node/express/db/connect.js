const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sallsystem", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", () => {
  console.log("连接失败");
});

db.on("open", () => {
  console.log("连接成功");
});
