const express = require("express");
const router = express.Router();
const testSchema = require("../models/test");

/* GET ALL
router.get("/test", (req, res) => {
    testSchema
  
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });*/

// POST
router.post("/test", (req, res) => {
    const testResult = testSchema(req.body);
    testResult
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// UPDATE
router.put("/test", (req, res) => {
    const { email } = req.body;
    const { level } = req.body;
    testSchema
  
      .updateOne({ $set: { level } })
      .then((data) => res.json(data)).then(res.send("Su nuevo nivel es " + level))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;