const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

router.use("/", express.static(path.join(__dirname, "../views/login")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/login/login.html"));
});

router.post("/", (req, res) => {
  const body = req.body;
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname + "/../data/users.json"), "utf8")
  );
  const user = users.find((user) => user.username === body.username);
  if (user) {
    const compare = bcrypt.compareSync(body.password, user.password);
    if (compare) {
      const token = jwt.sign(user, "secret", { expiresIn: "1h" });
      res.cookie("token", token);
      res.send({ msg: "login success" });
    } else {
      res.send({ msg: "user name or password is incorect" });
    }
  } else {
    res.send({ msg: "user name or password is incorect" });
  }
});
module.exports = router;
