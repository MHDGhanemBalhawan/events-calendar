const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const events = require("../data/events");

// router.get("/", (req, res) => {
//   res.send("it is working");
// });

router.get("/", (req, res) => {
  res.json(events);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let result = events.filter(item => item.id === id);
  res.json(result);
});

router.post("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.put("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.delete("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.get("/", (req, res) => {
  res.json(events);
});
// router.get(`${EVENTS_BASE_URL}/:id`, (req, res) => {
//   const id = req.params.id;
//   let result = events.filter(item => item.id === id);
//   res.json(result);
// });

=======
const events = require("../events.json");

router.get("/home", (req, res) => {
  res.send("it is working");
});

router.get("/events", (req, res) => {
  res.json(events);
});

router.get("/events/:id", (req, res) => {
  const id = req.params.id;
  let result = events.filter(item => item.id === id);
  res.json(result);
});

>>>>>>> cf7f96481f96f8c9e5664957f7d759201a434bcd
module.exports = router;
