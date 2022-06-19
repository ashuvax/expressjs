const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const homeRoute = require("../routers/home.router");
const studentsRoute = require("../routers/students.router");
const signinRoute = require("../routers/signin.router");
const loginRoute = require("../routers/login.router");

app.use((req, res, next) => {
  const { url, method } = req;
  console.log(`${Date.now()} get req to ${url} method: ${method}`);
  next();
});

app.use(express.json());
app.use("/students", studentsRoute);
app.use("/signin", signinRoute);
app.use("/login", loginRoute);
app.use("/", homeRoute);

app.listen(port, () =>
  console.log(`app listening on port ${port}!
go to: http://localhost:${port}`)
);
