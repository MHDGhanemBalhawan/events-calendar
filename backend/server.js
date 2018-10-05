const express = require("express");
const app = express();
const router = require("./route/router")






app.use("/", router)
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
