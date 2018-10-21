const express = require("express");
const router = express.Router();

const { Pool } = require("pg");
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
  pool.query("SELECT * FROM events_tbl", (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

router.get("/:id", function(req, res) {
  console.log("Handeling id request");
  const id = req.params.id;
  console.log(id);
  const query = {
    text: `SELECT * FROM events_tbl WHERE events_tbl.event_id = ${id};`
  };
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err.stack);
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});

router.post("/", (req, res) => {
  const query = {
    text:
      "INSERT INTO events_tbl(lesson, event_date, description) VALUES($1, $2, $3)",
    values: [req.body.lesson, req.body.event_date, req.body.description]
  };
  //callback;
  pool.query(query, (err, response) => {
    if (err) {
      console.log(err.stack);
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});
router.delete("/:id", (req, res) => {
  console.log("Handeling delete request");
  const id = req.params.id;
  const query = {
    text: `DELETE FROM public.events_tbl WHERE public.events_tbl.event_id = ${id};`
  };
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

module.exports = router;
