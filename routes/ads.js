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
  const formattedResults = results.map(function(ad) {
    return {
      id: ad.id,
      article: {
        id: ad.article.id,
        name: ad.article.name,
        description: ad.article.description,
        type: ad.article.type,
        price: ad.article.price,
        photo: new Buffer(ad.article.photo.photo.data).toString("base64"),
        tags: ad.article.tags
      }
    };
  });

  res.send(JSON.stringify(formattedResults));
});

module.exports = router;
