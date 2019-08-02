const express = require("express");
const router = express.Router();
const Ad = require("../models/ad");

router.get("/", async function(req, res, next) {
  const results = await Ad.find({}).then();
  res.send(JSON.stringify(results));
});

module.exports = router;
