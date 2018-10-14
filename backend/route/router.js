const express = require("express");
const router = express.Router();

const { Pool } = require("pg");
const events = require("../data/events");
const bodyParser = require("body-parser");

// parse the post request as json
var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
router.use(json_body_parser);

var connectionString =
  "postgres://eventsuser:eventsuser147@localhost:5432/events_calendar";

const pool = new Pool({ connectionString: connectionString });

pool.connect(function(err, poolClient) {
  if (err) {
    console.log("Failed to connect to database: " + err);
  } else {
    console.log("Connected to database");
  }
});

router.get("/", (req, res) => {
  pool.query("SELECT * FROM events_tbl", function(err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

router.get("/:id", (req, res) => {
  // const event = _.find(events, event => event.id === req.params.id);
  // if (event) {
  //   res.json(event);
  // } else {
  //   res.send(`Event with id ${req.params.id} not found.`);
  // }
  const id = req.params.id;
  let result = events.filter(item => item.id === id);
  res.json(result);
});

router.post("/", (req, response) => {
  // console.log(req.body);
  const query = {
    text:
      "INSERT INTO events_tbl(lesson, event_date, description) VALUES($1, $2, $3)",
    values: [req.body.lesson, req.body.date, req.body.description]
  };
  //callback;
  pool.query(query, (err, res) => {
    if (err) {
      console.log(err.stack);
      response.status(500).send(err);
    } else {
      response.status(200).send("OK");
      console.log(res.rows[0]);
    }
  });

});

router.put("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.delete("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});




module.exports = router;
