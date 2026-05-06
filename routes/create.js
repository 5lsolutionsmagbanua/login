var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
let data = [];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("create", { title: "Create user" });
});

router.post("/add-user", function (req, res, next) {
  const {
    firstName,
    lastName,
    middleName,
    address,
    userName,
    password,
    confirmPassword,
    userRole,
  } = req.body;
  try {
    if (
      !firstName ||
      !lastName ||
      !middleName ||
      !address ||
      !userName ||
      !password ||
      !confirmPassword ||
      !userRole
    ) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    console.log(
      uuidv4(),
      firstName,
      lastName,
      middleName,
      address,
      userName,
      password,
      confirmPassword,
      userRole,
    );
    const dateNow = new Date();
    const employeeID = uuidv4();
    data.push({
      employeeID,
      firstName,
      lastName,
      middleName,
      address,
      userName,
      password,
      confirmPassword,
      dateNow,
      userRole,
    });
    console.log(data);
    res.status(200).json({ message: "Add User Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error ${error.message}` });
  }
});

router.get("/load", function (req, res, next) {
  try {
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error ${error.message}` });
  }
});

module.exports = router;
