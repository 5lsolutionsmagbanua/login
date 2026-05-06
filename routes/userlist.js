var express = require("express");
var router = express.Router();

const {v4: uuidv4} = require("uuid")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("userlist", { title: "User List" });
});

// router.get("/load", function (req, res, next) {
//   try {
//     res.status(200).json({ firstName: "charles", lastName: "magbanua" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: `Server Error ${error.message}` });
//   }
// });

router.post("/user-list", function (req, res, next) {
  const { lastName, middleName, address, userName, password, confirmPassword } = req.body;
  try {
    if ( !password || !lastName || !middleName || !address || !userName || !password || !confirmPassword) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    console.log(uuidv4(), password, lastName, middleName, address, userName, password, confirmPassword )
    res.status(200).json({ message: "User Created Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error ${error.message}` });
  }
});

module.exports = router;
