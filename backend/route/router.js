const express = require("express");

const router = express.Router();

const { Pool } = require("pg");
const bodyParser = require("body-parser");

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

router.get("/events", (req, res) => {
  pool.query(
    "SELECT event_id, lesson, event_date as date, description FROM events_tbl",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(result.rows);
      }
    }
  );
});

router.get("/events/:id", function(req, res) {
  const id = req.params.id;
  const query = {
    text: `SELECT event_id, lesson, event_date as date, description FROM events_tbl WHERE events_tbl.event_id = ${id};`
  };
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});

router.post("/events", (req, res) => {
  const query = {
    text:
      "INSERT INTO events_tbl(lesson, event_date, description) VALUES($1, $2, $3)",
    values: [req.body.lesson, req.body.event_date, req.body.description]
  };
  //callback;
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});
router.delete("/events/:id", (req, res) => {
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

router.put("/events/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    text: `UPDATE public.events_tbl SET lesson = '${
      req.body.lesson
    }', event_date = '${req.body.event_date}', description = '${
      req.body.description
    }' WHERE event_id = ${id};`
  };
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

// mentors router

router.get("/mentors", (req, res) => {
  pool.query("SELECT * FROM floaters_tbl", (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

router.get("/mentors/:id", function(req, res) {
  const id = req.params.id;
  const query = {
    text: `SELECT * FROM floaters_tbl WHERE floaters_tbl.floater_id = ${id};`
  };
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});
router.put("/mentors/:id", (req, res) => {
  const id = req.params.id;

  const query = {
    text: ` UPDATE floaters_tbl SET floater_fname = '${
      req.body.floater_fname
    }', floater_surname = '${req.body.floater_surname}', floater_email = '${
      req.body.floater_email
    }' WHERE floater_id = ${id};`
  };
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});
router.post("/mentors/", (req, res) => {
  console.log(req.body);
  const query = {
    text:
      "INSERT INTO public.floaters_tbl(floater_fname, floater_surname, floater_email) VALUES($1, $2, $3)",
    values: [
      req.body.floater_fname,
      req.body.floater_surname,
      req.body.floater_email
    ]
  };
  //callback;
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});
router.delete("/mentors/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    text: `DELETE FROM public.floaters_tbl WHERE public.floaters_tbl.floater_id = ${id};`
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
