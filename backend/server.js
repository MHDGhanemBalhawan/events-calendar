const express = require("express");
const app = express();
const router = require("./route/router");
const morgan = require("morgan");

// app.use(express.urlencoded());

const bodyParser = require("body-parser");
var json_body_parser = bodyParser.json();
router.use(json_body_parser);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

const buildurl = path => `/${path}`;

const EVENTS_BASE_URL = buildurl("events");

const FLOATERS_BASE_URL = buildurl("mentors");

const EVENTS_FLOATERS_BASE_URL = buildurl("events-floaters");

app.use(EVENTS_BASE_URL, router);

app.use(FLOATERS_BASE_URL, router);

app.use(EVENTS_FLOATERS_BASE_URL, router);

app.use("/", router);

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
