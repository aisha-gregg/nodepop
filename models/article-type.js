const mongoose = require("mongoose");

const articleTypeSchema = new mongoose.Schema({
  id: Number
});
const articleType= mongoose.model("ArticleType", articleTypeSchema);
module.exports = articleType;

