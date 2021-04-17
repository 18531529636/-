const express = require("express");
const user = require("../model/userModel");
const router = express.Router();

router.post("/reg", (req, res) => {
  const { us, psw } = req.body;
  if (!us || !psw) res.send({ code: -1, msg: "参数错误" });

  user
    .insertMany({ us, psw })
    .then(() => {
      console.log("插入成功");
      res.send({ code: 0, msg: "注册成功" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ code: -1, msg: "注册失败", err });
    });
});

router.post("/login", (req, res) => {
  const { us, psw } = req.body;
  if (!us || !psw) res.send({ code: -1, msg: "参数错误" });

  user
    .find({ us, psw })
    .then((response) => {
      if (!response.length) {
        console.log("登录查找为空");
        res.send({ code: 0, msg: "登陆失败，账号或密码错误" });
      } else {
        res.send({ code: 0, msg: "登陆成功" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ code: -1, msg: "登陆失败", err });
    });
});

module.exports = router;
