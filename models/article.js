const mongoose = require("mongoose");
const tagSchema = require("./tag").tagSchema;

const articleSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  type: String,
  price: Number,
  photo: String,
  tags: [tagSchema]
});
const Article = mongoose.model("Article", articleSchema);
module.exports = {
  Article,
  articleSchema
};
