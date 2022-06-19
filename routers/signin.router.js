const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

router.use("/", express.static(path.join(__dirname, "../views/signin")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/signin/signin.html"));
});

router.post("/", (req, res) => {
  const body = req.body;
  body.password = bcrypt.hashSync(body.password, 10);
  const users = JSON.parse(fs.readFileSync("../data/users.json"));
  users.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../data/users.json"),
    JSON.stringify(users)
  );
  res.send({ msg: "Signin success" });
});
module.exports = router;
