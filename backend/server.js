const express = require("express");
const app = express();
const router = require("./route/router");

const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(morgan("tiny"));

const buildurl = path => `/${path}`;

const EVENTS_BASE_URL = buildurl("events");

const FLOATERS_BASE_URL = buildurl("mentors");

app.use(EVENTS_BASE_URL, router);

app.use(FLOATERS_BASE_URL, router);

app.use("/", router);

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
