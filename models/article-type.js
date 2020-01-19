const mongoose = require("mongoose");

const articleTypeSchema = new mongoose.Schema({
  id: Number
});
const ArticleType = mongoose.model("ArticleType", articleTypeSchema);
module.exports = {
  ArticleType,
  articleTypeSchema
};
