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

  if (req.query.price !== undefined) {
    filters["article.price.value"] = req.query.price;
  }

  if (req.query.maxPrice !== undefined && req.query.minPrice === undefined) {
    filters["article.price.value"] = {
      $lte: req.query.maxPrice
    };
  }

  if (req.query.minPrice !== undefined && req.query.maxPrice === undefined) {
    filters["article.price.value"] = {
      $gte: req.query.minPrice
    };
  }

  if (req.query.maxPrice !== undefined && req.query.minPrice !== undefined) {
    filters["article.price.value"] = {
      $lte: req.query.maxPrice,
      $gte: req.query.minPrice
    };
  }

  const results = await Ad.find(filters).then();
  const formattedResults = results.map(function(ad) {
    return {
      id: ad.id,
      article: {
        id: ad.article.id,
        name: ad.article.name,
        description: ad.article.description,
        type: ad.article.type.id,
        price: ad.article.price.value,
        photo: new Buffer(ad.article.photo.photo.data).toString("base64"),
        tags: ad.article.tags
      }
    };
  });

  if (req.query.orderBy !== undefined) {
    if (req.query.orderBy === "lowest") {
      formattedResults.sort(function(a, b) {
        if (a.article.price >= b.article.price) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      formattedResults.sort(function(a, b) {
        if (a.article.price <= b.article.price) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  res.send(JSON.stringify(formattedResults));
});

module.exports = router;
