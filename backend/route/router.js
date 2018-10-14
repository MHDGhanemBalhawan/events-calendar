const express = require("express");
const router = express.Router();
const events = require("../events.json");

router.get("/home", (req, res) => {
  res.send("it is working");
});

router.get("/all-events", (req, res) => {
  res.json(events);
});

module.exports = router;
