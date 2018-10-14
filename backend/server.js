const express = require("express");
const app = express();
const router = require("./route/router");
const events = require("./data/events.json");
const lodash = require("lodash");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(morgan("tiny"));

const buildurl = (version, path) => `/api/${version}/${path}`;

const EVENTS_BASE_URL = buildurl("v1", "events");

app.use(EVENTS_BASE_URL, router);

app.use("/", router);

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
