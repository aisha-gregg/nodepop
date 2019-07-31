const mongoose = require("mongoose");
const articleSchema = require("./article").articleSchema;

const adSchema = new mongoose.Schema({
  article: articleSchema,
  id: String
});
const Ad= mongoose.model("Ad", adSchema);
module.exports = Ad;

