const http = require("unirest");
const express = require("express");
const Photo = require("../models/photo").Photo;
const multer = require("multer");
const fs = require("fs");
const router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const ads = await getAds();
  res.render("index", { ads });
});

const storage = multer.diskStorage({
  destination: "assets/uploads/",
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  }
});

const upload = multer({ storage });

router.post("/photo", upload.single("avatar"), function(req, res) {
  const newPhoto = new Photo();
  newPhoto.photo.data = fs.readFileSync(req.file.path);
  newPhoto.photo.contentType = "image/jpeg";
  newPhoto.save();
  res.send();
});

async function getAds() {
  const response = await http.get("http://localhost:3000/ads");
  return JSON.parse(response.body);
}

module.exports = router;
