const express = require("express");
const router = express.Router();
<<<<<<< HEAD

router.get("/", (req, res) => {
  res.send("it is working");
});

module.exports = router;
=======
const events = require('../events.json')
router.get("/home", (req, res) => {
    res.send("it is working");
})

router.get("/all-events", (req, res) => {
    res.json(events);
})

router.get("/all-events/:id", (req, res) => {

    const id = req.params.id;
    let result = events.filter(item => item.id === id)
    res.json(result)
})



module.exports = router;
>>>>>>> 37f16359ddb1026c07767b6bd6ac8a479ce30fec
