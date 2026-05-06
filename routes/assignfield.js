var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("assignfield", { title: "Assigned Field Page" });
});

router.post("/dispatch-list", function (req, res, next) {
  const {
    serviceEngineer,
    subjectClient,
    status,
    priorityTicket,
    categoryTicket,
    groupTicket,
    formFile,
    coordinates,
    ticketDesc,
  } = req.body;
  try {
    if (
      !serviceEngineer ||
      !subjectClient ||
      !status ||
      !priorityTicket ||
      !categoryTicket ||
      !groupTicket ||
      !formFile ||
      !coordinates ||
      !ticketDesc
    ) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    console.log(
      serviceEngineer,
      subjectClient,
      status,
      priorityTicket,
      categoryTicket,
      groupTicket,
      formFile,
      coordinates,
      ticketDesc,
    );
    const ticketId = uuidv4();
    const dateNow = new Date();
    data.push({
      ticketId,
      serviceEngineer,
      subjectClient,
      status,
      priorityTicket,
      categoryTicket,
      groupTicket,
      formFile,
      ticketDesc,
      coordinates,
      dateNow,
    });
    console.log(data);
    res.status(200).json({ message: "Dispatch Created Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error ${error.message}` });
  }
});

module.exports = router;