const http = require("unirest");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const ads = await getAds();
  res.render("index", { ads });
});

async function getAds() {
  const response = await http.get("http://localhost:3000/ads");
  return JSON.parse(response.body);
}

module.exports = router;
