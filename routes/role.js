var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
let data = [];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("role", { title: "Create Role Page" });
});

router.post("/user-role", function (req, res, next) {
  const { roleName, status } = req.body;
  try {
    if (!roleName || !status) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    const dateNow = new Date();
    console.log(roleName, status, uuidv4(),);
    const roleId = uuidv4();
    data.push({
      roleId,
      roleName,
      status,
      dateNow,
    });
    console.log(data);
    res.status(200).json({ message: "Add Role Succesfully" });
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
