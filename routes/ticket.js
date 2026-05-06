var express = require("express");
var router = express.Router();
const {v4: uuidv4} = require("uuid")
let data = [];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("ticket", { title: "Ticket Page" });
});

router.post("/create-ticket", function (req, res, next) {
  const {
    contactClient,
    subjectClient,
    status,
    urgencyTicket,
    impactTicket,
    priorityTicket,
    categoryTicket,
    groupTicket,
    ticketDesc,
    sourceTicket,
    formFile,
  } = req.body;
  try {
    if (
      !contactClient ||
      !subjectClient ||
      !status ||
      !urgencyTicket ||
      !impactTicket ||
      !priorityTicket ||
      !categoryTicket ||
      !groupTicket ||
      !ticketDesc ||
      !sourceTicket ||
      !formFile
    ) {
      res.status(400).json({ message: "Required Fields Empty" });
    }
    console.log(
      contactClient,
      subjectClient,
      status,
      urgencyTicket,
      impactTicket,
      priorityTicket,
      categoryTicket,
      groupTicket,
      ticketDesc,
      sourceTicket,
      formFile,
    );
const ticketId = uuidv4()
    data.push({
      ticketId,
      contactClient,
      subjectClient,
      status,
      urgencyTicket,
      impactTicket,
      priorityTicket,
      categoryTicket,
      groupTicket,
      ticketDesc,
      sourceTicket,
      formFile,
    });
    console.log(data);
    res.status(200).json({ message: "Ticket Created Succesfully" });
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

router.get("/metrics", function (req, res, next) {
  try {
    const summary = data.reduce((row, ticket) => {

      const category = ticket.groupTicket; 
      
      row[category] = (row[category] || 0) + 1;
      
      row["totalTicket"] = (row.totalTicket || 0) + 1;

      return row;
    }, {}); 

    res.status(200).json(summary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
});



module.exports = router;
