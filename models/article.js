const mongoose = require("mongoose");
const tagSchema = require("./tag").tagSchema;
const articleTypeSchema = require("./article-type").articleTypeSchema;
const priceSchema = require("./price").priceSchema;
const photoSchema = require("./photo").photoSchema;

const articleSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  type: articleTypeSchema,
  price: priceSchema,
  photo: photoSchema,
  tags: [tagSchema]
});
const Article = mongoose.model("Article", articleSchema);
module.exports = {
  Article,
  articleSchema
};
