const express = require("express");

const router = require("./route/router");
const morgan = require("morgan");

app.use(morgan("tiny"));
const app = express();
app.use(express.static(`${__dirname}/../frontend/build`));

app.use("/", router);

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
