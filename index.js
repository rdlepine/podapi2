require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employee");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/employees",
 // loginRequired,
 // ensureCorrectUser,
  employeeRoutes
);

//app.get("/api/employees", loginRequired, async function(req, res, next) {
// app.get("/api/employees", async function(req, res, next) {
//   try {
//     let employees = await db.Employee.find()
//       .sort({ lastName: "desc" })
//       .populate("employees");
//     return res.status(200).json(employees);
//   } catch (err) {
//     return next(err);
//   }
// });

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
