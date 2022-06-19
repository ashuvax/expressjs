const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const homeRoute = require("../routers/home.router");
const studentsRoute = require("../routers/students.router");
const signinRoute = require("../routers/signin.router");

app.use((req, res, next) => {
  const { url, method } = req;
  console.log(`get req to ${url} method: ${method}`);
  next();
});

app.use(express.json());
app.use("/students", studentsRoute);
app.use("/signin", signinRoute);
app.use("/", homeRoute);

app.listen(port, () => console.log(`app listening on port ${port}!`));
