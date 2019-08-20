const express = require("express");
const router = express.Router();
const Ad = require("../models/ad");

router.get("/", async function(req, res) {
  const filters = {};

  if (req.query.tag !== undefined) {
    filters["article.tags.name"] = req.query.tag;
  }

  if (req.query.name !== undefined) {
    filters["article.name"] = new RegExp("^" + req.query.name);
  }

  if (req.query.type !== undefined) {
    filters["article.type.id"] = req.query.type;
  }

  const results = await Ad.find(filters).then();
  res.send(JSON.stringify(results));
});

module.exports = router;
