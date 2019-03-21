const express = require("express");

const router = require("./route/router");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../frontend/build"));
// }
// app.use(express.static(`${__dirname}/../frontend/build`));

app.use("/", router);

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
