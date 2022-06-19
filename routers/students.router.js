const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.use("/", express.static(path.join(__dirname, "../views/students")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/students/students.html"));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const students = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/students.json"))
  );
  const student = students.find((student) => student.id === id);
  if (student) {
    res.send(student);
  } else {
    res.status(404).send({ msg: "Student not found" });
  }
  //name grades id class
});

module.exports = router;
