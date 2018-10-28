const express = require("express");

const router = express.Router();

const { Pool } = require("pg");

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

// events router

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
  console.log(req.body);
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
    text:
      "UPDATE public.events_tbl SET lesson = $1, event_date = $2, description = $3 WHERE event_id = $4;",
    values: [req.body.lesson, req.body.event_date, req.body.description, id]
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
router.post("/mentors", (req, res) => {
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

// events-floaters router
router.get("/events-floaters", (req, res) => {
  pool.query(
    "SELECT floaters_events_id, event_id, floater_id FROM floaters_events_tbl;",
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
router.get("/events-floaters/:id", function(req, res) {
  const id = req.params.id;
  const query = {
    text: `SELECT floaters_events_id, event_id, floater_id FROM public.floaters_events_tbl WHERE floaters_events_tbl.floaters_events_id = ${id};`
  };
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});

router.post("/events-floaters", (req, res) => {
  const query = {
    text:
      "INSERT INTO floaters_events_tbl(event_id, floater_id) VALUES($1, $2)",
    values: [req.body.event_id, req.body.floater_id]
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
router.delete("/events-floaters/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    text: `DELETE FROM public.floaters_events_tbl WHERE floaters_events_tbl.floaters_events_id = ${id};`
  };
  pool.query(query, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("OK");
    }
  });
});

router.put("/events-floaters/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    text: `UPDATE public.floaters_events_tbl SET event_id = '${
      req.body.event_id
    }', floater_id = '${req.body.floater_id}' WHERE floaters_events_id = ${id};`
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
