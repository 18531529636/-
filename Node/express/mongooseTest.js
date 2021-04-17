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

// User.insertMany({
//   us: "whp1",
//   id: "1370099717",
//   psw: "a123456",
//   age: 17,
// })
//   .then((res) => {
//     console.log("插入成功");
//   })
//   .catch((err) => {
//     console.log("err");
//     console.log(err);
//   });

// User.remove({
//   us: "whp",
//   id: "1370099717",
//   psw: "a123456",
//   age: 17,
// })
//   .then(() => {
//     console.log("删除成功");
//   })
//   .catch((err) => {
//     console.log("err");
//     console.log(err);
//   });
User.find({ us: "whp1" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
