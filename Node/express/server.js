const express = require("express");
const app = express();
//  express实例化
const bodyparser = require("body-parser");

// 解析表单数据 x-www-form-urlencode 
app.use(bodyparser.urlencoded({ extended: false }));
// 解析json
app.use(bodyparser.json())

// app.get("/user/login", (req, res) => {
//   console.log("注册");
//   console.log(req.query);
//   // res.send('注册成功');
//   res.send({
//     msg: req.query,
//   });
// });
let userModule = require('./router/userlogin.js')
app.use('/user', userModule)

app.post("/user/login", (req, res) => {
  console.log("注册");
  console.log(req.body);
  // res.send('注册成功');
  res.send({
    msg: "监听成功",
    data: req.body.id,
  });
});

app.listen(3000, () => {
  console.log("server start");
});
