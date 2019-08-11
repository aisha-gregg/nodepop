const http = require("unirest");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const ads = await getAds();
  res.render("index", { ads });
});

/* GET mobile page. */
router.get("/mobile", async function(req, res, next) {
  const ads = await getAds();
  res.render("mobile", { ads });
});

/* GET motor page. */
router.get("/motor", async function(req, res, next) {
  const ads = await getAds();
  res.render("motor", { ads });
});

router.get("/work", async function(req, res, next) {
  const ads = await getAds();
  res.render("work", { ads });
});

router.get("/lifestyle", async function(req, res, next) {
  const ads = await getAds();
  res.render("lifestyle", { ads });
});

async function getAds() {
  const response = await http.get("http://localhost:3000/ads");
  return JSON.parse(response.body);
}

module.exports = router;
