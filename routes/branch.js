var express = require("express");
var router = express.Router();

let data = [];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("branch", { title: "Branch Page" });
});

router.post("/add-branch", function (req, res, next) {
  const { branchName, companyName, address, contactNumber, email, status } =
    req.body;
  try {
    if (
      !branchName ||
      !companyName ||
      !address ||
      !contactNumber ||
      !email ||
      !status
    ) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    const dateNow = new Date();
    console.log(branchName, companyName, address, contactNumber, email, status);
    data.push({
      branchName,
      companyName,
      address,
      contactNumber,
      email,
      status,
      dateNow,
    });
    console.log(data);
    res.status(200).json({ message: "Add Branch Succesfully" });
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
